// import "./css/vendor/bootstrap.min.css"
// import "./css/vendor/classic.css"
// import "./css/vendor/classic.date.css"
// import "./css/vendor/font-awesome.css"
// import "./css/vendor/slick-theme.css"
// import "./css/vendor/slick.css"
import Footer from "../component/Footer"
import Header from "../component/Header"
import HeaderUsedashboard from "../component/HeaderUserdashboard"
import PageTitle from "../component/PageTitle"

function About() {
    return (
        <>
            <div>
                {/* HEADER MENU START */}
                <HeaderUsedashboard/>
                {/* HEADER MENU END */}
                {/* TITLE BANNER START */}
                <PageTitle title="About"/>
                {/* TITLE BANNER END */}
                {/* About Section START */}
                <section className="about-us py-80">
                    <div className="container-fluid">
                        <div className="row align-items-center row-gap-4">
                            <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-0 order-lg-0 order-2">
                                <img className src="/savory/assets/media/about/about-img-1.png" alt />
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <span className="eyebrow about-btn bg-primary br-12 white mb-6">about us</span>
                                <h2 className="medium-black mb-24">Juicy Burgers,<br /> Unmatched Flavor</h2>
                                <p className="light-gray mb-24">
                                    Lorem ipsum dolor sit amet consectetur. Sed euismod justo<br /> volutpat malesuada. Purus in
                                    pellentesque a convallis morbi <br />convallis.
                                </p>
                                <ul className="dark-gray fw-600 d-flex gap-64 mb-16">
                                    <li>Locally-Sourced Beef</li>
                                    <li>Organic Ingredients</li>
                                </ul>
                                <ul className="dark-gray fw-600 d-flex gap-64 mb-24">
                                    <li>Sustainable Practices</li>
                                    <li>Custom Blend</li>
                                </ul>
                                <hr className="mb-24" />
                                <div className="user-icon">
                                    <img className src="/savory/assets/media/about/about-user.jpg" alt />
                                    <div>
                                        <h6 className="medium-black mb-8">Ethan Rodriguez</h6>
                                        <p className="color-ter">CEO - Owner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Section END */}
                {/* OUR TEAM Section START */}
                {/* Testimonials Area End */}
                {/* FOOTER START */}
                 <Footer/>
                {/* FOOTER END */}
                {/* Main Wrapper End */}<p />
            </div>

        </>
    )
}
export default About