import Book from "./components/Book"


const books = [ {
    id: 1,
    src: "",
    alt: "",
    author: "",
    title: ""
}]

function App() {
    return (
        
        <div className="book">
            {
                books.map((book, index) => {
                   
                    return (
                        <Book key={book.id} {...book}/>
                    )
                })
            }
        </div>

    )
}


export default App