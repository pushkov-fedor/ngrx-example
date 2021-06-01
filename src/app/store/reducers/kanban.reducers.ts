import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { CardActions, ECardActions } from '../actions/card.actions';
import { ECardStatus, ICard } from '../card.model';

export interface KanbanState {
  cards: ICard[];
  posts: any[];
}

const initialState: KanbanState = {
  cards: [
    {
      id: 0,
      status: ECardStatus.ToDo,
      message: 'WSM Page 3',
    },
  ],
  posts: [],
};

export const kanbanReducers = createReducer(
  initialState,
  on(CardActions.add, (state, { card }) => ({
    ...state,
    cards: [...state.cards, card],
  })),
  on(CardActions.edit, (state, { card }) => {
    const cards = [...state.cards];
    const editedCardIndex = cards.findIndex((c) => c.id === card.id);
    if (editedCardIndex > -1) {
      cards[editedCardIndex] = card;
      return { ...state, cards };
    }
    return state;
  }),
  on(CardActions.de1ete, (state, { cardId }) => ({
    ...state,
    cards: state.cards.filter((card) => card.id !== cardId),
  })),
  on(CardActions.changeStatus, (state, { cardId, newStatus }) => {
    const cards = [...state.cards];
    const editedCardIndex = cards.findIndex((card) => card.id === cardId);
    if (editedCardIndex > -1) {
      const card = { ...cards[editedCardIndex], status: newStatus };
      cards[editedCardIndex] = card;
      return { ...state, cards };
    }
    return state;
  })
);
