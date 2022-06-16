 import React, { useEffect, useState } from 'react';

import useFirebase from '../../../../hooks/useFirebase';

const ManageOrder = () => {
    const { user} = useFirebase();
   
    const [orders, setOrders] = useState([]);
    const [IsDelete, setIsDelete] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/dashboard/manageOrder`)
        .then(res=> res.json())
        .then(data=>{
         setOrders(data)
        })
    },[orders, IsDelete])

    const Approved = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/dashboard/manageOrder/Approved/${id}`, {
           method: 'PUT',
           headers: {'Content-Type': 'application/json'},
        })  
        .then(res=> res.json())
        .then(data => {
          if(data.modifiedCount){
             let newOrder = [];
             orders.forEach(order => {
                if(order.id === id){
                  order.status = 'Approved';
                }
                newOrder.push(order); 
             })
             setOrders(newOrder);
           alert('Approved')
          }
        })
 
    }

    const Delete = (id) => {
        console.log(id)
        const confirmDelete = "Are You Sure To this Orders!"
        if(window.confirm(confirmDelete)){
           fetch(`http://localhost:5000/dashboard/manageOrder/deleted/${id}`, {
               method: 'DELETE',
            }).then(res => res.json())
            .then(data=> {
               console.log(data)
               if(data.deletedCount){
                   setIsDelete(true);
               }
               alert('successfully Deleted')
            })
        } 
      }
     

    return (
        <div>
            <h1>All Orders {orders.length}</h1>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Product Id</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  {orders?.map((pd, index) => (
      <tbody>
      <tr>
        
        <td>{index}</td>
        <td><img src={pd?.img} alt="fsd" class="w-25 h-25"/></td>
        <td>{pd?.name}</td>
        <td>{pd?.email}</td>
        <td>{pd?.phone}</td>
        <td>{pd?.key}</td>
        <td>{pd?.status}</td>
        <button onClick={()=> Delete(pd?._id)} class="btn bg-danger">Delete</button>
        <button onClick={()=> Approved(pd?._id)} class="btn bg-success">Approved</button>
      </tr>
      
      
    </tbody>
  ) )}
  
</table>
        </div>
    );
};

export default ManageOrder; 

