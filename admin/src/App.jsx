import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { Navigate, Route, Routes } from 'react-router'
import {AdminDashboard,AddCategory,UpdateCategory,UpdateProduct,AddProduct,ViewCategory, ViewProduct, ViewOrders, AdminLogin}from './pages'
import { useAdminStore } from './store/admin'
// import AddCategory from './pages/AddCategory'
// import UpdateCategory from './pages/UpdateCategory'
// import UpdateProduct from './pages/UpdateProduct'
// import AddProduct from './pages/AddProduct'
// import ViewCategory from './pages/ViewCategory'
// import ViewProduct from './pages/ViewProduct'
// import ViewOrders from './pages/ViewOrders'
// import AdminLogin from './pages/AdminLogin'

function App() {

   let isadmin = useAdminStore((store) =>  store.isadmin)
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<AdminLogin/>}/>
        <Route path="/admin" element={!isadmin && <Navigate to="/"/>} >
          <Route path="/admin/admindashboard" element={<AdminDashboard />} />
          <Route path="/admin/addcategory" element={<AddCategory />} />
          <Route path="/admin/updatecategory/:id" element={<UpdateCategory />} />
          <Route path="/admin/updateproduct/:id" element={<UpdateProduct />} />
          <Route path="/admin/addproduct" element={<AddProduct />} />
          <Route path="/admin/viewcategory" element={<ViewCategory />} />
          <Route path="/admin/viewproduct" element={<ViewProduct />} />
          <Route path="/admin/vieworders" element={<ViewOrders />} />
        </Route>
      </Routes>


    </>
  )
}

export default App
