import { configureStore } from "@reduxjs/toolkit";
import {
  TenseListSlice,
  SelectedTenseSlice,
  VerbListSlice,
  SelectedVerbListSlice,
} from "./slices";

const store = configureStore({
  reducer: {
    tenseList: TenseListSlice.reducer,
    selectedTense: SelectedTenseSlice.reducer,
    verbList: VerbListSlice.reducer,
    selectedVerbList: SelectedVerbListSlice.reducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
