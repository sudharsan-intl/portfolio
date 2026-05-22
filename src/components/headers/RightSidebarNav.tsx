export default function RightSidebarNav() {
  return (
    <>
      <>
        <ul
          className="tab-navigation-button nav tab-smlg flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link tmp-nav active"
              id="v-pills-home-tab"
              data-bs-toggle="tab"
              href="#v-pills-Javascript"
              role="tab"
              aria-selected="true"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link tmp-nav"
              id="v-pills-skills-tab"
              data-bs-toggle="tab"
              href="#v-pills-Design"
              role="tab"
              aria-selected="false"
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link tmp-nav"
              id="v-pills-projects-tab"
              data-bs-toggle="tab"
              href="#v-pills-Wordpress"
              role="tab"
              aria-selected="false"
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link tmp-nav"
              id="v-pills-resume-tab"
              data-bs-toggle="tab"
              href="#v-pills-Design"
              role="tab"
              aria-selected="false"
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link tmp-nav"
              id="v-pills-contact-tab"
              data-bs-toggle="tab"
              href="#v-pills-python"
              role="tab"
              aria-selected="false"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="animation-round-wrap">
          <div className="round-animation-1" />
        </div>
      </>
    </>
  );
}
