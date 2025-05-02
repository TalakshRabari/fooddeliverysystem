// import "./css/animate.min.css" 
// import  "./css/animation.css"
// import  "./css/bootstrap-select.min.css"
// import   "./css/bootstrap.css"
// import   "./css/style.css"
// import   "./css/swiper-bundle.min.css"
import HeaderAdmin from "../components/HeaderAdmin";
import SidebarAdmin from "../components/SidebarAdmin";
import FooterAdmin from "../components/FooterAdmin";
import { useState, useEffect } from "react";
import { db } from "../store/firebaseconfig";
import { doc } from "firebase/firestore";
import { collection, deleteDoc, onSnapshot } from "firebase/firestore";
import { Link, NavLink } from "react-router";

function ViewCategory() {
  let [categories, setCategories] = useState([]);
  let [searchquery, setSearchQuery] = useState("");

  useEffect(() => { 
    getCategories();
  }, []);

  // Fetch categories from Firestore
  function getCategories() {
    let colref = collection(db, "categories");
    onSnapshot(colref, (snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      setCategories(result);
    });
  }

  // Handle change in the search query
  let handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter categories based on the search query
  let filteredCategories = categories.filter((category) => {
    return category.name.toLowerCase().includes(searchquery.toLowerCase());
  });

  async function handleDelete(id){
    let confirmDelete = window.confirm("are you sure you want to delete this category?")
      if(!confirmDelete) return;
        
        try{
          await deleteDoc(doc(db , "categories" , id));
          alert("Category Deleted");
        }catch(error){
          console.log("Error deleting category:", error);
        }
      
  }  

  return (
    <>
      <div className="layout-wrap">
        {/* section-menu-left */}
        <SidebarAdmin />
        {/* /section-menu-left */}
        {/* section-content-right */}
        <div className="section-content-right">
          {/* header-dashboard */}
          <HeaderAdmin />
          {/* /header-dashboard */}
          {/* main-content */}
          <div className="main-content">
            {/* main-content-wrap */}
            <div className="main-content-inner">
              <div className="main-content-wrap">
                <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                  <h3>All category</h3>
                  <ul className="breadcrumbs flex items-center flex-wrap justify-start gap20">
                    <li>
                      <NavLink to="/admin">
                        <div className="text-tiny">Dashboard</div>
                      </NavLink>
                    </li>
                    <li>
                      <i className="icon-chevron-right" />
                    </li>
                    <li>
                      <NavLink to="/admin/viewcategory">
                        <div className="text-tiny">Category</div>
                      </NavLink>
                    </li>
                    <li>
                      <i className="icon-chevron-right" />
                    </li>
                    <li>
                      <div className="text-tiny">All category</div>
                    </li>
                  </ul>
                </div>

                {/* all-category */}
                <div className="wg-box">
                  <div className="flex items-center justify-between gap20 flex-wrap">
                    <div className="wg-filter flex-grow">
                      <form className="form-search">
                        <fieldset className="name">
                          <input
                            type="text"
                            placeholder="Search categories..."
                            value={searchquery}
                            onChange={handleSearchChange}
                            className
                            name="name"
                            tabIndex={2}
                            aria-required="true"
                            required
                          />
                          {/* <ul>
                            Display filtered categories
                            {filteredCategories.length > 0 ? (
                              filteredCategories.map((category) => (
                                <li key={category.id}>{category.name}</li>
                              ))
                            ) : (
                              <li>No Categories Found.</li>
                            )}
                          </ul> */}
                        </fieldset>
                        <div className="button-submit">
                          <button className type="submit">
                            <i className="icon-search" />
                          </button>
                        </div>
                      </form>
                    </div>
                    <NavLink className="tf-button style-1 w208" to="/admin/addcategory">
                      <i className="icon-plus" />
                      Add New
                    </NavLink>
                  </div>

                  {/* Display all categories in table */}
                  <div className="wg-table table-all-category">
                    <ul className="table-title flex gap20 mb-14">
                      <li>
                        <div className="body-title">Category</div>
                      </li>
                      <li>
                        <div className="body-title">Category Id</div>
                      </li>
                      <li>
                        <div className="body-title">Category Description</div>
                      </li>
                      <li>
                        <div className="body-title">Action</div>
                      </li>
                    </ul>
                    <div className="divider" />
                    {filteredCategories && filteredCategories.length > 0 ? (
                      filteredCategories.map((category) => (

                        <ul className="flex flex-column" style={{ paddingLeft: 0 ,margin:"5px"  }} key={category.id}>
                          <li className="product-item gap14">
                            <div className="flex items-center justify-between gap20 flex-grow">
                              <div className="name" style={{fontWeight:"bolder", fontSize:"medium"}}>{category.name}</div>
                              <div className="body-text">{category.categoryid}</div>
                              <div className="body-text">{category.desc}</div>
                              <div
                                className="list-icon-function"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "start",
                                  gap: "20px",
                                }}
                              >
                                <div className="item edit" style={{ color: "green" }}>
                                 <Link to={`/admin/updatecategory/${category.id}`}> <i className="icon-edit"></i></Link>
                                </div>
                                <div className="item trash" style={{ color: "orange" }}>
                                  <i className="icon-trash-2" onClick={() => handleDelete(category.id)}></i>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      ))
                    ) : (
                      <div>No matching categories found</div>
                    )}
                  </div>
                </div>
                {/* /all-category */}
              </div>
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

export default ViewCategory;







































// import HeaderAdmin from "../../component/admin/HeaderAdmin";
// import SidebarAdmin from "../../component/admin/SidebarAdmin";
// import FooterAdmin from "../../component/admin/FooterAdmin";
// import { useState, useEffect } from "react";
// import { db } from "../../firebaseconfig";
// import { collection, onSnapshot } from "firebase/firestore";
// import { NavLink } from "react-router";

// function ViewCategory() {
//   let [categories, setCategories] = useState([]);
//   let [searchquery, setSearchQuery] = useState("");

//   useEffect(() => {
//     getCategories();
//   }, []);

//   function getCategories() {
//     let colref = collection(db, "categories");
//     onSnapshot(colref, (snapshot) => {
//       let result = [];
//       snapshot.docs.forEach((doc) => {
//         result.push({ id: doc.id, ...doc.data() });
//       });
//       setCategories(result);
//     });
//   }

//   let handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   // Fix: Added return in filter and used category.name
//   let filteredCategories = categories.filter((category) => {
//     return category.name.toLowerCase().includes(searchquery.toLowerCase());
//   });

//   return (
//     <>
//       <div className="layout-wrap">
//         {/* section-menu-left */}
//         <SidebarAdmin />
//         {/* /section-menu-left */}
//         {/* section-content-right */}
//         <div className="section-content-right">
//           {/* header-dashboard */}
//           <HeaderAdmin />
//           {/* /header-dashboard */}
//           {/* main-content */}
//           <div className="main-content">
//             {/* main-content-wrap */}
//             <div className="main-content-inner">
//               {/* main-content-wrap */}
//               <div className="main-content-wrap">
//                 <div className="flex items-center flex-wrap justify-between gap20 mb-27">
//                   <h3>All category</h3>
//                   <ul className="breadcrumbs flex items-center flex-wrap justify-start gap20">
//                     <li>
//                       <NavLink to="/admin">
//                         <div className="text-tiny">Dashboard</div>
//                       </NavLink>
//                     </li>
//                     <li>
//                       <i className="icon-chevron-right" />
//                     </li>
//                     <li>
//                       <NavLink to="/admin/viewcategory">
//                         <div className="text-tiny">Category</div>
//                       </NavLink>
//                     </li>
//                     <li>
//                       <i className="icon-chevron-right" />
//                     </li>
//                     <li>
//                       <div className="text-tiny">All category</div>
//                     </li>
//                   </ul>
//                 </div>
//                 {/* all-category */}
//                 <div className="wg-box">
//                   <div className="flex items-center justify-between gap20 flex-wrap">
//                     <div className="wg-filter flex-grow">
//                       <form className="form-search">
//                         <fieldset className="name">
//                           <input
//                             type="text"
//                             placeholder="Search categories..."
//                             value={searchquery}
//                             onChange={handleSearchChange}
//                             className
//                             name="name"
//                             tabIndex={2}
//                             aria-required="true"
//                             required
//                           />
//                           <ul>
//                             {filteredCategories.length > 0 ? (
//                               filteredCategories.map((category) => (
//                                 <li key={category.id}>{category.name}</li>
//                               ))
//                             ) : (
//                               <li>No Categories Found.</li>
//                             )}
//                           </ul>
//                         </fieldset>
//                         <div className="button-submit">
//                           <button className type="submit">
//                             <i className="icon-search" />
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                     <NavLink className="tf-button style-1 w208" to="/admin/addcategory">
//                       <i className="icon-plus" />
//                       Add New
//                     </NavLink>
//                   </div>
//                   <div className="wg-table table-all-category">
//                     <ul className="table-title flex gap20 mb-14">
//                       <li>
//                         <div className="body-title">Category</div>
//                       </li>
//                       <li>
//                         <div className="body-title">Category Id</div>
//                       </li>
//                       <li>
//                         <div className="body-title">Category Description</div>
//                       </li>
//                       <li>
//                         <div className="body-title">Action</div>
//                       </li>
//                     </ul>
//                     <div className="divider" />
//                     {categories &&
//                       categories.map((category) => (
//                         <ul className="flex flex-column" style={{ paddingLeft: 0 }} key={category.id}>
//                           <li className="product-item gap14">
//                             <div className="flex items-center justify-between gap20 flex-grow">
//                               <div className="name">{category.name}</div>
//                               <div className="body-text">{category.categoryid}</div>
//                               <div className="body-text">{category.desc}</div>
//                               <div
//                                 className="list-icon-function"
//                                 style={{
//                                   display: "flex",
//                                   alignItems: "center",
//                                   justifyContent: "start",
//                                   gap: "20px",
//                                 }}
//                               >
//                                 <div className="item edit" style={{ color: "green" }}>
//                                   <i className="icon-edit"></i>
//                                 </div>
//                                 <div className="item trash" style={{ color: "orange" }}>
//                                   <i className="icon-trash-2"></i>
//                                 </div>
//                               </div>
//                             </div>
//                           </li>
//                         </ul>
//                       ))}
//                   </div>
//                   <div className="flex items-center justify-between flex-wrap gap20"></div>
//                 </div>
//                 {/* /all-category */}
//               </div>
//               {/* /main-content-wrap */}
//             </div>
//             {/* /main-content-wrap */}
//             {/* bottom-page */}
//             <FooterAdmin />
//             {/* /bottom-page */}
//           </div>
//           {/* /main-content */}
//         </div>
//         {/* /section-content-right */}
//       </div>
//     </>
//   );
// }

// export default ViewCategory;
























//     import HeaderAdmin from "../../component/admin/HeaderAdmin"
//     import SidebarAdmin from "../../component/admin/SidebarAdmin"
//     import FooterAdmin from "../../component/admin/FooterAdmin"
//      import  { useState } from "react"
//      import { useEffect } from "react"
//      import { db } from "../../firebaseconfig"
//      import { collection, onSnapshot } from "firebase/firestore"
//      import { getDocs } from "firebase/firestore"
// import { NavLink } from "react-router"
     
//     function ViewCategory() {
 
//                 let [categories ,setCategories] = useState([])
//                 let [searchquery , setSearchQuery] = useState("");
//                           useEffect( ()=>{
//                            getCategories()
//                           },[])
               
//                            function getCategories(){
//                             let colref = collection(db , "categories")
//                            onSnapshot(colref , (snapshot) =>{
//                             let result = [];
//                             snapshot.docs.forEach((doc) => {
//                                 result.push({ id: doc.id, ...doc.data() });
//                             });
//                             setCategories(result);
//                            })
//                           }

//               let handleSearchChange = (e) => {
//                 setSearchQuery(e.target.value);
//               };

//               let filteredCategories = categories.filter(category => {

//                 console.log("Category:" , category);
//                 category.name.toLowerCase().includes(searchquery.toLocaleLowerCase())
//               }
//               );
        
//         return (
//             <>
//                 <div class="layout-wrap">
//                     {/* section-menu-left */}
//                     <SidebarAdmin/>
//                     {/* /section-menu-left */}
//                     {/* section-content-right */}
//                     <div className="section-content-right">
//                         {/* header-dashboard */}
//                         <HeaderAdmin/>
//                         {/* /header-dashboard */}
//                         {/* main-content */}
//                         <div className="main-content">
//                             {/* main-content-wrap */}
//                             <div className="main-content-inner">
//                                 {/* main-content-wrap */}
//                                 <div className="main-content-wrap">
//                                     <div className="flex items-center flex-wrap justify-between gap20 mb-27">
//                                         <h3>All category</h3>
//                                         <ul className="breadcrumbs flex items-center flex-wrap justify-start gap20">
//                                             <li>
//                                                 <NavLink to="/admin"><div className="text-tiny">Dashboard</div></NavLink>
//                                             </li>
//                                             <li>
//                                                 <i className="icon-chevron-right" />
//                                             </li>
//                                             <li>
//                                                 <NavLink to="/admin/viewcategory"><div className="text-tiny">Category</div></NavLink>
//                                             </li>
//                                             <li>
//                                                 <i className="icon-chevron-right" />
//                                             </li>
//                                             <li>
//                                                 <div className="text-tiny">All category</div>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     {/* all-category */}
//                                     <div className="wg-box">
//                                         <div className="flex items-center justify-between gap20 flex-wrap">
//                                             <div className="wg-filter flex-grow">
//                                                 <form className="form-search">
//                                                     <fieldset className="name">
//                                                         <input type="text" placeholder="Search categories..." value={searchquery} onChange={handleSearchChange} className name="name" tabIndex={2} aria-required="true" required />
//                                                         <ul>
//                                                             {filteredCategories.length > 0 ? (
//                                                                 filteredCategories.map((category) =>(
//                                                                     <li key={category.id}>{category.name}</li>
//                                                                 ))) : (
//                                                                     <li> No Categories Found.</li>
//                                                                 )
//                                                             }
//                                                         </ul>
//                                                     </fieldset>
//                                                     <div className="button-submit">
//                                                         <button className type="submit"><i className="icon-search" /></button>
//                                                     </div>
//                                                 </form>
//                                             </div>
//                                             <NavLink className="tf-button style-1 w208" to="/admin/addcategory"><i className="icon-plus" />Add New</NavLink>
//                                         </div>
//                                         <div className="wg-table table-all-category">
//                                             <ul className="table-title flex gap20 mb-14">
//                                                 <li>
//                                                     <div className="body-title">Category</div>
//                                                 </li>
//                                                 <li>
//                                                     <div className="body-title">Category Id</div>
//                                                 </li>
//                                                 <li>
//                                                     <div className="body-title">Category  Description</div>
//                                                 </li>
//                                                 <li>
//                                                     <div className="body-title">Action</div>
//                                                 </li>
//                                             </ul>
//                                             <div className="divider" />
//                                             {categories &&  
//                                           categories.map((category) => (
//                                             <ul className="flex flex-column" style={{paddingLeft: 0}}>
//                                                 <li className="product-item gap14" key={category.categoryid}>
//                                                     <div className="flex items-center justify-between gap20 flex-grow">
//                                                     <div className="name">
//                                                         {category.name}
//                                                     </div>
//                                                     <div className="body-text">
//                                                         {category.categoryid}
//                                                     </div>
//                                                     <div className="body-text">
//                                                         {category.desc}
//                                                     </div>
//                                                     <div classsName="list-icon-function"  style={{display:"flex" , alignItems:"center" , justifyContent:"start" , gap:"20px"  }}>
//                                                         <div className="item edit" style={{color:"green"}}>
//                                                             <i className="icon-edit"></i>
//                                                         </div>
//                                                         <div className="item trash" style={{color:"orange"}}>
//                                                             <i className="icon-trash-2"></i>
//                                                         </div>
//                                                     </div>
//                                                     </div>
                                                   
//                                                 </li>
//                                             </ul>
//                                           ))}
                                            


//                                         </div>
                                       
//                                         <div className="flex items-center justify-between flex-wrap gap20">
                                            
                                        
//                                         </div>
//                                     </div>
//                                     {/* /all-category */}
//                                 </div>
//                                 {/* /main-content-wrap */}
//                             </div>
//                             {/* /main-content-wrap */}
//                             {/* bottom-page */}
//                             <FooterAdmin/>
//                             {/* /bottom-page */}
//                         </div>
//                         {/* /main-content */}
//                     </div>
//                     {/* /section-content-right */}
//                 </div>

//             </>
//         )
//     }
//     export default ViewCategory