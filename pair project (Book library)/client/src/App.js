import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import SearchBar from "./pages/SearchBar.jsx"
function App() {
  
  return (
    <div>
    <SearchBar/>
    <div className="app">
      
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Books searchResults={SearchBar} />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
