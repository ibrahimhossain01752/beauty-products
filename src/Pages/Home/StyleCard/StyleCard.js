import React from 'react';
import './StyleCard.css';

const StyleCard = () => {
    return (

        <div class="container ">
            <div class="row row-cols-1 row-cols-md-3 col-sm-12 g-4 mt-5  style" >
  <div class="col profile-card">
    <div class="card h-100 profile-img">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/files/img-1_96194762-8b36-421f-bf3d-4813c897a544.jpg?v=1572503767"  alt="..."/>
      
     
    </div>
  </div>
  <div class="col profile-card">
    <div class="card h-100 profile-img">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/files/img-3_08958dcf-88b8-416d-b3bb-7dbad420b8c6.jpg?v=1572503782"  alt="..."/>
     
    </div>
  </div>
  <div class="col profile-card">
    <div class="card h-100 profile-img">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/files/img-2_519ac93f-5f4d-49cb-b196-7035e2ee413f.jpg?v=1572503795"  alt="..."/>
     
    </div>
  </div>
</div>
        </div>
       
    );
};

export default StyleCard;


/* 

<div class="col-sm-6 col-md-3">
            <div class="profile-card">
                <div class="profile-img">
                    <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/files/img-1_96194762-8b36-421f-bf3d-4813c897a544.jpg?v=1572503767" alt="Team Image"/>
                </div>

*/