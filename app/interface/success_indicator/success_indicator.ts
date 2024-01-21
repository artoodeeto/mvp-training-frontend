import { ReactNode } from 'react';

export interface SuccessIndicator {
  id?: number;
  major_final_output: string;
  title: string;
  target_measure: string;
}

export interface getALlSuccessIndicatorWithCount {
  successIndicators: SuccessIndicator[];
  count: number
}

export interface SuccessIndicatorProps {
  formValues?: SuccessIndicator
}