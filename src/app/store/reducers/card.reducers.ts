import { createReducer, on } from '@ngrx/store';
import { CardActions, ECardActions } from './../actions/card.actions';
import { ECardStatus, ICard } from './../card.model';

const initialState: ICard[] = [
  {
    id: 0,
    status: ECardStatus.ToDo,
    message: 'WSM Page 3',
  },
];

export const cardReducers = createReducer(
  initialState,
  on(CardActions.add, (state, { card }) => [...state, card]),
  on(CardActions.edit, (state, { card }) => {
    const cards = [...state];
    const editedCardIndex = cards.findIndex((c) => c.id === card.id);
    if (editedCardIndex > -1) {
      cards[editedCardIndex] = card;
      return cards;
    }
    return state;
  }),
  on(CardActions.de1ete, (state, { cardId }) =>
    state.filter((card) => card.id !== cardId)
  ),
  on(CardActions.changeStatus, (state, { cardId, newStatus }) => {
    const cards = [...state];
    const editedCardIndex = cards.findIndex((card) => card.id === cardId);
    if (editedCardIndex > -1) {
      const card = { ...cards[editedCardIndex], status: newStatus };
      cards[editedCardIndex] = card;
      return cards;
    }
    return state;
  })
);
