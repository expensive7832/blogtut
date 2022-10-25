import React from "react"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Home = React.lazy(() => import("./Pages/Home"))
const Details = React.lazy(() => import("./Pages/Details"))
const Signup = React.lazy(() => import("./Pages/Signup"))
const Login = React.lazy(() => import("./Pages/Login"))
const Post = React.lazy(() => import("./Pages/Post"))

function App() {
  return (
   <>
   <Header/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/post" element={<Post/>}/>
    </Routes>
  </BrowserRouter>

  <Footer/>
   </>
  );
}

export default App;
