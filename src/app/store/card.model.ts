export enum ECardStatus {
  ToDo,
  InProgress,
  Done,
}

export interface ICard {
  id: number;
  status: ECardStatus;
  message: string;
}
