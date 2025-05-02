// import "./css/vendor/bootstrap.min.css"
// import "./css/vendor/classic.css"
// import "./css/vendor/classic.date.css"
// import "./css/vendor/font-awesome.css"
// import "./css/vendor/slick-theme.css"
// import "./css/vendor/slick.css"
import { useEffect, useState } from "react"
import Footer from "../component/Footer"
import Header from "../component/Header"
import PageTitle from "../component/PageTitle"
import { useNavigate, useParams } from "react-router"
import { db } from "../store/firebaseconfig"
import { doc, getDoc } from "firebase/firestore"
import { useCartStore } from "../store/cart"
import HeaderUsedashboard from "../component/HeaderUserdashboard"


function ProductDetails() {

    let { id } = useParams()
    let [product, setProduct] = useState()

    let [quantity, setQuantity] = useState(1)
    let navigate = useNavigate()

    useEffect(() => {
        if(id){
        getData()
        }
    }, [])

    async function getData() {
        try{
        console.log("id", id)
        let docRef = doc(db, "products", id)
       let docSnap = await getDoc(docRef)
        if(docSnap.exists()){
        setProduct(docSnap.data())
        } else{
        console.log("No such Product!")
        }
    } catch(error){
          console.log("Error Fetching product:", error);
    }
    }
    useEffect(()=>{
        if(product){
            console.log("Product Loaded:" , product )
        }
    },[product])
    let addToCart = useCartStore((store) => store.addToCart)
    let cart = useCartStore((store) => store.cart)
    console.log(cart)


    
    return (
        <>

            <div>
                {/* HEADER MENU START */}
                <HeaderUsedashboard/>
                {/* HEADER MENU END */}
                {/* TITLE BANNER START */}
                <PageTitle title="Product Details" />
                {/* TITLE BANNER END */}
                {/* SHOP DETAIL SECTION START */}
                <section className="shop-detail mb-80">
                    <div className="container-fluid">
                        {product &&

                           
                            <div>
                                <div className="row align-items-center row-gap-4 mb-64">
                                    <div className="col-xxl-5 offset-xxl-1 col-md-6 offset-md-0 order-md-0 order-2">
                                        <div className="burger-bg">
                                            <img className src={product.imageUrl} style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <h3 className="color-ter mb-16">{product.name}</h3>
                                        {/* <div className="d-flex align-items-center gap-16 mb-24">
                                    <div className="d-flex align-items-center gap-6">
                                        <i className="fa-solid fa-star color-primary" />
                                        <i className="fa-solid fa-star color-primary" />
                                        <i className="fa-solid fa-star color-primary" />
                                        <i className="fa-solid fa-star color-primary" />
                                        <i className="fa-solid fa-star color-primary" />
                                    </div>
                                    <p className="dark-gray">( 6 Customer Review )</p>
                                </div> */}
                                        <h3 className="medium-black mb-32">${product.price}</h3>
                                        <hr className="mb-32" />
                                        <p className="mb-32">{product.desc}</p>
                                        <div className="quantity-box">
                                            <h6 className="medium-black">Quantity:</h6>
                                            <div className="quantity quantity-wrap">
                                                <div className="input-area quantity-wrap">
                                                    <input className="decrement" type="button" defaultValue="-" onClick={() => setQuantity(quantity - 1)} />
                                                    <input type="text" name="quantity" value={quantity} maxLength={2} size={1} className="number" />
                                                    <input className="increment" type="button" defaultValue="+" onClick={() => setQuantity(quantity + 1)} />
                                                </div>
                                            </div>
                                            <button type="button" className="cus-btn border-0" onClick={() => {
                                                addToCart({ ...product, quantity: quantity, tprice: (quantity * product.price) })
                                                navigate("/checkout")
                                            }}>add to cart</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                    }
                    </div>
                </section>
                {/* SHOP DETAIL SECTION END */}
                {/* FOOTER START */}
                <Footer />
                {/* FOOTER END */}
            </div>


        </>
    )
}
export default ProductDetails