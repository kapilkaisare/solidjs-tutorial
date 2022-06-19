import { createSignal } from 'solid-js'
import BookList from './BookList'
import AddBook from './AddBook'

const initialBooks = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

function BookShelf(props) {
  const [books, setBooks] = createSignal(initialBooks)
  const [showForm, setShowForm] = createSignal(false)

  return (
    <>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList books={books()}/>
      <Show
        when={showForm()}
        fallback={<button onClick={(e) => {e.preventDefault(); setShowForm(true);}}>Add books</button>}
      >
        <AddBook setBooks={setBooks}/>
        <button onClick={(e) => {e.preventDefault(); setShowForm(false);}}>Done adding books</button>
      </Show>
    </>
  );
}

export default BookShelf
