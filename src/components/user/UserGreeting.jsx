function UserGreeting() {
    return (
       <div className="clienthq-header__navitem clienthq-header">
            <div className="clienthq-header__profileicon-container" style={{ backgroundImage: "url('/images/user-blank.png')" }}></div>
            <span className="clienthq-header__navtitle clienthq-header__profileTitle  clienthq-seamless-nav__nav-dropdown"></span>
            <div className="clienthq-header__profileItems">
                <span className="clienthq-header__profileItem">
                    User
                </span>
                <hr />
                <span className="clienthq-header__profileItem">
                    <a href="https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=https://www.claconnect.com/logout" target="" className="clienthq-header__profileLink" tabIndex="-1">Sign Out</a>
                </span>
            </div>                   
       </div>
  );
}

export default UserGreeting;