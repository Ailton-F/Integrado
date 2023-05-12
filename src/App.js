import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Logon, Cad} from './pages/Logon';
import { AuthProvider } from "./services/AuthServiceContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" />
            <Route path="/login" element={<Logon />}/>
            <Route path="/cadastro" element={<Cad />}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
