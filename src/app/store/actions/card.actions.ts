import { ICard, ECardStatus } from './../card.model';
import { Action, createAction, props } from '@ngrx/store';

export enum ECardActions {
  Add = '[Card] Add',
  Edit = '[Card] Edit',
  Delete = '[Card] Delete',
  ChangeStatus = '[Card] Change Status',
}

export namespace CardActions {
  export const add = createAction(ECardActions.Add, props<{ card: ICard }>());

  export const edit = createAction(ECardActions.Edit, props<{ card: ICard }>());

  export const de1ete = createAction(
    ECardActions.Delete,
    props<{ cardId: number }>()
  );

  export const changeStatus = createAction(
    ECardActions.ChangeStatus,
    props<{ cardId: number; newStatus: ECardStatus }>()
  );
}
