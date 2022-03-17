import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Blogs from './Pages/Blog/Blog/Blogs';
import Collections from './Pages/Collection/Collections';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Shared/Header/Header';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
