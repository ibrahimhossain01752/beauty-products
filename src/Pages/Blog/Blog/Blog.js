import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="container homecard">
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col-md-2">
<div class=" ">
  {/* <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/11_grande.jpg?v=1548071782" class="card-img-top" alt="..."/> */}
        <h5 class="articles">Recent Articles</h5>
        <div class="col-md-1">
            <img class="card-images" src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/11.jpg?v=1548071782" alt=""/>
            <div class="col-md-1">
            <h6 className="card-inform"><span class="span7">Nailingit withpink requires attitude!</span></h6>
            <p className="para10">Loremipsum dolorsit, adipiscin gelit, seddo withpink...</p>
            </div>
        </div>
   ----------------------
   <br/>
        <div class="col-md-1">
            <img class="card-images" src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/11.jpg?v=1548071782" alt=""/>
            <div class="col-md-1">
            <h6 className="card-inform"><span class="span7">Nailingit withpink requires attitude!</span></h6>
            <p className="para10">Loremipsum dolorsit, adipiscin gelit, seddo withpink...</p>
            </div>
        </div>
  {/* <div class="card-body1">
    <h5 class="card-title23 mb-5"><span className="nails">Nailing it with pink requires attitudes</span></h5>
    <p class="card-text5 text-start ml-2"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p>
  </div> */}
</div>
</div>
<div class="col-md-5">
<div class="card ">
  <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/11_grande.jpg?v=1548071782" class="card-img-top " alt="..."/>
   <div className="since1">
   <h6>13</h6>
    <hr className="horizontal"/>
    <h6>March 2022</h6>
   </div>
  <div class="header-section1">
    <h5 class="header2 mb-5"><span class="span6">Nailing it</span> with pink requires attitudes!</h5>
    <p class=" header-para1"> <span class="span1">Lorem ipsum dolor sit amet, consectetur</span> <span class="span2">adipiscing elit, sed do eiusmod tempor</span> <span class="span3">incididunt ut labore et dolore magna</span> <span  class="span4">aliqua. Ut enim ad minim </span>  </p>
    <button class="button1 mt-3 mb-3">Read More </button>
  </div>
</div>
</div>
<div class="col-md-5">
<div class="card ">
  <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/10.jpg?v=1548071708" class="card-img-top " alt="..."/>
   <div className="since1">
   <h6>13</h6>
    <hr className="horizontal"/>
    <h6>March 2022</h6>
   </div>
  <div class="header-section1">
    <h5 class="header2 mb-5"><span class="span6">Nailing it</span> with pink requires attitudes!</h5>
    <p class=" header-para1"> <span class="span1">Lorem ipsum dolor sit amet, consectetur</span> <span class="span2">adipiscing elit, sed do eiusmod tempor</span> <span class="span3">incididunt ut labore et dolore magna</span> <span  class="span4">aliqua. Ut enim ad minim </span>  </p>
    <button class="button1 mt-3 mb-3">Read More </button>
  </div>
</div>
</div>
{/* <div class="col-md-5">
<div class="card ">
  <img src="https://cdn.shopify.com/s/files/1/0195/5145/3248/articles/10_grande.jpg?v=1548071708" class="card-img-top" alt="..."/>
   <div className="since1">
   <h6>13</h6>
    <hr className="horizontal"/>
    <h6>March 2022</h6>
   </div>
  <div class="card-body1">
  <h5 class="card-title24 mb-5"><span className="nails">Maintaing your makeup brush cleaners</span></h5>
  <p class="card-text5 text-start ml-2 "> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  </p>
  </div>
</div>
</div> */}
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

export default Blog;