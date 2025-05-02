// // import { Link } from "react-router"
// import "./css/vendor/bootstrap.min.css"
// import "./css/vendor/classic.css"
// import "./css/vendor/classic.date.css"
// import "./css/vendor/font-awesome.css"
// import "./css/vendor/slick-theme.css"
// import "./css/vendor/slick.css"
import Footer from "../component/Footer"
import Header from "../component/Header"
import PageTitle from "../component/PageTitle"
import { Link, NavLink } from "react-router"
import { useState } from "react"
import { auth } from "../store/firebaseconfig"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { updateProfile } from "firebase/auth"
import { success , error } from "../store/message"
import { useNavigate } from "react-router-dom"
import HeaderUsedashboard from "../component/HeaderUserdashboard"

function Register() {

     let [fname , setFname] = useState("")
     let [lname , setLname] = useState("")
     let [email , setEmail] = useState("")
     let [pwd , setPwd] = useState("")
     let navigate = useNavigate();

    async function register(){
   
           try{
            let userCredentials = await createUserWithEmailAndPassword(auth,email,pwd)
            if(userCredentials.user != null){
              await updateProfile(userCredentials.user,{
                displayname: fname +" "+lname
              })
              success("Customer Registration successfull")
              navigate('/customer');
            }
           }catch(err)
       {
        error(err)
        console.log(err);
       }  

     
     }
  return (
    <>
      <div>
        <div id="scroll-container">
          {/* HEADER MENU START */}
          <HeaderUsedashboard/>
          {/* HEADER MENU END */}
          {/* TITLE BANNER START */}
          <PageTitle title="Register" />
          {/* TITLE BANNER END */}
          {/* Customer Container Start */}
          <div className="customer-container py-40">
            <div className="container-fluid">
              <div className="customer-wrapper">
                <div className="title-box ">
                  <h6 className="dark-gray">Already a Customer? &nbsp; &nbsp; &nbsp; &nbsp;

                    <Link to="/login" style={{ color: "orange", textDecoration: 'underline' }}>
                      <h7>Click Here to Login</h7>
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
                          <input value={fname} onChange={(e)=>{setFname(e.target.value)}} type="text" name="name" id="firstname" className="form-control" placeholder="First Name" />
                          <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                            <path d="M10.5 0C7.59223 0 5.22656 2.36566 5.22656 5.27344C5.22656 8.18121 7.59223 10.5469 10.5 10.5469C13.4078 10.5469 15.7734 8.18121 15.7734 5.27344C15.7734 2.36566 13.4078 0 10.5 0ZM10.5 9.375C8.2384 9.375 6.39844 7.53504 6.39844 5.27344C6.39844 3.01184 8.2384 1.17188 10.5 1.17188C12.7616 1.17188 14.6016 3.01184 14.6016 5.27344C14.6016 7.53504 12.7616 9.375 10.5 9.375Z" fill="#141516" />
                            <path d="M17.0612  13.992C15.6174 12.5261 13.7035 11.7188 11.6719 11.7188H9.32812C7.29656 11.7188 5.38258 12.5261 3.93883 13.992C2.50215 15.4507 1.71094 17.3763 1.71094 19.4141C1.71094 19.7377 1.97328 20 2.29688 20H18.7031C19.0267 20 19.2891 19.7377 19.2891 19.4141C19.2891 17.3763 18.4979 15.4507 17.0612 13.992ZM2.90859 18.8281C3.20215 15.5045 5.96918 12.8906 9.32812 12.8906H11.6719C15.0308 12.8906 17.7979 15.5045 18.0914 18.8281H2.90859Z" fill="#141516" />
                          </svg>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-block">
                          <input value={lname} onChange={(e)=>{setLname(e.target.value)}} type="text" name="name" id="lastname" className="form-control" placeholder="Last Name" />
                          <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                            <path d="M10.5 0C7.59223 0 5.22656 2.36566 5.22656 5.27344C5.22656 8.18121 7.59223 10.5469 10.5 10.5469C13.4078 10.5469 15.7734 8.18121 15.7734 5.27344C15.7734 2.36566 13.4078 0 10.5 0ZM10.5 9.375C8.2384 9.375 6.39844 7.53504 6.39844 5.27344C6.39844 3.01184 8.2384 1.17188 10.5 1.17188C12.7616 1.17188 14.6016 3.01184 14.6016 5.27344C14.6016 7.53504 12.7616 9.375 10.5 9.375Z" fill="#141516" />
                            <path d="M17.0612  13.992C15.6174 12.5261 13.7035 11.7188 11.6719 11.7188H9.32812C7.29656 11.7188 5.38258 12.5261 3.93883 13.992C2.50215 15.4507 1.71094 17.3763 1.71094 19.4141C1.71094 19.7377 1.97328 20 2.29688 20H18.7031C19.0267 20 19.2891 19.7377 19.2891 19.4141C19.2891 17.3763 18.4979 15.4507 17.0612 13.992ZM2.90859 18.8281C3.20215 15.5045 5.96918 12.8906 9.32812 12.8906H11.6719C15.0308 12.8906 17.7979 15.5045 18.0914 18.8281H2.90859Z" fill="#141516" />
                          </svg>
                        </div>
                      </div>
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
                      <NavLink>  <button type="button" onClick={register} className="cus-btn border-0 sign-submit-btn">  
                          <span>Sign Up</span>
                        </button>
                        </NavLink>
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
} export default Register