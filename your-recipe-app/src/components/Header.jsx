import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="chefify.png" alt="" />
      </div>
      <input type="text" className="search-box" placeholder="Search..." />

      <nav className="menu">
        <li>What to cook</li>
        <li>Recipes</li>
        <li>Ingredient</li>
        <li>Occasion</li>
        <li>About Us</li>
        <button className="btn-pink-2">Your Recipe Box</button>
        <img src="avatar.png" alt="Avatar" className="avatar" />
      </nav>
    </header>
  );
}

export default Header;
