import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
//import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Footer from './Footer/Footer';
import Blogs from './Pages/Blog/Blog/Blogs';
import Collections from './Pages/Collection/Collections';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';



function App() {
  return (
    <div className="App">
      
     <AuthProvider>
     <BrowserRouter>
       <Header></Header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
     </AuthProvider>
    
    </div>
  );
}

export default App;
