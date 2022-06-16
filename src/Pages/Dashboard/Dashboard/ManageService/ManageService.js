/* import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
/

const ManageService = () => {
    const { user} = useAuth();
    const [orders, setOrders] = useState([]);
    const [IsDelete, setIsDelete] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/dashboard/manageServices`)
        .then(res=> res.json())
        .then(data=>{
         setOrders(data)
        })
    },[orders, IsDelete])
   
   
   
   
     const Delete = (id) => {
       console.log(id)
       const confirmDelete = "Are You Sure To Delete this Orders??"
       if(window.confirm(confirmDelete)){
          fetch(`http://localhost:5000/dashboard/manageServices/deleted/${id}`, {
              method: 'DELETE',
           }).then(res => res.json())
           .then(data=> {
              console.log(data)
              if(data.deletedCount){
                  setIsDelete(true);
                  alert('successfully Deleted')
              }
           })
       } 
     }
    return (
        <div>
             <h1>Manage Services {orders.length}</h1>
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
        <td class="text-dark">{pd?.title}</td>
        <td>{pd?.email}</td>
        <td>{pd?.phone}</td>
        <td>{pd?.productid}</td>
        <td>{pd?.status}</td>
        <button onClick={()=> Delete(pd?._id)} class="btn bg-danger">Delete</button>
       
      </tr>
      
      
    </tbody>
  ) )}
  
</table>
        </div>
    );
};

export default ManageService; */

import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
// import './MyBooking.css';
// import useFirebase from '../../../../hooks/useFirebase';
// import useFirebase from '../../hooks/useFirebase';

const ManageService = () => {
    // const {user} = useFirebase;
    const { user} = useAuth();
    console.log(user)
    const [orders, setOrders] = useState([]);
    const [IsDelete, setIsDelete] = useState(true);

    useEffect(()=>{
        fetch(`http://localhost:5000/dashboard/manageServices`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setOrders(data)
        })
    },[user?.email, IsDelete]);

    const Delete = (id) => {
        console.log(id);
        const confirmDelete ="Are you to this order!"
        if(window.confirm(confirmDelete)){
            fetch(`http://localhost:5000/dashboard/manageServices/deleted/${id}`,{
                method: "DELETE",
            }).then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){
                    setIsDelete(true);
                }
                alert("Successfully Deleted")
            })
        }
    }
    return (

        
        <div className="container banner-overlayy ">
           <div class="orders2 mx-auto ">
           
           <h2 class="table1 w-100">ManageService{orders.length}</h2>
          
          
           </div>
            <table class="table table-dark table-hover">
  <thead class="table-one">
  
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Product Id</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  {orders?.map((pd, index) => (
      <tbody>
      <tr>
        
        <td>{index}</td>
        <td><img src={pd?.img} alt="fsd" class="w-25 h-25"/></td>
        <td>{pd?.title}</td>
        <td>{pd?.phone}</td>
        <td>{pd?.email}</td>
        <td>{pd?._id}</td>
        <button onClick={()=> Delete(pd?._id)} class="btn bg-danger delete-card">Delete</button>
        <td class="status">{pd?.status}</td>
        
        
      </tr>
      
      
    </tbody>
  ) )}
  
</table>
        </div>
    );
};

export default ManageService;