import React from 'react';
// import Fade from 'react-reveal/Fade';
import './Banner.css';

const Banner = () => {
    return (
      
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active bg-1">
          <div class="carousel-caption">
          <h5 class="para1" >Best Offers On</h5>
             <h1 class="beauti-title"><span class="colec1">Natural Cosmetics</span> <span class="colec">Collections</span></h1>
             <h5 class="para2">flat 30% off</h5>
          </div>
        </div>
        <div class="carousel-item bg-2">
          <div class="carousel-caption">
          <h5 class="para3"><span class="span2">Cosmetics For Young</span></h5>
             <h1 class="beauti-title para4"><span class="colec2">Senstive Skin</span> <span class="colec"></span></h1>
             <h5 class="para-two">50% Discount</h5>
          </div>
        </div>
        <div class="carousel-item bg-3">
          <div class="carousel-caption">
          <h5 class="para3"><span class="span3">Best Collections</span></h5>
          <h1 class="beauti-title"><span class="colec1">Natural Cosmetics</span> <span class="colec">Collections</span></h1>
             <h5 class="para5">flat 30% </h5>
          </div>
        </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
     
    );
};

export default Banner;

