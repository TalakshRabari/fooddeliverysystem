function Settings() {
    return (
        <>

            {/* layout-wrap */}
            <div className="layout-wrap">
                {/* preload */}
                <div id="preload" className="preload-container">
                    <div className="preloading">
                        <span />
                    </div>
                </div>
                {/* /preload */}
                {/* section-menu-left */}
                <div className="section-menu-left">
                    <div className="box-logo">
                        <a href="index.html" id="site-logo-inner">
                            <img className id="logo_header" alt src="/AdminSide/images/logo/logo.png" data-light="images/logo/logo.png" data-dark="images/logo/logo-dark.png" />
                        </a>
                        <div className="button-show-hide">
                            <i className="icon-menu-left" />
                        </div>
                    </div>
                    <div className="section-menu-left-wrap">
                        <div className="center">
                            <div className="center-item">
                                <div className="center-heading">Main Home</div>
                                <ul className="menu-list">
                                    <li className="menu-item has-children">
                                        <a href="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-grid" /></div>
                                            <div className="text">Dashboard</div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <a href="index.html" className>
                                                    <div className="text">Home 01</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="home-2.html" className>
                                                    <div className="text">Home 02</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="home-3.html" className>
                                                    <div className="text">Home 03</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="home-4.html" className>
                                                    <div className="text">Home 04</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="home-boxed.html" className>
                                                    <div className="text">Home Boxed</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="home-menu-icon-hover.html" className>
                                                    <div className="text">Home Menu Icon Hover</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="home-menu-icon-default.html" className>
                                                    <div className="text">Home Menu Icon Default</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="center-item">
                                <div className="center-heading">All page</div>
                                <ul className="menu-list">
                                    <li className="menu-item has-children">
                                        <a href="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-shopping-cart" /></div>
                                            <div className="text">Ecommerce</div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <a href="add-product.html" className>
                                                    <div className="text">Add Product</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="product-list.html" className>
                                                    <div className="text">Product List</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="product-detail-1.html" className>
                                                    <div className="text">Product Detail 1</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="product-detail-2.html" className>
                                                    <div className="text">Product Detail 2</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="product-detail-3.html" className>
                                                    <div className="text">Product Detail 3</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children">
                                        <a href="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-layers" /></div>
                                            <div className="text">Category</div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <a href="category-list.html" className>
                                                    <div className="text">Category list</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="new-category.html" className>
                                                    <div className="text">New category</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children">
                                        <a href="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-box" /></div>
                                            <div className="text">Attributes</div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <a href="attributes.html" className>
                                                    <div className="text">Attributes</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="add-attributes.html" className>
                                                    <div className="text">Add attributes</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children">
                                        <a href="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-file-plus" /></div>
                                            <div className="text">Order</div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <a href="oder-list.html" className>
                                                    <div className="text">Order list</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="oder-detail.html" className>
                                                    <div className="text">Order detail</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="oder-tracking.html" className>
                                                    <div className="text">Order tracking</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children">
                                        <a href="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-user" /></div>
                                            <div className="text">User</div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <a href="all-user.html" className>
                                                    <div className="text">All user</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="add-new-user.html" className>
                                                    <div className="text">Add new user</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="login.html" className>
                                                    <div className="text">Login</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="sign-up.html" className>
                                                    <div className="text">Sign up</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item has-children">
                                        <a href="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-user-plus" /></div>
                                            <div className="text">Roles</div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <a href="all-roles.html" className>
                                                    <div className="text">All roles</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="create-role.html" className>
                                                    <div className="text">Create role</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="gallery.html" className="menu-item-button">
                                            <div className="icon"><i className="icon-image" /></div>
                                            <div className="text">Gallery</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="report.html" className>
                                            <div className="icon"><i className="icon-pie-chart" /></div>
                                            <div className="text">Report</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="center-item">
                                <div className="center-heading">Setting</div>
                                <ul className="menu-list">
                                    <li className="menu-item has-children">
                                        <a href="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-map-pin" /></div>
                                            <div className="text">Location</div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <a href="countries.html" className>
                                                    <div className="text">Countries</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="states.html" className>
                                                    <div className="text">States</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="cities.html" className>
                                                    <div className="text">Cities</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item active">
                                        <a href="setting.html" className="active">
                                            <div className="icon"><i className="icon-settings" /></div>
                                            <div className="text">Setting</div>
                                        </a>
                                    </li>
                                    <li className="menu-item has-children">
                                        <a href="javascript:void(0);" className="menu-item-button">
                                            <div className="icon"><i className="icon-edit" /></div>
                                            <div className="text">Pages</div>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="sub-menu-item">
                                                <a href="list-page.html" className>
                                                    <div className="text">List page</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="new-page.html" className>
                                                    <div className="text">New page</div>
                                                </a>
                                            </li>
                                            <li className="sub-menu-item">
                                                <a href="edit-page.html" className>
                                                    <div className="text">Edit page</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="center-item">
                                <div className="center-heading">Components</div>
                                <ul className="menu-list">
                                    <li className="menu-item">
                                        <a href="components.html" className>
                                            <div className="icon"><i className="icon-database" /></div>
                                            <div className="text">Components</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="center-item">
                                <div className="center-heading">Support</div>
                                <ul className="menu-list">
                                    <li className="menu-item">
                                        <a href="#" className>
                                            <div className="icon"><i className="icon-help-circle" /></div>
                                            <div className="text">Help center</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className>
                                            <div className="icon">
                                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.7727 4.27031C15.025 3.51514 14.1357 2.91486 13.1558 2.50383C12.1758 2.09281 11.1244 1.87912 10.0617 1.875H10C7.84512 1.875 5.77849 2.73102 4.25476 4.25476C2.73102 5.77849 1.875 7.84512 1.875 10V14.375C1.875 14.8723 2.07254 15.3492 2.42417 15.7008C2.77581 16.0525 3.25272 16.25 3.75 16.25H5C5.49728 16.25 5.9742 16.0525 6.32583 15.7008C6.67746 15.3492 6.875 14.8723 6.875 14.375V11.25C6.875 10.7527 6.67746 10.2758 6.32583 9.92417C5.9742 9.57254 5.49728 9.375 5 9.375H3.15313C3.27366 8.07182 3.76315 6.83 4.56424 5.79508C5.36532 4.76016 6.44481 3.97502 7.67617 3.53169C8.90753 3.08836 10.2398 3.0052 11.5167 3.29196C12.7936 3.57872 13.9624 4.22352 14.8859 5.15078C16.0148 6.28539 16.7091 7.78052 16.8477 9.375H15C14.5027 9.375 14.0258 9.57254 13.6742 9.92417C13.3225 10.2758 13.125 10.7527 13.125 11.25V14.375C13.125 14.8723 13.3225 15.3492 13.6742 15.7008C14.0258 16.0525 14.5027 16.25 15 16.25H16.875C16.875 16.7473 16.6775 17.2242 16.3258 17.5758C15.9742 17.9275 15.4973 18.125 15 18.125H10.625C10.4592 18.125 10.3003 18.1908 10.1831 18.3081C10.0658 18.4253 10 18.5842 10 18.75C10 18.9158 10.0658 19.0747 10.1831 19.1919C10.3003 19.3092 10.4592 19.375 10.625 19.375H15C15.8288 19.375 16.6237 19.0458 17.2097 18.4597C17.7958 17.8737 18.125 17.0788 18.125 16.25V10C18.1291 8.93717 17.9234 7.88398 17.5197 6.90077C17.1161 5.91757 16.5224 5.02368 15.7727 4.27031ZM5 10.625C5.16576 10.625 5.32473 10.6908 5.44194 10.8081C5.55915 10.9253 5.625 11.0842 5.625 11.25V14.375C5.625 14.5408 5.55915 14.6997 5.44194 14.8169C5.32473 14.9342 5.16576 15 5 15H3.75C3.58424 15 3.42527 14.9342 3.30806 14.8169C3.19085 14.6997 3.125 14.5408 3.125 14.375V10.625H5ZM15 15C14.8342 15 14.6753 14.9342 14.5581 14.8169C14.4408 14.6997 14.375 14.5408 14.375 14.375V11.25C14.375 11.0842 14.4408 10.9253 14.5581 10.8081C14.6753 10.6908 14.8342 10.625 15 10.625H16.875V15H15Z" fill="#111111" />
                                                </svg>
                                            </div>
                                            <div className="text">FAQs</div>
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#" className>
                                            <div className="icon">
                                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_604_18468)">
                                                        <path d="M4.71875 7V1H15.5561L18.9991 4.44801V19H4.71875C4.71875 19 4.71875 16.2 4.71875 13.5" stroke="#111111" strokeWidth="1.2" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M19.0015 4.44801H15.5586V1L19.0015 4.44801Z" stroke="#111111" strokeWidth="1.2" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M7.53469 14.5507C9.89243 14.5507 11.8037 12.6366 11.8037 10.2754C11.8037 7.91415 9.89243 6 7.53469 6C5.17695 6 3.26562 7.91415 3.26562 10.2754C3.26562 12.6366 5.17695 14.5507 7.53469 14.5507Z" stroke="#111111" strokeWidth="1.2" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5.41029 13.9852L2.90967 16.4895C2.47263 16.9272 1.76451 16.9272 1.3275 16.4895C0.890833 16.0522 0.890833 15.3427 1.3275 14.9054L3.82812 12.4011M6.14799 10.2051L7.11794 11.175L8.91794 9.375" stroke="#111111" strokeWidth="1.2" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_604_18468">
                                                            <rect width={20} height={20} fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="text">Privacy policy</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="center-item">
                                <div className="center-heading">Connect us</div>
                                <ul className="wg-social">
                                    <li>
                                        <a href="#"><i className="icon-facebook" /></a>
                                    </li>
                                    <li className="active">
                                        <a href="#"><i className="icon-twitter" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-linkedin" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="icon-instagram" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bot text-center">
                            <div className="wrap">
                                <div className="mb-20">
                                    <img src="/AdminSide/images/menu-left/img-bot.png" alt />
                                </div>
                                <div className="mb-20">
                                    <h6>Hi, how can we help?</h6>
                                    <div className="text">Contact us if you have any assistance, we will contact you as soon as possible</div>
                                </div>
                                <a href="#" className="tf-button w-full">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /section-menu-left */}
                {/* section-content-right */}
                <div className="section-content-right">
                    {/* header-dashboard */}
                    <div className="header-dashboard">
                        <div className="wrap">
                            <div className="header-left">
                                <a href="index.html">
                                    <img className id="logo_header_mobile" alt src="/AdminSide/images/logo/logo.png" data-light="images/logo/logo.png" data-dark="images/logo/logo-dark.png" data-width="154px" data-height="52px" data-retina="images/logo/logo@2x.png" />
                                </a>
                                <div className="button-show-hide">
                                    <i className="icon-menu-left" />
                                </div>
                                <form className="form-search flex-grow">
                                    <fieldset className="name">
                                        <input type="text" placeholder="Search here..." className="show-search" name="name" tabIndex={2} defaultValue aria-required="true" required />
                                    </fieldset>
                                    <div className="button-submit">
                                        <button className type="submit"><i className="icon-search" /></button>
                                    </div>
                                    <div className="box-content-search" id="box-content-search">
                                        <ul className="mb-24">
                                            <li className="mb-14">
                                                <div className="body-title">Top selling product</div>
                                            </li>
                                            <li className="mb-14">
                                                <div className="divider" />
                                            </li>
                                            <li>
                                                <ul>
                                                    <li className="product-item gap14 mb-10">
                                                        <div className="image no-bg">
                                                            <img src="/AdminSide/images/products/17.png" alt />
                                                        </div>
                                                        <div className="flex items-center justify-between gap20 flex-grow">
                                                            <div className="name">
                                                                <a href="product-list.html" className="body-text">Dog Food Rachael Ray Nutrish®</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-10">
                                                        <div className="divider" />
                                                    </li>
                                                    <li className="product-item gap14 mb-10">
                                                        <div className="image no-bg">
                                                            <img src="/AdminSide/images/products/18.png" alt />
                                                        </div>
                                                        <div className="flex items-center justify-between gap20 flex-grow">
                                                            <div className="name">
                                                                <a href="product-list.html" className="body-text">Natural Dog Food Healthy Dog Food</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-10">
                                                        <div className="divider" />
                                                    </li>
                                                    <li className="product-item gap14">
                                                        <div className="image no-bg">
                                                            <img src="/AdminSide/images/products/19.png" alt />
                                                        </div>
                                                        <div className="flex items-center justify-between gap20 flex-grow">
                                                            <div className="name">
                                                                <a href="product-list.html" className="body-text">Freshpet Healthy Dog Food and Cat</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul className>
                                            <li className="mb-14">
                                                <div className="body-title">Order product</div>
                                            </li>
                                            <li className="mb-14">
                                                <div className="divider" />
                                            </li>
                                            <li>
                                                <ul>
                                                    <li className="product-item gap14 mb-10">
                                                        <div className="image no-bg">
                                                            <img src="/AdminSide/images/products/20.png" alt />
                                                        </div>
                                                        <div className="flex items-center justify-between gap20 flex-grow">
                                                            <div className="name">
                                                                <a href="product-list.html" className="body-text">Sojos Crunchy Natural Grain Free...</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-10">
                                                        <div className="divider" />
                                                    </li>
                                                    <li className="product-item gap14 mb-10">
                                                        <div className="image no-bg">
                                                            <img src="/AdminSide/images/products/21.png" alt />
                                                        </div>
                                                        <div className="flex items-center justify-between gap20 flex-grow">
                                                            <div className="name">
                                                                <a href="product-list.html" className="body-text">Kristin Watson</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-10">
                                                        <div className="divider" />
                                                    </li>
                                                    <li className="product-item gap14 mb-10">
                                                        <div className="image no-bg">
                                                            <img src="/AdminSide/images/products/22.png" alt />
                                                        </div>
                                                        <div className="flex items-center justify-between gap20 flex-grow">
                                                            <div className="name">
                                                                <a href="product-list.html" className="body-text">Mega Pumpkin Bone</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-10">
                                                        <div className="divider" />
                                                    </li>
                                                    <li className="product-item gap14">
                                                        <div className="image no-bg">
                                                            <img src="/AdminSide/images/products/23.png" alt />
                                                        </div>
                                                        <div className="flex items-center justify-between gap20 flex-grow">
                                                            <div className="name">
                                                                <a href="product-list.html" className="body-text">Mega Pumpkin Bone</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                            <div className="header-grid">
                                <div className="header-item country">
                                    <select className="image-select no-text">
                                        <option data-thumbnail="images/country/1.png">ENG</option>
                                        <option data-thumbnail="images/country/9.png">VIE</option>
                                    </select>
                                </div>
                                <div className="header-item button-dark-light">
                                    <i className="icon-moon" />
                                </div>
                                <div className="popup-wrap noti type-header">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="header-item">
                                                <span className="text-tiny">1</span>
                                                <i className="icon-bell" />
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <h6>Message</h6>
                                            </li>
                                            <li>
                                                <div className="noti-item w-full wg-user active">
                                                    <div className="image">
                                                        <img src="/AdminSide/images/avatar/user-11.png" alt />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="flex items-center justify-between">
                                                            <a href="#" className="body-title">Cameron Williamson</a>
                                                            <div className="time">10:13 PM</div>
                                                        </div>
                                                        <div className="text-tiny">Hello?</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="noti-item w-full wg-user active">
                                                    <div className="image">
                                                        <img src="/AdminSide/images/avatar/user-12.png" alt />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="flex items-center justify-between">
                                                            <a href="#" className="body-title">Ralph Edwards</a>
                                                            <div className="time">10:13 PM</div>
                                                        </div>
                                                        <div className="text-tiny">Are you there?  interested i this...</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="noti-item w-full wg-user active">
                                                    <div className="image">
                                                        <img src="/AdminSide/images/avatar/user-13.png" alt />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="flex items-center justify-between">
                                                            <a href="#" className="body-title">Eleanor Pena</a>
                                                            <div className="time">10:13 PM</div>
                                                        </div>
                                                        <div className="text-tiny">Interested in this loads?</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="noti-item w-full wg-user active">
                                                    <div className="image">
                                                        <img src="/AdminSide/images/avatar/user-11.png" alt />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="flex items-center justify-between">
                                                            <a href="#" className="body-title">Jane Cooper</a>
                                                            <div className="time">10:13 PM</div>
                                                        </div>
                                                        <div className="text-tiny">Okay...Do we have a deal?</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a href="#" className="tf-button w-full">View all</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="popup-wrap message type-header">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="header-item">
                                                <span className="text-tiny">1</span>
                                                <i className="icon-message-square" />
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton2">
                                            <li>
                                                <h6>Notifications</h6>
                                            </li>
                                            <li>
                                                <div className="message-item item-1">
                                                    <div className="image">
                                                        <i className="icon-noti-1" />
                                                    </div>
                                                    <div>
                                                        <div className="body-title-2">Discount available</div>
                                                        <div className="text-tiny">Morbi sapien massa, ultricies at rhoncus at, ullamcorper nec diam</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="message-item item-2">
                                                    <div className="image">
                                                        <i className="icon-noti-2" />
                                                    </div>
                                                    <div>
                                                        <div className="body-title-2">Account has been verified</div>
                                                        <div className="text-tiny">Mauris libero ex, iaculis vitae rhoncus et</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="message-item item-3">
                                                    <div className="image">
                                                        <i className="icon-noti-3" />
                                                    </div>
                                                    <div>
                                                        <div className="body-title-2">Order shipped successfully</div>
                                                        <div className="text-tiny">Integer aliquam eros nec sollicitudin sollicitudin</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="message-item item-4">
                                                    <div className="image">
                                                        <i className="icon-noti-4" />
                                                    </div>
                                                    <div>
                                                        <div className="body-title-2">Order pending: <span>ID 305830</span></div>
                                                        <div className="text-tiny">Ultricies at rhoncus at ullamcorper</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a href="#" className="tf-button w-full">View all</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="header-item button-zoom-maximize">
                                    <div className>
                                        <i className="icon-maximize" />
                                    </div>
                                </div>
                                <div className="popup-wrap apps type-header">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="header-item">
                                                <i className="icon-grid" />
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton4">
                                            <li>
                                                <h6>Related apps</h6>
                                            </li>
                                            <li>
                                                <ul className="list-apps">
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="/AdminSide/images/apps/item-1.png" alt />
                                                        </div>
                                                        <a href="#">
                                                            <div className="text-tiny">Photoshop</div>
                                                        </a>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="/AdminSide/images/apps/item-2.png" alt />
                                                        </div>
                                                        <a href="#">
                                                            <div className="text-tiny">illustrator</div>
                                                        </a>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="/AdminSide/images/apps/item-3.png" alt />
                                                        </div>
                                                        <a href="#">
                                                            <div className="text-tiny">Sheets</div>
                                                        </a>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="/AdminSide/images/apps/item-4.png" alt />
                                                        </div>
                                                        <a href="#">
                                                            <div className="text-tiny">Gmail</div>
                                                        </a>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="/AdminSide/images/apps/item-5.png" alt />
                                                        </div>
                                                        <a href="#">
                                                            <div className="text-tiny">Messenger</div>
                                                        </a>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="/AdminSide/images/apps/item-6.png" alt />
                                                        </div>
                                                        <a href="#">
                                                            <div className="text-tiny">Youtube</div>
                                                        </a>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="/AdminSide/images/apps/item-7.png" alt />
                                                        </div>
                                                        <a href="#">
                                                            <div className="text-tiny">Flaticon</div>
                                                        </a>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="/AdminSide/images/apps/item-8.png" alt />
                                                        </div>
                                                        <a href="#">
                                                            <div className="text-tiny">Instagram</div>
                                                        </a>
                                                    </li>
                                                    <li className="item">
                                                        <div className="image">
                                                            <img src="/AdminSide/images/apps/item-9.png" alt />
                                                        </div>
                                                        <a href="#">
                                                            <div className="text-tiny">PDF</div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#" className="tf-button w-full">View all app</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="popup-wrap user type-header">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="header-user wg-user">
                                                <span className="image">
                                                    <img src="/AdminSide/images/avatar/user-1.png" alt />
                                                </span>
                                                <span className="flex flex-column">
                                                    <span className="body-title mb-2">Kristin Watson</span>
                                                    <span className="text-tiny">Admin</span>
                                                </span>
                                            </span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end has-content" aria-labelledby="dropdownMenuButton3">
                                            <li>
                                                <a href="#" className="user-item">
                                                    <div className="icon">
                                                        <i className="icon-user" />
                                                    </div>
                                                    <div className="body-title-2">Account</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="user-item">
                                                    <div className="icon">
                                                        <i className="icon-mail" />
                                                    </div>
                                                    <div className="body-title-2">Inbox</div>
                                                    <div className="number">27</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="user-item">
                                                    <div className="icon">
                                                        <i className="icon-file-text" />
                                                    </div>
                                                    <div className="body-title-2">Taskboard</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="setting.html" className="user-item">
                                                    <div className="icon">
                                                        <i className="icon-settings" />
                                                    </div>
                                                    <div className="body-title-2">Setting</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="user-item">
                                                    <div className="icon">
                                                        <i className="icon-headphones" />
                                                    </div>
                                                    <div className="body-title-2">Support</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="login.html" className="user-item">
                                                    <div className="icon">
                                                        <i className="icon-log-out" />
                                                    </div>
                                                    <div className="body-title-2">Log out</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /header-dashboard */}
                    {/* main-content */}
                    <div className="main-content">
                        {/* main-content-wrap */}
                        <div className="main-content-inner">
                            {/* main-content-wrap */}
                            <div className="main-content-wrap">
                                <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                                    <h3>Setting</h3>
                                    <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
                                        <li>
                                            <a href="index.html"><div className="text-tiny">Dashboard</div></a>
                                        </li>
                                        <li>
                                            <i className="icon-chevron-right" />
                                        </li>
                                        <li>
                                            <div className="text-tiny">Setting</div>
                                        </li>
                                    </ul>
                                </div>
                                {/* setting */}
                                <form className="form-setting form-style-2">
                                    <div className="wg-box">
                                        <div className="left">
                                            <h5 className="mb-4">Recent Order</h5>
                                            <div className="body-text">Setup license code</div>
                                        </div>
                                        <div className="right flex-grow">
                                            <div className="block-warning w-full mb-24">
                                                <i className="icon-alert-octagon" />
                                                <div className="body-title-2">Your license is invalid. Please activate your license!</div>
                                            </div>
                                            <fieldset className="name mb-24">
                                                <div className="body-title mb-10">Your username</div>
                                                <input className="flex-grow" type="text" placeholder="Enter your username" name="name" tabIndex={0} defaultValue aria-required="true" required />
                                            </fieldset>
                                            <fieldset className="text mb-24">
                                                <div className="flex items-center justify-between gap10 mb-10">
                                                    <div className="body-title">Purchase code</div>
                                                    <a href="#" className="body-text tf-color">What’s this?</a>
                                                </div>
                                                <input className="flex-grow" type="text" placeholder="Enter your purchase code" name="text" tabIndex={0} defaultValue aria-required="true" required />
                                            </fieldset>
                                            <div className="flex gap10 mb-24">
                                                <input className="total-checkbox" type="checkbox" />
                                                <div className="body-text">Confirm that, according to the Envato License Terms, each license entitles one person for a single project. Creating multiple unregistered installations is a copyright violation. <span className="tf-color">More info</span></div>
                                            </div>
                                            <div className="flex flex-wrap gap10 mb-50">
                                                <a href="#" className="tf-button">Active license</a>
                                                <a href="#" className="tf-button style-1">Reset license on this domain</a>
                                            </div>
                                            <div className="text-tiny tf-color-1 mb-10">Note: Your site IP will be added to blacklist after 5 failed attempts.</div>
                                            <div className="body-text">A purchase code (license) is only valid for One Domain. Are you using this theme on a new domain? Purchase a new license here to get a new purchase code.</div>
                                        </div>
                                    </div>
                                    <div className="wg-box">
                                        <div className="left">
                                            <h5 className="mb-4">General Information</h5>
                                            <div className="body-text">Setting site information</div>
                                        </div>
                                        <div className="right flex-grow">
                                            <fieldset className="email mb-10 add-more-right">
                                                <div className="body-title mb-10">Admin email</div>
                                                <input className="flex-grow" type="email" placeholder="Enter your email" name="email" tabIndex={0} defaultValue aria-required="true" required />
                                                <a href="#" className="tf-button add-more">Add more <i className="icon-plus" /></a>
                                            </fieldset>
                                            <div className="block-warning type-main w-full mb-24">
                                                <i className="icon-alert-octagon" />
                                                <div className="body-title-2">You can add up to 4 emails</div>
                                            </div>
                                            <fieldset className="timezone mb-24">
                                                <div className="body-title mb-10">Timezone</div>
                                                <div className="select flex-grow">
                                                    <select className>
                                                        <option>UTC</option>
                                                        <option>UTC +0</option>
                                                        <option>UTC +1</option>
                                                        <option>UTC +2</option>
                                                        <option>UTC +3</option>
                                                        <option>UTC +4</option>
                                                        <option>UTC +5</option>
                                                        <option>UTC +6</option>
                                                        <option>UTC +7</option>
                                                    </select>
                                                </div>
                                            </fieldset>
                                            <fieldset className="language mb-24">
                                                <div className="body-title mb-10">Site language</div>
                                                <div className="select flex-grow">
                                                    <select className>
                                                        <option>English - EN</option>
                                                        <option>France</option>
                                                        <option>Japan</option>
                                                        <option>Viet Nam</option>
                                                    </select>
                                                </div>
                                            </fieldset>
                                            <fieldset className="mb-24">
                                                <div className="body-title mb-10">Front site language direction</div>
                                                <div className="radio-buttons">
                                                    <div className="item">
                                                        <input className type="radio" name="site-language" id="site-language1" defaultChecked />
                                                        <label className htmlFor="site-language1"><span className="body-title-2">Left to Right</span></label>
                                                    </div>
                                                    <div className="item">
                                                        <input className type="radio" name="site-language" id="site-language2" />
                                                        <label className htmlFor="site-language2"><span className="body-title-2">Right to Left</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className="flex gap10">
                                                <input className type="checkbox" />
                                                <div className="body-text">Enable to send error reporting via email?</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wg-box">
                                        <div className="left">
                                            <h5 className="mb-4">Admin appearance</h5>
                                            <div className="body-text">Setting admin appearance such as editor, language...</div>
                                        </div>
                                        <div className="right flex-grow">
                                            <div className="flex gap24 mobile-wrap">
                                                <div className="flex gap24 w-half">
                                                    <fieldset className="title mb-24">
                                                        <div className="body-title mb-10">Avatar</div>
                                                        <div className="upload-image style-2">
                                                            <div className="item up-load">
                                                                <label className="uploadfile" htmlFor="myFile">
                                                                    <span className="icon">
                                                                        <i className="icon-upload-cloud" />
                                                                    </span>
                                                                    <span className="text-tiny">Drop your images here or select <span className="tf-color">click to browse</span></span>
                                                                    <input type="file" id="myFile" name="filename" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset className="title mb-24">
                                                        <div className="body-title mb-10">Favicon</div>
                                                        <div className="upload-image style-2">
                                                            <div className="item up-load">
                                                                <label className="uploadfile" htmlFor="myFile1">
                                                                    <span className="icon">
                                                                        <i className="icon-upload-cloud" />
                                                                    </span>
                                                                    <span className="text-tiny">Drop your images here or select <span className="tf-color">click to browse</span></span>
                                                                    <input type="file" id="myFile1" name="filename" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <fieldset className="title mb-24 w-half">
                                                    <div className="body-title mb-10">Cover (1920x1080)</div>
                                                    <div className="upload-image style-2">
                                                        <div className="item up-load">
                                                            <label className="uploadfile" htmlFor="myFile2">
                                                                <span className="icon">
                                                                    <i className="icon-upload-cloud" />
                                                                </span>
                                                                <span className="text-tiny">Drop your images here or select <span className="tf-color">click to browse</span></span>
                                                                <input type="file" id="myFile2" name="filename" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <fieldset className="title mb-24">
                                                <div className="body-title mb-10">Admin title</div>
                                                <input className="flex-grow" type="text" placeholder="Enter title" name="title" tabIndex={0} defaultValue="Themesflat" aria-required="true" required />
                                            </fieldset>
                                            <fieldset className="mb-24">
                                                <div className="body-title mb-10">Admin language direction</div>
                                                <div className="radio-buttons">
                                                    <div className="item">
                                                        <input className type="radio" name="admin-language" id="admin-language1" defaultChecked />
                                                        <label className htmlFor="admin-language1"><span className="body-title-2">Left to Right</span></label>
                                                    </div>
                                                    <div className="item">
                                                        <input className type="radio" name="admin-language" id="admin-language2" />
                                                        <label className htmlFor="admin-language2"><span className="body-title-2">Right to Left</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="mb-24">
                                                <div className="body-title mb-10">Rich Editor</div>
                                                <div className="radio-buttons">
                                                    <div className="item">
                                                        <input className type="radio" name="rich-editor" id="rich-editor1" defaultChecked />
                                                        <label className htmlFor="rich-editor1"><span className="body-title-2">CKEditor</span></label>
                                                    </div>
                                                    <div className="item">
                                                        <input className type="radio" name="rich-editor" id="rich-editor2" />
                                                        <label className htmlFor="rich-editor2"><span className="body-title-2">TinyMCE</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className="flex gap10">
                                                <input className type="checkbox" />
                                                <div className="body-text">Enable change admin theme?</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wg-box">
                                        <div className="left">
                                            <h5 className="mb-4">Cache</h5>
                                            <div className="body-text">Config cache for system for optimize speed</div>
                                        </div>
                                        <div className="right flex-grow">
                                            <fieldset className="mb-24">
                                                <div className="body-title mb-10">Enable cache?</div>
                                                <div className="radio-buttons">
                                                    <div className="item">
                                                        <input className type="radio" name="enable-cache" id="enable-cache1" />
                                                        <label className htmlFor="enable-cache1"><span className="body-title-2">Yes</span></label>
                                                    </div>
                                                    <div className="item">
                                                        <input className type="radio" name="enable-cache" id="enable-cache2" defaultChecked />
                                                        <label className htmlFor="enable-cache2"><span className="body-title-2">No</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className>
                                                <div className="body-title mb-10">Cache admin menu?</div>
                                                <div className="radio-buttons">
                                                    <div className="item">
                                                        <input className type="radio" name="cache-admin" id="cache-admin1" />
                                                        <label className htmlFor="cache-admin1"><span className="body-title-2">Yes</span></label>
                                                    </div>
                                                    <div className="item">
                                                        <input className type="radio" name="cache-admin" id="cache-admin2" defaultChecked />
                                                        <label className htmlFor="cache-admin2"><span className="body-title-2">No</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="wg-box">
                                        <div className="left">
                                            <h5 className="mb-4">Datatables</h5>
                                            <div className="body-text">Settings for datatables</div>
                                        </div>
                                        <div className="right flex-grow">
                                            <fieldset className="mb-24">
                                                <div className="body-title mb-10">Default show column visibility?</div>
                                                <div className="radio-buttons">
                                                    <div className="item">
                                                        <input className type="radio" name="show-column" id="show-column1" />
                                                        <label className htmlFor="show-column1"><span className="body-title-2">Yes</span></label>
                                                    </div>
                                                    <div className="item">
                                                        <input className type="radio" name="show-column" id="show-column2" defaultChecked />
                                                        <label className htmlFor="show-column2"><span className="body-title-2">No</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className>
                                                <div className="body-title mb-10">Default show export button?</div>
                                                <div className="radio-buttons">
                                                    <div className="item">
                                                        <input className type="radio" name="show-export" id="show-export1" />
                                                        <label className htmlFor="show-export1"><span className="body-title-2">Yes</span></label>
                                                    </div>
                                                    <div className="item">
                                                        <input className type="radio" name="show-export" id="show-export2" defaultChecked />
                                                        <label className htmlFor="show-export2"><span className="body-title-2">No</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="wg-box">
                                        <div className="left">
                                            <h5 className="mb-4">Optimize page speed</h5>
                                            <div className="body-text">Minify HTML output, inline CSS, remove comments...</div>
                                        </div>
                                        <div className="right flex-grow">
                                            <fieldset className>
                                                <div className="body-title mb-10">Enable optimize page speed?</div>
                                                <div className="radio-buttons">
                                                    <div className="item">
                                                        <input className type="radio" name="optimize" id="optimize1" />
                                                        <label className htmlFor="optimize1"><span className="body-title-2">Yes</span></label>
                                                    </div>
                                                    <div className="item">
                                                        <input className type="radio" name="optimize" id="optimize2" defaultChecked />
                                                        <label className htmlFor="optimize2"><span className="body-title-2">No</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="wg-box">
                                        <div className="left">
                                            <h5 className="mb-4">Theme</h5>
                                            <div className="body-text">Setting for theme</div>
                                        </div>
                                        <div className="right flex-grow">
                                            <fieldset className="mb-24">
                                                <div className="body-title mb-10">Enable cache site map?</div>
                                                <div className="radio-buttons">
                                                    <div className="item">
                                                        <input className type="radio" name="cache-site" id="cache-site1" defaultChecked />
                                                        <label className htmlFor="cache-site1"><span className="body-title-2">Yes</span></label>
                                                    </div>
                                                    <div className="item">
                                                        <input className type="radio" name="cache-site" id="cache-site2" />
                                                        <label className htmlFor="cache-site2"><span className="body-title-2">No</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className="mb-24">
                                                <div className="body-title mb-10">Cache Time Site map (minutes)</div>
                                                <input className="flex-grow" type="text" placeholder="Enter title" name="title" tabIndex={0} defaultValue={120} aria-required="true" required />
                                            </fieldset>
                                            <div className="flex gap10 mb-24">
                                                <input className type="checkbox" />
                                                <div className="body-text">Show admin bar (When admin logged in, still show admin bar in website)?</div>
                                            </div>
                                            <fieldset className="mb-24">
                                                <div className="body-title mb-10">Redirect all not found requests to homepage?</div>
                                                <div className="radio-buttons">
                                                    <div className="item">
                                                        <input className type="radio" name="redirect" id="redirect1" />
                                                        <label className htmlFor="redirect1"><span className="body-title-2">Yes</span></label>
                                                    </div>
                                                    <div className="item">
                                                        <input className type="radio" name="redirect" id="redirect2" defaultChecked />
                                                        <label className htmlFor="redirect2"><span className="body-title-2">No</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset className>
                                                <div className="body-title mb-10">Show guidelines?</div>
                                                <div className="radio-buttons">
                                                    <div className="item">
                                                        <input className type="radio" name="guidelines" id="guidelines1" />
                                                        <label className htmlFor="guidelines1"><span className="body-title-2">Yes</span></label>
                                                    </div>
                                                    <div className="item">
                                                        <input className type="radio" name="guidelines" id="guidelines2" defaultChecked />
                                                        <label className htmlFor="guidelines2"><span className="body-title-2">No</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="wg-box">
                                        <div className="left">
                                            <h5 className="mb-4">Contact</h5>
                                            <div className="body-text">Settings for contact plugin</div>
                                        </div>
                                        <div className="right flex-grow">
                                            <fieldset className="text mb-10 add-more-right">
                                                <div className="body-title mb-10">Blacklist keywords</div>
                                                <input className="flex-grow" type="text" placeholder="keywords" name="text" tabIndex={0} defaultValue aria-required="true" required />
                                                <a href="#" className="tf-button add-more">Add more <i className="icon-plus" /></a>
                                            </fieldset>
                                            <div className="block-warning type-main w-full mb-24">
                                                <i className="icon-alert-octagon" />
                                                <div className="body-title-2">Blacklist contact requests if it includes those keywords in the content field (separate by comma).</div>
                                            </div>
                                            <fieldset className="text mb-10 add-more-right">
                                                <div className="body-title mb-10">Blacklist email domains</div>
                                                <input className="flex-grow" type="text" placeholder="Domains" name="text" tabIndex={0} defaultValue aria-required="true" required />
                                                <a href="#" className="tf-button add-more">Add more <i className="icon-plus" /></a>
                                            </fieldset>
                                            <div className="block-warning type-main w-full mb-24">
                                                <i className="icon-alert-octagon" />
                                                <div className="body-title-2">Blacklist contact requests if the email domain is in blacklist domains (separate by comma).</div>
                                            </div>
                                            <div className="flex gap10">
                                                <input className type="checkbox" />
                                                <div className="body-text">Enable math captcha?</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wg-box">
                                        <div className="left">
                                            <h5 className="mb-4">Google Analytics</h5>
                                            <div className="body-text">Config Credentials for Google Analytics</div>
                                        </div>
                                        <div className="right flex-grow">
                                            <fieldset className="text mb-10 add-more-right">
                                                <div className="body-title mb-10">Google tag ID</div>
                                                <input className="flex-grow" type="text" placeholder="Enter your Google tag ID" name="text" tabIndex={0} defaultValue aria-required="true" required />
                                                <a href="#" className="tf-button add-more">Add more <i className="icon-plus" /></a>
                                            </fieldset>
                                            <div className="block-warning type-main w-full mb-24">
                                                <i className="icon-alert-octagon" />
                                                <div className="body-title-2">https://support.google.com/analytics/answer/9539598#find-G-ID</div>
                                            </div>
                                            <fieldset className="text mb-10 add-more-right">
                                                <div className="body-title mb-10">Property ID for GA4</div>
                                                <input className="flex-grow" type="text" placeholder="Google analytics property ID (GA4)" name="text" tabIndex={0} defaultValue aria-required="true" required />
                                                <a href="#" className="tf-button add-more">Add more <i className="icon-plus" /></a>
                                            </fieldset>
                                            <div className="block-warning type-main w-full">
                                                <i className="icon-alert-octagon" />
                                                <div className="body-title-2">https://developers.google.com/analytics/devguides/reporting/data/v1/property-id</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wg-box">
                                        <div className="left">
                                            <h5 className="mb-4">Blog</h5>
                                            <div className="body-text">Settings for Blog</div>
                                        </div>
                                        <div className="right flex-grow">
                                            <div className="flex gap10 mb-10">
                                                <input className type="checkbox" />
                                                <div className="body-text">Enable Blog Post Schema?</div>
                                            </div>
                                            <div className="block-warning type-main w-full mb-24">
                                                <i className="icon-alert-octagon" />
                                                <div className="body-title-2">Blacklist contact requests if it includes those keywords in the content field (separate by comma).</div>
                                            </div>
                                            <fieldset className>
                                                <div className="body-title mb-10">Schema type</div>
                                                <div className="select flex-grow">
                                                    <select className>
                                                        <option>News Article</option>
                                                        <option>Line Chart</option>
                                                        <option>Column Chart</option>
                                                    </select>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="wg-box">
                                        <div className="left">
                                            <h5 className="mb-4">Newsletter</h5>
                                            <div className="body-text">Settings for newsletter (auto send newsletter email to SendGrid, Mailchimp... when someone register newsletter on website).</div>
                                        </div>
                                        <div className="right flex-grow">
                                            <fieldset className>
                                                <div className="body-title mb-10">Enable newsletter contacts list API?</div>
                                                <div className="radio-buttons">
                                                    <div className="item">
                                                        <input className type="radio" name="newsletter" id="newsletter1" />
                                                        <label className htmlFor="newsletter1"><span className="body-title-2">Yes</span></label>
                                                    </div>
                                                    <div className="item">
                                                        <input className type="radio" name="newsletter" id="newsletter2" defaultChecked />
                                                        <label className htmlFor="newsletter2"><span className="body-title-2">No</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="wg-box">
                                        <div className="left">
                                            <h5 className="mb-4">Captcha</h5>
                                            <div className="body-text">Settings for Google Captcha</div>
                                        </div>
                                        <div className="right flex-grow">
                                            <fieldset className>
                                                <div className="body-title mb-10">Enable Captcha?</div>
                                                <div className="radio-buttons">
                                                    <div className="item">
                                                        <input className type="radio" name="captcha" id="captcha1" />
                                                        <label className htmlFor="captcha1"><span className="body-title-2">Yes</span></label>
                                                    </div>
                                                    <div className="item">
                                                        <input className type="radio" name="captcha" id="captcha2" defaultChecked />
                                                        <label className htmlFor="captcha2"><span className="body-title-2">No</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="wg-box">
                                        <div className="left">
                                            <h5 className="mb-4">Simple sliders</h5>
                                            <div className="body-text">Settings for Simple sliders</div>
                                        </div>
                                        <div className="right flex-grow">
                                            <fieldset className="mb-24">
                                                <div className="body-title mb-10">Using default assets?</div>
                                                <div className="radio-buttons">
                                                    <div className="item">
                                                        <input className type="radio" name="assets" id="assets1" defaultChecked />
                                                        <label className htmlFor="assets1"><span className="body-title-2">Yes</span></label>
                                                    </div>
                                                    <div className="item">
                                                        <input className type="radio" name="assets" id="assets2" />
                                                        <label className htmlFor="assets2"><span className="body-title-2">No</span></label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div className="body-text mb-24">If using assets option is enabled then below scripts will be auto added to front site.</div>
                                            <div className="body-text tf-color-3">
                                                /vendor/core/plugins/simple-slider/libraries/owl-carousel/owl.carousel.css <br />
                                                /vendor/core/plugins/simple-slider/css/simple-slider.css <br />
                                                /vendor/core/plugins/simple-slider/libraries/owl-carousel/owl.carousel.js <br />
                                                /vendor/core/plugins/simple-slider/js/simple-slider.js
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="tf-button w180 m-auto">Save setting</button>
                                </form>
                                {/* /setting */}
                            </div>
                            {/* /main-content-wrap */}
                        </div>
                        {/* /main-content-wrap */}
                        {/* bottom-page */}
                        <div className="bottom-page">
                            <div className="body-text">Copyright © 2024 Remos. Design with</div>
                            <i className="icon-heart" />
                            <div className="body-text">by <a href="https://themeforest.net/user/themesflat/portfolio">Themesflat</a> All rights reserved.</div>
                        </div>
                        {/* /bottom-page */}
                    </div>
                    {/* /main-content */}
                </div>
                {/* /section-content-right */}
            </div>
            {/* /layout-wrap */}

        </>
    )
}
export default Settings