function Footer() {
  return (
      <div className="clienthq-footer">
          <div className="width-container width-container--full clienthq-footer__width-container">
              <div className="clienthq-footer__content">
                  <img className="clienthq-footer__footer-logo" alt="CLA white logo" src="data:image/png;base64,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"></img>
                      <a className="clienthq-footer__footer-text" href="/">
                          2023 CliftonLarsonAllen LLP  |  CLAConnect.com
                      </a>
                      <p className="clienthq-footer__social-share"></p>
              </div>
              <div className="global-footer__social-wrapper">
                  <ul className="global-footer__social-list">
                      <li className="clienthq-footer__social-list-item">
                          <a href="https://www.linkedin.com/company/cliftonlarsonallen" className="linkedin-footer" target="_blank" aria-label="linkedin" rel="noreferrer">
                              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                          </a>
                      </li>
                      <li className="clienthq-footer__social-list-item">
                          <a href="https://twitter.com/CLAconnect" className="twitter-footer" target="_blank" aria-label="twitter" rel="noreferrer">
                              <i className="fa fa-twitter-square" aria-hidden="true"></i>
                          </a>
                      </li>
                      <li className="clienthq-footer__social-list-item">
                          <a href="https://www.facebook.com/CliftonLarsonAllen" className="facebook-footer" target="_blank" aria-label="facebook" rel="noreferrer">
                              <i className="fa fa-facebook-square" aria-hidden="true"></i>
                          </a>
                      </li>
                      <li className="clienthq-footer__social-list-item">
                          <a href="https://www.youtube.com/user/CliftonLarsonAllen" className="youtube-footer" target="_blank" aria-label="youtube" rel="noreferrer">
                              <i className="fa fa-youtube-play" aria-hidden="true"></i>
                          </a>
                      </li>
                      <li className="clienthq-footer__social-list-item">
                          <a href="https://www.instagram.com/lifeatcla/" className="instangram-footer" target="_blank" aria-label="Instagram" rel="noreferrer">
                              <i className="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                      </li>

                  </ul>
              </div>
          </div>
      </div>
  );
}

export default Footer;