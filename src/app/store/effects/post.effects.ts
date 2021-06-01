import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from 'src/app/post.service';
import { PostActions } from '../actions/posts.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.load),
      mergeMap(() =>
        this.postSevice.getPosts().pipe(
          map((posts) => PostActions.loadSuccess(posts)),
          catchError(() => PostActions.loadSuccess('Something went wrong'))
        )
      )
    )
  );

  constructor(private actions$: Actions, private postSevice: PostService) {}
}
