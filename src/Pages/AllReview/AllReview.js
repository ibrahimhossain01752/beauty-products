import React, { useEffect, useState } from 'react';
import './AllReview.css';

const AllReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allReview")
        .then(res => res.json())
        .then(data => setReviews(data))
    },[reviews]);
    return (
        <div class="mt-5">
             <h1 className="fs-1 text-three">Customers Reviews  </h1>
             <div>
                 {reviews.map((pd,idx) => (
                     
                    <div class="slider-aria">
                        <div class="container">
                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner review-slide mt-3">
    {/* <div class="carousel-item active" data-bs-interval="10000">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div> */}
    {/* <div class="carousel-item" data-bs-interval="2000">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div> */}
    <div class="carousel-item active">
      <img src={pd?.img} class="d-block images-review mt-3  image-area" alt="..."/>
      <div class="carousel-captioned d-none d-md-block">
        <h3 class="text-name mt-2">{pd?.name}</h3>
        <p class="comments">{pd?.Comments}</p>
        <i value={pd?.rating} class="fa fa-star rating-color mt-1 mb-3"></i>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev mb-5"  type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next mb-5" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    </div>
                    </div>
                    
                     
                     
                 ))}
             </div>
        </div>
    );
};

export default AllReview;