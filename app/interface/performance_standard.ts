import { Aspect, IAspectWithCompleteSuccessIndicator } from "./aspects";
import { SuccessIndicator, UserSuccessIndicator } from "./success_indicator";
import { User } from "./user";

export interface PerformanceStandard {
  id: number;
  aspects: UserSuccessIndicator[]
}

export interface IGetPerformanceStandard {
  id: number,
  user: User,
}

export interface IPSA {
  id?: number,
  zero?: string,
  one?: string,
  two?: string,
  three?: string,
  four?: string,
  five?: string,
  actual_accomplishment?: string;
  timeliness?: number;
  ql_qn?: number;
  average?: number;
  remarks?: string;
  aspect: IAspectWithCompleteSuccessIndicator
}