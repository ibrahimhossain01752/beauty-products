import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Products.css";

const Products = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/Collection')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    const newServices = services.slice(0,8);

    return (
         <div class="container">
          <div class="row row-cols-1 row-cols-md-4 g-4 " data-aos="fade-up"
     data-aos-duration="3000">
            {newServices.map((pd,idx)=>(
                <div class="col">
                <div class="card card-onn h-100 ">
                 <div class="imgBx images55 card-onn">
                 <img src={pd?.img} class="card-img-top " alt="..."/>
                 </div>
                  <div class="card-body contentBx ">
                    <h5 class="card-title">{pd?.title}</h5>
                    <p class="card-text">{pd?.price}</p>
                   <Link to={`/Collection/${pd._id}`}>{" "}
                   <button class="btn23">Shop Now</button>
                   </Link>
                  </div>
                  
                </div>
              </div>
            ))}
 
  
</div>
    </div> 
 


        

    );
};

export default Products;











// ==========================================

/* 

<div class="container productsCard">
            {newServices.map((pd,idx)=> (
              <div class="card">
              <div class="imgBx">
              <img src={pd?.img} class="card-img-top images-thee" alt="..."/>
              </div>
              <div class="contentBx">
              <h5 class="card-title">{pd?.title}</h5>
                <div class="size">
                  <h3>Size :</h3>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>
                <div class="color">
                  <h3>Color :</h3>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <Link to={`/Collection/${pd._id}`}>{" "}
                   <button class="btn23">Shop Now</button>
                   </Link>
              </div>
            </div>
            ))}
        </div>



*/