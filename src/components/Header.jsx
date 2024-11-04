import "../Styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="logo-search">
          <img
            className="logo"
            src="/src/assets/icons/facebook-logo.svg"
            alt="React Logo"
          />
          <div className="search-bar">
            <img src="/src/assets/icons/search-icon.svg" alt="React Logo" />
            <input type="search" placeholder="Search Facebook" />
          </div>
        </div>
        <div className="pages">
          <div className="home flex">
            <img src="/src/assets/icons/home-icon.svg" alt="home-page" />
          </div>
          <div className="notification flex">
            <img
              className="notify"
              src="/src/assets/icons/notification-icon.svg"
              alt="notification-page"
            />
          </div>
          <div className="reels flex">
            <img src="/src/assets/icons/reels-icon.svg" alt="reels-page" />
          </div>
          <div className="user flex">
            <img src="/src/assets/icons/user-photo-icon.svg" alt="user-page" />
          </div>
          <div className="market flex">
            <img
              src="/src/assets/icons/marketplace-icon.svg"
              alt="marketplace-page"
            />
          </div>
          <div className="group flex">
            <img
              className="groups"
              src="/src/assets/icons/group-icon.svg"
              alt="group-page"
            />
          </div>
          <div className="message flex">
            <img
              src="/src/assets/icons/messanger-icon.svg"
              alt="messanger-page"
            />
          </div>
        </div>
        <div className="settings">
          <img src="/src/assets/icons/settings-icon.svg" alt="-page" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
