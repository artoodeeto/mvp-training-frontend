import { ISuccessIndicator } from "./opcr";
import { SuccessIndicator } from "./success_indicator";

export interface IMfo {
  title: string;
  ppa: IPpa[];
}

export type MfoWithId = IMfo & { id: string };


export interface IPpa {
  title: string;
  successIndicators: ISuccessIndicator[];
}