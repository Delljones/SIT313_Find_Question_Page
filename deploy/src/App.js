import Searchbar from "./Routes/Header/Searchbar";
import {Routes, Route} from "react-router-dom";
import Login from "./Routes/Authentication/Login";
import Signup from "./Routes/Authentication/Signup";
import Post from "./Routes/Post/Post";
import React from "react";
import Footer from './Routes/Footer/Footer';
import Profile from "./Routes/Authentication/Profile";
import './App.css'
import LoggedOut from "./Routes/Authentication/LoggedOut";


// main Application - Used for the routing of the project
function App() {
    return (
        <div className="App">
            <Searchbar/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<LoggedOut/>}></Route>
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

