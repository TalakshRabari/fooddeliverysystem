// import "./css/vendor/bootstrap.min.css"
// import "./css/vendor/classic.css"
// import "./css/vendor/classic.date.css"
// import "./css/vendor/font-awesome.css"
// import "./css/vendor/slick-theme.css"
// import "./css/vendor/slick.css"
import { NavLink } from "react-router"
import Footer from "../component/Footer"
import Header from "../component/Header"
import PageTitle from "../component/PageTitle"
import HeaderUsedashboard from "../component/HeaderUserdashboard"

function Shop() {
    return (
        <>

            <div id="scroll-container">
                {/* HEADER MENU START */}
                  <HeaderUsedashboard/>
                {/* HEADER MENU END */}
                {/* TITLE BANNER START */}
                  <PageTitle title="Shop"/>
                {/* TITLE BANNER END */}
                {/* SHOP SECTION START */}
                <section className="shop-sec">
                    <div className="container-fluid">
                        <div className="shop-grid-topbar-container mb-16">
                            <div className="shop-grid-topbar v-2 mb-12 p-0">
                                <div className="first-block">
                                    <div className="visual-btns">
                                        <a href="javascript:;" className="visual-box shop-filter">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                <path d="M20.1638 1.1302C20.0638 0.917968 19.8502 0.782593 19.6156 0.782593H0.827873C0.59325 0.782593 0.37972 0.917968 0.279583 1.1302C0.179526 1.34244 0.210885 1.59331 0.360161 1.77435L7.58242 10.5341V18.6113C7.58242 18.8211 7.6908 19.0158 7.86893 19.1264C7.96656 19.1869 8.07737 19.2175 8.18858 19.2175C8.28047 19.2175 8.37269 19.1966 8.45771 19.1545L12.5156 17.1432C12.7218 17.0411 12.8522 16.831 12.8525 16.6009L12.8604 10.5343L20.0831 1.77427C20.2325 1.59331 20.2639 1.34236 20.1638 1.1302ZM11.787 9.93074C11.6977 10.039 11.6487 10.1751 11.6485 10.3155L11.6408 16.2238L8.79482 17.6344V10.3163C8.79482 10.1756 8.74592 10.0393 8.65637 9.93074L2.11325 1.99483H18.3301L11.787 9.93074Z" fill="#FAFAFA" />
                                            </svg>
                                            <span className="fliter">FILTERS</span>
                                        </a>
                                        <a href="shop.html" className="visual-box active">
                                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_7819_28489)">
                                                    <path d="M8.28713 0H2.77537C1.24505 0 0 1.24505 0 2.77538V8.28712C0 9.81745 1.24505 11.0625 2.77537 11.0625H8.28713C9.81745 11.0625 11.0625 9.81745 11.0625 8.28712V2.77538C11.0625 1.24505 9.81745 0 8.28713 0ZM9.57841 8.28712C9.57841 9.12359 9.06189 9.55049 8.28713 9.55049H2.77537C1.97667 9.55049 1.51201 9.03237 1.51201 8.28712V2.77538C1.51201 2.05357 1.88548 1.5539 2.77537 1.5539H8.3007C9.21393 1.5539 9.57841 1.87112 9.57841 2.77538V8.28712Z" fill="#92949F" />
                                                    <path d="M21.2246 0H15.7129C14.1825 0 12.9375 1.24505 12.9375 2.77538V8.28712C12.9375 9.81745 14.1825 11.0625 15.7129 11.0625H21.2246C22.755 11.0625 24 9.81745 24 8.28712V2.77538C24 1.24505 22.755 0 21.2246 0ZM22.5159 8.28712C22.5159 9.12359 21.9994 9.55049 21.2246 9.55049H15.7129C14.9142 9.55049 14.4495 9.03237 14.4495 8.28712V2.77538C14.4495 2.05357 14.823 1.5539 15.7129 1.5539H21.2382C22.1514 1.5539 22.5159 1.87112 22.5159 2.77538V8.28712Z" fill="#92949F" />
                                                    <path d="M8.28713 12.9375H2.77537C1.24505 12.9375 0 14.1825 0 15.7129V21.2246C0 22.755 1.24505 24 2.77537 24H8.28713C9.81745 24 11.0625 22.755 11.0625 21.2246V15.7129C11.0625 14.1825 9.81745 12.9375 8.28713 12.9375ZM9.57841 21.2246C9.57841 22.0611 9.06189 22.488 8.28713 22.488H2.77537C1.97667 22.488 1.51201 21.9699 1.51201 21.2246V15.7129C1.51201 14.9911 1.88548 14.4914 2.77537 14.4914H8.3007C9.21393 14.4914 9.57841 14.8086 9.57841 15.7129V21.2246Z" fill="#92949F" />
                                                    <path d="M21.2246 12.9375H15.7129C14.1825 12.9375 12.9375 14.1825 12.9375 15.7129V21.2246C12.9375 22.755 14.1825 24 15.7129 24H21.2246C22.755 24 24 22.755 24 21.2246V15.7129C24 14.1825 22.755 12.9375 21.2246 12.9375ZM22.5159 21.2246C22.5159 22.0611 21.9994 22.488 21.2246 22.488H15.7129C14.9142 22.488 14.4495 21.9699 14.4495 21.2246V15.7129C14.4495 14.9911 14.823 14.4914 15.7129 14.4914H21.2382C22.1514 14.4914 22.5159 14.8086 22.5159 15.7129V21.2246Z" fill="#92949F" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_7819_28489">
                                                        <rect width={24} height={24} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                        <a href="shop-list.html" className="visual-box">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M1.5 4.5C2.32837 4.5 3 3.82844 3 3C3 2.17156 2.32837 1.5 1.5 1.5C0.671631 1.5 0 2.17156 0 3C0 3.82844 0.671631 4.5 1.5 4.5Z" fill="#1E1F20" />
                                                <path d="M6.75 2.25C6.33545 2.25 6 2.58579 6 3C6 3.41421 6.33545 3.75 6.75 3.75H23.25C23.6646 3.75 24 3.41421 24 3C24 2.58579 23.6646 2.25 23.25 2.25H6.75Z" fill="#1E1F20" />
                                                <path d="M1.5 13.5C2.32843 13.5 3 12.8284 3 12C3 11.1716 2.32843 10.5 1.5 10.5C0.671573 10.5 0 11.1716 0 12C0 12.8284 0.671573 13.5 1.5 13.5Z" fill="#1E1F20" />
                                                <path d="M6.75 11.25C6.33579 11.25 6 11.5858 6 12C6 12.4142 6.33579 12.75 6.75 12.75H23.25C23.6642 12.75 24 12.4142 24 12C24 11.5858 23.6642 11.25 23.25 11.25H6.75Z" fill="#1E1F20" />
                                                <path d="M3 21C3 21.8284 2.32843 22.5 1.5 22.5C0.671573 22.5 0 21.8284 0 21C0 20.1716 0.671573 19.5 1.5 19.5C2.32843 19.5 3 20.1716 3 21Z" fill="#1E1F20" />
                                                <path d="M6 21C6 20.5858 6.33579 20.25 6.75 20.25H23.25C23.6642 20.25 24 20.5858 24 21C24 21.4142 23.6642 21.75 23.25 21.75H6.75C6.33579 21.75 6 21.4142 6 21Z" fill="#1E1F20" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="results d-xl-block d-none">
                                        <p className="medium-black">Showing 01 - 09 of 30 Results</p>
                                    </div>
                                </div>
                                <div className="last-block">
                                    <div className="d-lg-flex d-none align-items-center gap-16">
                                        <p className="medium-black">Short by:</p>
                                        <div className="drop-container">
                                            <div className="wrapper-dropdown white" id="dropdown2">
                                                <span className="selected-display" id="destination12">Price: low to high</span>
                                                <svg id="drp-arrow1" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow transition-all ml-auto rotate-180">
                                                    <path d="M7 14.5l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <ul className="topbar-dropdown">
                                                    <li className="item white">Price: low to high</li>
                                                    <li className="item white">Price: high to low</li>
                                                    <li className="item white">Price: Average Rating</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="drop-container">
                                        <div className="wrapper-dropdown white" id="dropdown1">
                                            <span className="selected-display white" id="destination21">Show: 18</span>
                                            <svg id="drp-arrow-02" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow transition-all ml-auto rotate-180">
                                                <path d="M7 14.5l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <ul className="topbar-dropdown">
                                                <li className="item white">Show: 18</li>
                                                <li className="item white">Show: 15</li>
                                                <li className="item white">Show: 12</li>
                                                <li className="item white">Show: 9</li>
                                                <li className="item white">Show: 3</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hr-line mb-sm-12 mb-12" />
                            <div className="shop-grid-bottombar">
                                <p className="medium-black">Selected filters:</p>
                                <a href="#" className="filter-tag">
                                    <p className="white substitle">Petti Burger</p>
                                    <i className="fa-light fa-xmark-large" />
                                </a>
                                <a href="#" className="filter-tag">
                                    <p className="white substitle">Min $30 - Max $300</p>
                                    <i className="fa-light fa-xmark-large" />
                                </a>
                                <a href="#" className="text-decoration-none medium-black fw-400">
                                    Clear All
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="box-container">
                                    <div className="img-box">
                                        <img src="/savory/assets/media/cus-favorite/burger-1.png" alt />
                                    </div>
                                    <div className="content-box">
                                        <p className="content-text fw-600 mb-6">Special</p>
                                        <a href="menu.html" className="h5 content-text-1 mb-24">Burger with Bacon</a>
                                        <p className="content-text mb-24">Bread, 120g Meet, Cheese, BBQ Sauce, Bacon, Lettuce,
                                            Pinkles
                                            and Red Onion.
                                        </p>
                                        <hr className="content-text mb-24" />
                                        <h4 className="content-text mb-32">$10.99</h4>
                                        <NavLink to="/customer/checkout" className="cus-btn bg-medium-black white w-100">order now</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-container">
                                    <div className="img-box">
                                        <img src="/savory/assets/media/cus-favorite/burger-2.png" alt />
                                    </div>
                                    <div className="content-box">
                                        <p className="fw-600 content-text mb-6">Special</p>
                                        <a href="menu.html" className="h5 content-text-1 mb-24">Crunch Grillhouse</a>
                                        <p className="content-text mb-24">Bread, 120g Meet, Cheese, BBQ Sauce, Bacon, Lettuce,
                                            Pinkles
                                            and Red Onion.
                                        </p>
                                        <hr className=" content-text mb-24" />
                                        <h4 className="content-text mb-32">$12.99</h4>
                                        <NavLink to="/customer/checkout" className="cus-btn bg-medium-black white w-100">order now</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-container">
                                    <div className="img-box">
                                        <img src="/savory/assets/media/cus-favorite/burger-3.png" alt />
                                    </div>
                                    <div className="content-box">
                                        <p className="fw-600 content-text mb-6">Special</p>
                                        <a href="menu.html" className="h5 content-text-1 mb-24">Sizzle Snap Burgers</a>
                                        <p className="content-text mb-24">Bread, 120g Meet, Cheese, BBQ Sauce, Bacon, Lettuce,
                                            Pinkles
                                            and Red Onion.
                                        </p>
                                        <hr className="content-text mb-24" />
                                        <h4 className="content-text mb-32">$16.99</h4>
                                        <NavLink to="/customer/checkoutl" className="cus-btn bg-medium-black white w-100">order now</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-container">
                                    <div className="img-box">
                                        <img src="/savory/assets/media/cus-favorite/burger-4.png" alt />
                                    </div>
                                    <div className="content-box">
                                        <p className="fw-600 content-text mb-6">Special</p>
                                        <a href="menu.html" className="h5 content-text-1 mb-24">Hamburger cheese</a>
                                        <p className="content-text mb-24">Bread, 120g Meet, Cheese, BBQ Sauce, Bacon, Lettuce,
                                            Pinkles
                                            and Red Onion.
                                        </p>
                                        <hr className="content-text mb-24" />
                                        <h4 className="content-text mb-32">$10.99</h4>
                                        <NavLink to="/customer/checkout" className="cus-btn bg-medium-black white w-100">order now</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-container">
                                    <div className="img-box">
                                        <img src="/savory/assets/media/cus-favorite/burger-5.png" alt />
                                    </div>
                                    <div className="content-box">
                                        <p className="fw-600 content-text mb-6">Special</p>
                                        <a href="menu.html" className="h5 content-text-1 mb-24">Patty Burger</a>
                                        <p className="content-text mb-24">Bread, 120g Meet, Cheese, BBQ Sauce, Bacon, Lettuce,
                                            Pinkles
                                            and Red Onion.
                                        </p>
                                        <hr className="content-text mb-24" />
                                        <h4 className="content-text mb-32">$10.99</h4>
                                        <NavLink to="/customer/checkout" className="cus-btn bg-medium-black white w-100">order now</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-container">
                                    <div className="img-box">
                                        <img src="/savory/assets/media/cus-favorite/burger-6.png" alt />
                                    </div>
                                    <div className="content-box">
                                        <p className="fw-600 content-text mb-6">Special</p>
                                        <a href="menu.html" className="h5 content-text-1 mb-24">Snap Burgers</a>
                                        <p className="content-text mb-24">Bread, 120g Meet, Cheese, BBQ Sauce, Bacon, Lettuce,
                                            Pinkles
                                            and Red Onion.
                                        </p>
                                        <hr className="content-text mb-24" />
                                        <h4 className="content-text mb-32">$23.99</h4>
                                        <NavLink to="/customer/checkout" className="cus-btn bg-medium-black white w-100">order now</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-container">
                                    <div className="img-box">
                                        <img src="/savory/assets/media/cus-favorite/burger-7.png" alt />
                                    </div>
                                    <div className="content-box">
                                        <p className="fw-600 content-text mb-6">Special</p>
                                        <a href="menu.html" className="h5 content-text-1 mb-24">Cutlet Burger</a>
                                        <p className="content-text mb-24">Bread, 120g Meet, Cheese, BBQ Sauce, Bacon, Lettuce,
                                            Pinkles
                                            and Red Onion.
                                        </p>
                                        <hr className="content-text mb-24" />
                                        <h4 className="content-text mb-32">$10.99</h4>
                                        <NavLink to="/customer/checkout" className="cus-btn bg-medium-black white w-100">order now</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="box-container">
                                    <div className="img-box">
                                        <img src="/savory/assets/media/cus-favorite/burger-9.png" alt />
                                    </div>
                                    <div className="content-box">
                                        <p className="fw-600 content-text mb-6">Special</p>
                                        <a href="menu.html" className="h5 content-text-1 mb-24">Double taker burger</a>
                                        <p className="content-text mb-24">Bread, 120g Meet, Cheese, BBQ Sauce, Bacon, Lettuce,
                                            Pinkles
                                            and Red Onion.
                                        </p>
                                        <hr className="content-text mb-24" />
                                        <h4 className="content-text mb-32">$10.99</h4>
                                        <NavLink to="/customer/checkout" className="cus-btn bg-medium-black white w-100">order now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pagination py-80">
                            <ul id="border-pagination">
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 36 36" fill="none">
                                            <path d="M14.2261 25.8748C14.2261 22.4998 11.0761 17.9998 7.47607 17.9998M7.47607 17.9998C9.53857 17.9998 14.2261 16.8748 14.2261 10.1248M7.47607 17.9998H28.8511" stroke="#0C0C0D" strokeWidth="2.25" />
                                        </svg>
                                    </a>
                                </li>
                                <li><a href="#" className="active">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">...</a></li>
                                <li><a href="#">9</a></li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none">
                                            <path d="M20.1953 22.9995C20.1953 19.9995 22.9953 15.9995 26.1953 15.9995M26.1953 15.9995C24.362 15.9995 20.1953 14.9995 20.1953 8.99951M26.1953 15.9995H7.19531" stroke="#282525" strokeWidth={2} />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* SHOP SECTION END */}
                {/* FOOTER START */}
                  <Footer/>
                {/* FOOTER END */}
                {/* Main Wrapper End */}
            </div>

        </>
    )
}
export default Shop