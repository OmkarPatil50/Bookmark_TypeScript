import { useBookmarksContext } from "../../Context/BookmarkContext";
import { BookmarkDetailsType } from "../Ex02-Bookmark/BookmarkFormTypes";
import { BookmarkListType } from "./BookmarkListTypes";

export const BookmarkList: React.FC<BookmarkListType> = () => {
  const { state, dispatch } = useBookmarksContext();

  return (
    <ul className="bookmark-list">
      {state.bookmarks.length ? (
        <>
          <p className="click-note">*Click on title to redirect</p>
          <h3 className="list-title">Bookmarks:</h3>
        </>
      ) : (
        <h1 className="empty-tag">
          No Bookmarks Found <i className="fa-solid fa-heart-crack"></i>
        </h1>
      )}
      {state.bookmarks.map((bookmark: BookmarkDetailsType) => {
        const { id, title, url } = bookmark;
        return (
          <li key={id} className="bookmark-list-item">
            <a
              href={`https://${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bookmark-title"
            >
              {title}
            </a>
            <p className="bookmark-url">https://{url}</p>
            <button
              className="btn-delete"
              onClick={() => dispatch({ type: "REMOVE_BOOKMARK", payload: id })}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
