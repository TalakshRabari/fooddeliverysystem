
// import "./css/animate.min.css" 
// import  "./css/animation.css"
// import  "./css/bootstrap-select.min.css"
// import   "./css/bootstrap.css"
// import   "./css/style.css"
// import   "./css/swiper-bundle.min.css"
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../store/firebaseconfig";
import FooterAdmin from "../components/FooterAdmin";
import HeaderAdmin from "../components/HeaderAdmin";
import PageTitleAdmin from "../components/PageTitleAdmin";
import SidebarAdmin from "../components/SidebarAdmin";
import { error, success } from "../store/message";
import { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../store/firebaseconfig"; // Assuming this is your firebase config file

function AddProduct() {
  let [name, setName] = useState("");
  let [desc, setDesc] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [image, setImage] = useState(null); // We use null instead of an empty string for better type handling
  let [imageUrl, setImageUrl] = useState("");
  let [productid, setProductid] = useState("");
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const colRef = collection(db, "categories");
      const snapshot = await getDocs(colRef);

      if (!snapshot.empty) {
        const categoriesList = snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        }));
        setCategories(categoriesList);
      } else {
        console.log("No Categories Found.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Handle Image Selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("File selected: ", file); // Check the file selected
    if (file) {
      console.log("File Setting Begin");
      setImage(file); // Set image to state
      console.log("File Setting Complete");
      // handleUpload();
    } else {
      console.log("No file selected.");
    }
  };


    useEffect(()=>{
      if(image){
        handleUpload();
      }
    },[image]);
  // Handle Image Upload
  const handleUpload = () => {
    if (!image) {
      console.error("No image selected.");
      return;
    }

    // Create a reference to the Firebase Storage
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state-changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log("Upload failed", error);
        setImageUrl(null); // Reset image URL if upload fails
      },
      () => {
        // Get the download URL after successful upload
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImageUrl(downloadURL); // Set the image URL in state
        }).catch((error) => {
          console.error("Error getting download URL: ", error);
        });
      }
    );
  };

  // Add Product to Firestore
  async function addProduct(e) {
    e.preventDefault(); // Prevent form submission and page refresh

    if (!imageUrl) {
      console.error("No image selected.");
      return;
    }

    try {
      let colRef = collection(db, "products");
      await addDoc(colRef, {
        name: name,
        productid: productid,
        desc: desc,
        category: category,
        price: price,
        imageUrl: imageUrl // Add image URL to the product
      });
      success("Product Added!");
    } catch (err) {
      console.log(err);
      error("Something Went Wrong!");
    }
  }

  return (
    <>
      {/* layout-wrap */}
      <div className="layout-wrap">
        <SidebarAdmin />
        {/* /section-menu-left */}
        <div className="section-content-right">
          <HeaderAdmin />
          <div className="main-content">
            <div className="main-content-inner">
              <PageTitleAdmin title="Add Product" />
              {/* form-add-product */}
              <form className="tf-section-2 form-add-product" onSubmit={addProduct}>
                <div className="wg-box">
                  <fieldset className="name">
                    <div className="body-title mb-10">Product name <span className="tf-color-1">*</span></div>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mb-10"
                      type="text"
                      placeholder="Enter product name"
                      name="text"
                      tabIndex={0}
                      aria-required="true"
                      required
                    />
                    <div className="text-tiny">Do not exceed 20 characters when entering the product name.</div>
                  </fieldset>
                  <fieldset className="name">
                    <div className="body-title mb-10">Product Id <span className="tf-color-1">*</span></div>
                    <input
                      value={productid}
                      onChange={(e) => setProductid(e.target.value)}
                      className="mb-10"
                      type="text"
                      placeholder="Enter product id"
                      name="text"
                      tabIndex={0}
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <div className="gap22 cols">
                    <fieldset className="category">
                      <div className="body-title mb-10">Category <span className="tf-color-1">*</span></div>
                      <div className="select">
                        <select
                          className
                          value={category}
                          id="category"
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option>Choose category</option>
                          {categories && categories.map((categories) => (
                            <option key={categories.id} value={categories.category}>{categories.name}</option>
                          ))}
                        </select>
                      </div>
                    </fieldset>
                  </div>

                  <fieldset className="description">
                    <div className="body-title mb-10">Description <span className="tf-color-1">*</span></div>
                    <textarea
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      className="mb-10"
                      name="description"
                      placeholder="Description"
                      tabIndex={0}
                      aria-required="true"
                      required
                    />
                    <div className="text-tiny">Do not exceed 100 characters when entering the product name.</div>
                  </fieldset>
                </div>

                <div className="wg-box">
                  <fieldset>
                    <div className="body-title mb-10">Upload images</div>
                    <div className="upload-image mb-16">
                      <div className="item up-load">
                        <label className="uploadfile" htmlFor="myFile">
                          <span className="icon">
                            <i className="icon-upload-cloud" />
                          </span>
                          <span className="text-tiny">Drop your images here or select <span className="tf-color">click to browse</span></span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            id="myFile"
                            name="filename"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="body-text">
                      You need to add at least 4 images. Pay attention to the quality of the pictures you add, comply with the background color standards. Pictures must be in certain dimensions. Notice that the product shows all the details
                    </div>
                  </fieldset>

                  <div className="cols gap22">
                    <fieldset className="name">
                      <div className="body-title mb-10">Product Price</div>
                      <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="Number"
                        name="Price"
                      />
                    </fieldset>
                  </div>

                  <div className="cols gap10">
                    <button
                      type="submit"
                      className="tf-button w-full"
                    >
                      Add Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

export default AddProduct;










// import { addDoc, collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebaseconfig"
// import FooterAdmin from "../../component/admin/FooterAdmin"
// import HeaderAdmin from "../../component/admin/HeaderAdmin"
// import PageTitleAdmin from "../../component/admin/PageTitleAdmin";
// import SidebarAdmin from "../../component/admin/SidebarAdmin"
// import { error, success } from "../../store/message"
// import { useEffect, useState } from "react";
// function AddProduct() {

//     let [name, setName] = useState("")
//     let [desc, setDesc] = useState("")
//     let [category, setCategory] = useState("")
//     let [price, setPrice] = useState("")
//     let [image, setImage] = useState("")
//     let [imageUrl, setImageUrl] = useState("")
//     let [productid, setProductid] = useState("")
//     let [categories , setCategories] = useState([])
//     // let [selectedcategory , SetSelectedCategory] = useState("")

//     useEffect(()=>{
//        fetchcategories()
//     },[])

//    async  function fetchcategories(){
  
//         try{
//         const colRef =  collection(db , "categories");
//         const snapshot = await getDocs(colRef)

//           console.log("Snapshot data:", snapshot);
            
//         if(!snapshot.empty){
//         const categoriesList = snapshot.docs.map(doc =>({
//              id : doc.id,
//              name : doc.data().name
//         }));
    
//          console.log("Category List : ", categoriesList)
//         setCategories(categoriesList);
//     }
//     else{
//         console.log("No Categories Found.");
//     }
//     }
//     catch(error){
//             console.log(error);
//     }
//     }

//     // let handleCategoryChange = (event) =>{
//     //     SetSelectedCategory(event.target.value); 
//     // };
          
//     // Image Selection
//     const handleImageChange = (e) => {
//         const file =    e.target.files[0];
//         console.log("File selected: ", file);  // Check the file selected
//     if (file) {
//         setImage(file);
//     } else {
//         console.log("No file selected.");
//     }

//     handleUpload();
//         // if(e.target.files[0]){
//         //     setImage(e.target.files[0]);
//         //     console.log("Image selected: ", e.target.files[0]);
//         // }
//      };

//     // Function for Image Upload 
                
//                  const handleUpload = () =>{
//                     if(!image) return;

//                     const storageRef = ref(storage , 'images/${image.name}');
//                     const uploadTask = uploadBytesResumable(storageRef , image);

//                     uploadTask.on(

//                         'state-changed',
//                         (snapshot) => {
//                             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100 ;
//                             console.log('Upload is' + progress + "% done");
//                         },
//                         (error) => {
//                             console.log("Upload failed", error);
//                             setImageUrl(null);
//                         },
//                         () => {
//                             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                                 console.log("File available at" , downloadURL); 
//                                 setImageUrl(downloadURL);
//                             })
//                             .catch((error) => {
//                                 console.error("Error getting download URL: ", error);
//                             });
//                         }
//                     );
//                  };
                 
//                 //   Add Product with image url  
    
//                 async function addproduct() {

//                     if(!imageUrl){
//                         // console.log(err);
//                         console.error("No image selected.");
//                         return;
//                     }


//                     try {
//                         let colref = collection( db , "products")
//                         await addDoc(colref, {
//                             name: name,
//                             productid: productid,
//                             desc: desc,
//                             category: category,
//                             price:price 
//                         })
//                         success("Product Added!");
//                     } catch (err) {
//                         console.log(err)
//                         error("Something Went Wrong!")
//                     }
            
            
//                     // console.log("Function Invoked!")
//                 }
            


//     return (
//         <>
//             {/* layout-wrap */}
//             <div className="layout-wrap">
//                 {/* section-menu-left */}
//                 <SidebarAdmin />
//                 {/* /section-menu-left */}
//                 {/* section-content-right */}
//                 <div className="section-content-right">
//                     {/* header-dashboard */}
//                     <HeaderAdmin />
//                     {/* /header-dashboard */}
//                     {/* main-content */}
//                     <div className="main-content">
//                         {/* main-content-wrap */}
//                         <div className="main-content-inner">
//                             {/* main-content-wrap */}
//                             <div className="main-content-wrap">
//                                 <PageTitleAdmin title="Add Product" />
//                                 {/* form-add-product */}
//                                 <form className="tf-section-2 form-add-product">
//                                     <div className="wg-box">
//                                         <fieldset className="name">
//                                             <div className="body-title mb-10">Product name <span className="tf-color-1">*</span></div>
//                                             <input value={name} onChange={(e) =>setName(e.target.value) } className="mb-10" type="text" placeholder="Enter product name" name="text" tabIndex={0} aria-required="true" required />
//                                             <div className="text-tiny">Do not exceed 20 characters when entering the product name.</div>
//                                         </fieldset>
//                                         <fieldset className="name">
//                                             <div className="body-title mb-10">Product Id <span className="tf-color-1">*</span></div>
//                                             <input value={productid} onChange={(e) =>setProductid(e.target.value) } className="mb-10" type="text" placeholder="Enter product id" name="text" tabIndex={0} aria-required="true" required />
//                                         </fieldset>
//                                         <div className="gap22 cols">
//                                             <fieldset className="category">
//                                                 <div className="body-title mb-10">Category <span className="tf-color-1">*</span></div>
//                                                 <div className="select">
//                                                     <select className value={category}  id="category" onChange={(e) => setCategory(e.target.value)}>
//                                                         <option>Choose category</option>
//                                                         { categories && categories.map((category) => (
//                                                         <option key={category.id}  value={category.id}>{category.name}</option>
//                                                     ))}
//                                                     </select>
//                                                 </div>
//                                             </fieldset>

//                                         </div>
                                        
//                                         <fieldset className="description">
//                                             <div className="body-title mb-10">Description <span className="tf-color-1">*</span></div>
//                                             <textarea value={desc} onChange={(e) => { setDesc(e.target.value) }} className="mb-10" name="description" placeholder="Description" tabIndex={0} aria-required="true" required defaultValue={""} />
//                                             <div className="text-tiny">Do not exceed 100 characters when entering the product name.</div>
//                                         </fieldset>
//                                     </div>
//                                     <div className="wg-box">
//                                         <fieldset>
//                                             <div className="body-title mb-10">Upload images</div>
//                                             <div className="upload-image mb-16">

//                                                 <div className="item up-load">
//                                                     <label className="uploadfile" htmlFor="myFile">
//                                                         <span className="icon">
//                                                             <i className="icon-upload-cloud" />
//                                                         </span>
//                                                         <span className="text-tiny">Drop your images here or select <span className="tf-color">click to browse</span></span>
//                                                         <input type="file" accept="image/*" onChange={ (e) =>  {   handleImageChange(e); }} id="myFile" name="filename" />
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                             <div className="body-text">You need to add at least 4 images. Pay attention to the quality of the pictures you add, comply with the background color standards. Pictures must be in certain dimensions. Notice that the product shows all the details</div>
//                                         </fieldset>
//                                         <div className="cols gap22">

//                                             <fieldset className="name">
//                                                 <div className="body-title mb-10">Product Price</div>

//                                                 <input value={price} onChange={(e) => { setPrice(e.target.value) }} type="Number" name="Price" />

//                                             </fieldset>
//                                         </div>
//                                         <div className="cols gap10">
//                                             <button onClick={addproduct} className="tf-button w-full" type="button">Add product</button>

//                                         </div>
//                                     </div>
//                                 </form>
//                                 {/* /form-add-product */}
//                             </div>
//                             {/* /main-content-wrap */}
//                         </div>
//                         {/* /main-content-wrap */}
//                         {/* bottom-page */}
//                         <FooterAdmin />
//                         {/* /bottom-page */}
//                     </div>
//                     {/* /main-content */}
//                 </div>
//                 {/* /section-content-right */}
//             </div>
//             {/* /layout-wrap */}

//         </>
//     )
// }
// export default AddProduct

















