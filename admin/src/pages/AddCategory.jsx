// import "./css/animate.min.css" 
// import  "./css/animation.css"
// import  "./css/bootstrap-select.min.css"
// import   "./css/bootstrap.css"
// import   "./css/style.css"
// import   "./css/swiper-bundle.min.css"
import { useState } from "react";
import { db } from "../store/firebaseconfig";
import FooterAdmin from "../components/FooterAdmin"
import HeaderAdmin from "../components/HeaderAdmin"
import SidebarAdmin from "../components/SidebarAdmin"
import { addDoc, collection } from "firebase/firestore";
import {success , error} from "../store/message"
import { NavLink } from "react-router";

function AddCategory() {

    let [name , setName] = useState("");
    let [desc , setDesc] = useState("");
    let [categoryid , setCategoryid] = useState("");

     async function addcategory(){
       try{
        let colref = collection(db, "categories")
        await addDoc(colref,{
            name: name,
            categoryid:categoryid,
            desc:desc
        })
        success("Category Saved!")
       }
       catch(err){
                error("Something Went Wrong!")
                console.log(err)
       }
      }


    return (
        <>
            <div id="wrapper">
                {/* #page */}
                <div id="page" className>
                    {/* layout-wrap */}
                    <div className="layout-wrap">
                        {/* section-menu-left */}
                          <SidebarAdmin/>
                        {/* /section-menu-left */}
                        {/* section-content-right */}
                        <div className="section-content-right">
                            {/* header-dashboard */}
                             <HeaderAdmin/> 
                            {/* /header-dashboard */}
                            {/* main-content */}
                            <div className="main-content">
                                {/* main-content-wrap */}
                                <div className="main-content-inner">
                                    {/* main-content-wrap */}
                                    <div className="main-content-wrap">
                                        <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                                            <h3>Category infomation</h3>
                                            <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
                                                <li>
                                                <NavLink to="/admin"><div className="text-tiny">Dashboard</div></NavLink>
                                                </li>
                                                <li>
                                                    <i className="icon-chevron-right" />
                                                </li>
                                                <li>
                                                    <a href="#"><div className="text-tiny">Category</div></a>
                                                </li>
                                                <li>
                                                    <i className="icon-chevron-right" />
                                                </li>
                                                <li>
                                                    <div className="text-tiny">New category</div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* new-category */}
                                        <div className="wg-box">
                                            <form className="form-new-product form-style-1">
                                                <fieldset className="name">
                                                    <div className="body-title">Category Name <span className="tf-color-1">*</span></div>
                                                    <input  value={name} onChange={(e) => setName(e.target.value)} className="flex-grow" type="text" placeholder="Category name" name="text" tabIndex={0}  aria-required="true" required />
                                                </fieldset>
                                                <fieldset className="name">
                                                    <div className="body-title">Category Id <span className="tf-color-1">*</span></div>
                                                    <input  value={categoryid} onChange={(e) => setCategoryid(e.target.value)} className="flex-grow" type="number" placeholder="Category Id" name="text" tabIndex={0}  aria-required="true" required />
                                                </fieldset>
                                                    {/* <fieldset>
                                                        <div className="body-title">Upload images <span className="tf-color-1">*</span></div>
                                                        <div className="upload-image flex-grow">
                                                            <div className="item up-load">
                                                                <label className="uploadfile" htmlFor="myFile">
                                                                    <span className="icon">
                                                                        <i className="icon-upload-cloud" />
                                                                    </span>
                                                                    <span className="body-text">Drop your images here or select <span className="tf-color">click to browse</span></span>
                                                                    <input type="file" id="myFile" name="filename" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </fieldset> */}
                                                <fieldset className="category">
                                                    <div className="body-title">Category Description</div>
                                                    <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} className="flex-grow" type="text" placeholder="Category Description" name="text" tabIndex={0}  aria-required="true" required />
                                                </fieldset>
                                                <div className="bot">
                                                    <div />
                                                    <button  onClick={addcategory} className="tf-button w208" type="button">Save</button>
                                                </div>
                                            </form>
                                        </div>
                                        {/* /new-category */}
                                    </div>
                                    {/* /main-content-wrap */}
                                </div>
                                {/* /main-content-wrap */}
                                {/* bottom-page */}
                                <FooterAdmin/>
                                {/* /bottom-page */}
                            </div>
                            {/* /main-content */}
                        </div>
                        {/* /section-content-right */}
                    </div>
                    {/* /layout-wrap */}
                </div>
                {/* /#page */}
            </div>


        </>
    )
}
export default AddCategory