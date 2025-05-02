// import "./css/vendor/bootstrap.min.css"
// import "./css/vendor/classic.css"
// import "./css/vendor/classic.date.css"
// import "./css/vendor/font-awesome.css"
// import "./css/vendor/slick-theme.css"
// import "./css/vendor/slick.css"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import useUserStore from "../store/customer"
import Footer from "../component/Footer"
import Header from "../component/Header"
import PageTitle from "../component/PageTitle"
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { auth } from "../store/firebaseconfig"
import { error, success } from "../store/message"
import HeaderUsedashboard from "../component/HeaderUserdashboard"

function Login(){

  let [email ,setEmail] = useState("")
  let [pwd ,setPwd] = useState("")
  let navigate = useNavigate()
  let auth = getAuth()
 async function login(){
     try{
      console.log("Login Function Invoked!")
      let userCredentials = await signInWithEmailAndPassword(auth,email,pwd)
      let user = userCredentials.user ;
      useUserStore.getState().login(user);
      if(userCredentials.user != null){
       success("Customer Login Succesfully!")
       navigate('/customer/dashboard');
     }}
     catch(err){
      error("Something Went Wrong!")
      console.log(err)
     }
 
  }

    return(
        <>     
                              <div>
  <div id="scroll-container">
    {/* HEADER MENU START */}
     <HeaderUsedashboard/>
    {/* HEADER MENU END */}
    {/* TITLE BANNER START */}
          <PageTitle title="Login"/>
    {/* TITLE BANNER END */}
    {/* Customer Container Start */}
    <div className="customer-container py-40">
      <div className="container-fluid">
        <div className="customer-wrapper">
          <div className="title-box ">
            <h6 className="dark-gray">New Customer? &nbsp; &nbsp; &nbsp; &nbsp;
              <Link to="/register" style={{color:"orange", textDecoration:"underline"}}>
                 <h7>Click Here to Register Your Self</h7>
              </Link>
            </h6>
          </div>
          <div className="sign-form">
            <p className="fw-500 mb-16">If you’ve shopped with us before, enter your information below. New
              customers, please continue to the Billing section.</p>
            <form method="post">
              <div className="row row-gap-3">
                <div className="col-lg-6">
                  <div className="input-block">
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" name="name" id="email" className="form-control" placeholder="Email address" />
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                      <path d="M21.8906 4.0625H2.10938C0.943922 4.0625 0 5.01228 0 6.17188V18.8281C0 19.9946 0.950859 20.9375 2.10938 20.9375H21.8906C23.0463 20.9375 24 19.9986 24 18.8281V6.17188C24 5.01434 23.0598 4.0625 21.8906 4.0625ZM21.5952 5.46875C21.1642 5.89742 13.7476 13.275 13.4916 13.5297C13.0931 13.9281 12.5634 14.1475 12 14.1475C11.4366 14.1475 10.9069 13.9281 10.5071 13.5284C10.3349 13.3571 3.00014 6.06097 2.40478 5.46875H21.5952ZM1.40625 18.5419V6.45898L7.48303 12.5037L1.40625 18.5419ZM2.40567 19.5312L8.48006 13.4955L9.51408 14.5241C10.1781 15.1881 11.061 15.5538 12 15.5538C12.939 15.5538 13.8219 15.1881 14.4846 14.5254L15.5199 13.4955L21.5943 19.5312H2.40567ZM22.5938 18.5419L16.517 12.5037L22.5938 6.45898V18.5419Z" fill="#45474F" />
                    </svg>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="input-block">
                    <input value={pwd} onChange={(e)=>{setPwd(e.target.value)}} type="password" name="password" id="passWord" className="form-control" placeholder="Password" />
                    <i className="fa-regular fa-eye" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="cus-checkBox mb-8">
                    <input type="checkbox" id="remember1" />
                    <label htmlFor="remember1">Remember me</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <button onClick={login} type="button" className="cus-btn border-0 sign-submit-btn">
                    <span>Sign In</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
       <Footer />
    {/* FOOTER END */}
    {/* Main Wrapper End */}
  </div>
  {/* Back To Top Start */}
  <button className="scrollToTopBtn"><i className="fa fa-arrow-up" /></button>
  {/* Mobile Menu Start */}
  <div className="mobile-nav__wrapper">
    <div className="mobile-nav__overlay mobile-nav__toggler" />
    <div className="mobile-nav__content">
      <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times" /></span>
      <div className="logo-box">
        <a href="index-2.html" aria-label="logo image"><img src="assets/media/logo.png" alt /></a>
      </div>
      <div className="mobile-nav__container" />
      <ul className="mobile-nav__contact list-unstyled">
        <li>
          <i className="fas fa-envelope" />
          <a href="mailto:example@company.com">example@company.com</a>
        </li>
        <li>
          <i className="fa-solid fa-phone" />
          <a href="tel:+12345678">+123 (4567) -890</a>
        </li>
      </ul>
      <div className="mobile-nav__social">
        <a href="#"><i className="fa-brands fa-x-twitter" /></a>
        <a href="#"><i className="fa-brands fa-facebook-f" /></a>
        <a href="#"><i className="fab fa-instagram" /></a>
      </div>
    </div>
  </div>
  {/* Mobile Menu End */}
</div>

        </>
    )
} export default Login