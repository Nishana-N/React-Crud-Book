import React from "react"
import { BrowserRouter ,Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Route/Home"
import About from "./Route/About/About"
import Book from "./Route/Books/Book"
import SingleBook from "./Route/Books/SingleBook"
import CreateBook from "./Route/Books/CreateBook"
import EditBook from "./Route/Books/EditBook"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/books" element={<Book/>}/>
          <Route path="/books/:slug" element={<SingleBook/>}/>
          <Route path="/createbook" element={<CreateBook/>}/>
          <Route path="/editbook/:slug" element={<EditBook/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
