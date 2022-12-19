import React from 'react';
// import Fade from 'react-reveal/Fade';
import './Banner.css';

const Banner = () => {
    return (
      <div class="carousel slide" data-bs-ride="carousel" id="carouselExampleCaptions">
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
             <h1 class="beauti-title para4"><span class="colec3">MODERN AND</span> <span class="colec-three">TRENDY PRODUCTS</span></h1>
             <h5 class="para5">flat 30% off on all items</h5>
          </div>
        </div>
      </div><button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleCaptions" type="button"><span aria-hidden="true" class="carousel-control-prev-icon"></span> <span class="visually-hidden">Previous</span></button> <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleCaptions" type="button"><span aria-hidden="true" class="carousel-control-next-icon"></span> <span class="visually-hidden">Next</span></button> 
      <div class="carousel-indicators">
        <button aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carouselExampleCaptions" type="button"><img class="img-fluid" src="https://cdn.shopify.com/s/files/1/0195/5145/3248/files/slider-1_2000x.jpg?v=1572581662"/></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleCaptions" type="button"><img class="img-fluid" src="https://cdn.shopify.com/s/files/1/0195/5145/3248/files/slider-2_bd13fd4a-b427-4949-8025-288b3a744835_2000x.jpg?v=1572581683"/></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleCaptions" type="button"><img class="img-fluid" src="https://cdn.shopify.com/s/files/1/0195/5145/3248/files/slider-3-1_2000x.jpg?v=1572863329"/></button>
      </div>
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