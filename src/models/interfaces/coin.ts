export interface Coin {
  id: string
  symbol: string
  name: string
  usd: number
  image: {
    thumb: string
    small: string
    large: string
  }
}
