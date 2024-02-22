import "./App.css";

import arrow from "./images/arrow.jpg";
import image01 from "./images/image01.jpg";
import image02 from "./images/image02.jpg";
import image03 from "./images/image03.jpg";
import arrow1 from "./images/img carusel/arrow1.png";
import image2 from "./images/img carusel/images (2).png";
import image3 from "./images/img carusel/images (3).png";
import image4 from "./images/img carusel/images (4).png";
import image5 from "./images/img carusel/images (5).png";
import image6 from "./images/img carusel/images (6).png";
import img1 from "./images/img1/img1.png";
import img5 from "./images/img1/section3img5.jpg";
import star from "./images/img1/star.png";
import logo1 from "./images/log.jpg";

import spricingicon from "./images/img1/pricingicon.png";

import icon1 from "./images/img1/section2-icon.png";
import section2img from "./images/img1/section2-img.png";
import section3img from "./images/img1/section3img.png";
import section3img1 from "./images/img1/section3img1.png";
import img4 from "./images/img1/section3img2.png";
import video1 from "./images/video1.webp";
import youtubicon from "./images/youtub-icon.png";
import "./index.css";

function App() {
  return (
    <>
      <div className="container header">
        <div className="wrapper">
          <div className="logo">
            <img src={logo1} alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
          <div>
            <button className="btn">Get Started</button>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <section className="container">
        <div className="hero-1">
          <h2>
            Save time & <span className="hero-bold">work smarter</span>
            <br></br> with AI Automation
          </h2>
        </div>
        <div className="hero-2">
          <p>
            We help you automate your workflows, automate repetitive <br></br>
            tasks, and elevate your business.
          </p>
          <br></br>
          <div className="btn2">
            <button>Book Your Free Audit Call</button>
          </div>
        </div>

        <div className="image1">
          <div className="image1 -space-x-5 rtl:space-x-reverse">
            <img className="image1" src={image01} alt="image1" />
            <img className="image1" src={image02} alt="image2" />
            <img className="image1" src={image03} alt="image3" />
          </div>
        </div>

        <div className="hero-containt">
          <p className="hero-containt2">200+ Happy Clients</p>
          <p className="hero-containt3">Join Them Now </p>
          <img className="hero-icon2" src={arrow} alt="arrow" />
        </div>

        <div className="video">
          <img className="hero-img" src={video1} alt="vedeo1" />
          <img className="youtub-icon" src={youtubicon} alt="youtub-icon" />
          {/* <a href="https://youtu.be/xtJg_o0oxz4">vfjsaj</a> */}
        </div>
        <p className="hero-containt4">TRUSTED BY 40+ WORLDWIDE CLIENTS</p>

        {/* /* image carusel */}

        <div className="slider-area">
          <div className="hero-wrapper">
            <div className="item">
              <img src={image2} alt="image-2" />
            </div>
            <div className="item">
              <img src={image3} alt="image-3" />
            </div>
            <div className="item">
              <img src={image4} alt="image-4" />
            </div>
            <div className="item">
              <img src={image5} alt="image-5" />
            </div>
            <div className="item">
              <img src={image6} alt="image-6" />
            </div>
          </div>
        </div>
      </section>

      {/* section 1  */}
      <section className="container">
        <button className="btn3">SERVICE</button>
        <h2 className="section-containt1">
          <span className="section1-span"> AI-powered </span>automation services
        </h2>

        {/* div 1 items */}
        <div className="section1-wrapper1">
          <div className="section1-cntaint">
            <img className="img1" src={img1} alt="img1" />
            <h3>Customer Support Chatbots</h3>
            <p>
              Streamline operations and enhance productivity with AI-driven
              <br></br>
              automation.
            </p>
            <button className="section1-btn">Learn more</button>
            <img className="arrow1-icon" src={arrow1} alt="arrow1-icon" />
          </div>

          <div className="section1-cntaint">
            <img className="img1" src={img1} alt="img1" />
            <h3>Workflow Automations</h3>
            <p>
              Cut down on manual labor costs through efficient and precise{" "}
              <br></br>automated processes.
            </p>
            <button className="section1-btn">Learn more</button>
            <img className="arrow1-icon" src={arrow1} alt="arrow1-icon" />
          </div>
        </div>
        <br></br>

        {/* div 2 items */}

        <div className="section1-wrapper1">
          <div className="section1-cntaint">
            <img className="img1" src={img1} alt="img1" />
            <h3>Chatbots for Internal Use</h3>
            <p>
              Automate tasks to ensure your business operates seamlessly{" "}
              <br></br>aroun the clock.
            </p>
            <button className="section1-btn">Learn more</button>
            <img className="arrow1-icon" src={arrow1} alt="arrow1-icon" />
          </div>

          <div className="section1-cntaint">
            <img className="img1" src={img1} alt="img1" />
            <h3>Custom GPTs</h3>
            <p>
              Harness the power of AI for in-depth analytics and informed{" "}
              <br></br>decision-making.
            </p>
            <button className="section1-btn">Learn more</button>
            <img className="arrow1-icon" src={arrow1} alt="arrow1-icon" />
          </div>
        </div>
      </section>

      {/* /* section-2 */}
      <section className="container">
        <div className="section2-wrapper">
          <div className="section2-containt">
            <div>
              <button>CONTENT BLOCK</button>
              <h3>
                Workflows with our AI<br></br> automation
                <span className="section2-span1"> expertise</span>
              </h3>
              <p>
                Revolutionize tasks, reduce errors, and boost efficiency with
                <br></br>intelligent technology, streamlining operations for
                unparalleled <br></br> productivity.
              </p>
              <div className="section2-ptag1">
                <img className="icon1" src={icon1} alt="sicon1" />
                <p>Functional sections</p>
              </div>

              <div className="section2-ptag1">
                <img className="icon1" src={icon1} alt="sicon1" />
                <p>Functional sections</p>
              </div>
              <button className="section2btn">Book Your Free Audit Call</button>
            </div>

            <div className="section2img2">
              <img src={section2img} alt="section2img" />
            </div>
          </div>
        </div>
      </section>

      {/* /* section-3 */}
      <section className="container">
        <div className="section2-wrapper">
          <div>
            <img className="section3img" src={section3img} alt="section3img" />
          </div>

          <div className="section3-contain">
            <button>CONTENT BLOCK</button>
            <h3>
              Harnessing AI for<br></br>business success
            </h3>

            {/* section3 containt box 2 */}
            <div className="section3-containt1">
              <img className="img3" src={section3img1} alt="section3img1" />
              <p>
                Boost efficiency and cut costs with AI-
                <br /> powered resources
              </p>
              <img className="img4" src={img4} alt="img1" />
            </div>
            <br></br>
            <div className="section3-containt1">
              <img className="img3" src={section3img1} alt="section3img1" />
              <p>
                Optimaize operation, minimize errors and <br></br>save resources
              </p>
              <img className="img4" src={img4} alt="img1" />
            </div>
            <br></br>
            <p className="section3patag2">
              “Couldnt be happier with the work the guys from XYZ Agency did
              <br></br> for us. Made sales 10x more efficient.”
            </p>
            <div className="section3cnotiain3">
              <img className="img5" src={img5} alt="img5" />
              <p className="section3patag3">
                William James <br></br>CEO, XYZ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* /* section-4 */}
      <section className="container sectionFour">
        <div className="section4container">
          <button className="section4Button1">TASTIMONIAL</button>
          <h3 className="sction4Ptag1">
            Leading the way in AI<br></br> automation
          </h3>
        </div>

        {/* TASTIMONIAL-1 */}
        <div className="tastimonial-wrapper">
          <div className="slideTastimonial">
            <div className="section4Tastimonial">
              <div>
                <img className="sectionFiveImg" src={img5} alt="" />
              </div>
              <div className="title">
                <h3 className="tastimonialText1">Alex James</h3>
                <p>Marketing Director @ ABC</p>
              </div>
            </div>
            <p className="tastimonialText2">
              We have tried countless of agencies but<br></br> this has been the
              best experience by<br></br> far..
            </p>
            <div className="starIcon">
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
            </div>
          </div>
          {/* tatimonial-2 */}
          <div className="slideTastimonial">
            <div className="section4Tastimonial">
              <div>
                <img className="sectionFiveImg" src={img5} alt="" />
              </div>
              <div className="title">
                <h3 className="tastimonialText1">Alex James</h3>
                <p>Marketing Director @ ABC</p>
              </div>
            </div>
            <p className="tastimonialText2">
              We have tried countless of agencies but<br></br> this has been the
              best experience by<br></br> far..
            </p>
            <div className="starIcon">
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
            </div>
          </div>
          {/* tatimonial-3 */}
          <div className="slideTastimonial">
            <div className="section4Tastimonial">
              <div>
                <img className="sectionFiveImg" src={img5} alt="" />
              </div>
              <div className="title">
                <h3 className="tastimonialText1">Alex James</h3>
                <p>Marketing Director @ ABC</p>
              </div>
            </div>
            <p className="tastimonialText2">
              We have tried countless of agencies but<br></br> this has been the
              best experience by<br></br> far..
            </p>
            <div className="starIcon">
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
            </div>
          </div>
          {/* tatimonial-4 */}
          <div className="slideTastimonial">
            <div className="section4Tastimonial">
              <div>
                <img className="sectionFiveImg" src={img5} alt="" />
              </div>
              <div className="title">
                <h3 className="tastimonialText1">Alex James</h3>
                <p>Marketing Director @ ABC</p>
              </div>
            </div>
            <p className="tastimonialText2">
              We have tried countless of agencies but<br></br> this has been the
              best experience by<br></br> far..
            </p>
            <div className="starIcon">
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
              <div>
                <img className="star" src={star} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /* section-5 */}
      <section className="container section5">
        <div>
          <button className="section5Button1">PROCESS</button>
          <h3 className="section5title1">How to get started</h3>
          <p className="section5p1">
            Unleash the power of AI automation to transform routine processes,
            <br></br> ensuring precision, 24/7 availability, and significant
            cost savings.
          </p>
          <button className="section5Button2">Book Your Free Audit Call</button>
        </div>
        <div>
          {/* box1 */}
          <div className="section5box1">
            <div className="left">
              <div className="right">
                <h3>01</h3>
                <h4>Book a discovery call</h4>
                <p>
                  Book your free discovery call by clicking one of the buttons
                  <br></br> on this page.
                </p>
                <button className="section5-btn">Get Started</button>
                <img className="section5-icon" src={arrow1} alt="arrow1-icon" />
              </div>
            </div>
          </div>
          <br></br>
          {/* box2 */}
          <div className="section5box1">
            <h3>02</h3>
            <h4>Book a discovery call</h4>
            <p>
              Book your free discovery call by clicking one of the buttons
              <br></br> on this page.
            </p>
            <button className="section5-btn">Get Started</button>
            <img className="section5-icon" src={arrow1} alt="arrow1-icon" />
          </div>
          <br></br>
          {/* box3 */}
          <div className="section5box1">
            <h3>03</h3>
            <h4>Book a discovery call</h4>
            <p>
              Book your free discovery call by clicking one of the buttons
              <br></br> on this page.
            </p>
            <button className="section5-btn">Get Started</button>
            <img className="section5-icon" src={arrow1} alt="arrow1-icon" />
          </div>
        </div>
      </section>

      {/* /* section-6 */}
      <section className="container section6">
        <div className="section6">
          <button>PRISING</button>
          <h3>Plans to Fit Your Business</h3>
          <h4>
            Monthly ---<span className="section6span">Yearly</span>
          </h4>
        </div>

        {/* Prising Table 1 */}
        <div className="prising-table-wrapper">
          <div className="pirsingtable">
            <div>
              <div>
                <p>Pro</p>
                <h2>$199/m</h2>
                <p>Price breakdown here</p>
                <button className="prisingbutton">Get Started</button>
                <p>Got questions? Talk to an expert</p>
              </div>
              {/* feature  */}
              <div className="prisingFeature">
                <img className="pricingicon1" src={icon1} alt="pirsingtable" />
                <p>Feature here</p>
              </div>
              <div className="prisingFeature">
                <img className="pricingicon1" src={icon1} alt="pirsingtable" />
                <p>Feature here</p>
              </div>
              {/* Option icon */}
              <div className="prisinOption">
                <p>Option add -one</p>
                <img
                  className="pricingicon2"
                  src={spricingicon}
                  alt="pirsingtable"
                />
              </div>
            </div>
          </div>
          <br></br>
          {/* Prising Table 2 */}
          <div className="pirsingtable">
            <div>
              <div>
                <p>Pro</p>
                <h2>$199/m</h2>
                <p>Price breakdown here</p>
                <button className="prisingbutton">Get Started</button>
                <p>Got questions? Talk to an expert</p>
              </div>
              {/* feature  */}
              <div className="prisingFeature">
                <img className="pricingicon1" src={icon1} alt="pirsingtable" />
                <p>Feature here</p>
              </div>
              <div className="prisingFeature">
                <img className="pricingicon1" src={icon1} alt="pirsingtable" />
                <p>Feature here</p>
              </div>
              {/* Option icon */}
              <div className="prisinOption">
                <p>Option add -one</p>
                <img
                  className="pricingicon2"
                  src={spricingicon}
                  alt="pirsingtable"
                />
              </div>
            </div>
          </div>
          <br></br>
          {/* Prising Table 3 */}
          <div className="pirsingtable">
            <div>
              <div>
                <p>Pro</p>
                <h2>$199/m</h2>
                <p>Price breakdown here</p>
                <button className="prisingbutton">Get Started</button>
                <p>Got questions? Talk to an expert</p>
              </div>
              {/* feature  */}
              <div className="prisingFeature">
                <img className="pricingicon1" src={icon1} alt="pirsingtable" />
                <p>Feature here</p>
              </div>
              <div className="prisingFeature">
                <img className="pricingicon1" src={icon1} alt="pirsingtable" />
                <p>Feature here</p>
              </div>
              {/* Option icon */}
              <div className="prisinOption">
                <p>Option add -one</p>
                <img
                  className="pricingicon2"
                  src={spricingicon}
                  alt="pirsingtable"
                />
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
      </section>
    </>
  );
}
export default App;
