// Import necessary types and services
import type { Coin } from '@/models/interfaces/coin'
import type { Data } from '@/models/interfaces/data'
import CoinGeckoService from '@/services/coin-gecko.service'
import { defineStore } from 'pinia'

// Define the state interface for the store
export interface CoinState {
  coins: Coin[]
  coinsChart: Data[]
  coinList: string[]
  daysList: number[]
}

// Define the store using Pinia
export const useCoinStore = defineStore({
  id: 'coin', // Unique ID for the store
  state: () =>
    ({
      coins: [], // List of coins
      coinsChart: [], // Chart data for coins
      coinList: ['bitcoin'], // List of coin IDs to track
      daysList: [30, 182, 365], // List of days for chart data
      // daysList: [7, 30, 90, 182, 365], // List of days for chart data
    }) as CoinState,
  actions: {
    // Reset the store to its initial state
    resetStore() {
      this.$reset()
    },
    // Initialize the coins data
    async initData() {
      let getCoinResponse = null
      for (const coinId of this.coinList) {
        // Fetch coin data and price
        getCoinResponse = await CoinGeckoService.getCoinById(coinId)
        if (getCoinResponse) {
          // Add price to coin data and push to the coins list
          const coin = getCoinResponse
          coin.price = getCoinResponse.market_data.current_price.usd
          // Add the coin to the coins list
          this.coins.push(coin)
        }
      }
    },

    // Initialize the coins chart data
    async initCoinsChart() {
      // Initialize the coins chart data
      let coinChartResponse: APIChartData | null = null
      // Loop through each coin and days combination
      for (const coinId of this.coinList) {
        // Initialize the chart data for the coin
        for (const days of this.daysList) {
          // Fetch historical data for each coin and days combination
          coinChartResponse = await CoinGeckoService.getCoinHistory(coinId, days)
          // If the response is valid, format the data and push it to the coins chart
          if (coinChartResponse && coinChartResponse.prices) {
            // Format the data for the chart and push it to the coins chart
            const formattedData: FormattedData[]
              = coinChartResponse.prices.map(
                ([timestamp, price]: [number, number]) => ({
                  date: new Date(timestamp).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  }),
                  price: price
                }),
              )

            // Push the formatted data to the coins chart
            this.coinsChart.push({
              labels: formattedData.map((item: FormattedData) => item.date),
              datasets: [
                {
                  label: coinId,
                  data: formattedData.map((item: FormattedData) => item.price),
                }
              ]
            })
          }
        }
      }
    },
  },
})

// Interface representing a market data point
interface APIChartData {
  prices: [number, number][];
  market_caps: Array<number>;
  total_volumes: Array<number>;
}

// Interface representing formatted Data for chart
interface FormattedData {
  date: string;
  price: number
}
