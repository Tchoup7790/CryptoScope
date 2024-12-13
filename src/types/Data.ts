import type Datasets from "./Datasets";

export default interface ChartDataType {
  labels: string[];
  datasets: Datasets[];
}
