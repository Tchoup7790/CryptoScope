import type { Coin } from '@/models/interfaces/coin'
import type { CoinChart } from '@/models/interfaces/coin-chart'
import CoinGeckoService from '@/services/coin-gecko.service'
import { defineStore } from 'pinia'

export interface CoinState {
  coins: Coin[]
  coinsChart: { [id: string]: { [days: number]: CoinChart } }
  coinList: string[]
  daysList: number[]
}

export const useCoinStore = defineStore({
  id: 'coin',
  state: () =>
    ({
      coins: [],
      coinsChart: {},
      coinList: ['bitcoin'],
      daysList: [7, 30, 90, 182, 365],
    }) as CoinState,

  actions: {
    resetStore() {
      this.$reset()
    },
    // init the coins
    async initCoins() {
      let getCoinResponse = null
      let getCoinPriceResponse = null
      for (const coinId of this.coinList) {
        getCoinResponse = await CoinGeckoService.getCoinById(coinId)
        getCoinPriceResponse = await CoinGeckoService.getCoinPrice(coinId)
      }
      if (getCoinResponse && getCoinPriceResponse) {
        getCoinResponse.price = getCoinPriceResponse
        this.coins.push(getCoinResponse)
      }
    },

    // init the coinsChart
    async initCoinsChart() {
      let getCoinChartResponse = null
      for (const coinId of this.coinList) {
        this.coinsChart[coinId] = {}
        for (const days of this.daysList) {
          getCoinChartResponse = await CoinGeckoService.getCoinHistory(coinId, days)
          if (getCoinChartResponse) {
            this.coinsChart[coinId][days] = getCoinChartResponse
          }
        }
      }
    },
  },
})
