import React from "react";
import { useState } from "react";
import { useBookmarksContext } from "../../Context/BookmarkContext";
import { BookmarkDetailsType, BookmarkFormType } from "./BookmarkFormTypes";

export const BookmarkForm: React.FC<BookmarkFormType> = () => {
  const [bookmarkDetails, setBookmarkDetails] = useState<BookmarkDetailsType>({
    id: 0,
    title: "",
    url: ""
  });

  const { dispatch } = useBookmarksContext();

  return (
    <form action="submit" className="bookmark-form">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        value={bookmarkDetails.title}
        required
        placeholder="Enter Bookmark title"
        onChange={(event) =>
          setBookmarkDetails(() => ({
            ...bookmarkDetails,
            title: event.target.value
          }))
        }
      />
      <label htmlFor="url">Url:</label>
      <input
        type="text"
        value={bookmarkDetails.url}
        placeholder="https://www.example.com"
        required
        onChange={(event) =>
          setBookmarkDetails(() => ({
            ...bookmarkDetails,
            url: event.target.value
          }))
        }
      />
      <button
        type="button"
        className="btn-submit"
        onClick={() => {
          if (bookmarkDetails.title && bookmarkDetails.url) {
            dispatch({ type: "ADD_BOOKMARK", payload: bookmarkDetails });
            setBookmarkDetails({
              id: bookmarkDetails.id + 1,
              title: "",
              url: ""
            });
          }
        }}
      >
        Add Bookmark
      </button>
    </form>
  );
};
