// Import necessary types and axios for HTTP requests
import type { Coin } from '@/models/interfaces/coin'
import type { CoinChart } from '@/models/interfaces/coin-chart'
import axios from 'axios'

// Base URL for the CoinGecko API
const API_URL = 'https://api.coingecko.com/api/v3'

export default class CoinGeckoService {
  // Check if the API is reachable
  static async ping(): Promise<boolean> {
    try {
      await axios.get(`${API_URL}/ping`)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  // Fetch a coin by ID
  static async getCoinById(coinId: string): Promise<Coin | null> {
    try {
      const response = await axios.get(`${API_URL}/coins/${coinId}`)
      return response.data
    } catch (error) {
      console.error(`Error getCoinById with id ${error} : `, error)
      return null
    }
  }

  // Get the history of a coin by ID and by days
  static async getCoinHistory(coinId: string, days: number): Promise<CoinChart | null> {
    try {
      const response = await axios.get(
        `${API_URL}/coins/${coinId}/market_chart?days=${days}&vs_currency=usd`,
      )
      return response.data
    } catch (error) {
      console.error(`Error getCoinHistory with id ${coinId} and days ${days} : `, error)
      return null
    }
  }
}
