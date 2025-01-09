export interface Coin {
  id: string
  symbol: string
  name: string
  price: number
  image: {
    thumb: string
    small: string
    large: string
  }
}
