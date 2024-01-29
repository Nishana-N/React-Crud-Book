import React from "react"
import { BrowserRouter ,Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "../../../Routes/Home"
import About from "../../../Routes/About/About"
import Book from "../../../Routes/Books/Book"
import SingleBook from "../../../Routes/Books/SingleBook"
import CreateBook from "../../../Routes/Books/CreateBook"
import EditBook from "../../../Routes/Books/EditBook"
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
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
