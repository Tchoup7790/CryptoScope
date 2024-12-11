<script setup lang="ts">
import { ref, onMounted } from "vue";
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
  Filler,
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
  Filler,
);

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
      "bitcoin",
      30,
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
  <div>
    <Line :data="chartData" :options="options" />
  </div>
</template>
