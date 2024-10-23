  import React, { useState } from "react"
  import './Navbar.css'
  import logo  from '../Assets/logo.png'
  import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom"

  const Navbar = () => {
    const [menu,setMenu] = useState("shop");

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
                <p> SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}>
                    <Link to='/'>Shop</Link>
                    {menu === "shop" ? <hr /> : null}
                </li>

                <li onClick={() => setMenu("mens")}>
                    <Link to="/mens">Men</Link>
                    {menu === "mens" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("womens")}>
                    <Link to="/womens">Women</Link>
                    {menu === "womens" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link to="/kids">Kids</Link>
                    {menu === "kids" ? <hr /> : null}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">0</div>
            </div>

        </div>
    )
  }

  export default Navbar