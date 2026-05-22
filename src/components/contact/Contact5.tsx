import "./ContactCard.css";

export default function Contact5() {
  return (
    <div className="tmp-contact-area" id="contacts">
      <div className="inner">
        <div className="contact-get-in-touch-wrap">
          <div className="section-head text-align-left mb--50">
            <h5 className="pre-title mb--20">GET IN TOUCH</h5>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Contact Me
            </h2>
            <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
              Open to frontend developer roles, internships, freelance projects, and collaboration. 
              Feel free to contact me for opportunities or project discussions.
            </p>
          </div>
          
          <div className="contact-inner position-relative">
            <div className="contact-card-wrapper">
              <div className="contact-info-card">
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="contact-text">
                      <h5>Email</h5>
                      <a href="mailto:sudharsan.intl@gmail.com" className="contact-link">
                        sudharsan.intl@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div className="contact-text">
                      <h5>LinkedIn</h5>
                      <a 
                        href="/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-link"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="fa-brands fa-github"></i>
                    </div>
                    <div className="contact-text">
                      <h5>GitHub</h5>
                      <a 
                        href="https://github.com/sudharsan-intl" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-link"
                      >
                        GitHub Profile
                      </a>
                    </div>
                  </div>

                  {/* Naukri removed per request - keep only Email, LinkedIn, GitHub */}
                </div>

                <div className="contact-cta">
                  <a 
                    href="mailto:sudharsan.intl@gmail.com" 
                    className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">Email Me</span>
                      <div className="btn-hack" />
                      <img
                        alt=""
                        className="btn-bg"
                        src="/assets/images/button/btg-bg.svg"
                        width={195}
                        height={56}
                      />
                      <img
                        alt=""
                        className="btn-bg-hover"
                        src="/assets/images/button/btg-bg-2.svg"
                        width={193}
                        height={62}
                      />
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="tmp-light light-center-center active" />
          </div>
        </div>
      </div>
    </div>
  );
}
