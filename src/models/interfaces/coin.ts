// Interface representing a coin
export interface Coin {
  id: string // Unique identifier for the coin
  symbol: string // Symbol of the coin
  name: string // Name of the coin
  image: {
    thumb: string // URL for the thumbnail image
    small: string // URL for the small image
    large: string // URL for the large image
  }
  market_data: {
    current_price: {
      usd: number // Current price in USD
    }
  }
}
