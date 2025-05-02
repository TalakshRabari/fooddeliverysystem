
// import "./css/animate.min.css" 
// import  "./css/animation.css"
// import  "./css/bootstrap-select.min.css"
// import   "./css/bootstrap.css"
// import   "./css/style.css"
// import   "./css/swiper-bundle.min.css"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useState } from "react"
import { Link, NavLink, replace, useNavigate } from "react-router"
import { db } from "../store/firebaseconfig"
import {useAdminStore} from "../store/admin"
// import {success , error} from "react-toastify"

function AdminLogin() {

 let [uname , setUname] = useState("")
 let [pwd , setPwd] = useState("")

 let login = useAdminStore((store) => store.login)


 let navigate= useNavigate()

  
async  function adminlogin(){
     let q = query(collection(db,"admins"),where("unm","==",uname),where("pwd","==",pwd))
    let snapshot = await getDocs(q)
    if(snapshot.docs.length>0){
      login(snapshot.docs[0].data())
      navigate("/admin/admindashboard", {  replace:true})
    }else{ 
      error("Something went wrong!")
    }
  }
  return (
    <>

      <div id="page" className>
        <div className="wrap-login-page">
          <div className="flex-grow flex flex-column justify-center gap30">
            <a href="index.html" id="site-logo-inner">
            </a>
            <div className="login-box">
              <div>
                <h3>Login to account</h3>
                <div className="body-text">Enter your email &amp; password to login</div>
              </div>
              <form className="form-login flex flex-column gap24">
                <fieldset className="email">
                  <div className="body-title mb-10">Email address <span className="tf-color-1">*</span></div>
                  <input className="flex-grow" onChange={ (e) => setUname(e.target.value)} type="email" placeholder="Enter your email address" name="email" tabIndex={0} />
                </fieldset>
                <fieldset className="password">
                  <div className="body-title mb-10">Password <span className="tf-color-1">*</span></div>
                  <input className="password-input"  onChange={ (e) => setPwd(e.target.value)} type="password" placeholder="Enter your password" name="password" tabIndex={0} />
                  <span className="show-pass">
                    <i className="icon-eye view" />
                    <i className="icon-eye-off hide" />``
                  </span>
                </fieldset>
                <div className="flex justify-between items-center">
                  <div className="flex gap10">
                    <input className type="checkbox" id="signed" />
                    <label className="body-text" htmlFor="signed">Keep me signed in</label>
                  </div>
                  <a href="#" className="body-text tf-color">Forgot password?</a>
                </div>
                <NavLink to="/admin"><button onClick={adminlogin}  className="tf-button w-full">Login</button></NavLink>
              </form>
              <div className="body-text text-center">

                          <NavLink to="http://localhost:5174" className="boddy-text tf-colour"> Go To Customer Side </NavLink>
              </div>
              <div>
              
              </div>
            </div>
          </div>
          <div className="text-tiny">Copyright © 2024 Remos, All rights reserved.</div>
        </div>
      </div>


    </>
  )
} export default AdminLogin