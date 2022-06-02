/* import React from 'react';
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
  
 
 
</div>
        </div>
      
    );
};

export default HomeCard2; */








import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './HomeCard.css';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div class="container g-4">
        <div class="latest">
        <h2 class="section-header mt-5"> Latest Post </h2>
        </div>
        <Slider {...settings}>
        
          <div class="" >
         
          <div class="col mt-3">
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
          </div>
          <div>
          <div class="col mt-3">
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
          </div>
          <div>
          <div class="col mt-3">
    <div class="card ">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/9_grande.jpg?v=1548071678" class="card-img-top" alt="..."/>
       <div className="since">
       <h6>15</h6>
        <hr className="horizontal"/>
        <h6>April 2022</h6>
       </div>
      <div class="card-body1">
      <h5 class="card-title24 mb-5"><span className="nails">Maintaing your makeup brush cleaners</span></h5>
      <p class="card-text5 text-start ml-2 "> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p>
      </div>
    </div>
  </div>
          </div>
          <div>
          <div class="col mt-3">
    <div class="card ">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/8_grande.jpg?v=1548071611" class="card-img-top" alt="..."/>
       <div className="since">
       <h6>16</h6>
        <hr className="horizontal"/>
        <h6>April 2022</h6>
       </div>
      <div class="card-body1">
      <h5 class="card-title24 mb-5"><span className="nails">Maintaing your makeup brush cleaners</span></h5>
      <p class="card-text5 text-start ml-2 "> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p>
      </div>
    </div>
  </div>
          </div>
          <div>
          <div class="col mt-3">
    <div class="card ">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/7_grande.jpg?v=1548071522" class="card-img-top" alt="..."/>
       <div className="since">
       <h6>17</h6>
        <hr className="horizontal"/>
        <h6>April 2022</h6>
       </div>
      <div class="card-body1">
      <h5 class="card-title24 mb-5"><span className="nails">Maintaing your makeup brush cleaners</span></h5>
      <p class="card-text5 text-start ml-2 "> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p>
      </div>
    </div>
  </div>
          </div>
          <div>
          <div class="col mt-3">
    <div class="card ">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/6_grande.jpg?v=1548071488" class="card-img-top" alt="..."/>
       <div className="since">
       <h6>18</h6>
        <hr className="horizontal"/>
        <h6>April 2022</h6>
       </div>
      <div class="card-body1">
      <h5 class="card-title24 mb-5"><span className="nails">Maintaing your makeup brush cleaners</span></h5>
      <p class="card-text5 text-start ml-2 "> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p>
      </div>
    </div>
  </div>
          </div>
          <div>
          <div class="col mt-3">
    <div class="card ">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/5_grande.jpg?v=1548071245" class="card-img-top" alt="..."/>
       <div className="since">
       <h6>19</h6>
        <hr className="horizontal"/>
        <h6>April 2022</h6>
       </div>
      <div class="card-body1">
      <h5 class="card-title24 mb-5"><span className="nails">Maintaing your makeup brush cleaners</span></h5>
      <p class="card-text5 text-start ml-2 "> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p>
      </div>
    </div>
  </div>
          </div>
          <div>
          <div class="col mt-3">
    <div class="card ">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/4_grande.jpg?v=1548070916" class="card-img-top" alt="..."/>
       <div className="since">
       <h6>20</h6>
        <hr className="horizontal"/>
        <h6>April 2022</h6>
       </div>
      <div class="card-body1">
      <h5 class="card-title24 mb-5"><span className="nails">Maintaing your makeup brush cleaners</span></h5>
      <p class="card-text5 text-start ml-2 "> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p>
      </div>
    </div>
  </div>
          </div>
          <div>
          <div class="col mt-3">
    <div class="card ">
      <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/3_grande.jpg?v=1548070798" class="card-img-top" alt="..."/>
       <div className="since">
       <h6>1</h6>
        <hr className="horizontal"/>
        <h6>May 2022</h6>
       </div>
      <div class="card-body1">
      <h5 class="card-title24 mb-5"><span className="nails">Maintaing your makeup brush cleaners</span></h5>
      <p class="card-text5 text-start ml-2 "> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p>
      </div>
    </div>
  </div>
          </div>
        </Slider>
      </div>
    );
  }
}