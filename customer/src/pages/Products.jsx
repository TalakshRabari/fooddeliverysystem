// import "./css/vendor/bootstrap.min.css"
// import "./css/vendor/classic.css"
// import "./css/vendor/classic.date.css"
// import "./css/vendor/font-awesome.css"
// import "./css/vendor/slick-theme.css"
// import "./css/vendor/slick.css"
import { useEffect } from "react"
import Footer from "../component/Footer"
import PageTitle from "../component/PageTitle"
import { collection, onSnapshot } from "firebase/firestore"
import { useState } from "react"
import { db } from "../store/firebaseconfig"
import Product from "../component/Product"
import HeaderUsedashboard from "../component/HeaderUserdashboard"

function Products() {
    let [products, setProducts] = useState()

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        let colref = collection(db, "products")
        onSnapshot(colref, (snapshot) => {
            let result = []
            snapshot.docs.forEach((doc) => {
                result.push({ ...doc.data(), id: doc.id , url: doc.data().imageUrl})
            })
            setProducts(result)
        })
    }
    return (
        <>
            <div>
                {/* HEADER MENU START */}
                 <HeaderUsedashboard/>
                {/* HEADER MENU END */}
                {/* TITLE BANNER START */}
                <PageTitle title="Products" />
                {/* TITLE BANNER END */}

                {/* SHOP DETAIL SECTION START */}
                <section className="shop-detail">
                    <div className="container-fluid">
                        <div class="row row-gap-4">
                            <div className="col-lg-3">
                                <div>
                                    <form action="https://uiparadox.co.uk/templates/savory-bites/shop-list.html" method="get" className=" mb-32">
                                        <div className="search-bar">
                                            <div className="search-form">
                                                <input type="search" name="search" id="search" className="input-search" placeholder="Search Here" />
                                            </div>
                                            <div className="search-button">
                                                <button type="submit" className="input-button">
                                                    <i className="fa-light fa-magnifying-glass white" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                    <div>
                                        <div className="side-bar-part-1 mb-32">
                                            <h6 className="mb-16 color-primary">Availability</h6>
                                            <hr className="mb-16 light-gray" />
                                            <div className="d-flex align-items-center justify-content-between mb-16">
                                                <div className="checkbox-wrapper-46">
                                                    <input type="checkbox" id="out-stock" className="inp-cbx" />
                                                    <label htmlFor="out-stock" className="cbx"><span>
                                                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                                                            <polyline points="1.5 6 4.5 9 10.5 1" />
                                                        </svg></span><span className="dark-gray fw-400">In Stock</span>
                                                    </label>
                                                </div>
                                                <p className="dark-gray fw-400">(02)</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="checkbox-wrapper-46">
                                                    <input type="checkbox" id="in-stock" className="inp-cbx" />
                                                    <label htmlFor="in-stock" className="cbx"><span>
                                                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                                                            <polyline points="1.5 6 4.5 9 10.5 1" />
                                                        </svg></span><span className="dark-gray fw-400">Out of Stock</span>
                                                    </label>
                                                </div>
                                                <p className="dark-gray fw-400">(02)</p>
                                            </div>
                                        </div>
                                        <div className="side-bar-part-1 mb-32">
                                            <h6 className="mb-16 color-primary">Category</h6>
                                            <hr className="mb-16 light-gray" />
                                            <div className="d-flex align-items-center justify-content-between mb-16">
                                                <a href="menu.html" className="p category-content">Burgers</a>
                                                <p>(4)</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-16">
                                                <a href="menu.html" className="p category-content">Petti Burgers</a>
                                                <p>(1)</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-16">
                                                <a href="menu.html" className="p category-content">Fried Chickens</a>
                                                <p>(4)</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <a href="menu.html" className="p category-content">Sandwiches</a>
                                                <p>(7)</p>
                                            </div>
                                        </div>
                                        <div className="side-bar-part-1 mb-32">
                                            <h6 className="mb-16 color-primary">Filter by Rating</h6>
                                            <hr className="mb-16 light-gray" />
                                            <div className="d-flex align-items-center justify-content-between mb-16">
                                                <div className="checkbox-wrapper-46">
                                                    <input type="checkbox" id="5-star" className="inp-cbx" />
                                                    <label htmlFor="5-star" className="cbx"><span>
                                                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                                                            <polyline points="1.5 6 4.5 9 10.5 1" />
                                                        </svg></span><span className="dark-gray fw-400">
                                                            <i className="fa-solid fa-star color-ter" />
                                                            <i className="fa-solid fa-star color-ter" />
                                                            <i className="fa-solid fa-star color-ter" />
                                                            <i className="fa-solid fa-star color-ter" />
                                                            <i className="fa-solid fa-star color-ter" />
                                                        </span>
                                                    </label>
                                                </div>
                                                <p className="dark-gray fw-400">(5)</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-16">
                                                <div className="checkbox-wrapper-46">
                                                    <input type="checkbox" id="4-star" className="inp-cbx" />
                                                    <label htmlFor="4-star" className="cbx"><span>
                                                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                                                            <polyline points="1.5 6 4.5 9 10.5 1" />
                                                        </svg></span><span className="dark-gray fw-400">
                                                            <i className="fa-solid fa-star color-ter" />
                                                            <i className="fa-solid fa-star color-ter" />
                                                            <i className="fa-solid fa-star color-ter" />
                                                            <i className="fa-solid fa-star color-ter" />
                                                            <i className="fa-regular fa-star color-ter" />
                                                        </span>
                                                    </label>
                                                </div>
                                                <p className="dark-gray fw-400">(4)</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-16">
                                                <div className="checkbox-wrapper-46">
                                                    <input type="checkbox" id="3-star" className="inp-cbx" />
                                                    <label htmlFor="3-star" className="cbx"><span>
                                                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                                                            <polyline points="1.5 6 4.5 9 10.5 1" />
                                                        </svg></span><span className="dark-gray fw-400">
                                                            <i className="fa-solid fa-star color-ter" />
                                                            <i className="fa-solid fa-star color-ter" />
                                                            <i className="fa-solid fa-star color-ter" />
                                                            <i className="fa-regular fa-star color-ter" />
                                                            <i className="fa-regular fa-star color-ter" />
                                                        </span>
                                                    </label>
                                                </div>
                                                <p className="dark-gray fw-400">(3)</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-16">
                                                <div className="checkbox-wrapper-46">
                                                    <input type="checkbox" id="2-star" className="inp-cbx" />
                                                    <label htmlFor="2-star" className="cbx"><span>
                                                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                                                            <polyline points="1.5 6 4.5 9 10.5 1" />
                                                        </svg></span><span className="dark-gray fw-400">
                                                            <i className="fa-solid fa-star color-ter" />
                                                            <i className="fa-solid fa-star color-ter" />
                                                            <i className="fa-regular fa-star color-ter" />
                                                            <i className="fa-regular fa-star color-ter" />
                                                            <i className="fa-regular fa-star color-ter" />
                                                        </span>
                                                    </label>
                                                </div>
                                                <p className="dark-gray fw-400">(2)</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="checkbox-wrapper-46">
                                                    <input type="checkbox" id="1-star" className="inp-cbx" />
                                                    <label htmlFor="1-star" className="cbx"><span>
                                                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                                                            <polyline points="1.5 6 4.5 9 10.5 1" />
                                                        </svg></span><span className="dark-gray fw-400">
                                                            <i className="fa-solid fa-star color-ter" />
                                                            <i className="fa-regular fa-star color-ter" />
                                                            <i className="fa-regular fa-star color-ter" />
                                                            <i className="fa-regular fa-star color-ter" />
                                                            <i className="fa-regular fa-star color-ter" />
                                                        </span>
                                                    </label>
                                                </div>
                                                <p className="dark-gray fw-400">(1)</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-9">

                                <div className="row row-gap-4" style={{rowGap:" 20 rem"  }}>
                                    {
                                        products && products.map((product) => (
                                            
                                                <Product {...product} />
                                        ))

                                    }
                                </div>


                            </div>
                        </div>
                    </div>
                </section>
                {/* SHOP DETAIL SECTION END */}




                {/* FOOTER START */}
                <Footer />



                {/* FOOTER END */}
                {/* Main Wrapper End */}

                {/* Back To Top Start */}


            </div>

        </>
    )

}
export default Products