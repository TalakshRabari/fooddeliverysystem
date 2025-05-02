// import "./css/animate.min.css" 
// import  "./css/animation.css"
// import  "./css/bootstrap-select.min.css"
// import   "./css/bootstrap.css"
// import   "./css/style.css"
// import   "./css/swiper-bundle.min.css"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../store/firebaseconfig"
import PageTitleAdmin from "../components/PageTitleAdmin";
import { useState , useEffect } from "react";
import SidebarAdmin from "../components/SidebarAdmin";
import HeaderAdmin from "../components/HeaderAdmin";
import { Link, NavLink } from "react-router";
import FooterAdmin from "../components/FooterAdmin";


function ViewOrders(){

let [orders , setOrders] = useState([])

const options = [ 'Pending' , 'Processing','Delivered','Cancelled' ];

useEffect(()=>{
   getOrders()
},[])

  function getOrders(){
    let colRef =collection(db,"orders")
    try{
    onSnapshot(colRef,(snapshot)  =>{
        let result = []
        snapshot.docs.forEach((doc) =>{
            result.push({ id:doc.id, ...doc.data() })
        })
        console.log(result)
        setOrders(result)
    })
    }catch(error){
      console.log(error)
    }
  }


    return(
        <>
       
          <div className="layout-wrap">
                 {/* section-menu-left */}
                 <SidebarAdmin />
                 {/* /section-menu-left */}
                 {/* section-content-right */}
                 <div className="section-content-right">
                   {/* header-dashboard */}
                   <HeaderAdmin />
                   {/* /header-dashboard */}
                   {/* main-content */}
                   <div className="main-content">
                     {/* main-content-wrap */}
                     <div className="main-content-inner">
                       <div className="main-content-wrap">
                         <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                           <PageTitleAdmin title="Order List"/>
                           <ul className="breadcrumbs flex items-center flex-wrap justify-start gap20">
                             <li>
                               <NavLink to="/admin">
                                 <div className="text-tiny">Dashboard</div>
                               </NavLink>
                             </li>
                             <li>
                               <i className="icon-chevron-right" />
                             </li>
                             <li>
                               <NavLink to="/admin/viewcategory">
                                 <div className="text-tiny">Category</div>
                               </NavLink>
                             </li>
                             <li>
                               <i className="icon-chevron-right" />
                             </li>
                             <li>
                               <div className="text-tiny">All category</div>
                             </li>
                           </ul>
                         </div>
         
                         {/* all-category */}
                         <div className="wg-box">
                           <div className="flex items-center justify-between gap20 flex-wrap">
                             <div className="wg-filter flex-grow">
                               <form className="form-search">
                                 <fieldset className="name">
                                   <input
                                     type="text"
                                     placeholder="Search categories..."
                                    //  value={searchquery}
                                    //  onChange={handleSearchChange}
                                     className
                                     name="name"
                                     tabIndex={2}
                                     aria-required="true"
                                     required
                                   />
                                   {/* <ul>
                                     Display filtered categories
                                     {filteredCategories.length > 0 ? (
                                       filteredCategories.map((category) => (
                                         <li key={category.id}>{category.name}</li>
                                       ))
                                     ) : (
                                       <li>No Categories Found.</li>
                                     )}
                                   </ul> */}
                                 </fieldset>
                                 <div className="button-submit">
                                   <button className type="submit">
                                     <i className="icon-search" />
                                   </button>
                                 </div>
                               </form>
                             </div>
                             <NavLink className="tf-button style-1 w208" to="/admin/addcategory">
                               <i className="icon-plus" />
                               Add New
                             </NavLink>
                           </div>
         
                           {/* Display all categories in table */}
                           <div className="wg-table table-all-category">
                             <ul className="table-title flex gap20 mb-14">
                               <li>
                                 <div className="body-title">Order Id</div>
                               </li>
                               <li>
                                 <div className="body-title">Date</div>
                               </li>
                               <li>
                                 <div className="body-title">Customer</div>
                               </li>
                               <li>
                                 <div className="body-title">Total Price</div>
                               </li>
                               <li>
                                 <div className="body-title">Status</div>
                               </li>
                               <li>
                                 <div className="body-title">Action</div>
                               </li>
                             </ul>
                             <div className="divider" />
                             <ul className="flex flex-column" style={{paddingLeft: 0}}>
                             {
                                  orders &&  orders.map((order) => (
         
                                
                                   <li className="product-item gap14" key={order.id}>
                                    {/* <div  className="image no-bg">
                                      {product.imageUrl && (
                                        <img src={product.imageUrl}  alt={product.name} width={100} />
                                      )}  
                                    </div> */}
                                     <div className="flex items-center justify-between gap20 flex-grow">
                                       <div className="name" style={{position:"relative"}}>
                                                 <Link to="/customer/prpducts" className="body-title-2">{order.id}</Link>
                                       </div>
                                       <div className="name"style={{fontWeight:"bolder", fontSize:"medium"}}>{order.date  && new Date(order.date.seconds * 1000).toLocaleString()}</div>
                                       <div className="body-text">{order.fnm} {order.lnm}</div>
                                       <div className="body-text">₹{order.totalPrice}</div>
                                       <div className="body-text" style={{color:"green"}} >
                                        <select style={{color:"green"}}>
                                                {   options.map((option)=>(
                                                    <option style={{color:"green"}}>
                                                      {option}
                                                    </option>
                                                ))}
                                         </select>
                                                   
                                       </div>
                                       <div
                                         className="list-icon-function"
                                         style={{
                                           display: "flex",
                                           alignItems: "center",
                                           justifyContent: "start",
                                           gap: "20px",
                                         }}
                                       >
                                         <div className="item edit" style={{ color: "green" }}>
                                          <Link to={`/admin/updatecategory/${order.id}`}> <i className="icon-edit"></i></Link>
                                         </div>
                                         <div className="item trash" style={{ color: "orange" }}>
                                           <i className="icon-trash-2"></i>
                                         </div>
                                       </div>
                                     </div>
                                   </li>
                                 
                               ))
                           }
                             </ul>
                           </div>
                         </div>
                         {/* /all-category */}
                       </div>
                     </div>
                   </div>
                   <FooterAdmin />
                 </div>
               </div>

        </>
    )
}
export default ViewOrders 