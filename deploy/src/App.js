
import Searchbar from "./Searchbar";
import './searchbar.css'
import {Routes, Route} from "react-router-dom";
import Login from "./Routes/Login";
import Signup from "./Routes/Signup";
import Post from "./Routes/Post";
import React from "react";
import Footer from './Footer'

// Working
function App() {
    return (
        <div className="App">
            <Searchbar/>
            <div className="content">
                <Routes>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/post" element={<Post/>}></Route>
                </Routes>
                <Footer/>
            </div>
        </div>
    );
}
export default App;

