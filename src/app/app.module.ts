import { RouterModule } from '@angular/router';
import { appRoutes } from './app-rotes';
import { ICard } from './store/card.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { kanbanReducers, KanbanState } from './store/reducers/kanban.reducers';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/effects/post.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  routerReducer,
  RouterReducerState,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';

export interface IAppState {
  kanban: KanbanState;
  router: RouterReducerState;
}

const appReducers: ActionReducerMap<IAppState> = {
  kanban: kanbanReducers,
  router: routerReducer,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([PostEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    RouterModule.forRoot(appRoutes),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
