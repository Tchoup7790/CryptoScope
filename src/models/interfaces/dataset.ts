// Interface representing a dataset for charting
export interface Dataset {
  label: string // Label for the dataset
  data: number[] // Data points for the dataset
  borderColor?: string // Optional border color for the dataset
  backgroundColor?: string // Optional background color for the dataset
}
