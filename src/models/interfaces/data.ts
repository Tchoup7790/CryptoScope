// Import the Dataset interface
import type { Dataset } from '@/models/interfaces/dataset'

// Interface representing the data structure for charting
export interface Data {
  labels: string[] // Labels for the data points
  datasets: Dataset[] // Array of datasets
}
