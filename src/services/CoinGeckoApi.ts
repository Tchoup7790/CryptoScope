import axios from "axios";
import type ChartData from "@/types/ChartData";
import type Coin from "@/types/Coin";

// TODO: Get the good URL for localhost
const API_URL = "https://api.coingecko.com/api/v3";
const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY;

/* Create a service to interact with the CoinGecko API
 * All methods are asynchronous and return a Promise
 * The methods are static so we can use them without creating an instance of the class
 * The methods doesn't throw errors but return an empty array or object if an error occurs
 */
export class CoinGeckoApi {
  // Check if the API is reachable
  static async ping(): Promise<boolean> {
    const options = {
      method: "GET",
      url: `${API_URL}/ping`,
      headers: {
        accept: "application/json",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("Pong: " + response.data["gecko_says"]);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  // Fetch the list of coins
  static async getCoinsList(): Promise<Coin[]> {
    const options = {
      method: "GET",
      url: `${API_URL}/coins/list`,
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": API_KEY,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching coins list:", error);
      return [];
    }
  }

  // Fetch a coin by its id
  static async getCoinById(coinId: string): Promise<Coin> {
    const options = {
      method: "GET",
      url: `${API_URL}/coins/${coinId}`,
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": API_KEY,
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(`Error fetching coin with id ${coinId}:`, error);
      return { id: "", symbol: "", name: "" };
    }
  }

  // Get the historical data of a coin
  static async getCoinMarketChart(
    coinId: string,
    days: number,
  ): Promise<ChartData | null> {
    const options = {
      method: "GET",
      url: `${API_URL}/coins/${coinId}/market_chart?days=${days}`,
      params: {
        vs_currency: "usd",
        days: days,
        interval: "daily",
      },
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": API_KEY,
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(`Error fetching market chart for ${coinId}:`, error);
      return null;
    }
  }
}
