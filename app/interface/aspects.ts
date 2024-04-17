import { ICompleteSuccessIndicator, SuccessIndicator } from "./success_indicator";
import { User } from "./user";

export interface Aspect {
  id?: number;
  mov: string;
  aspects_of_work: string;
  successIndicator: SuccessIndicator;
  user: User
}

export interface getAllAspectWithCount {
  aspects: Aspect[];
  count: number
}

export interface AspectRowForm {
  si: SuccessIndicator,
  mov: string,
  aow: string,
}

// type SuccessIndicatorWithIncompleteSuccessIndicator = Partial<ICompleteSuccessIndicator> & SuccessIndicator

export interface IAspectWithCompleteSuccessIndicator {
  id?: number;
  mov: string;
  aspects_of_work: string;
  successIndicator: Partial<ICompleteSuccessIndicator> & SuccessIndicator
}
