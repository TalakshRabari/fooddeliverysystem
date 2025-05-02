import { Link } from "react-router"
function Product({ name, desc, price, category, url, id }) {
    
   
    console.log("Product Props:", { name, desc, price, category, url, id });
    return (
        <>
            <div className="col-lg-4">
                <div className="box-container">
                   
                    <div className="content-box"  style={{display:"flex", flexDirection:"column" , paddingTop: "20px"}}>
                    <Link to={`/productdetail/${id}`}>
                        <div className="img-box mb-64" >


                            <img
                                src={url || "https://via.placeholder.com/150"}
                                alt={name}
                               
                                style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '10px' }}
                            />
                           

                        </div>
                    </Link>
                        <p className="fw-600 content-text-1 mb-24" style={{border:"None"}}>{category}</p>
                        <a href="menu.html" className="h5 content-text-1 mb-24">{name}</a>
                        <p className="content-text mb-24" >{desc.slice(0,50)}</p>
                        <hr className="content-text mb-24" />
                        <h4 className="content-text mb-32">₹{price}</h4>
                        <a href="checkout.html" className="cus-btn bg-medium-black white w-100">Order Now</a>
                    </div>
                </div>
            </div>
            </>
    )
}
export default Product
