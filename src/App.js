import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Footer from './Footer/Footer';
import Blogs from './Pages/Blog/Blog/Blogs';
import Collections from './Pages/Collection/Collections';
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
        {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
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
