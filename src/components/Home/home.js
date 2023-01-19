import React from "react";
import "./home.css";
import Home_Carousel from "../Carousel/carousel";
import Post from "../Post/post";
const Home = ()=>{
    return (
        <div className="home-body">
        <Home_Carousel/>
        <Post/>
        <Post/>
        
        </div>
    );
}
export default Home;