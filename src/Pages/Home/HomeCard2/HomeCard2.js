import React from 'react';
import './HomeCard.css';

const HomeCard2 = () => {
    return (
        <div className="container homecard mt-5">
          <div class="section-header section-header--small">
        <div class="border-title">
                      
          
          <h2 class="section-header__title mb-4" >    
            Latest Post
          </h2>
            
            
          
        </div>
      </div> 

      {/* <div class="blog-section">
        <div class="nav_blog_sec disabled">
          <div class="owl-prev">
            <a class="prev btn"><i class="bi bi-caret-left-fill"></i></a>
          </div>
          <div class="owl-next">
            <a class="next btn"><i class="bi bi-caret-right-fill"></i></a> 
          </div>
          <div class="home-blog blog-section  owl-carousel owl-theme owl-loaded owl-drag" id="artical_carousel"> 
          </div>
        </div>
        </div>  */} 
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
        <h5 class="card-title23 mb-5"><span className="nails">Nailing it with pink requires attitudes</span></h5>
        <p class="card-text5 text-start ml-2"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p>
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
      <h5 class="card-title24 mb-5"><span className="nails">Maintaing your makeup brush cleaners</span></h5>
      <p class="card-text5 text-start ml-2 "> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p>
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