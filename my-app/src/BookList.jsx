import { createSignal } from 'solid-js';

function BookList(props) {
	const totalBooks = () => props.books.length

	return (
		<>
			<h1>My books ({totalBooks()})</h1>
			<ul>
				<For each={props.books}>
					{
						(book) => {
							return (
								<li>
									{book.title}
									<span style={{"font-style": "italic"}}>({book.author})</span>
								</li>
							)
						}
					}
				</For>
			</ul>
		</>
	)
}

export default BookList
