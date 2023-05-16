import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Logon, Cad} from './pages/Logon';
import { AddBook } from "./pages/AddBook";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Logon />}/>
            <Route path="/cadastro" element={<Cad />}/>
            <Route path="/add-book" element={<AddBook />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
