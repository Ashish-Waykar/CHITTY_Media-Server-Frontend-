import React from "react";
import "./post.css";
const Post = ()=>{
    return (<div className="carousel-post">
             
    <div className="container">
        <div className="slider">

            {/* Slide  */}
            <div className="slide slide--current">
                <div className="slide--img fadeimg">
                    <img src="https://res.cloudinary.com/valery/image/upload/v1633870488/Codepen/fantasy-16x9.webp" alt="Slide #1" />
                </div>
                <div className="slide--desc">
                    <y className="fade">Gallery #1</y>
                    <x className="fade">fantasy landscapes</x>
                    <p className="fade">mini description for current gallery images</p>
                    <div className="slide--desc-link">
                        <a href="" className="fade">2 gallery</a>
                    </div>
                </div>
            </div>
            


        </div>
    </div>
                
</div>);
}
export default Post;