import Navbar from "./components/Navbar/Navbar.jsx"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Cart from "./pages/Cart/Cart.jsx"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx"
import Footer from "./components/Footer/Footer.jsx";
import { useState } from "react"
import LoginPopup from "./components/LoginPopup/LoginPopup.jsx"
import MyOrder from "./pages/MyOrders/MyOrder.jsx"
import Verify from "./pages/Verify/Verify.jsx"
const App=()=>{
  const[showLogin,setshowLogin]=useState(false);
  return(
    <>
    {showLogin?<LoginPopup setShowLogin={setshowLogin}/>:<></>}
    <div className="app">
    <Navbar setshowLogin={setshowLogin}/>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path='/cart'element={<Cart/>}/>
      <Route path="/order" element={<PlaceOrder/>}/>
      <Route path="/verify" element={<Verify/>}/>
      <Route path="/myorders" element={<MyOrder/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;