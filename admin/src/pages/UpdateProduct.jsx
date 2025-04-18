
// import "./css/animate.min.css" 
// import  "./css/animation.css"
// import  "./css/bootstrap-select.min.css"
// import   "./css/bootstrap.css"
// import   "./css/style.css"
// import   "./css/swiper-bundle.min.css"
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../store/firebaseconfig";
import FooterAdmin from "../components/FooterAdmin";
import HeaderAdmin from "../components/HeaderAdmin";
import PageTitleAdmin from "../components/PageTitleAdmin"
import SidebarAdmin from "../components/SidebarAdmin";
import { error, success } from "../store/message";
import { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../store/firebaseconfig"; // Assuming this is your firebase config file
import { useParams } from "react-router";

function UpdateProduct() {
  let [name, setName] = useState("");
  let [desc, setDesc] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [image, setImage] = useState(null); // We use null instead of an empty string for better type handling
  let [imageUrl, setImageUrl] = useState("");
  let [productid, setProductid] = useState("");
  let [categories, setCategories] = useState([]);
  let {id} = useParams()

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
  // update product details 
  async function Update(){
    try{
      let docRef = doc(db , "products" , id)
      await updateDoc( docRef,{
        name:name,
        desc:desc,
        price:price,
        productid:productid,
        category:category,
        imageUrl:imageUrl
      })
      success("Product Details Updated Successfully!")
    }catch(err){
      error("Something Went Wrong!")
      console.log(err)
    }
  }



   useEffect(()=>{
                  getData();
   },[])

  async function getData(){
          let docRef = doc(db, "products" , id)
          console.log(docRef)
          let docSnap = await getDoc(docRef)
          console.log(docSnap);
          let product = docSnap.data()
          console.log(product)
          setName(product.name)
          setDesc(product.desc)
          setPrice(product.price)
          setProductid(product.productid)
          setImageUrl(product.imageUrl)
          setCategory(product.category)
          console.log(product.category)
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
                <div cl
                
                
                assName="wg-box">
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
                          {/* <option>Choose category</option> */}
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
                      type="button"
                      className="tf-button w-full"
                      onClick={Update}
                    >
                      Update Product
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

export default UpdateProduct;