// import "./css/vendor/bootstrap.min.css"
// import "./css/vendor/classic.css"
// import "./css/vendor/classic.date.css"
// import "./css/vendor/font-awesome.css"
// import "./css/vendor/slick-theme.css"
// import "./css/vendor/slick.css"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import Footer from "../component/Footer"
import HeaderUsedashboard from "../component/HeaderUserdashboard"
import PageTitle from "../component/PageTitle"
import { useCartStore } from "../store/cart"
import { useState } from "react"
import { db ,auth} from "../store/firebaseconfig"
import React from "react"
import { error, success } from "../store/message"
function Checkout(){
  let totalPrice = useCartStore((store)=>store.totalPrice)
  let cart = useCartStore((store)=>store.cart)

  let [fnm , setFnm] = useState("")
  let [lnm , setLnm] = useState("")
  let [email , setEmail] = useState("")
  let [mobile , setMobile] = useState("")
  let [address , setAddress] = useState("")
  let [zip , setZip] = useState("")
  let [city , setCity] = useState("")
  let [notes , setNotes] = useState("")

  let [method , setMethod] = useState("COD")
  let [payment , setPayment] = useState("NOT PAID")

  async function addorder(){
    try{
    let colRef = collection(db,"orders")
    await addDoc(colRef,{
      fnm:fnm,
      lnm:lnm,
      email:email,
      mobile:mobile,
      address:address,
      city:city,
      zip:zip,
      notes:notes,
      payment:payment,
      method:method,
      uid:auth.currentUser.uid,
      items:cart,
      status:"Pending",
      date:serverTimestamp(),
      totalPrice:totalPrice,
    })
    success("Order Placed Successfully!")
  } catch(err){
    error("Something went wrong!");
    console.log(err)
  }
  }

    return(
        <>
                        {/* Main Wrapper Start */}
  <div id="scroll-container">
  {/* HEADER MENU START */}
             <HeaderUsedashboard/>   
  {/* HEADER MENU END */}
  {/* TITLE BANNER START */}
        <PageTitle  title="Checkout"/>
  {/* TITLE BANNER END */}
  {/* Customer Container Start */}
  {/* Customer Container End */}
  {/* Billing Details Start */}
  <section className="billing-detail pb-40">
    <div className="container-fluid">
      <div className="row row-gap-4">
        <div className="col-xxl-9 col-xl-8">
          <div className="billing-info">
            <div className="title-row title-row-2 mb-24">
              <h6 className="fw-500 color-ter">Billing Details</h6>
            </div>
            <div className="billing-wrapper mb-40">
              <form action="https://uiparadox.co.uk/templates/savory-bites/checkout.html" method="post" className="contact-form mb-16">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-block mb-16">
                      <input type="text"  onChange={(e)=>{setFnm(e.target.value)}}  name="name" id="name5" className="form-control form-control-2 " placeholder="First Name" />
                      <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                        <path d="M10.5 0C7.59223 0 5.22656 2.36566 5.22656 5.27344C5.22656 8.18121 7.59223 10.5469 10.5 10.5469C13.4078 10.5469 15.7734 8.18121 15.7734 5.27344C15.7734 2.36566 13.4078 0 10.5 0ZM10.5 9.375C8.2384 9.375 6.39844 7.53504 6.39844 5.27344C6.39844 3.01184 8.2384 1.17188 10.5 1.17188C12.7616 1.17188 14.6016 3.01184 14.6016 5.27344C14.6016 7.53504 12.7616 9.375 10.5 9.375Z" fill="#141516" />
                        <path d="M17.0612  13.992C15.6174 12.5261 13.7035 11.7188 11.6719 11.7188H9.32812C7.29656 11.7188 5.38258 12.5261 3.93883 13.992C2.50215 15.4507 1.71094 17.3763 1.71094 19.4141C1.71094 19.7377 1.97328 20 2.29688 20H18.7031C19.0267 20 19.2891 19.7377 19.2891 19.4141C19.2891 17.3763 18.4979 15.4507 17.0612 13.992ZM2.90859 18.8281C3.20215 15.5045 5.96918 12.8906 9.32812 12.8906H11.6719C15.0308 12.8906 17.7979 15.5045 18.0914 18.8281H2.90859Z" fill="#141516" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-16">
                      <input type="text" onChange={(e)=>{setLnm(e.target.value)}} name="lname" id="lastName" className="form-control form-control-2 " placeholder="Last Name" />
                      <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                        <path d="M10.5 0C7.59223 0 5.22656 2.36566 5.22656 5.27344C5.22656 8.18121 7.59223 10.5469 10.5 10.5469C13.4078 10.5469 15.7734 8.18121 15.7734 5.27344C15.7734 2.36566 13.4078 0 10.5 0ZM10.5 9.375C8.2384 9.375 6.39844 7.53504 6.39844 5.27344C6.39844 3.01184 8.2384 1.17188 10.5 1.17188C12.7616 1.17188 14.6016 3.01184 14.6016 5.27344C14.6016 7.53504 12.7616 9.375 10.5 9.375Z" fill="#141516" />
                        <path d="M17.0612  13.992C15.6174 12.5261 13.7035 11.7188 11.6719 11.7188H9.32812C7.29656 11.7188 5.38258 12.5261 3.93883 13.992C2.50215 15.4507 1.71094 17.3763 1.71094 19.4141C1.71094 19.7377 1.97328 20 2.29688 20H18.7031C19.0267 20 19.2891 19.7377 19.2891 19.4141C19.2891 17.3763 18.4979 15.4507 17.0612 13.992ZM2.90859 18.8281C3.20215 15.5045 5.96918 12.8906 9.32812 12.8906H11.6719C15.0308 12.8906 17.7979 15.5045 18.0914 18.8281H2.90859Z" fill="#141516" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-16">
                      <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email" className="form-control form-control-2 " placeholder="Your Mail" />
                      <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                        <g clipPath="url(#clip0_7968_53870)">
                          <path d="M18.7422 2.96875H2.25781C1.2866 2.96875 0.5 3.76023 0.5 4.72656V15.2734C0.5 16.2455 1.29238 17.0312 2.25781 17.0312H18.7422C19.7053 17.0312 20.5 16.2488 20.5 15.2734V4.72656C20.5 3.76195 19.7165 2.96875 18.7422 2.96875ZM18.496 4.14062C18.1369 4.49785 11.9564 10.6458 11.743 10.8581C11.4109 11.1901 10.9695 11.3729 10.5 11.3729C10.0305 11.3729 9.58906 11.1901 9.25594 10.857C9.11242 10.7142 3.00012 4.63414 2.50398 4.14062H18.496ZM1.67188 15.0349V4.96582L6.73586 10.0031L1.67188 15.0349ZM2.50473 15.8594L7.56672 10.8296L8.4284 11.6867C8.98176 12.2401 9.71746 12.5448 10.5 12.5448C11.2825 12.5448 12.0182 12.2401 12.5705 11.6878L13.4333 10.8296L18.4953 15.8594H2.50473ZM19.3281 15.0349L14.2641 10.0031L19.3281 4.96582V15.0349Z" fill="#141516" />
                        </g>
                        <defs>
                          <clipPath id="clip0_7968_53870">
                            <rect width={20} height={20} fill="white" transform="translate(0.5)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-16">
                      <input type="tel"   onChange={(e)=>{setMobile(e.target.value)}} name="phone" id="phoneNumber" className="form-control form-control-2 " placeholder="Your Phone" />
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                        <path d="M16.2509 15.5304L15.8338 14.8339C15.0836 13.5971 14.0484 12.1776 12.6904 12.1776C12.4389 12.1776 12.1897 12.2282 11.9431 12.3307L11.2142 12.6432C11.1477 12.6708 11.083 12.7022 11.0145 12.7355C10.828 12.8262 10.6165 12.929 10.3989 12.929C9.86217 12.929 9.2403 12.2305 8.64811 10.9623C8.06692 9.71762 8.10399 9.06508 8.23741 8.73673C8.38462 8.37447 8.72695 8.21959 9.09471 8.08041C9.14585 8.06101 9.19204 8.04342 9.23696 8.02493L9.97501 7.71418C11.8978 6.9101 11.1825 4.10014 10.948 3.17889L10.7491 2.3868C10.579 1.734 10.1282 0 8.63277 0C8.35594 0 8.06061 0.064496 7.75527 0.191774C7.55492 0.271334 4.79792 1.39672 3.79909 3.37382C2.60532 5.72716 2.82605 8.88296 4.45451 12.7515C6.07079 16.625 8.16669 18.9942 10.684 19.7933C11.1158 19.9305 11.6038 19.9999 12.1346 19.9999H12.1349C13.8721 19.9999 15.587 19.2608 15.7262 19.1994C16.3251 18.9457 16.7123 18.5601 16.8768 18.0532C17.1557 17.1937 16.6878 16.2519 16.2509 15.5304ZM15.5897 17.6356C15.5514 17.7534 15.4185 17.8609 15.1948 17.9551C15.1911 17.9567 15.1866 17.9586 15.1828 17.9603C15.1673 17.9672 13.615 18.647 12.1345 18.6469C11.7428 18.6469 11.3926 18.5988 11.0935 18.5037C8.97266 17.8305 7.1592 15.72 5.70231 12.2286C4.23459 8.7416 4.00006 5.96837 5.0062 3.98495C5.78746 2.43858 8.23335 1.45761 8.25734 1.44823C8.26221 1.44625 8.26699 1.44435 8.27177 1.44237C8.41105 1.38391 8.53589 1.35306 8.63277 1.35306C8.9309 1.35306 9.20223 1.81545 9.43803 2.72173L9.63602 3.51048C10.0632 5.18828 9.99819 6.23772 9.45129 6.46647L8.71675 6.77587C8.68753 6.78796 8.65334 6.80068 8.61563 6.81502C8.20989 6.96864 7.36558 7.28814 6.98375 8.22735C6.63727 9.0796 6.7807 10.1615 7.42178 11.535C8.28521 13.3835 9.25897 14.2821 10.3987 14.2821C10.9277 14.2821 11.3523 14.0757 11.6059 13.9525C11.6526 13.9298 11.6944 13.909 11.7393 13.8904L12.4693 13.5774C12.5446 13.546 12.6169 13.5307 12.6903 13.5307C13.0417 13.5307 13.6717 13.8786 14.6749 15.5325L15.0918 16.2285C15.6055 17.0767 15.6461 17.4618 15.5897 17.6356Z" fill="#141516" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-block mb-16">
                      <input type="text"  onChange={(e)=>{setAddress(e.target.value)}}  name="text" className="form-control form-control-2 " placeholder="Your Address, House Number " />
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                        <g clipPath="url(#clip0_21606_1706)">
                          <path d="M9.51246 20.2391C9.62113 20.4021 9.8041 20.5 10 20.5C10.1959 20.5 10.3789 20.4021 10.4875 20.2391C11.8742 18.1591 13.9167 15.5903 15.34 12.9778C16.478 10.8889 17.0312 9.10727 17.0312 7.53125C17.0312 3.65422 13.877 0.5 10 0.5C6.12297 0.5 2.96875 3.65422 2.96875 7.53125C2.96875 9.10727 3.52199 10.8889 4.66004 12.9778C6.08227 15.5883 8.12863 18.1634 9.51246 20.2391ZM10 1.67188C13.2309 1.67188 15.8594 4.30039 15.8594 7.53125C15.8594 8.90641 15.3529 10.5046 14.3109 12.4171C13.0841 14.6691 11.3334 16.9534 10 18.8738C8.66684 16.9537 6.91602 14.6692 5.6891 12.4171C4.64715 10.5046 4.14062 8.90641 4.14062 7.53125C4.14062 4.30039 6.76914 1.67188 10 1.67188Z" fill="#45474F" />
                          <path d="M10 11.0469C11.9385 11.0469 13.5156 9.46977 13.5156 7.53125C13.5156 5.59273 11.9385 4.01562 10 4.01562C8.06148 4.01562 6.48438 5.59273 6.48438 7.53125C6.48438 9.46977 8.06148 11.0469 10 11.0469ZM10 5.1875C11.2923 5.1875 12.3438 6.23891 12.3438 7.53125C12.3438 8.82359 11.2923 9.875 10 9.875C8.70766 9.875 7.65625 8.82359 7.65625 7.53125C7.65625 6.23891 8.70766 5.1875 10 5.1875Z" fill="#45474F" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={20} height={20} fill="white" transform="translate(0 0.5)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-16">
                      <input type="text"  onChange={(e)=>{setCity(e.target.value)}} name="text" id="name4" className="form-control form-control-2 " placeholder="Town / City" />
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                        <g clipPath="url(#clip0_21606_1706)">
                          <path d="M9.51246 20.2391C9.62113 20.4021 9.8041 20.5 10 20.5C10.1959 20.5 10.3789 20.4021 10.4875 20.2391C11.8742 18.1591 13.9167 15.5903 15.34 12.9778C16.478 10.8889 17.0312 9.10727 17.0312 7.53125C17.0312 3.65422 13.877 0.5 10 0.5C6.12297 0.5 2.96875 3.65422 2.96875 7.53125C2.96875 9.10727 3.52199 10.8889 4.66004 12.9778C6.08227 15.5883 8.12863 18.1634 9.51246 20.2391ZM10 1.67188C13.2309 1.67188 15.8594 4.30039 15.8594 7.53125C15.8594 8.90641 15.3529 10.5046 14.3109 12.4171C13.0841 14.6691 11.3334 16.9534 10 18.8738C8.66684 16.9537 6.91602 14.6692 5.6891 12.4171C4.64715 10.5046 4.14062 8.90641 4.14062 7.53125C4.14062 4.30039 6.76914 1.67188 10 1.67188Z" fill="#45474F" />
                          <path d="M10 11.0469C11.9385 11.0469 13.5156 9.46977 13.5156 7.53125C13.5156 5.59273 11.9385 4.01562 10 4.01562C8.06148 4.01562 6.48438 5.59273 6.48438 7.53125C6.48438 9.46977 8.06148 11.0469 10 11.0469ZM10 5.1875C11.2923 5.1875 12.3438 6.23891 12.3438 7.53125C12.3438 8.82359 11.2923 9.875 10 9.875C8.70766 9.875 7.65625 8.82359 7.65625 7.53125C7.65625 6.23891 8.70766 5.1875 10 5.1875Z" fill="#45474F" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={20} height={20} fill="white" transform="translate(0 0.5)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-16">
                      <input type="number"  onChange={(e)=>{setZip(e.target.value)}} name="text" className="form-control form-control-2 " placeholder="Postcode / Zip" />
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                        <g clipPath="url(#clip0_21606_1706)">
                          <path d="M9.51246 20.2391C9.62113 20.4021 9.8041 20.5 10 20.5C10.1959 20.5 10.3789 20.4021 10.4875 20.2391C11.8742 18.1591 13.9167 15.5903 15.34 12.9778C16.478 10.8889 17.0312 9.10727 17.0312 7.53125C17.0312 3.65422 13.877 0.5 10 0.5C6.12297 0.5 2.96875 3.65422 2.96875 7.53125C2.96875 9.10727 3.52199 10.8889 4.66004 12.9778C6.08227 15.5883 8.12863 18.1634 9.51246 20.2391ZM10 1.67188C13.2309 1.67188 15.8594 4.30039 15.8594 7.53125C15.8594 8.90641 15.3529 10.5046 14.3109 12.4171C13.0841 14.6691 11.3334 16.9534 10 18.8738C8.66684 16.9537 6.91602 14.6692 5.6891 12.4171C4.64715 10.5046 4.14062 8.90641 4.14062 7.53125C4.14062 4.30039 6.76914 1.67188 10 1.67188Z" fill="#45474F" />
                          <path d="M10 11.0469C11.9385 11.0469 13.5156 9.46977 13.5156 7.53125C13.5156 5.59273 11.9385 4.01562 10 4.01562C8.06148 4.01562 6.48438 5.59273 6.48438 7.53125C6.48438 9.46977 8.06148 11.0469 10 11.0469ZM10 5.1875C11.2923 5.1875 12.3438 6.23891 12.3438 7.53125C12.3438 8.82359 11.2923 9.875 10 9.875C8.70766 9.875 7.65625 8.82359 7.65625 7.53125C7.65625 6.23891 8.70766 5.1875 10 5.1875Z" fill="#45474F" />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={20} height={20} fill="white" transform="translate(0 0.5)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-block mb-16">
                      <input type="text"  onChange={(e)=>{setNotes(e.target.value)}} name="text" className="form-control form-control-2 " placeholder="Order Notes" />
                    </div>
                  </div>
                </div>
                {/* <div className="cus-checkBox ship-address mb-32">
                  <input type="checkbox" id="shipAddress" />
                  <label htmlFor="shipAddress" className="fw-500" id="difrent-ship">Ship to a diffrent
                    address?</label>
                </div> */}
                {/* <div className="box-hide">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block mb-16">
                        <input type="text" name="name" id="name-f" className="form-control form-control-2 " placeholder="First Name" />
                        <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                          <path d="M10.5 0C7.59223 0 5.22656 2.36566 5.22656 5.27344C5.22656 8.18121 7.59223 10.5469 10.5 10.5469C13.4078 10.5469 15.7734 8.18121 15.7734 5.27344C15.7734 2.36566 13.4078 0 10.5 0ZM10.5 9.375C8.2384 9.375 6.39844 7.53504 6.39844 5.27344C6.39844 3.01184 8.2384 1.17188 10.5 1.17188C12.7616 1.17188 14.6016 3.01184 14.6016 5.27344C14.6016 7.53504 12.7616 9.375 10.5 9.375Z" fill="#141516" />
                          <path d="M17.0612  13.992C15.6174 12.5261 13.7035 11.7188 11.6719 11.7188H9.32812C7.29656 11.7188 5.38258 12.5261 3.93883 13.992C2.50215 15.4507 1.71094 17.3763 1.71094 19.4141C1.71094 19.7377 1.97328 20 2.29688 20H18.7031C19.0267 20 19.2891 19.7377 19.2891 19.4141C19.2891 17.3763 18.4979 15.4507 17.0612 13.992ZM2.90859 18.8281C3.20215 15.5045 5.96918 12.8906 9.32812 12.8906H11.6719C15.0308 12.8906 17.7979 15.5045 18.0914 18.8281H2.90859Z" fill="#141516" />
                        </svg>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-16">
                        <input type="text" name="lname" id="l-Name" className="form-control form-control-2 " placeholder="Last Name" />
                        <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                          <path d="M10.5 0C7.59223 0 5.22656 2.36566 5.22656 5.27344C5.22656 8.18121 7.59223 10.5469 10.5 10.5469C13.4078 10.5469 15.7734 8.18121 15.7734 5.27344C15.7734 2.36566 13.4078 0 10.5 0ZM10.5 9.375C8.2384 9.375 6.39844 7.53504 6.39844 5.27344C6.39844 3.01184 8.2384 1.17188 10.5 1.17188C12.7616 1.17188 14.6016 3.01184 14.6016 5.27344C14.6016 7.53504 12.7616 9.375 10.5 9.375Z" fill="#141516" />
                          <path d="M17.0612  13.992C15.6174 12.5261 13.7035 11.7188 11.6719 11.7188H9.32812C7.29656 11.7188 5.38258 12.5261 3.93883 13.992C2.50215 15.4507 1.71094 17.3763 1.71094 19.4141C1.71094 19.7377 1.97328 20 2.29688 20H18.7031C19.0267 20 19.2891 19.7377 19.2891 19.4141C19.2891 17.3763 18.4979 15.4507 17.0612 13.992ZM2.90859 18.8281C3.20215 15.5045 5.96918 12.8906 9.32812 12.8906H11.6719C15.0308 12.8906 17.7979 15.5045 18.0914 18.8281H2.90859Z" fill="#141516" />
                        </svg>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-16">
                        <input type="email" name="email" id="e-mail" className="form-control form-control-2 " placeholder="Your Mail" />
                        <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                          <g clipPath="url(#clip0_7968_53870)">
                            <path d="M18.7422 2.96875H2.25781C1.2866 2.96875 0.5 3.76023 0.5 4.72656V15.2734C0.5 16.2455 1.29238 17.0312 2.25781 17.0312H18.7422C19.7053 17.0312 20.5 16.2488 20.5 15.2734V4.72656C20.5 3.76195 19.7165 2.96875 18.7422 2.96875ZM18.496 4.14062C18.1369 4.49785 11.9564 10.6458 11.743 10.8581C11.4109 11.1901 10.9695 11.3729 10.5 11.3729C10.0305 11.3729 9.58906 11.1901 9.25594 10.857C9.11242 10.7142 3.00012 4.63414 2.50398 4.14062H18.496ZM1.67188 15.0349V4.96582L6.73586 10.0031L1.67188 15.0349ZM2.50473 15.8594L7.56672 10.8296L8.4284 11.6867C8.98176 12.2401 9.71746 12.5448 10.5 12.5448C11.2825 12.5448 12.0182 12.2401 12.5705 11.6878L13.4333 10.8296L18.4953 15.8594H2.50473ZM19.3281 15.0349L14.2641 10.0031L19.3281 4.96582V15.0349Z" fill="#141516" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={20} height={20} fill="white" transform="translate(0.5)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-16">
                        <input type="tel" name="phone" id="pnumber" className="form-control form-control-2 " placeholder="Your Phone" />
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                          <path d="M16.2509 15.5304L15.8338 14.8339C15.0836 13.5971 14.0484 12.1776 12.6904 12.1776C12.4389 12.1776 12.1897 12.2282 11.9431 12.3307L11.2142 12.6432C11.1477 12.6708 11.083 12.7022 11.0145 12.7355C10.828 12.8262 10.6165 12.929 10.3989 12.929C9.86217 12.929 9.2403 12.2305 8.64811 10.9623C8.06692 9.71762 8.10399 9.06508 8.23741 8.73673C8.38462 8.37447 8.72695 8.21959 9.09471 8.08041C9.14585 8.06101 9.19204 8.04342 9.23696 8.02493L9.97501 7.71418C11.8978 6.9101 11.1825 4.10014 10.948 3.17889L10.7491 2.3868C10.579 1.734 10.1282 0 8.63277 0C8.35594 0 8.06061 0.064496 7.75527 0.191774C7.55492 0.271334 4.79792 1.39672 3.79909 3.37382C2.60532 5.72716 2.82605 8.88296 4.45451 12.7515C6.07079 16.625 8.16669 18.9942 10.684 19.7933C11.1158 19.9305 11.6038 19.9999 12.1346 19.9999H12.1349C13.8721 19.9999 15.587 19.2608 15.7262 19.1994C16.3251 18.9457 16.7123 18.5601 16.8768 18.0532C17.1557 17.1937 16.6878 16.2519 16.2509 15.5304ZM15.5897 17.6356C15.5514 17.7534 15.4185 17.8609 15.1948 17.9551C15.1911 17.9567 15.1866 17.9586 15.1828 17.9603C15.1673 17.9672 13.615 18.647 12.1345 18.6469C11.7428 18.6469 11.3926 18.5988 11.0935 18.5037C8.97266 17.8305 7.1592 15.72 5.70231 12.2286C4.23459 8.7416 4.00006 5.96837 5.0062 3.98495C5.78746 2.43858 8.23335 1.45761 8.25734 1.44823C8.26221 1.44625 8.26699 1.44435 8.27177 1.44237C8.41105 1.38391 8.53589 1.35306 8.63277 1.35306C8.9309 1.35306 9.20223 1.81545 9.43803 2.72173L9.63602 3.51048C10.0632 5.18828 9.99819 6.23772 9.45129 6.46647L8.71675 6.77587C8.68753 6.78796 8.65334 6.80068 8.61563 6.81502C8.20989 6.96864 7.36558 7.28814 6.98375 8.22735C6.63727 9.0796 6.7807 10.1615 7.42178 11.535C8.28521 13.3835 9.25897 14.2821 10.3987 14.2821C10.9277 14.2821 11.3523 14.0757 11.6059 13.9525C11.6526 13.9298 11.6944 13.909 11.7393 13.8904L12.4693 13.5774C12.5446 13.546 12.6169 13.5307 12.6903 13.5307C13.0417 13.5307 13.6717 13.8786 14.6749 15.5325L15.0918 16.2285C15.6055 17.0767 15.6461 17.4618 15.5897 17.6356Z" fill="#141516" />
                        </svg>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-16">
                        <input type="text" name="text" id="name-4" className="form-control form-control-2 " placeholder="Town / City" />
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                          <g clipPath="url(#clip0_21606_1706)">
                            <path d="M9.51246 20.2391C9.62113 20.4021 9.8041 20.5 10 20.5C10.1959 20.5 10.3789 20.4021 10.4875 20.2391C11.8742 18.1591 13.9167 15.5903 15.34 12.9778C16.478 10.8889 17.0312 9.10727 17.0312 7.53125C17.0312 3.65422 13.877 0.5 10 0.5C6.12297 0.5 2.96875 3.65422 2.96875 7.53125C2.96875 9.10727 3.52199 10.8889 4.66004 12.9778C6.08227 15.5883 8.12863 18.1634 9.51246 20.2391ZM10 1.67188C13.2309 1.67188 15.8594 4.30039 15.8594 7.53125C15.8594 8.90641 15.3529 10.5046 14.3109 12.4171C13.0841 14.6691 11.3334 16.9534 10 18.8738C8.66684 16.9537 6.91602 14.6692 5.6891 12.4171C4.64715 10.5046 4.14062 8.90641 4.14062 7.53125C4.14062 4.30039 6.76914 1.67188 10 1.67188Z" fill="#45474F" />
                            <path d="M10 11.0469C11.9385 11.0469 13.5156 9.46977 13.5156 7.53125C13.5156 5.59273 11.9385 4.01562 10 4.01562C8.06148 4.01562 6.48438 5.59273 6.48438 7.53125C6.48438 9.46977 8.06148 11.0469 10 11.0469ZM10 5.1875C11.2923 5.1875 12.3438 6.23891 12.3438 7.53125C12.3438 8.82359 11.2923 9.875 10 9.875C8.70766 9.875 7.65625 8.82359 7.65625 7.53125C7.65625 6.23891 8.70766 5.1875 10 5.1875Z" fill="#45474F" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={20} height={20} fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-16">
                        <input type="text" name="text" className="form-control form-control-2 " placeholder="Country / Region" />
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                          <g clipPath="url(#clip0_21606_1706)">
                            <path d="M9.51246 20.2391C9.62113 20.4021 9.8041 20.5 10 20.5C10.1959 20.5 10.3789 20.4021 10.4875 20.2391C11.8742 18.1591 13.9167 15.5903 15.34 12.9778C16.478 10.8889 17.0312 9.10727 17.0312 7.53125C17.0312 3.65422 13.877 0.5 10 0.5C6.12297 0.5 2.96875 3.65422 2.96875 7.53125C2.96875 9.10727 3.52199 10.8889 4.66004 12.9778C6.08227 15.5883 8.12863 18.1634 9.51246 20.2391ZM10 1.67188C13.2309 1.67188 15.8594 4.30039 15.8594 7.53125C15.8594 8.90641 15.3529 10.5046 14.3109 12.4171C13.0841 14.6691 11.3334 16.9534 10 18.8738C8.66684 16.9537 6.91602 14.6692 5.6891 12.4171C4.64715 10.5046 4.14062 8.90641 4.14062 7.53125C4.14062 4.30039 6.76914 1.67188 10 1.67188Z" fill="#45474F" />
                            <path d="M10 11.0469C11.9385 11.0469 13.5156 9.46977 13.5156 7.53125C13.5156 5.59273 11.9385 4.01562 10 4.01562C8.06148 4.01562 6.48438 5.59273 6.48438 7.53125C6.48438 9.46977 8.06148 11.0469 10 11.0469ZM10 5.1875C11.2923 5.1875 12.3438 6.23891 12.3438 7.53125C12.3438 8.82359 11.2923 9.875 10 9.875C8.70766 9.875 7.65625 8.82359 7.65625 7.53125C7.65625 6.23891 8.70766 5.1875 10 5.1875Z" fill="#45474F" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={20} height={20} fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-16">
                        <input type="text" name="text" className="form-control form-control-2 " placeholder="State" />
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                          <g clipPath="url(#clip0_21606_1706)">
                            <path d="M9.51246 20.2391C9.62113 20.4021 9.8041 20.5 10 20.5C10.1959 20.5 10.3789 20.4021 10.4875 20.2391C11.8742 18.1591 13.9167 15.5903 15.34 12.9778C16.478 10.8889 17.0312 9.10727 17.0312 7.53125C17.0312 3.65422 13.877 0.5 10 0.5C6.12297 0.5 2.96875 3.65422 2.96875 7.53125C2.96875 9.10727 3.52199 10.8889 4.66004 12.9778C6.08227 15.5883 8.12863 18.1634 9.51246 20.2391ZM10 1.67188C13.2309 1.67188 15.8594 4.30039 15.8594 7.53125C15.8594 8.90641 15.3529 10.5046 14.3109 12.4171C13.0841 14.6691 11.3334 16.9534 10 18.8738C8.66684 16.9537 6.91602 14.6692 5.6891 12.4171C4.64715 10.5046 4.14062 8.90641 4.14062 7.53125C4.14062 4.30039 6.76914 1.67188 10 1.67188Z" fill="#45474F" />
                            <path d="M10 11.0469C11.9385 11.0469 13.5156 9.46977 13.5156 7.53125C13.5156 5.59273 11.9385 4.01562 10 4.01562C8.06148 4.01562 6.48438 5.59273 6.48438 7.53125C6.48438 9.46977 8.06148 11.0469 10 11.0469ZM10 5.1875C11.2923 5.1875 12.3438 6.23891 12.3438 7.53125C12.3438 8.82359 11.2923 9.875 10 9.875C8.70766 9.875 7.65625 8.82359 7.65625 7.53125C7.65625 6.23891 8.70766 5.1875 10 5.1875Z" fill="#45474F" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={20} height={20} fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block mb-16">
                        <input type="text" name="text" className="form-control form-control-2 " placeholder="Postcode / Zip" />
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                          <g clipPath="url(#clip0_21606_1706)">
                            <path d="M9.51246 20.2391C9.62113 20.4021 9.8041 20.5 10 20.5C10.1959 20.5 10.3789 20.4021 10.4875 20.2391C11.8742 18.1591 13.9167 15.5903 15.34 12.9778C16.478 10.8889 17.0312 9.10727 17.0312 7.53125C17.0312 3.65422 13.877 0.5 10 0.5C6.12297 0.5 2.96875 3.65422 2.96875 7.53125C2.96875 9.10727 3.52199 10.8889 4.66004 12.9778C6.08227 15.5883 8.12863 18.1634 9.51246 20.2391ZM10 1.67188C13.2309 1.67188 15.8594 4.30039 15.8594 7.53125C15.8594 8.90641 15.3529 10.5046 14.3109 12.4171C13.0841 14.6691 11.3334 16.9534 10 18.8738C8.66684 16.9537 6.91602 14.6692 5.6891 12.4171C4.64715 10.5046 4.14062 8.90641 4.14062 7.53125C4.14062 4.30039 6.76914 1.67188 10 1.67188Z" fill="#45474F" />
                            <path d="M10 11.0469C11.9385 11.0469 13.5156 9.46977 13.5156 7.53125C13.5156 5.59273 11.9385 4.01562 10 4.01562C8.06148 4.01562 6.48438 5.59273 6.48438 7.53125C6.48438 9.46977 8.06148 11.0469 10 11.0469ZM10 5.1875C11.2923 5.1875 12.3438 6.23891 12.3438 7.53125C12.3438 8.82359 11.2923 9.875 10 9.875C8.70766 9.875 7.65625 8.82359 7.65625 7.53125C7.65625 6.23891 8.70766 5.1875 10 5.1875Z" fill="#45474F" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={20} height={20} fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block mb-16">
                        <input type="text" name="text" className="form-control form-control-2 " placeholder="Your Address, House Number " />
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                          <g clipPath="url(#clip0_21606_1706)">
                            <path d="M9.51246 20.2391C9.62113 20.4021 9.8041 20.5 10 20.5C10.1959 20.5 10.3789 20.4021 10.4875 20.2391C11.8742 18.1591 13.9167 15.5903 15.34 12.9778C16.478 10.8889 17.0312 9.10727 17.0312 7.53125C17.0312 3.65422 13.877 0.5 10 0.5C6.12297 0.5 2.96875 3.65422 2.96875 7.53125C2.96875 9.10727 3.52199 10.8889 4.66004 12.9778C6.08227 15.5883 8.12863 18.1634 9.51246 20.2391ZM10 1.67188C13.2309 1.67188 15.8594 4.30039 15.8594 7.53125C15.8594 8.90641 15.3529 10.5046 14.3109 12.4171C13.0841 14.6691 11.3334 16.9534 10 18.8738C8.66684 16.9537 6.91602 14.6692 5.6891 12.4171C4.64715 10.5046 4.14062 8.90641 4.14062 7.53125C4.14062 4.30039 6.76914 1.67188 10 1.67188Z" fill="#45474F" />
                            <path d="M10 11.0469C11.9385 11.0469 13.5156 9.46977 13.5156 7.53125C13.5156 5.59273 11.9385 4.01562 10 4.01562C8.06148 4.01562 6.48438 5.59273 6.48438 7.53125C6.48438 9.46977 8.06148 11.0469 10 11.0469ZM10 5.1875C11.2923 5.1875 12.3438 6.23891 12.3438 7.53125C12.3438 8.82359 11.2923 9.875 10 9.875C8.70766 9.875 7.65625 8.82359 7.65625 7.53125C7.65625 6.23891 8.70766 5.1875 10 5.1875Z" fill="#45474F" />
                          </g>
                          <defs>
                            <clipPath>
                              <rect width={20} height={20} fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block mb-16">
                        <input type="text" name="text" className="form-control form-control-2 " placeholder="Your Address or Street Name " />
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
                          <g clipPath="url(#clip0_21606_1706)">
                            <path d="M9.51246 20.2391C9.62113 20.4021 9.8041 20.5 10 20.5C10.1959 20.5 10.3789 20.4021 10.4875 20.2391C11.8742 18.1591 13.9167 15.5903 15.34 12.9778C16.478 10.8889 17.0312 9.10727 17.0312 7.53125C17.0312 3.65422 13.877 0.5 10 0.5C6.12297 0.5 2.96875 3.65422 2.96875 7.53125C2.96875 9.10727 3.52199 10.8889 4.66004 12.9778C6.08227 15.5883 8.12863 18.1634 9.51246 20.2391ZM10 1.67188C13.2309 1.67188 15.8594 4.30039 15.8594 7.53125C15.8594 8.90641 15.3529 10.5046 14.3109 12.4171C13.0841 14.6691 11.3334 16.9534 10 18.8738C8.66684 16.9537 6.91602 14.6692 5.6891 12.4171C4.64715 10.5046 4.14062 8.90641 4.14062 7.53125C4.14062 4.30039 6.76914 1.67188 10 1.67188Z" fill="#45474F" />
                            <path d="M10 11.0469C11.9385 11.0469 13.5156 9.46977 13.5156 7.53125C13.5156 5.59273 11.9385 4.01562 10 4.01562C8.06148 4.01562 6.48438 5.59273 6.48438 7.53125C6.48438 9.46977 8.06148 11.0469 10 11.0469ZM10 5.1875C11.2923 5.1875 12.3438 6.23891 12.3438 7.53125C12.3438 8.82359 11.2923 9.875 10 9.875C8.70766 9.875 7.65625 8.82359 7.65625 7.53125C7.65625 6.23891 8.70766 5.1875 10 5.1875Z" fill="#45474F" />
                          </g>
                          <defs>
                            <clipPath id="clip0_21606_1706">
                              <rect width={20} height={20} fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div> */}
              </form>
              {/* Different Billing Address Form */}
              <div className="title-row title-row-2 mb-24">
                <h6 className="fw-500 color-ter">Payments Methods</h6>
              </div>
              <div className="shipping-radio-container">
                <form action="https://uiparadox.co.uk/templates/savory-bites/contact.html" method="post" className="mb-32">
                  <div className="plans mb-16">
                    <label className="plan basic-plan" htmlFor="credit">
                      <input  onChange={(e)=>{setMethod(e.target.value)}} defaultChecked value="Razor Pay" type="radio" name="plan" id="credit" />
                      <span className="plan-content content-2">
                        <img src="/savory/assets/media/icons/payment-card-1.png" alt />
                        <span className="plan-details">Razor Pay
                          <span className="fw-500 black"></span>
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="plans mb-16">
                    <label className="plan basic-plan" htmlFor="paypal">
                      <input onChange={(e)=>{setMethod(e.target.value)}}  value="COD" type="radio" name="plan" id="paypal" />
                      <span className="plan-content content-2">
                        <img src="/savory/assets/media/icons/payment-card-2.png" alt />
                        <span className="plan-details">
                          <span className="fw-500 black">COD  ( Cash On Delivery )</span>
                        </span>
                      </span>
                    </label>
                  </div>
            
                </form>
           
               
              </div>
            </div>
          </div>
        </div>




        <div className="col-xxl-3 col-xl-4">
          <div className="checkout-sidebar">
            <div className="justify-content-between d-flex align-items-center mb-24">
              <h6 className="color-primary">Product</h6>
              <h6 className="color-ter">Amount</h6>
            </div>
            <hr className="mb-24" />
         {  cart && cart.map((cartitem)=>(
                     <React.Fragment key={cartitem.productid}>
                    <div className="d-flex gap-16 align-items-center mb-16" >
                  <img className="br-4" src={cartitem.imageUrl} style={{height:"50px" , width:"50px"  , borderRadius:"10px"}} alt />
                  <a href="menu.html" className="p sidebar-content fw-600 medium-black">{cartitem.name} </a>
                  <div className="dot-icon" />
                  <p className="fw-600 dark-gray">{cartitem.quantity} x {cartitem.price}</p>
                            </div>
                     <hr className="mb-16" />
                     </React.Fragment>
                    ))
            }
           
          
            <form method="get" className="mb-24">
              <div className="d-flex gap-16 align-items-center justify-content-between">
                <input type="number" className="coupon-code" placeholder="Coupon Code" />
                <button type="submit" className="coupon-code-button cus-btn">apply now</button>
              </div>
            </form>
            <hr className="mb-24" />
            <div className="d-flex justify-content-between align-items-center mb-24">
              <p className="fw-600 medium-black">Subtotal</p>
              <p className="fw-600">${totalPrice}</p>
            </div>
            <hr className="mb-24" />
            <p className="mb-16">Your personal data will be used to process your order, support your
              experience throughout this website, and for other purposes described in our <span className="color-ter">privacy policy.</span> </p>
            <div className="cus-checkBox mb-32">
              <input type="checkbox" id="remember2" />
              <label htmlFor="remember2">I have read and agree to the website terms and
                conditions.</label>
            </div>
            <button type="button" onClick={addorder} className="border-0 cus-btn">place order</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Billing Details End */}
  {/* FOOTER START */}
     <Footer/>
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
      <a href="index-2.html" aria-label="logo image"><img src="/savory/assets/media/logo.png" alt /></a>
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

        </>
    )
} export default Checkout 