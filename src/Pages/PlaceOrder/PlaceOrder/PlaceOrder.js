import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import useFirebase from "../../../hooks/useFirebase";
import './PlaceOrder.css';
//import useFirebase from "../../../hooks/useFirebase";


const PlaceOrder = () => {
  const { user } = useFirebase();
  const [orders, setOrder] = useState([]);
  const {id} = useParams();
  const {register, handleSubmit, watch, formState: { errors },
  } = useForm();
   

 const navigate = useNavigate();
 
 useEffect(()=>{
  fetch(`https://beauty-products-server-production.up.railway.app/Collection/${id}`)
  .then((res) => res.json())
  .then((result) => {
    setOrder(result[0])
  });
},[id, orders])


  const onSubmit = (data) => {
    // data.email = user?.email;
    // data.status = 'pending'
    // data.img = orders.img;
    // data.key = orders.key;
    // data.price = orders.price;
    data.email = user?.email;
            
            data.status = 'pending';
             data.img = orders.img;
             data.key = orders.key;
             data.price = orders.price;
             data.dis = orders.dis;

    console.log(data)
    fetch("https://beauty-products-server-production.up.railway.app/placeorderInsert", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        if(result){
          alert('Oder Successful')
          navigate.push('/Collection')
        }
      });
  };

   

  return (
    <div className="container row">
       <div class="col-md-6 col-sm-12">
            <div class="card" >
             <img src={orders?.img} class="card-img-top" alt="..."/>
             <div class="card-body">
             <h2>{orders?.length}</h2>
             <h4>{orders?.name}</h4>
             <p class="card-text">{orders?.dis}</p>
             </div>
             </div>
             </div>
       <div className="col-md-6 col-sm-12">
       <div>
        <h1 className="mt-5 text-center text-cc"> Customer Infotmation </h1>
        <div className=" w-75 m-auto mt-5">
          <div className=" ">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
              {/* <input {...register("name")}   defaultValue={user?.displayName}   placeholder="Name" class="p-2 m-2 w-100 input-field"/> */}
              <input readOnly  defaultValue={user?.displayName}
                  {...register("name")} type="name"  placeholder="name" class="p-2 m-2 w-100 input-field"/>
                      <input readOnly  defaultValue={user?.email}
                  {...register("email")} type="email"  placeholder="Email" class="p-2 m-2 w-100 input-field"/>
                  <input
                  {...register("phone")}
                  placeholder="Phone Number"
                  className="p-2 m-2 w-100 input-field"
                />
                      
                        <input
                  {...register("city")}
                  placeholder="City"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("data", { required: true })}
                  placeholder="Date"
                  type="date"
                  className="p-2 m-2 w-100 input-field"
                />
                        <br/>
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" value="add" class="p-2 m-2 w-100 input-field"/>
              </form>
            </div>
          </div>
        </div>
      </div>
       </div>
    </div>
  );
};

export default PlaceOrder;





