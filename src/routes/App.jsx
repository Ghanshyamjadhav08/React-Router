import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { useState } from "react";
import Footer from "../Component/Footer";
import Sidebar from "../Component/sidebar"
import CreatePost from "../Component/CreatePost";
import PostList from "../Component/postList";

import PostListProvider from "../store/postList-store";
import Header from "../Component/Header";
import { Outlet } from "react-router-dom";



function App() {
   const [SelectedTab, setSelectedTab]  = useState("Home");


   
  return (
  <PostListProvider>
     <div className="app-container">
     <Sidebar SelectedTab={SelectedTab} setSelectedTab= {setSelectedTab}/>
      <div className="content">
      <Header/>
       <Outlet/>
      <Footer/>
      </div>
     </div>
     </PostListProvider>
     
      
    
  )
}

export default App
