import { ReactNode } from 'react';

export interface SuccessIndicator {
  id?: number;
  major_final_output: string;
  ppa: string;
  target_measure: string;
  parent_id?: SuccessIndicator
}

export interface getALlSuccessIndicatorWithCount {
  successIndicators: SuccessIndicator[];
  count: number
}

export interface SuccessIndicatorProps {
  formValues?: SuccessIndicator
}

export interface UserSuccessIndicator {
  id: number;
  // ql_qn: number;
  // timeliness: number;
  // average: number;
  // actual_accomplishment: string;
  // remarks: string;
  successIndicator: SuccessIndicator
}

export interface ICompleteSuccessIndicator {
  actual_accomplishment: string;
  average: number;
  ql_qn: number;
  remarks: string;
  timeliness: number;
}


export type ICompleteIPCR = Partial<ICompleteSuccessIndicator> & UserSuccessIndicator;

