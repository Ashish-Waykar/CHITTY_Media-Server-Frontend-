import React from "react";
import "./carousel.css";

const Home_Carousel = () => {
    
    return (
       
        <div className="carousel-container">
  <div className="carousel">
    <ul className="slides">
      <input type="radio" name="radio-buttons" id="img-1" checked />
      <li className="slide-container">
        <div className="slide-image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg"/>
        </div>
        <div className="carousel-content">
            <h1>Hello This Is CHITTY Media</h1>
            <div className="phara">
            <p className="p1">  &nbsp; &nbsp; I'm a largly self-taught programmer, leaning heavily on Python, web Development, Machine Learning ,Artificial Intelligence and Data Science. </p>
            <p className="p2">&nbsp; &nbsp;
          This translates into strong proficincies in Python, Javascript, Html And Css.  Those require all the surrounding trappings of frontend web development like HTML, CSS and JS with a dash of bootstrap and jquery to get things to behave nicely.  Add to that a little backend Django and you've got a hot mess.</p>
            </div>
            <h3>Created By, Ashish Anil Waykar</h3>
        </div>
        <div className="carousel-controls">
          <label for="img-3" className="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-2" className="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-2" />
      <li className="slide-container">
        <div className="slide-image">
          <img src="https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true"/>
        </div>
        {/* <div className="carousel-content">
            <h1>CHITTY Media Provides Cloud Maintainance Services.</h1>
            <div className="phara">
            <p className="p1">  &nbsp; &nbsp; I'm a largly self-taught programmer, leaning heavily on Python, web Development, Machine Learning ,Artificial Intelligence and Data Science. </p>
            <p className="p2">&nbsp; &nbsp;
          This translates into strong proficincies in Python, Javascript, Html And Css.  Those require all the surrounding trappings of frontend web development like HTML, CSS and JS with a dash of bootstrap and jquery to get things to behave nicely.  Add to that a little backend Django and you've got a hot mess.</p>
            </div>
            <h3>Created By, Ashish Anil Waykar</h3>
        </div> */}
        <div className="carousel-controls">
          <label for="img-1" className="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-3" className="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-3" />
      <li className="slide-container">
        <div className="slide-image">
          <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg"/>
        </div>
        {/* <div className="carousel-content">
            <h1> CHITTY Media Promotes The Unsung Developers.  </h1>
            <div className="phara">
            <p className="p1">  &nbsp; &nbsp; I'm a largly self-taught programmer, leaning heavily on Python, web Development, Machine Learning ,Artificial Intelligence and Data Science. </p>
            <p className="p2">&nbsp; &nbsp;
          This translates into strong proficincies in Python, Javascript, Html And Css.  Those require all the surrounding trappings of frontend web development like HTML, CSS and JS with a dash of bootstrap and jquery to get things to behave nicely.  Add to that a little backend Django and you've got a hot mess.</p>
            </div>
            <h3>Created By, Ashish Anil Waykar</h3>
        </div> */}
        <div className="carousel-controls">
          <label for="img-2" className="prev-slide">
            <span>&lsaquo;</span>
          </label>
          <label for="img-1" className="next-slide">
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <div className="carousel-dots">
        <label for="img-1" className="carousel-dot" id="img-dot-1"></label>
        <label for="img-2" className="carousel-dot" id="img-dot-2"></label>
        <label for="img-3" className="carousel-dot" id="img-dot-3"></label>
      </div>
    </ul>
  </div>
</div>
          
    );
    
}

export default Home_Carousel;