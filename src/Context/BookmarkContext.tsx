import React, { ReactNode, useContext, useReducer } from "react";

import { AppStateType } from "../Reducers/BookmarkReducerTypes";

import { BookmarkReducer } from "../Reducers/BookmarkReducer";
import { BookmarkDetailsType } from "../Components/Ex02-Bookmark/BookmarkFormTypes";

type BookmarkContextType = {
  state: {
    bookmarks: BookmarkDetailsType[];
  };
  dispatch: (action: object) => void;
};

const BookmarkContext = React.createContext<BookmarkContextType | undefined>(
  undefined
);

export const useBookmarksContext = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export const BookmarksProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const initialState: AppStateType = {
    bookmarks: []
  };

  const [state, dispatch] = useReducer(BookmarkReducer, initialState);

  return (
    <BookmarkContext.Provider value={{ state, dispatch }}>
      {children}
    </BookmarkContext.Provider>
  );
};
