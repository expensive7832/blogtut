import React from "react"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Home = React.lazy(() => import("./Pages/Home"))
const Details = React.lazy(() => import("./Pages/Details"))
const Signup = React.lazy(() => import("./Pages/Signup"))
const Login = React.lazy(() => import("./Pages/Login"))
const Post = React.lazy(() => import("./Pages/Post"))
const Createcat = React.lazy(() => import("./Pages/Createcat"))
const CreateArticle = React.lazy(() => import("./Pages/CreateArticle"))
const Contact = React.lazy(() => import("./Pages/Contact"))

function App() {
  return (
   <>
   <Header/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="/cat" element={<Createcat/>}/>
      <Route path="/create-article" element={<CreateArticle/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </BrowserRouter>

  <Footer/>
   </>
  );
}

export default App;
