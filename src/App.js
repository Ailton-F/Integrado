import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Logon, Cad} from './pages/Logon';
import { AddBook } from "./pages/AddBook";
import Home from './pages/Home';
import { EditUser } from "./pages/EditUser";
import { Book } from "./pages/Book";
import { AuthProvider } from "./context/auth";
import { Payment } from './pages/Payment';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Logon />}/>
          <Route path="/register" element={<Cad />}/>
          <Route path="/add-book" element={<AddBook />}/>
          <Route path="/edit-user" element={<EditUser />}/>
          <Route path="/book" element={<Book />}/>
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;