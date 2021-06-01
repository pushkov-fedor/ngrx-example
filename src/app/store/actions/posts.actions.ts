import { createAction, props } from '@ngrx/store';
export enum EPostActions {
  LoadPosts = '[POST] LOAD',
  LoadPostsSuccess = '[POST] LOAD SUCCESS',
  LoadPostsFailure = '[POST] LOAD FAILUR',
}

export namespace PostActions {
  export const load = createAction(EPostActions.LoadPosts);

  export const loadSuccess = createAction(
    EPostActions.LoadPostsSuccess,
    props<any>()
  );

  export const loadFailure = createAction(
    EPostActions.LoadPostsSuccess,
    props<any>()
  );
}
