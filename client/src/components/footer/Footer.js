// import "./Footer.css";
// export default function Footer() {
//   return (
//     <>
//       <div
//         className="footer border"
//         style={{
//           backgroundColor: "var(--green)",
//           color: "var(--white)",
//           width: "99vw",
//         }}
//       >
//         <div className="footer-inner m-1 ms-3 me-3">
//           <div className="footer-top d-flex justify-content-between flex-wrap">
//             <div className="footer-customersupport  d-flex flex-column p-3">
//               <h3 className="footer-h3">Customer Support</h3>
//               <small className="footer-values links ps-3">Contact Us</small>
//               <small className="footer-values links ps-3">FAQ</small>
//               <small className="footer-values links ps-3">Track Order</small>
//               <small className="footer-values links ps-3">
//                 Return & Exchange
//               </small>
//               <small className="footer-values links ps-3">
//                 Shipping Location
//               </small>
//             </div>
//             <div className="footer-aboutus d-flex flex-column p-3">
//               <h3 className="footer-h3">About Us</h3>
//               <small className="footer-values links ps-3">Our Story</small>
//               <small className="footer-values links ps-3">Blogs</small>
//               <small className="footer-values links ps-3">
//                 Ingredients Index
//               </small>
//               <small className="footer-values links ps-3">
//                 clinin & hospitals
//               </small>
//               <small className="footer-values links ps-3">Media</small>
//             </div>
//             <div className="footer-account  d-flex flex-column p-3">
//               <h3 className="footer-h3">Your Account</h3>
//               <small className="footer-values links ps-3">My Account</small>
//             </div>
//             <div className="footer-privacypolicy">
//               <div className="footer-privacypolicy-top d-flex flex-column p-3">
//                 <h3 className="footer-h3">Privacy and Terms</h3>
//                 <small className="footer-values links ps-3">
//                   Privacy Policy
//                 </small>
//                 <small className="footer-values links ps-3">
//                   Terms & Conditions
//                 </small>
//               </div>
//               <div className="footer-privacypolicy d-flex justify-content-evenly flex-wrap social-icons">
//                 <a
//                   href="https://en.wikipedia.org/wiki/Ayurveda"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <div
//                     style={{
//                       filter:
//                         "invert(98%) sepia(57%) saturate(10%) hue-rotate(227deg) brightness(1004%) contrast(102%)",
//                     }}
//                     className="border-dark footer-icon icon-wikipedia"
//                   ></div>
//                 </a>
//                 <a
//                   href="https://www.facebook.com/prathaayurveda/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <div
//                     style={{
//                       filter:
//                         "invert(98%) sepia(57%) saturate(10%) hue-rotate(227deg) brightness(104%) contrast(102%)",
//                     }}
//                     className="border-dark footer-icon icon-facebook"
//                   ></div>
//                 </a>
//                 <a
//                   href="https://www.google.com/search?sca_esv=00fee2c195b96c2e&sxsrf=ACQVn0_cKL_yijq7YJDcp8Y-6hwLOvjv1g:1714371093104&q=ayurveda&source=lnms&uds=AMwkrPsF4AhfhjtVp64WR6poPe2do02cCzdfOOcWqwkAx_2ITWxyOj8RxUeflVzX7KCc1DOZB7zRaATEnqjcMCTM62HrSoEfi0YnrRoKl1gcT53pSm7VEeig0lyXvcmmRs8S3J-3oDoId4gxg5nAPcC7LzUSqx5NusJ9-P9GcelvWgX0cJyTp-8fXFG-wfYFyLWPcUqcgmXbuFMIixb4mWAxuuzRtlvyCy0rqNynegr9mBWYkVTlofoRZJ7_U6Coi-8zk8g7s6GtrR0mlFGDW85EBZvDL2fMXec_Y5zqUYA4E7aJ9JGnvks&sa=X&ved=2ahUKEwiX3JGA4uaFAxWriK8BHYeKAVwQ0pQJegQIERAB&biw=1366&bih=641&dpr=1"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <div
//                     style={{
//                       filter:
//                         "invert(98%) sepia(57%) saturate(10%) hue-rotate(227deg) brightness(104%) contrast(102%)",
//                     }}
//                     className="border-dark footer-icon icon-google"
//                   ></div>
//                 </a>
//                 <a
//                   href="https://www.instagram.com/amrutamofficial/?hl=en"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <div
//                     style={{
//                       filter:
//                         "invert(98%) sepia(57%) saturate(10%) hue-rotate(227deg) brightness(1004%) contrast(102%)",
//                     }}
//                     className="border-dark footer-icon icon-insta"
//                   ></div>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="footer-bottom d-flex align-items-center flex-wrap">
//             <div className="footer-logo ms-3"></div>
//             <div className="footer-text d-flex flex-wrap ms-3">
//               <h6>
//                 Worldwide Copyright © VedaRoot (brand owners of The VedaRoot ).
//                 All rights reserved.
//               </h6>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer border">
      <div className="footer-inner m-1 ms-3 me-3">
        <div className="footer-top d-flex justify-content-between flex-wrap">
          <div className="footer-section footer-customersupport p-3">
            <h3>Customer Support</h3>
            <ul>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#track-order">Track Order</a>
              </li>
              <li>
                <a href="#return-exchange">Return & Exchange</a>
              </li>
              <li>
                <a href="#shipping-location">Shipping Location</a>
              </li>
            </ul>
          </div>
          <div className="footer-section footer-aboutus p-3">
            <h3>About Us</h3>
            <ul>
              <li>
                <a href="#our-story">Our Story</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
              <li>
                <a href="#ingredients-index">Ingredients Index</a>
              </li>
              <li>
                <a href="#clinics-hospitals">Clinics & Hospitals</a>
              </li>
              <li>
                <a href="#media">Media</a>
              </li>
            </ul>
          </div>
          <div className="footer-section footer-account p-3">
            <h3>Your Account</h3>
            <ul>
              <li>
                <a href="#my-account">My Account</a>
              </li>
            </ul>
          </div>
          <div className="footer-section footer-privacy p-3">
            <h3>Privacy and Terms</h3>
            <ul>
              <li>
                <a href="#privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms-conditions">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="footer-section footer-social p-3">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://en.wikipedia.org/wiki/Ayurveda"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-wikipedia-w"></i>
              </a>
              <a
                href="https://www.facebook.com/prathaayurveda/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.google.com/search?sca_esv=00fee2c195b96c2e&sxsrf=ACQVn0_cKL_yijq7YJDcp8Y-6hwLOvjv1g:1714371093104&q=ayurveda&source=lnms&uds=AMwkrPsF4AhfhjtVp64WR6poPe2do02cCzdfOOcWqwkAx_2ITWxyOj8RxUeflVzX7KCc1DOZB7zRaATEnqjcMCTM62HrSoEfi0YnrRoKl1gcT53pSm7VEeig0lyXvcmmRs8S3J-3oDoId4gxg5nAPcC7LzUSqx5NusJ9-P9GcelvWgX0cJyTp-8fXFG-wfYFyLWPcUqcgmXbuFMIixb4mWAxuuzRtlvyCy0rqNynegr9mBWYkVTlofoRZJ7_U6Coi-8zk8g7s6GtrR0mlFGDW85EBZvDL2fMXec_Y5zqUYA4E7aJ9JGnvks&sa=X&ved=2ahUKEwiX3JGA4uaFAxWriK8BHYeKAVwQ0pQJegQIERAB&biw=1366&bih=641&dpr=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-google"></i>
              </a>
              <a
                href="https://www.instagram.com/amrutamofficial/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex align-items-center flex-wrap">
          <div className="footer-logo"></div>
          <div className="footer-text ms-3">
            <h6>
              Worldwide Copyright © VedaRoot (brand owners of The VedaRoot). All
              rights reserved.
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}
