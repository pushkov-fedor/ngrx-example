import { createSelector } from '@ngrx/store';
import { ECardStatus } from '../card.model';
import { IAppState } from './../../app.module';

export const selectCards = (state: IAppState) => state.cards;

export const selectToDoCards = createSelector(selectCards, (cards) =>
  cards.filter((card) => card.status === ECardStatus.ToDo)
);

export const selectInProgressCards = createSelector(selectCards, (cards) =>
  cards.filter((card) => card.status === ECardStatus.InProgress)
);

export const selectDoneCards = createSelector(selectCards, (cards) =>
  cards.filter((card) => card.status === ECardStatus.Done)
);
