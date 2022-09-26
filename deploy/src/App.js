import Searchbar from "./Searchbar";
import {Routes, Route} from "react-router-dom";
import Login from "./Routes/Login";
import Signup from "./Routes/Signup";
import Post from "./Routes/Post";
import React from "react";
import Footer from './Footer';
import Profile from "./Routes/Profile";
import './App.css'

// main Application - Used for the routing of the project
function App() {
    return (
        <div className="App">
            <Searchbar/>
            <div className="content">
                <Routes>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/post" element={<Post/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                </Routes>
               <Footer/>
            </div>
        </div>
    );
}
export default App;

