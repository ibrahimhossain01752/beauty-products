import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) { return <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div> }
  if (user.email) {
      return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;

// const PrivateRoute = ({ children, ...rest }) => {
//     const {user, isLoading} = useAuth();
//     let location = useLocation();
//     if (isLoading) {return <div class="d-flex justify-content-center">
//     <div class="spinner-border" role="status">
//       <span class="visually-hidden">Loading...</span>
//     </div>
//   </div>}
//   if(user.email){
//       return children;
//   }
//   return  <Navigate to="/login" state={{ from: location }} replace />;
    
// };

// export default PrivateRoute;

/* 

<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>


*/