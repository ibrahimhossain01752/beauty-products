import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';

const MyBooking = () => {
    const {user} = useFirebase();
    const [orders, setOrders] = useState([]);
    const [IsDelete, setIsDelete] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/dashboard/myBooking?email=${user?.email}`)
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
            fetch(`http://localhost:5000/dashboard/myBooking/deleted/${id}`,{
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
      </tr>
      
      
    </tbody>
  ) )}
  
</table>
        </div>
    );
};

export default MyBooking;