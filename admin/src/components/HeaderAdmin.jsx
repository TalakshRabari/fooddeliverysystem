

function HeaderAdmin() {
    return (
        <>
            {/* header-dashboard */}
            <div className="header-dashboard">
                <div className="wrap">
                    <div className="header-left">
                        <a href="index.html">
                            <img className id="logo_header_mobile" alt src="AdminSide/images/logo/logo.png" data-light="/AdminSide/images/logo/logo.png" data-dark="/AdminSide/images/logo/logo-dark.png" data-width="154px" data-height="52px" data-retina="AdminSide/images/logo/logo@2x.png" />
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
                                                    <img src="AdminSide/images/products/17.png" alt />
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
                                                    <img src="AdminSide/images/products/18.png" alt />
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
                                                    <img src="AdminSide/images/products/19.png" alt />
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
                                                    <img src="AdminSide/images/products/20.png" alt />
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
                                                    <img src="AdminSide/images/products/21.png" alt />
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
                                                    <img src="AdminSide/images/products/22.png" alt />
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
                                                    <img src="AdminSide/images/products/23.png" alt />
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
                    
                        <div className="popup-wrap user type-header">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="header-user wg-user">
                                        <span className="image">
                                            <img src="/AdminSide/images/avatar/user-1.png" alt />
                                        </span>
                                        <span className="flex flex-column">
                                            <span className="body-title mb-2">Talaksh Rabari </span>
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
                                                {/* <i className="icon-settings" /> */}
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


        </>
    )
}
export default HeaderAdmin