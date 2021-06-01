import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from './app.module';
import { ICard } from './store/card.model';
import { selectCards } from './store/selectors/card.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cards$: Observable<ICard[]>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.cards$ = this.store.select(selectCards);
  }
}
