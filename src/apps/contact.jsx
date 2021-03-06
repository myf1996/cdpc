import React from "react";
import Footer from "./footer";
import Header from "./header";

const Contact = (props) => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="contact-section">
          <div className="contact-head">
            <div className="row" style={{ display: "-webkit-box" }}>
              <div className="col-lg-8 col-12">
                <div className="form-main">
                  <div className="title">
                    <h4 className="sub-header">Get in touch</h4>
                    <h3 className="sub-header">Write us a message</h3>
                  </div>

                  <form className="form" method="post">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label>
                            Your Name<span>*</span>
                          </label>
                          <input type="text" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div class="form-group">
                          <label>
                            Your Subjects<span>*</span>
                          </label>
                          <input type="text" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label>
                            Your Email<span>*</span>
                          </label>
                          <input type="text" required />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label>
                            Your Phone<span>*</span>
                          </label>
                          <input type="text" required />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group message">
                          <label>
                            your message<span>*</span>
                          </label>
                          <textarea className="textarea" required />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group button">
                          <button type="submit" class="btn btn-success ">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="single-head">
                  <div className="single-info">
                    <i className="fa fa-phone"></i>
                    <h4 className="title">Call us Now:</h4>
                    <ul>
                      <li>+92-21-99261413</li>
                      <li>+92-21-99261438</li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <i className="fa fa-fax"></i>
                    <h4 className="title">Fax:</h4>
                    <ul>
                      <li>+92-21-99261405</li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <i className="fa fa-envelope-open"></i>
                    <h4 className="title">Email:</h4>
                    <ul>
                      <li>
                        <a href="mailto:info.cdpc@pmd.gov.pk">
                          {" "}
                          info.cdpc@pmd.gov.pk
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <i className="fa fa-map-marker"></i>
                    <h4 className="title">Address:</h4>
                    <ul>
                      <li>
                        Climate Data Processing Centre <br /> Pakistan
                        Meteorological Department <br /> Met. Complex, Block #
                        5, Gulistan E Jauhar.
                        <br /> University Road, Karachi-75290. PAKISTAN
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
