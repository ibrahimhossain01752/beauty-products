import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import {BrowserRouter, Routes, Route, Link , useMatch} from 'react-router-dom';
// import useFirebase from '../../../hooks/useFirebase';
import MyBooking from './MyBooking/MyBooking';
import useFirebase from '../../../hooks/useFirebase';

const Dashboard = () => {
     let { path, url } = useMatch;
    //  const {user} = useFirebase();
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
        <div class="dashboard-container  mt-5">
           <div class="row ">
              <div class="col-md-3">
                  <div class="dashboard ">
                        <h5>Online Store</h5>
                       
                       {!isAdmin && 
                       
                       <div>
                       <Link class="abul" to={`${url}`}>
                        <li  class="dashboard-menu mt-5 dec-1"><i class="bi bi-speedometer das"></i>Dashboard</li>
                        </Link>
                        <Link class="abul" to={`${url}/myBooking`}>
                        <li class="dashboard-menu mt-5 text-decoration-none book"><i class="bi bi-bag-fill das"></i>My-Booking</li>
                        </Link>
                        <Link class="abul" to="">
                        <li class="dashboard-menu mt-5 text-decoration-none pay"><i class="bi bi-credit-card-2-front-fill das-1"></i>Payments</li>
                        </Link>
                        <Link class="abul lotif" to="">
                        <li class="dashboard-menu mt-5 text-decoration-none review"><i class="bi bi-award-fill das-2"></i>Review</li>
                        </Link>
                       </div>
                       }

{ isAdmin &&
                <div className="admin-dashboard pt-5">
                     <Link className="p-3" to={`${url}/manageOrder`}>
                       <li className="dashboard-menu mt-5 text-decoration-none">Manage Order</li>
                     </Link>
                     <Link className="p-3" to={`${url}/addService`}>
                       <li className="dashboard-menu">Add Service</li>
                     </Link>
                
                   <Link className="p-3" to={`${url}/makeAdmin`}>
                     <li className="dashboard-menu text-decoration-none">Make Admin</li>
                   </Link>
                   <Link className="p-3" to={`${url}/manageServices`}>
                     <li className="dashboard-menu text-decoration-none">Manage Service</li>
                   </Link>
                 </div>
               }
                      
                  </div>
                  <div class="col-md-9">
                    <BrowserRouter>
                       <Routes>
                       <Route path={path} element={<MyBooking />} />
                       </Routes>
                    </BrowserRouter>
                  </div>
               </div> 
            </div> 
        </div>

    //  <div>
    //     <div class="dashboard-container mt-5">
    //         <div class="row">
    //             <div>

    //             </div>
    //         </div>
    //     </div>
    //  </div>
    );
};

export default Dashboard;