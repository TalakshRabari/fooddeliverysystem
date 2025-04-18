// import "./css/vendor/bootstrap.min.css"
// import "./css/vendor/classic.css"
// import "./css/vendor/classic.date.css"
// import "./css/vendor/font-awesome.css"
// import "./css/vendor/slick-theme.css"
// import "./css/vendor/slick.css"
import { useState, useEffect } from "react"
import { collection, getDocs, orderBy, query, where} from "firebase/firestore"
import { auth, db } from "../store/firebaseconfig"
// import { onSnapshot } from "firebase/firestore"
// import Header from "../component/Header"
import PageTitle from "../component/PageTitle"
import Footer from "../component/Footer"
import useUserStore from "../store/customer"
import HeaderUsedashboard from "../component/HeaderUserdashboard"


function ViewOrderHistory(){
    let [orders , setOrders] = useState([])

     let user = useUserStore((store)=>store.user)
   useEffect(()=>{
      getOrders()
   },[])
   
   async  function getOrders(){
       let colRef =collection(db,"orders")
       console.log(colRef)
       let q = query(colRef,where("uid" , "==" ,user.uid),orderBy("date" , "desc"))
    //    try{
    //    onSnapshot(colRef,(snapshot)  =>{
    //        let result = []
    //       
    //        console.log(result)
    //        setOrders(result)
    //    })
    //    }catch(error){
    //      console.log(error)
    //    }
    let result = []
    let snapshot = await getDocs(q)
    snapshot.docs.forEach((doc) =>{
               result.push({ id:doc.id, ...doc.data() })
                })
                setOrders(result)
     }


      return(
        <>
        <div id="scroll-container">
            <HeaderUsedashboard/>
            <PageTitle title="View Order History"/>

             <section>
                 <div  className="container-fluid">
                        <div  className="row row-gap-4">
                                
                                 <div className="col-xxl-12 col-xl-">
                                      <div className="chekout-sidebar">

                                           <table className="table">
                                                     <thead>
                                                         <tr>
                                                            <th scope="col">Order ID</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Ship To</th>
                                                            <th scope="col">Total Price</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Track Order</th>
                                                         </tr>
                                                     </thead>
                                                     <tbody>
                                                        {
                                                            orders && orders.map((order)=>(
                                                                       <tr>
                                                                        <th scope="row">{order.id}</th>
                                                                        <td>{order.date && new Date(order.date.seconds * 1000).toLocaleString()}</td>
                                                                        <td>{order.fnm} {order.lnm}</td>
                                                                        <td>{order.totalPrice}</td>
                                                                        <td>{order.status}</td>
                                                                        <td> <button type="button" className="border-0 cus-btn">Track Order</button></td>
                                                                       </tr>
                                        
                                                            ))
                                                        }
                                                     </tbody>
                                           </table>
 
                                      </div>
                                 </div>

                        </div>
                 </div>


             </section>


                      <Footer/>

        </div>
         
        </>
      )
}
export default ViewOrderHistory