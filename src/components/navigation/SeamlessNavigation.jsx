function SeamlessNavigation() {
  return (
      <div className="clienthq-seamless-nav">
          <div className="clienthq-seamless-nav__nav-content">
              <span className="clienthq-seamless-nav__nav-container">
                  <a href="javascript:window.history.back();" target="_self" className="clienthq-seamless-nav__nav-link clienthq-seamless-nav__nav-back">Back</a>
              </span>
              <span className="clienthq-seamless-nav__nav-container">
                  <a href="/" className="clienthq-seamless-nav__nav-link">Home</a>
              </span>
              <span className="clienthq-seamless-nav__nav-container ">
                  <a href="/todos" className="clienthq-seamless-nav__nav-link">ToDos</a>
              </span>
              <div className="clienthq-seamless-nav__nav-container">
                  <span data-bs-toggle="collapse" href="#collapseList-bb910d06-e9e6-4094-b9ab-1eaff912bdf2" role="button" aria-expanded="false" aria-controls="collapseList-bb910d06-e9e6-4094-b9ab-1eaff912bdf2" className="clienthq-seamless-nav__nav-dropdown collapsed">
                      Other Apps
                  </span>
                  <div id="collapseList-bb910d06-e9e6-4094-b9ab-1eaff912bdf2" className="clienthq-seamless-nav__nav-list collapse">
                      <ul>
                          <li>
                              <a href="https://Schwaballiance.com" className="clienthq-seamless-nav__nav-link">Charles Schwab</a>
                          </li>
                          <li>
                              <a href="" className="clienthq-seamless-nav__nav-link"></a>
                          </li>
                          <li>
                              <a href="https://claconnect.leapfile.net/" className="clienthq-seamless-nav__nav-link">Leapfile</a>
                          </li>
                          <li>
                              <a href="https://ww2.payerexpress.com/ebp/CLA/" className="clienthq-seamless-nav__nav-link">Pay Your Bill</a>
                          </li>
                          <li>
                              <a href="https://www.intacct.com/ia/acct/login.phtml?.cpaassoc=1%406162&amp;.affiliation=1" className="clienthq-seamless-nav__nav-link">Sage</a>
                          </li>
                          <li>
                              <a href="https://usetallie.com/sso/Account/Logon" className="clienthq-seamless-nav__nav-link">Tallie</a>
                          </li>
                          <li>
                              <a href="https://claconnect.myisolved.com" className="clienthq-seamless-nav__nav-link">iSolved</a>
                          </li>
                      </ul>
                  </div>
              </div>
             
          </div>
      </div>
  );
}

export default SeamlessNavigation;