import { IMfo } from "./mfo";


export interface IOPCR {
  owned_by: string; // <-- created signed
  evaluated_by: string;
  opcr_reviewed_by: string;
  opcr_approved_by: string;
  recommending_approval_by: string;

  evaluated_by_date: string;
  reviewed_by_date: string;
  recommending_approval_date: string;
  approved_date: string;

  total: number;
  comments_by_evaluator: string;
  overall_rating: number;
  numerical_rating: number;
  adjectival_rating: number;
  mfo: IMfo[];
}

export interface ISuccessIndicator {
  title: string;
  target_measure: string;
  weight: number;
  appropriation: string;
  divisions: string;
  physical: string;
  financial: string;
  q: number;
  e: number;
  t: number;
  a: number;
  eps: number;
  remarks: string;
}