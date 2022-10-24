import React from "react"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "./Components/Header";

const Home = React.lazy(() => import("./Pages/Home"))
const Details = React.lazy(() => import("./Pages/Details"))

function App() {
  return (
   <>
   <Header/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details" element={<Details/>}/>
    </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
