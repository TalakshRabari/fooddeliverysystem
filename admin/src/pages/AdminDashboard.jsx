// import { NavLink } from "react-router"
// import "./css/animate.min.css" 
// import  "./css/animation.css"
// import  "./css/bootstrap-select.min.css"
// import   "./css/bootstrap.css"
// import   "./css/style.css"
// import   "./css/swiper-bundle.min.css"
import { useEffect } from "react"
import { useState } from "react"
import FooterAdmin from "../components/FooterAdmin"
import HeaderAdmin from "../components/HeaderAdmin"
import SidebarAdmin from "../components/SidebarAdmin"
import{db} from "../store/firebaseconfig"
import { collection , getDocs } from "firebase/firestore"

function AdminDashboard() {

           let [categories ,setCategories] = useState(0)
           let [products ,setProducts] = useState(0)
           
           useEffect( ()=>{
            getCategories();
            getProducts()
           },[])

           async function getCategories(){
            let colref = collection(db ,"categories")
            let snapshot = await getDocs(colref)
            setCategories(snapshot.docs.length)
           }

           async function getProducts(){
            let colRef = collection( db , "products")
            let snapShot = await getDocs(colRef)
            setProducts(snapShot.docs.length)
           }

    return (
        <>
            <div id="wrapper">
                {/* #page */}
                <div id="page" className>
                    {/* layout-wrap */}
                    <div className="layout-wrap">
                        {/* section-menu-left */}
                        <SidebarAdmin/>
                        {/* /section-menu-left */}
                        {/* section-content-right */}
                        <div className="section-content-right">
                            {/* header-dashboard */}
                            <HeaderAdmin/>
                            {/* /header-dashboard */}
                            {/* main-content */}
                            <div className="main-content">
                                {/* main-content-wrap */}
                                <div className="main-content-inner">
                                    {/* main-content-wrap */}
                                    <div className="main-content-wrap">
                                        <div className="tf-section-4 mb-30">
                                            {/* chart-default */}
                                            <div className="wg-chart-default">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap14">
                                                        {/* <div className="image">
                                                            
                                                        <i class="fa-solid fa-layer-group"></i>
                                                        </div> */}
                                                        <div style={{width:"240px", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"1.5rem"}}>
                                                            <div className="body-text mb-2" style={{ fontWeight:"600px",fontSize:"large"}}>Total Categories</div>
                                                            <div><p style={{ fontWeight:"600px",fontSize:"large"}}>{categories}</p></div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                            {/* /chart-default */}
                                            {/* chart-default */}
                                            <div className="wg-chart-default">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap14">
                                                        {/* <div className="image">
                                                         
                                                        <i class="fa-solid fa-box-open"></i>
                                                        </div> */}
                                                        <div style={{width:"240px", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"1.5rem"}}>
                                                            <div className="body-text mb-2" style={{ fontWeight:"600px",fontSize:"large"}}>Total Products</div>
                                                            <div><p style={{ fontWeight:"600px",fontSize:"large"}}>{products}</p></div>
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                               
                                            </div>
                                            {/* /chart-default */}
                                            {/* chart-default */}
                                            <div className="wg-chart-default">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap14">
                                                        {/* <div className="image">
                                                          
                                                        <i class="fa-solid fa-rectangle-list"></i>
                                                        </div> */}
                                                        <div style={{width:"240px", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"1.5rem"}}>
                                                            <div className="body-text mb-2" style={{ fontWeight:"600px",fontSize:"large"}}>Total Order</div>
                                                           <div><p style={{ fontWeight:"600px",fontSize:"large"}}>6</p></div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                            {/* /chart-default */}
                                            {/* chart-default */}
                                            <div className="wg-chart-default">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap14">
                                                        {/* <div className="image">
                                                            
                                                        <i class="fa-solid fa-money-bill"></i>
                                                        </div> */}
                                                        <div style={{width:"240px", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"1.5rem"}}>
                                                            <div className="body-text mb-2" style={{ fontWeight:"600px",fontSize:"large"}}>Total Sales</div>
                                                            <div><p style={{ fontWeight:"600px",fontSize:"large"}}>5</p></div>
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                               
                                            </div>
                                            {/* /chart-default */}
                                        </div>
                                    </div>
                                    {/* /main-content-wrap */}
                                </div>
                                {/* /main-content-wrap */}
                                {/* bottom-page */}
                                <FooterAdmin/>
                                {/* /bottom-page */}
                            </div>
                            {/* /main-content */}
                        </div>
                        {/* /section-content-right */}
                    </div>
                    {/* /layout-wrap */}
                </div>
                {/* /#page */}
            </div>

        </>
    )
}
export default AdminDashboard