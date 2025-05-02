import { useState } from 'react'
import { Navigate, Route , Routes } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Home,Contact,Checkout,Menu,Dashboard,Login,Register,About,ProductDetails,Settings,Shop,Products,ViewOrderHistory,Invoice} from './pages'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import useUserStore from './store/customer';
// import Login from './pages/customer/Login'
// import Register from './pages/customer/Register'
// import Contact from './pages/customer/Contact'


// import Checkout from './pages/Checkout'
// import ViewProduct from './pages/customer/ViewProduct'
// import Menu from './pages/customer/Menu'




// import Dashboard from './pages/customer/Dashboard'


// import Login from './pages/Login';
// import Register from './pages/Register';

// import About from './pages/customer/About'
// import Product from './pages/customer/Product'
// import ProductDetails from './pages/ProductDetails'


// import Settings from './pages/Settings'
// import Shop from './pages/customer/Shop';
// import Products from './pages/Products';


// import ViewOrderHistory from './pages/ViewOrderHistory';
// import Invoice from './pages/Invoice';



function App() {
  
  const [user , setUser] = useState(null);
  let isuser = useUserStore((store) => store.isuser)
  // useEffect(() =>{
  //   const auth = getAuth();

  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
  //     if(currentUser){
  //       setUser(currentUser);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  //   return () => unsubscribe();
  //     },[]);

  return (
    <>
     
      <ToastContainer />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/productdetail/:id" element={<ProductDetails />} />
        <Route path="/product" element={<Products/>} />
        <Route path="/Setting" element={<Settings />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/customer" element={!isuser && <Navigate to="/login"/>}>
           <Route path="/customer/dashboard" element={<Dashboard/>}/>
          <Route path="/customer/invoice" element={<Invoice />} />
          <Route path="/customer/vieworderhistory" element={<ViewOrderHistory />} />    
        </Route>
      </Routes>

    </>
  )
}

export default App
