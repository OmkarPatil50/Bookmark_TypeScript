import { ReducerAction } from "react";
import { AppStateType } from "./BookmarkReducerTypes";

export const BookmarkReducer = (state: AppStateType, action: ReducerAction) => {
  switch (action.type) {
    case "ADD_BOOKMARK": {
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload]
      };
    }

    case "REMOVE_BOOKMARK": {
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.payload
        )
      };
    }

    default:
      return state;
  }
};
