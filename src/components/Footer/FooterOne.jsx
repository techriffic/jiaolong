import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../../src/assets/img/logo/logo.png";
import { scrollToTop } from "../../lib/helpers";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-scroll-wrap">
            <button
              className="scroll-to-target"
              data-target="html"
              onClick={scrollToTop}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          {/* <div className="footer-top">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <Link to="/" className="f-logo">
                    <img src={logoImage} alt="BigTech Logo" />
                  </Link>
                  <div className="footer-content">
                    <p>
                      A new way to make the payments easy, reliable and 100%
                      secure. claritatem itamconse quat. Exerci tationulla
                    </p>
                    <ul className="footer-social">
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-skype"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            
             
              <div className="col-md-8">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h4 className="fw-title">Subscribe Newsletter</h4>
                  <div className="footer-newsletter">
                    <p>
                      Exerci tation ullamcorper suscipit lobortis nisl aliquip
                      ex ea commodo
                    </p>
                    <form action="#">
                      <input
                        type="email"
                        placeholder="Info@gmail.com"
                        required
                      />
                      <button type="submit">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="footer">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>Copyright &copy; 2024. All Rights Reserved Bigtech</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
