import { portfolioSingleCards } from "@/data/portfolio";

export default function Portfolios6() {
  return (
    <div className="tmp-portfolio-area" id="portfolio">
      <div className="inner">
        <div className="section-head text-align-left mb--50">
          <h5 className="pre-title mb--20">My Completed Work</h5>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            My Work &amp; Projects
          </h2>
          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
            A selection of projects I have built using React.js, MERN stack, API integration, authentication, and responsive frontend design.
          </p>
        </div>
        <div className="row animation-action-1">
          {portfolioSingleCards.map((item, index) => (
            <div
              className="col-lg-6 col-md-6 col-sm-12 paralax-image"
              key={index}
            >
              <div
                className="tmp-portfolio-single-card tmponhover single-animation"
                onClick={() => item.liveUrl && window.open(item.liveUrl, '_blank')}
                style={{ cursor: item.liveUrl ? 'pointer' : 'default' }}
              >
                <div className="inner">
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                        <a href="#">{item.category}</a>
                      </div>
                      <div className="meta">
                        <span>
                          <a href="#">
                            <i className="fa-regular fa-heart" />
                          </a>
                          {item.likes}
                        </span>
                      </div>
                    </div>
                    <h4 className="title">
                      <span>
                        {item.title}
                        {item.liveUrl && <i className="fa-solid fa-arrow-up-right" />}
                      </span>
                    </h4>
                  </div>
                </div>
                <div className="tmp-light light-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
