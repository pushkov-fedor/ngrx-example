import { IAppState } from 'src/app/app.module';

export const selectPosts = (state: IAppState) => state.kanban.posts;
