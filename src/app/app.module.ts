import { ICard } from './store/card.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { cardReducers } from './store/reducers/card.reducers';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface IAppState {
  cards: ICard[];
}

const appReducers: ActionReducerMap<IAppState> = {
  cards: cardReducers,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
