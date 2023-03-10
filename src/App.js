import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
