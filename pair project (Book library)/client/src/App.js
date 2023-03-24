import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{useState,useEffect} from "react";
import axios from 'axios'
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import SearchBar from "./pages/SearchBar.jsx"
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const[toggle,setToggle]= useState(false)

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, [toggle]);
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredBooks = books.filter((book) =>{ 
      return book.title.toLowerCase()=== searchTerm.toLowerCase()
    });
    setBooks(filteredBooks);
    
  };
  const refrech=()=>{
    setToggle(!toggle)
  }
  return (
    <div>
      <h1 className="logo" onClick={()=>refrech()}>Book Library</h1>
    <SearchBar searchbook={handleSearch} handleSubmit={handleSubmit} />
    <div className="app">
      
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Books books={books} refrech={refrech} />} />
          <Route path="/add" element={<Add refrech={refrech}/>} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
