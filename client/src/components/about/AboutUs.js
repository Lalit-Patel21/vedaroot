import Header from "../header/Header";
import Footer from "../footer/Footer";
import { FaHeart, FaLeaf } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import "./About.css";

export default function AboutUs() {
  return (
    <>
      <Header />
      {/* ====================================================FIRST-SECTION======================================================= */}
      {/* FIRST SECTION */}
      <div className="container-fluid position-relative about_Image">
        <img
          src="./images/home2.jpg"
          className="img-fluid about_Image"
          alt="VedaRoot Image"
        />
        <div
          className="position-absolute top-50 start-50 translate-middle text-center Image_text"
          style={{ color: "white" }}
        >
          {/* Center content */}
          <h1 className="mb-2">VedaRoot</h1>
          <p>
            VedaRoot is an ancient Indian system of medicine that focuses on
            natural remedies, diet, and lifestyle to promote health and prevent
            illness. VedaRoot emphasizes the interconnectedness of body, mind,
            and spirit.
          </p>
        </div>
      </div>
      {/* ==================================================SECOND-SECTION======================================================= */}
      {/* SECOND SECTION */}
      <div className="container border broder-dark">
        <div className="row d-flex align-items-center">
          <div className="col-12">
            <div className="text-center mb-3 mt-3 HistoryofVedaRoot">
              <h1 className="border-bottom border-2 border-dark d-inline pb-1">
                History of VedaRoot
              </h1>
            </div>
          </div>
        </div>

        <div className="row d-flex align-items-center justify-content-center mt-3 mb-2">
          <div className="col-md-8 text-center col-12">
            VedaRoot is an ancient system of medicine that originated in India
            over 5,000 years ago. Its name comes from the Sanskrit words "veda,"
            meaning knowledge, and "root," symbolizing the foundation of life.
            In simple terms, VedaRoot focuses on achieving balance and harmony
            within the body, mind, and spirit to maintain good health and
            prevent illness. It believes that each person is made up of a unique
            combination of elements known as doshas - Vata (air and space),
            Pitta (fire and water), and Kapha (earth and water)...
          </div>
          <div
            className="col-md-4 col-12 mt-3 text-center"
            id="history_right-image"
          >
            <img src="./images/home1.jpg" height={"300px"} width={"300px"} />
          </div>
        </div>
      </div>
      {/* ====================================================THIRD-SECTION======================================================= */}
      <div className="container-fluid mt-3" id="about_third_section">
        <div className="row">
          <div className="text-center mt-3 mb-2">
            <h1 className="border-bottom border-2 border-dark d-inline pb-1">
              Why VedaRoot
            </h1>
          </div>
        </div>

        <div className="row mt-3 mb-3">
          <div className="col-md-4 col-12">
            <div className="row mb-3">
              <div className="col-md-12 text-center mt-3 mb-3">
                <FaHeart style={{ color: "rgb(86, 142, 86)" }} size={50} />
                <br></br>
                <span className="mt-2 d-block">Promise of VedaRoot</span>
              </div>
            </div>
            <div className="shadow p-3 mb-5" id="history_box">
              We have a range of VedaRoot Products. From Thailams to hair
              treatment oils. We have got everything covered. We also have the
              best quality facial ubtans and face packs to suit every skin type.
              All of our products are made in small batches using handpicked and
              carefully sourced ingredients. Our Extra Virgin Coconut Oil is
              extracted from fresh coconut milk without any chemical processes,
              it is the purest form of coconut oil, water white in color.
              Absolutely No Heat involved in the process making it India’s best
              VCO. Our VedaRoot Thailams are made using authentic VedaRoot
              reference texts and are manufactured in small batches which
              ensures quality. Manufactured within our facility located in
              Palakkad, Kerala.
            </div>
          </div>

          {/* second-box */}
          <div className="col-md-4 col-12">
            <div className="row mb-3">
              <div className="col-md-12 text-center mt-3 mb-3">
                <FaLeaf style={{ color: "rgb(86, 142, 86)" }} size={50} />
                <br></br>
                <span className="mt-2 d-block">Responsible Sourcing</span>
              </div>
            </div>
            <div className="shadow p-3 mb-5" id="history_box">
              Responsibly sourced high quality ingredients are our backup. We
              source our ingredients carefully. Most ingredients for our
              Classical VedaRoot formulations are sourced from Western Ghats and
              forest communities from Kerala. We will never test on animals. We
              are and always will be cruelty-free. Entire Shesha range is free
              of parabens, sodium lauryl sulphate, mineral oils, artificial
              perfumes and colour additives and are prepared from organically
              sourced medicinal herbs through a 100% natural process with the
              guidance of ancient VedaRoot scriptures. **Not all of our formulas
              are Vegan. Some of our products contain milk. Please refer to the
              ingredients list on the individual product listing to find out
              whether a formulation contains milk.
            </div>
          </div>

          {/* third-box */}
          <div className="col-md-4 col-12">
            <div className="row mb-3">
              <div className="col-md-12 text-center mt-3 mb-3">
                <IoMdDoneAll style={{ color: "rgb(86, 142, 86)" }} size={50} />
                <br></br>
                <span className="mt-2 d-block">Promise of VedaRoot</span>
              </div>
            </div>
            <div className="shadow p-3 mb-" id="history_box">
              We deliver carefully selected products that are 100% natural and
              free from all chemicals. Manufactured in God’s own country,
              Kerala. Our products are made of VedaRoot ingredients and every
              product formulation undergoes strict quality assessments. Our
              products with luxurious formulations use herbal ingredients, each
              with special and unique qualities, sourced from organic farmers in
              Western Ghats to deliver best results, catering for all skin
              types. Quality is our primary standard and all of our products are
              manufactured to the strictest and highest quality standards- in
              state of the art GMP compliant, Drug Controller licensed, and
              VedaRoot Licensed laboratories/manufacturing plants located in
              Kerala, India.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
