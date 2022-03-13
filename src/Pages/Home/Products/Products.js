import React, { useEffect, useState } from 'react';
import "./Products.css";

const Products = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products2')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    const newServices = services.slice(0,8);

    return (
        <div class="container">
          <div class="row row-cols-1 row-cols-md-4 g-4 ">
            {newServices.map((pd,idx)=>(
                <div class="col">
                <div class="card h-100 ">
                 <div class="imgBx">
                 <img src={pd?.img} class="card-img-top " alt="..."/>
                 </div>
                  <div class="card-body contentBx ">
                    <h5 class="card-title">{pd?.title}</h5>
                    <p class="card-text">{pd?.price}</p>
                    
                  </div>
                  
                </div>
              </div>
            ))}
 
  
</div>
    </div>
    );
};

export default Products;