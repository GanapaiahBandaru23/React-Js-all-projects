const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-mobile-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="website-logo"
          alt="website logo"
        />
        <button type="button" className="nav-mobile-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="nav-bar-icon"
          />
        </button>
      </div>

      <div className="nav-bar-large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="website-logo"
          alt="website logo"
        />
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              className="nav-bar-icon"
              alt="nav home"
            />
            <p className="nav-menu-item-text">Home</p>
          </li>
          <li className="nav-menu-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              className="nav-bar-icon"
              alt="nav products"
            />
            <p className="nav-menu-item-text">Products</p>
          </li>
          <li className="nav-menu-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              className="nav-bar-icon"
              alt="nav cart"
            />
            <p className="nav-menu-item-text">Cart</p>
          </li>
        </ul>
        <button type="button" className="logout-desktop-btn">
          Logout
        </button>
      </div>
    </div>
  </nav>
)

export default Header
