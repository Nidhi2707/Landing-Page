import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useHistory, useLocation } from "react-router";
import "slick-carousel/slick/slick.css";
import WatchDemoNewTheme from "./WatchDemoNewTheme";
import FreeTrialNewTheme from "./FreeTrialNewTheme";
import './LandingPage.css';

const LandingPage = (props) => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showTrialModal, setShowTrialModal] = useState(false);
  const handleClick = (action) => {
    switch (action) {
      case "trial": setShowTrialModal(true);
        break;
      case "demo": setShowDemoModal(true);
        break;
      default:
        break;
    }
  }

  const customerSlideSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 6,
    appendDots: dots => (
      <div >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [{
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  };
   
// const hubSpot = window.app.env.hubSpot;
const items2 = [
  { id: 1, custmrSrc: "/images/indosat.jpg" },
  { id: 2, custmrSrc: "/images/voda-albania.jpg" },
  { id: 3, custmrSrc: "/images/cust-logo.jpg" },
  { id: 4, custmrSrc: "/images/cable-wireless.jpg" },
  { id: 5, custmrSrc: "/images/voda-greece.jpg" },
  { id: 6, custmrSrc: "/images/cust-logo2.jpg" },
  { id: 7, custmrSrc: "/images/indosat.jpg" },
  { id: 8, custmrSrc: "/images/voda-albania.jpg" },
  { id: 9, custmrSrc: "/images/cust-logo.jpg" },
  { id: 10, custmrSrc: "/images/cable-wireless.jpg" },
  { id: 11, custmrSrc: "/images/voda-greece.jpg" },
  { id: 12, custmrSrc: "/images/cust-logo2.jpg" },
  { id: 13, custmrSrc: "/images/cable-wireless.jpg" },
  { id: 14, custmrSrc: "/images/voda-greece.jpg" },
  { id: 15, custmrSrc: "/images/cust-logo2.jpg" },
];

  return (
    <>
      <header className="index-header1" >
        <div className="logo float-left">
          <h1>
            <Link to={`/`} >
              <img src={`${process.env.PUBLIC_URL}` + "/images/evol_white_logo.jpg"} alt="" />
              
            </Link>
          </h1>
        </div>
        <div className="rheader float-right">
          <div className="toplinks checkcenter">

            {/* <div className=""> */}
            <Link to={`/dashboard`} className="" >
              Home
            </Link>
            <Link
              to={{
                pathname: `/contactus`
              }}
            // className="cntlink float-right"
            >
              Contact
            </Link>

            <Link to={`/login`} className="" >
              Login
            </Link>
            {/* </div> */}

          </div>
        </div>
      </header>
      {/* <!-- END HEADER PART --> */}
      <div className="index-main-content1">
        <section className="mainbanner topspace loginContainer" style={{ marginTop: '82px', display: "flex", alignItems:"center" }}>
          <div className="row flex-row-reverse">
            <div className="col-lg-6 imgpart">
              {/* <div className="tnmlogo">
                <img src={`${process.env.PUBLIC_URL}` + "/images/tnm-logo-w.png"} alt="" />
              </div> */}
              <div className="imgbox">
                <img src={`${process.env.PUBLIC_URL}` + "/images/newMainImg.png"} alt="" style={{ position: "relative", zIndex: "1" }} />
              </div>
            </div>
            <div className="col-lg-6 texts">
              <div className="textinner">

                <h4>
                Lorem ipsum dolor sit amet <br />
                consectetuer adipiscing elit
                </h4>
                <br />
                <h5>
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                </h5>
                <div className="btns">
                  <a
                    className="index-cbtn"
                    onClick={e => handleClick("trial")}
                  >
                    Sapien tincidunt
                  </a>
                  <a
                    className="index-cbtn"
                    onClick={e => handleClick("demo")}
                  >
                    Curabitur ligula
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="managepart">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3 text-center managebox">
                <div className="icon optimize"></div>
                <div className="info">
                  <p>
                    Optimize
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3 text-center managebox">
                <div className="icon simplify"></div>
                <div className="info">
                  <p>
                    Simplify
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3 text-center managebox">
                <div className="icon automate"></div>
                <div className="info">
                  <p>
                    Automate
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 text-center managebox">
                <div className="icon streamline"></div>
                <div className="info">
                  <p>
                    Streamline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="managepart">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-3 mb-xl-5 ctitle1">
                <h4>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                  <br /> Cum sociis natoque penatibus:

                </h4>
              </div>
              <div className="col-12 col-sm-6 col-md-3 text-center managebox">
                <div className="icon icon1"></div>
                <div className="info1">
                  <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  </span>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 text-center managebox">
                <div className="icon icon2"></div>
                <div className="info1">
                  <span>
                  Cum sociis natoque penatibus et magnis dis parturient montes.                  </span>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 text-center managebox">
                <div className="icon icon3"></div>
                <div className="info1">
                  <span>
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.                  </span>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 text-center managebox">
                <div className="icon icon4"></div>
                <div className="info1">
                  <span>
                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 

</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="designpart">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-12 col-sm-5 col-md-6 col-lg-5 imgpart">
                <div className="imgbox">
                  <img src={`${process.env.PUBLIC_URL}/images/NewTheme/tnm1.png`} alt="" />
                </div>
              </div>
              <div className="col-12 col-sm-7 col-md-6 col-lg-6 textinfo">

                <div className="col-12 mb-3 mb-md-2 ctitle1">
                  <h4>Integer tincidunt. Cras dapibus.</h4>
                </div>
                <div className="ctext">
                  <ul className="landingBullets">
                    <li >
                    Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.                    </li>
                    <li key='Completely'>
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.                     </li>
                    <li key='Centralized'>
                    Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.                    </li>
                    <li key='configuration'>
                    Aenean imperdiet. Etiam ultricies nisi vel augue.                     </li>
                    <li key='integration' style={{ backgroundPosition: "0px", lineHeight: "27px" }}>
                    Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.                    </li>
                    <li key='Conforms' style={{ backgroundPosition: "0px", lineHeight: "27px" }}>
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row tnmpart">
              <div className="col-12 text-center mb-1 mb-md-3 ctitle1">
                <h4>Nam quam nunc?</h4>
              </div>
              <div className="col-12 col-sm-5 col-md-6 col-lg-5 imgpart">
                <div className="imgbox">
                  <img src={`${process.env.PUBLIC_URL}/images/NewTheme/tnm2.png`} alt="" />
                </div>
              </div>
              <div className="col-12 col-sm-7 col-md-6 col-lg-7 textinfo">
                <div className="ctext">
                  <ul className="landingBullets">
                    <li key='Single'>
                      <b>Maecenas nec: </b> Maecenas nec odio et ante tincidunt tempus.
                    </li>
                    <li key="Proven" style={{ backgroundPosition: "0px", lineHeight: "27px" }}>
                      <b>onec vitae:</b> sapien ut libero venenatis faucibus. 
                    </li>
                    <li key='Easy'>
                      <b>Nullam quis ante: </b>  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                    </li>
                    <li key='performace'>
                      <b>Sed fringilla: </b>mauris sit amet nibh. Donec sodales sagittis magna.
                    </li>
                    <div className="btns">
                      <a
                        className="index-cbtn"
                        onClick={e => handleClick("demo")}
                      >
                        Bibendum sodales, augue velit cursus
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faqs">
          <div className="container">
            <div className="row">
              <div className="col-12 mt-4 ctitle1">
                <h4 style={{ color: "#fff" }}>FAQs: Uuis gravida magna mi a libero.</h4>
              </div>
              {/* <FaqsAccordion/>  */}
              <div className="col-12 col-lg-6 faqlists" id="accordion">
                <div className="accordion" id="accordionExample">
                  <div className="cards accordionBg">
                    <div className="accordion-item">
                      <div type="button" className="quation accordion-button card-header collapsed" data-toggle="collapse" href="#collapseOne">
                        <a className="card-title">
                        Vestibulum purus quam, scelerisque ut? 
                        </a>
                      </div>

                      <div
                        id="collapseOne"
                        className="quation accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">
                        Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <hr />
                  <div className="cards accordionBg">
                    <div className="accordion-item">
                      {/* <div className="card-header">
                        <button
                          className="quation accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          2. How do I integrate to TNM platform?
                        </button>
                      </div> */}
                       <div type="button" className="quation accordion-button card-header collapsed" data-toggle="collapse" href="#collapseTwo">
                        <a className="card-title">
                        In ac dui quis mi consectetuer lacinia?
                        </a>
                      </div>
                      <div
                        id="collapseTwo"
                        className="quation accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">

                        Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="cards accordionBg">
                    <div className="accordion-item">
                      {/* <div className="card-header">
                        <button
                          className="quation accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          3. What are the benefits of a cloud SaaS subscription vs on-premises deployment?
                        </button>
                      </div> */}
                       <div type="button" className="quation accordion-button card-header collapsed" data-toggle="collapse" href="#collapseThree">
                        <a className="card-title">
                        Integer ante arcu, accumsan? 
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        className="quation accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">
                        Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero.                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="cards accordionBg">
                    <div className="accordion-item">
                      {/* <div className="card-header">
                        <button
                          className="quation accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          4. How do I get accurate reports of my inventories?
                        </button>
                      </div> */}
                       <div type="button" className="quation accordion-button card-header collapsed" data-toggle="collapse" href="#collapseFour">
                        <a className="card-title">
                        Aenean ut eros et nisl? 
                        </a>
                      </div>
                      <div
                        id="collapseFour"
                        className="quation accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">
                        Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci.                         </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>


              </div>
              <div className="col-12 col-lg-6 faqimg text-center">
                <img src={`${process.env.PUBLIC_URL}/images/NewTheme/faq.png`} alt="" />
              </div>
            </div>
          </div>
        </section>

        <a href="#" id="return-to-top"></a>
        {/* <!-- START FOOTER PART --> */}
        <footer className="d-flex p-3">
          <div className="container">
            © 2025 Code Vision. All Rights Reserved.
            {/* <img src={`${process.env.PUBLIC_URL}/images/footer.png`} alt="" width={"95%"}/> */}
          </div>
        </footer>
        {/* <!-- END FOOTER PART --> */}
      </div>
      {
        showDemoModal && <WatchDemoNewTheme
          showModal={showDemoModal}
          setShowModal={setShowDemoModal}
        />
      }
      {
        showTrialModal && <FreeTrialNewTheme
          showModal={showTrialModal}
          setShowModal={setShowTrialModal}
        />
      }
    </>
  );
};

export default LandingPage;