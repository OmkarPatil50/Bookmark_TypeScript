import "./styles.css";
import { Header } from "./Components/Ex01-Header/Header";
import { BookmarkForm } from "./Components/Ex02-Bookmark/BookmarkForm";
import { BookmarkList } from "./Components/Ex03-BookmarkList/BookmarkList";

function App() {
  return (
    <div className="App">
      <Header title={"Bookmark Page"} />
      <BookmarkForm />
      <BookmarkList />
    </div>
  );
}

export default App;
