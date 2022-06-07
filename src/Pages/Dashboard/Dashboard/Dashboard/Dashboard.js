 import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import {  Link, Outlet } from 'react-router-dom';
import useFirebase from '../../../../hooks/useFirebase';
import useAuth from '../../../../hooks/useAuth';


const Dashboard = () => {
    
    const { admin } = useAuth();
    const { user} = useFirebase();
     const [isAdmin,setIsAdmin] = useState(false);
    

    useEffect(()=> {
        fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data[0]?.role === "admin"){
                setIsAdmin(true);

            }
            else{
                setIsAdmin(false);
            }
        });
    },[user?.email]);

    console.log(isAdmin);

    return (
        <div class="main-dashboard">
           <div class="dash-container navigation">
              {/* <div class=""> */}
                  {/* <div class="dashboard "> */}
                        <h5>Online Store</h5>
                       
                       <div class="mt-5 ">
                       
                        <Link class="abul" to="/dashboard">
                        <li  class="dashboard-menu mt-5 dec-1"><i class="bi bi-speedometer das"></i>Dashboard</li>
                        </Link>
                        <Link class="abul" to="/dashboard/myBooking">
                        <li class="dashboard-menu mt-5 text-decoration-none book"><i class="bi bi-bag-fill das"></i>My-Booking</li>
                        </Link>
                        <Link class="abul" to="/dashboard/payments">
                        <li class="dashboard-menu mt-5 text-decoration-none pay"><i class="bi bi-credit-card-2-front-fill das-1"></i>Payments</li>
                        </Link>
                        <Link class="abul lotif mb-5 " to="/dashboard/review">
                        <li class="dashboard-menu mt-5 text-decoration-none review"><i class="bi bi-award-fill das-2 g-2"></i>Review</li>
                        </Link>
                        
                       </div>
                       

{ admin &&
                <div class="admin-dashboard pt-5">
                     <Link class="p-3" to={`/dashboard/manageOrder`}>
                       <li class="dashboard-menu mt-5 text-decoration-none">Manage Order</li>
                     </Link>
                     <Link class="p-3" to={`/dashboard/addService`}>
                       <li class="dashboard-menu">Add Service</li>
                     </Link>
                
                   <Link class="p-3" to={`/dashboard/makeAdmin`}>
                     <li class="dashboard-menu text-decoration-none">Make Admin</li>
                   </Link>
                   <Link class="p-3" to={`/dashboard/manageServices`}>
                     <li class="dashboard-menu text-decoration-none">Manage Service</li>
                   </Link>
                 </div>
               }
                      
                  {/* </div> */}
                  <div class=" container outlet1">
                   
                     <Outlet></Outlet>
                    
                  </div>
               {/* </div>  */}
            </div> 
        </div>

  
    );
};

export default Dashboard; 

