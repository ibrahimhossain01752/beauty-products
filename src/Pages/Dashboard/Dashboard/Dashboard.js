import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    // let { path, url } = useRouteMatch;
    return (
        <div class="dashboard-container  mt-5">
           <div class="row ">
              <div class="col-md-3">
                  <div class="dashboard ">
                        <h5>Online Store</h5>
                        <Link class="abul" to="">
                        <li  class="dashboard-menu mt-5 dec-1"><i class="bi bi-speedometer das"></i>Dashboard</li>
                        </Link>
                        <Link class="abul" to="{`/myBooking`}">
                        <li class="dashboard-menu mt-5 text-decoration-none book"><i class="bi bi-bag-fill das"></i>My-Booking</li>
                        </Link>
                        <Link class="abul" to="">
                        <li class="dashboard-menu mt-5 text-decoration-none pay"><i class="bi bi-credit-card-2-front-fill das-1"></i>Payments</li>
                        </Link>
                        <Link class="abul lotif" to="">
                        <li class="dashboard-menu mt-5 text-decoration-none review"><i class="bi bi-award-fill das-2"></i>Review</li>
                        </Link>
                  </div>
                  <div class="col-md-9">

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