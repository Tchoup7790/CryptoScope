<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { options } from "@/utils/chartConfig";
import { CoinGeckoApi } from "@/services/CoinGeckoApi";
import type Data from "@/types/Data";
import type ChartData from "@/types/ChartData";
import type MarketDataPoint from "@/types/MarketDataPoint";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

// Define props for the chart
const props = defineProps({
  coinIds: {
    type: Array<string>,
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
});

// Create reactive chart data with proper typing
const chartData = ref<Data>({
  labels: [],
  datasets: [
    {
      label: "Price",
      data: [],
    },
  ],
});

// Add watch for days prop
watch(
  () => props.days,
  () => {
    fetchChartData();
  },
);

// Function to format date
const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

// Function to fetch and update chart data
const fetchChartData = async () => {
  try {
    const promises = props.coinIds.map((coinId) => fetchData(coinId));
    const results = await Promise.all(promises);

    // Filter out any undefined results
    const validResults = results.filter(
      (result): result is Data => result !== undefined,
    );

    if (validResults.length > 0) {
      chartData.value = {
        labels: validResults[0].labels,
        datasets: validResults.map((result) => result.datasets[0]),
      };
    }
  } catch (error) {
    console.error("Error fetching chart data:", error);
  }
};

// Function to fetch each coin data
const fetchData = async (coinId: string): Promise<Data | undefined> => {
  try {
    const marketData: ChartData | null = await CoinGeckoApi.getCoinMarketChart(
      coinId,
      props.days,
    );

    if (marketData && marketData.prices) {
      // Extract dates and prices from the API response
      const formattedData: MarketDataPoint[] = marketData.prices.map(
        ([timestamp, price]: [number, number]) => ({
          date: formatDate(timestamp),
          price: price,
        }),
      );

      // set color
      let borderColor = "#FFD700";
      if (props.coinIds[0] === coinId) {
        borderColor = "rgba(21, 52, 223, 1)";
      } else if (props.coinIds[1] === coinId) {
        borderColor = "rgba(25, 36, 171, 1)";
      } else {
        borderColor = "rgba(10, 46, 253, 1)";
      }

      // return coin Data
      return {
        labels: formattedData.map((item: MarketDataPoint) => item.date),
        datasets: [
          {
            label: coinId,
            data: formattedData.map((item: MarketDataPoint) => item.price),
            borderColor: borderColor,
          },
        ],
      };
    }
    return undefined;
  } catch (error) {
    console.error("Error fetching chart data:", error);
    return undefined;
  }
};

// Fetch data when component is mounted
onMounted(() => {
  fetchChartData();
});
</script>

<template>
  <Line :data="chartData" :options="options(days <= 30)" />
</template>
