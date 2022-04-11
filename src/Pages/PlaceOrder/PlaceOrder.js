import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';

const PlaceOrder = () => {
    const {user} = useFirebase();
    const {orders, setOrder} = useState([]);
    const {id} = useParams();
    const {register, hadleSubmit, watch, fromState: {error},} = useForm();

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/products2/${id}`)
        .then((res) => res.json())
        .then((result) => {setOrder(result[0])});
    },[id, orders])

    const onSubmit = (data) => {
        data.email = user?.email;
        data.status = 'pending';
        data.img = orders.img;
        data.key = orders.key;
        data.price = orders.price;

        console.log(data);
        
    }

    return (
        <div class="container row">
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

        <div class="col-md-6 col-sm-12">
            <div>
                <h1>User Imformation</h1>
                <div>
                    <from>
                        <input readOnly type="text"   placeholder="Name" class="p-2 m-2 w-100 input-field"/>
                        <input readOnly type="email"  placeholder="Email" class="p-2 m-2 w-100 input-field"/>
                        <input readOnly type="phone number"  placeholder="Phone Number" class="p-2 m-2 w-100 input-field"/>
                        <input readOnly type="city"  placeholder="City" class="p-2 m-2 w-100 input-field"/>
                        <input readOnly type="date" placeholder="Date" class="p-2 m-2 w-100 input-field"/>
                        <input type="submit" value="add" class="p-2 m-2 w-100 input-field"/>
                    </from>
                </div>
            </div>

        </div>
        </div>
    );
};

export default PlaceOrder;