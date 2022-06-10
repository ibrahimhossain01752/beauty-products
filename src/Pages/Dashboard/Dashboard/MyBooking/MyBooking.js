import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import './MyBooking.css';
// import useFirebase from '../../../../hooks/useFirebase';
// import useFirebase from '../../hooks/useFirebase';

const MyBooking = () => {
    // const {user} = useFirebase;
    const { user} = useAuth();
    console.log(user)
    const [orders, setOrders] = useState([]);
    const [IsDelete, setIsDelete] = useState(true);

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

        
        <div className="container banner-overlayy ">
           <div class="orders2 mx-auto ">
           
           <h2 class="table1">All Orders{orders.length}</h2>
          
          
           </div>
            <table class="table table-dark table-hover">
  <thead class="table-one">
  
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  {orders?.map((pd, index) => (
      <tbody>
      <tr>
        
        <td>{index}</td>
        <td><img src={pd?.img} alt="fsd" class="w-25 h-25"/></td>
        <td>{pd?.displayName}</td>
        <td>{pd?.phone}</td>
        <td>{pd?.email}</td>
        <td class="status">{pd?.status}</td>
        <button onClick={()=> Delete(pd?._id)} class="btn bg-danger delete-card">Delete</button>
        <td>{pd?.key}</td>
        
      </tr>
      
      
    </tbody>
  ) )}
  
</table>
        </div>
    );
};

export default MyBooking;