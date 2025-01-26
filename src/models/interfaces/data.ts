// Import the Dataset interface
import type { Datasets } from '@/models/interfaces/datasets'

// Interface representing the data structure for charting
export interface Data {
  labels: string[] // Labels for the data points
  datasets: Datasets[] // Array of datasets
}
