import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Logon, Cad} from './pages/Logon';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" />
            <Route path="/login" element={<Logon />}/>
            <Route path="/cadastro" element={<Cad />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
