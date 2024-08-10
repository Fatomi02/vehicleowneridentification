import './App.css';
import Detail from './components/detail/detail';
import Homepage from './components/homepage/homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
