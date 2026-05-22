import { Link } from "react-router-dom";

export default function Footer1({
  parentClass = "tmp-footer-area footer-style-4 tmp-section-gapTop pb--50",
}) {
  return (
    <div className={parentClass}>
      <div className="plr--150 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15">
        <div className="row">
          <div className="col-lg-12">
            <div className="for-animation-inner">
              <div className="cta__line-wrap-1">
                <img
                  src="https://cdn.prod.website-files.com/672799259500d2477d1eafa5/6732fb6df497a3fa7a857752_Vector%207.svg"
                  loading="lazy"
                  alt=""
                  height={118}
                  className="cta__line-1"
                />
              </div>
              <div className="cta__line-wrap-2">
                <img
                  className="cta__line-2"
                  src="https://cdn.prod.website-files.com/672799259500d2477d1eafa5/6732fb6df497a3fa7a857752_Vector%207.svg"
                  loading="lazy"
                  alt=""
                  height={118}
                />
              </div>
             
                <p className="description mt--30">
                  © {new Date().getFullYear()} Sudharsan S. All rights reserved.
                </p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
