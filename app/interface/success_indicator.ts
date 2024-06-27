import { ReactNode } from 'react';

export interface SuccessIndicator {
  // id?: number;
  // major_final_output: string;
  // ppa: string;
  // target_measure: string;
  // parent_id?: SuccessIndicator

  id: number;
  title: string;
  target_measure: string;
  weight: number;
  appropriation: string;
  divisions: string;
  physical: string;
  financial: string;
  actual_accomplishments?: string;
  q: number;
  e: number;
  t: number;
  a: number;
  eps: number;
  remarks: string;
  createdDate?: Date;
  updatedDate?: Date;
  parent_id?: SuccessIndicator | number;
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

