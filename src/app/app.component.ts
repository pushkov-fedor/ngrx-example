import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from './app.module';
import { CardActions } from './store/actions/card.actions';
import { PostActions } from './store/actions/posts.actions';
import { ECardStatus, ICard } from './store/card.model';
import {
  selectCards,
  selectToDoCards,
  selectInProgressCards,
  selectDoneCards,
} from './store/selectors/card.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toDoCards$: Observable<ICard[]>;
  inProgressCards$: Observable<ICard[]>;
  doneCards$: Observable<ICard[]>;

  id = 1;
  cardStatusEnum = ECardStatus;

  taskMessage = '';

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.toDoCards$ = this.store.select(selectToDoCards);
    this.inProgressCards$ = this.store.select(selectInProgressCards);
    this.doneCards$ = this.store.select(selectDoneCards);
  }

  onMoveCard(card: ICard, newCardStatus: ECardStatus) {
    this.store.dispatch(
      CardActions.changeStatus({ cardId: card.id, newStatus: newCardStatus })
    );
  }

  onAddTask() {
    const card: ICard = {
      id: this.id++,
      message: this.taskMessage,
      status: ECardStatus.ToDo,
    };
    this.store.dispatch(CardActions.add({ card }));
    this.taskMessage = '';
  }

  onLoadPosts() {
    this.store.dispatch(PostActions.load());
  }
}
