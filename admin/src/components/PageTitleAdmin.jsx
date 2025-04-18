import { NavLink } from "react-router"

function PageTitleAdmin({title}){
    return(
        <>
    
    <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                                    <h3>{title}</h3>
                                    <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
                                        <li>
                                            <NavLink to="/admin"><div className="text-tiny">Dashboard</div></NavLink>
                                        </li>
                                        <li>
                                            <i className="icon-chevron-right" />
                                        </li>
                                        <li>
                                            <a href="#"><div className="text-tiny">Ecommerce</div></a>
                                        </li>
                                        <li>
                                            <i className="icon-chevron-right" />
                                        </li>
                                        <li>
                                            <div className="text-tiny">Add product</div>
                                        </li>
                                    </ul>
                                </div>
        </>
    )
}
export default PageTitleAdmin