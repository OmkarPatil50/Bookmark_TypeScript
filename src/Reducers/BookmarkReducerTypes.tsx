import { BookmarkDetailsType } from "../Components/Ex02-Bookmark/BookmarkFormTypes";

type AddBookmarkAction = {
  type: "ADD_BOOKMARK";
  payload: object;
};

type RemoveBookmarkAction = {
  type: "REMOVE_BOOKMARK";
  payload: number;
};

export type ReducerAction = AddBookmarkAction | RemoveBookmarkAction;

export type AppStateType = {
  bookmarks: BookmarkDetailsType[];
};
