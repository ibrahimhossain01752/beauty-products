import React from 'react';
import './HomeCard.css';

const HomeCard2 = () => {
    return (
        <div className="container homecard">
            <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card ">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/11_grande.jpg?v=1548071782" class="card-img-top" alt="..."/>
       <div className="since">
       <h6>13</h6>
        <hr className="horizontal"/>
        <h6>March 2022</h6>
       </div>
      <div class="card-body1">
        <h5 class="card-title mb-5">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card ">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/10_grande.jpg?v=1548071708" class="card-img-top" alt="..."/>
       <div className="since">
       <h6>13</h6>
        <hr className="horizontal"/>
        <h6>March 2022</h6>
       </div>
      <div class="card-body1">
        <h5 class="card-title mb-5">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  {/* <div class="col">
    <div class="card">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/10_grande.jpg?v=1548071708" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */}
 
 
</div>
        </div>
    );
};

export default HomeCard2;