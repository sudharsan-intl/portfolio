import { educationExperience } from "@/data/education";
import { workExperience } from "@/data/experiences";
import { progressCharts, skillProgress } from "@/data/skills";

export default function Resume1() {
  return (
    <div className="tmp-resume-area" id="resume">
      <div className="inner">
        <div className="section-head text-align-left mb--50">
          <h5 className="pre-title mb--20">Education</h5>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Education
          </h2>
          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
            My academic background in computer applications and commerce, combining technical expertise with business acumen.
          </p>
        </div>
        <div className="row g-5 animation-action-2">
          {educationExperience.map(
            (
              { subtitle, title, description, animationOrder, extraClasses },
              index
            ) => (
              <div key={index} className="col-lg-6 col-sm-6 paralax-image">
                <div
                  className={`education-experience-card tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-${animationOrder} ${extraClasses}`}
                >
                  <h4 className="edu-sub-title">{subtitle}</h4>
                  <h2 className="edu-title">{title}</h2>
                  <p className="edu-para">{description}</p>
                  <div className="tmp-light light-center" />
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="inner pt--60">
        <div className="section-head text-align-left mb--50">
          <h5 className="pre-title mb--20">Experience</h5>
          <h3 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Freelance Experience
          </h3>
        </div>
        <div className="row g-5 animation-action-3">
          {workExperience.map(
            (
              { subtitle, title, description, animationOrder, extraClasses },
              idx
            ) => (
              <div key={idx} className="col-lg-6 col-sm-6 paralax-image">
                <div
                  className={`education-experience-card tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-${animationOrder} ${extraClasses}`}
                >
                  <h4 className="edu-sub-title">{subtitle}</h4>
                  <h2 className="edu-title">{title}</h2>
                  <p className="edu-para">{description}</p>
                  <div className="tmp-light light-center" />
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="inner pt--60">
        <div className="row">
          <div className="col-lg-6">
            <div className="progress-wrapper">
              <div className="content">
                <div className="section-head text-align-left mb--50">
                  <h5 className="pre-title mb--20">Frontend Skills</h5>
                  <h3 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Frontend & UI Skills
                  </h3>
                </div>
                {progressCharts.map(
                  (
                    { title, width, wowDuration, wowDelay, percentLabel },
                    idx
                  ) => (
                    <div key={idx} className="progress-charts">
                      <h6 className="heading heading-h6">{title}</h6>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-wow-duration={wowDuration}
                          data-wow-delay={wowDelay}
                          role="progressbar"
                          style={{
                            width,
                            visibility: "visible",
                            animationDuration: wowDuration,
                            animationDelay: wowDelay,
                            animationName: "fadeInLeft",
                          }}
                          aria-valuenow={parseInt(percentLabel)}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className="percent-label">{percentLabel}</span>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="progress-wrapper">
              <div className="content">
                <div className="section-head text-align-left mb--50">
                  <h5 className="pre-title mb--20">Development Skill</h5>
                  <h3 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Backend & Tools
                  </h3>
                </div>
                {skillProgress.map(
                  (
                    { title, width, wowDuration, wowDelay, percentLabel },
                    idx
                  ) => (
                    <div key={idx} className="progress-charts">
                      <h6 className="heading heading-h6">{title}</h6>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-wow-duration={wowDuration}
                          data-wow-delay={wowDelay}
                          role="progressbar"
                          style={{
                            width,
                            visibility: "visible",
                            animationDuration: wowDuration,
                            animationDelay: wowDelay,
                            animationName: "fadeInLeft",
                          }}
                          aria-valuenow={parseInt(percentLabel)}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className="percent-label">{percentLabel}</span>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
