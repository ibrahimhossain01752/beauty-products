import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="
https://cdn.shopify.com/s/files/1/0195/5145/3248/files/slider-1_2000x.jpg?v=1572581662
" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5 class="para1">Best Offers On</h5>
             <h1 class="beauti-title"><span class="colec2">Natural Cosmetics</span> <span class="colec">Collections</span></h1>
             <h5 class="para2">flat 30% off</h5>
            
            </div>
           
          </div>
          <div class="carousel-item ">
           <div>
              <img src="
https://cdn.shopify.com/s/files/1/0195/5145/3248/files/slider-2_bd13fd4a-b427-4949-8025-288b3a744835_2000x.jpg?v=1572581683" class="d-block w-100" alt="..."/>
           </div>
            <div class="carousel-caption item-2  d-none d-md-block">
            <h5 class="para3"><span class="span1">Best Offers On</span></h5>
             <h1 class="beauti-title para4"><span class="colec2">Natural Cosmetics</span> <span class="colec">Collections</span></h1>
             <h5 class="para5">flat 30% off</h5>
              
             
            </div>
          </div>
          <div class="carousel-item ">
            <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/files/slider-3-1_2000x.jpg?v=1572863329
" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
            <h5 class="para3"><span class="span1">Best Offers On</span></h5>
             <h1 class="beauti-title para4"><span class="colec2">Natural Cosmetics</span> <span class="colec">Collections</span></h1>
             <h5 class="para5">flat 30% off</h5>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Banner;

/* 
 <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
              <div class="slider-btn">
                <button class="btn btn-1">View More</button>
              </div>
            </div>


*/