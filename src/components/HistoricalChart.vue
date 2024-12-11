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
  coinId: {
    type: String,
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
    const marketData: ChartData | null = await CoinGeckoApi.getCoinMarketChart(
      props.coinId,
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

      // Update chart data
      chartData.value = {
        labels: formattedData.map((item: MarketDataPoint) => item.date),
        datasets: [
          {
            label: "Price USD",
            data: formattedData.map((item: MarketDataPoint) => item.price),
          },
        ],
      };
    }
  } catch (error) {
    console.error("Error fetching chart data:", error);
  }
};

// Fetch data when component is mounted
onMounted(() => {
  fetchChartData();
});
</script>

<template>
  <Line :data="chartData" :options="options" />
</template>
