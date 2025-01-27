// Interface representing a market data point
export interface CoinChart {
  prices: [number, number][];
  market_caps: Array<number>;
  total_volumes: Array<number>;
}
