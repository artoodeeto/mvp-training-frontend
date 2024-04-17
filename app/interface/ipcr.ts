import { ICompleteIPCR } from "./success_indicator";
import { User } from "./user";


export interface IIPCR {
  id: number;
  final_average_rating: string;
  OPCR_efficiency_rating: string;
  comments: string;
  ratee: User;
  reviewed_by: User;
  approved_by: User;
  final_rating_by: User;
  assessed_by: User;
  discussed_with: User;

  ratee_date: string;
  reviewed_by_date: string;
  approved_by_date: string;
  final_rating_by_date: string;
  assessed_by_date: string;
  discussed_with_date: string;
  completeSuccessIndicators: ICompleteIPCR[];
}


export interface IPCRUserList {
  id: number;
  ratee: IPCRFromRatee[]
}

interface IPCRFromRatee {
  id: number;
  final_average_rating: number;
  OPCR_efficiency_rating: number;
  comments: string
}