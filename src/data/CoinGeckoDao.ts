import axios from 'axios';

interface Coin {
  id: string;
  symbol: string;
  name: string;
}

const API_URL = "https://api.coingecko.com/api/v3";
const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY;


export class CoinGeckoDao {

  async ping(): Promise<boolean> {
    const options = {
      method: "GET",
      url: `${API_URL}/ping`,
      headers: {
        accept: "application/json",
      }
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

  async getCoinsList(): Promise<Coin[]> {
    const options = {
      method: "GET",
      url: `${API_URL}/coins/list`,
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": API_KEY
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching coins list:', error);
      return []
    }
  }

  async getCoinById(coinId: string): Promise<Coin> {
    const options = {
      method: "GET",
      url: `${API_URL}/coins/${coinId}`,
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": API_KEY
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(`Error fetching coin with id ${coinId}:`, error);
      return { id: "", symbol: "", name: "" };
    }
  }
}

