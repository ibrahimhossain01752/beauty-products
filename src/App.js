import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Footer from './Footer/Footer';
import Blogs from './Pages/Blog/Blog/Blogs';
import Collections from './Pages/Collection/Collections';
import AddService from './Pages/Dashboard/Dashboard/AddService/AddService';
import AdminRoute from './Pages/Dashboard/Dashboard/AdminRoute/AdminRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/Dashboard/MakeAdmin/MakeAdmin';
import ManageOrder from './Pages/Dashboard/Dashboard/ManageOrder/ManageOrder';
import ManageService from './Pages/Dashboard/Dashboard/ManageService/ManageService';
import MyBooking from './Pages/Dashboard/Dashboard/MyBooking/MyBooking';
import Payments from './Pages/Dashboard/Dashboard/Payments/Payments';
import Review from './Pages/Dashboard/Dashboard/Review/Review';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder/PlaceOrder';





function App() {
  return (
    <div className="App">
      
     <AuthProvider>
     <BrowserRouter>
       <Header></Header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collections />} />
        <Route path="/Collection/:id" element={<PrivateRoute><PlaceOrder /></PrivateRoute>} />
        <Route path="/placeorder" element={<PrivateRoute><PlaceOrder /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} >
                      <Route path={`myBooking`} element={<MyBooking />} />
                       <Route path={`/dashboard/review`} element={<Review />} />
                       <Route path={`/dashboard/myBooking`} element={<MyBooking />} />
                       <Route path={`payments`} element={<Payments />} />
                       <Route path={`/dashboard/manageOrder`} element={<AdminRoute><ManageOrder /></AdminRoute>} ></Route>
                       <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>} ></Route>
                       <Route path={`/dashboard/addService`} element={<AdminRoute><AddService /></AdminRoute>} ></Route>
                       <Route path={`/dashboard/manageService`} element={<AdminRoute><ManageService /></AdminRoute>} ></Route>
                      
                       
                       
                     
          </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
     </AuthProvider>
    
    </div>
  );
}

export default App;
