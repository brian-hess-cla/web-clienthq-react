function DashboardNavigation() {
  return (
      <div className="clienthq-seamless-nav__nav-bg">
          <div className="clienthq-seamless-nav__nav-content">
              <div className="clienthq-seamless-nav__nav-logo">
                  <a className="global-header__logo-link" href="" aria-label="Homepage">
                      <img className="global-header__logo" src="/images/Navy Copy sv.svg" alt="CliftonLarsonAllen logo"></img>
                  </a>
              </div>
              <div className="clienthq-tabs__dash-container">
                  <ul className="clienthq-tabs__nav">
                      <li className="clienthq-tabs__dash-item active">
                          <a href="/en/secure/clienthq" className="clienthq-tabs__nav-item-label">Dashboard</a>
                      </li>
                      <li className="clienthq-tabs__dash-item ">
                          <a href="/en/locations" className="clienthq-tabs__nav-item-label">Locations</a>
                      </li>
                      <li className="clienthq-tabs__dash-item ">
                          <a href="/en/contact-us" className="clienthq-tabs__nav-item-label">Contact Us</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  );
}

export default DashboardNavigation;