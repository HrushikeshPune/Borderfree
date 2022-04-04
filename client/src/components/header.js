import "./header.css";
import logo from "../images/e-commerce.png";
import search from "../images/search.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="menu">
        <ul>
          <li>Bag</li>
          <li>Wishlist</li>
          <li>Profile</li>
          <input placeholder="Search for products" className="searchbar"/>
          <img className="search-icon"  src={search} alt="search"/>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
