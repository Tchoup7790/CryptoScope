// Import necessary types and services
import type { Coin } from '@/models/interfaces/coin'
import type { Dataset } from '@/models/interfaces/dataset'
import CoinGeckoService from '@/services/coin-gecko.service'
import { defineStore } from 'pinia'

// Define the state interface for the store
export interface CoinState {
  coins: Coin[]
  coinsChart: { [id: string]: { [days: number]: Dataset } }
  coinList: string[]
  daysList: number[]
}

// Define the store using Pinia
export const useCoinStore = defineStore({
  id: 'coin', // Unique ID for the store
  state: () =>
    ({
      coins: [], // List of coins
      coinsChart: {}, // Chart data for coins
      coinList: ['bitcoin'], // List of coin IDs to track
      daysList: [7, 30, 90, 182, 365], // List of days for chart data
    }) as CoinState,

  actions: {
    // Reset the store to its initial state
    resetStore() {
      this.$reset()
    },
    // Initialize the coins data
    async initCoins() {
      let getCoinResponse = null
      let getCoinPriceResponse = null
      for (const coinId of this.coinList) {
        // Fetch coin data and price
        getCoinResponse = await CoinGeckoService.getCoinById(coinId)
        getCoinPriceResponse = await CoinGeckoService.getCoinPrice(coinId)
      }
      if (getCoinResponse && getCoinPriceResponse) {
        // Add price to coin data and push to the coins list
        getCoinResponse.price = getCoinPriceResponse
        this.coins.push(getCoinResponse)
      }
    },

    // Initialize the coins chart data
    async initCoinsChart() {
      let getCoinChartResponse = null
      for (const coinId of this.coinList) {
        this.coinsChart[coinId] = {}
        for (const days of this.daysList) {
          // Fetch historical data for each coin and days combination
          getCoinChartResponse = await CoinGeckoService.getCoinHistory(coinId, days)
          if (getCoinChartResponse) {
            this.coinsChart[coinId][days] = getCoinChartResponse
          }
        }
      }
    },
  },
})
