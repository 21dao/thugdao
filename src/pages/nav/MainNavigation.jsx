import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siteName } from "../../config/settings";

export default function MainNavigation(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="mb-1 lg:mb-6">
      <div className="max-w-2xl mx-auto px-3 lg:max-w-7xl lg:px-7">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* <!-- Website Logo --> */}
              <Link
                to="/"
                title="Artists"
                className="flex items-center py-4 px-2"
              >
                <h1 style={{ fontWeight: "bold", fontSize: "32px" }}>
                  <span className="text-gray-300">{siteName}</span>
                </h1>
              </Link>
            </div>
            {/* <!-- Primary Navbar items --> */}
            <div className="hidden md:flex items-center space-x-2">
              <Link
                to="/artists"
                className={`py-4 px-2 font-semibold ${
                  props.page === "artists"
                    ? "text-gray-200"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Artists
              </Link>
              <Link
                to="/auctions"
                title="Auctions"
                className={`py-4 px-2 font-semibold ${
                  props.page === "auctions"
                    ? "text-gray-200"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Auctions
              </Link>
              <Link
                to="/listings"
                title="Listings"
                className={`py-4 px-2 font-semibold ${
                  props.page === "listings"
                    ? "text-gray-200"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Listings
              </Link>
            </div>
          </div>
          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
              style={{ background: "none" }}
            >
              <svg
                className="w-6 h-6 text-gray-400 hover:text-gray-600"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ background: "none" }}
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- mobile menu --> */}
      <div className={menuOpen ? "px-3" : "hidden"}>
        <ul className="">
          <li className="active">
            <Link
              to="/artists"
              className={`block text-sm py-4 px-2 font-semibold ${
                props.page === "artists"
                  ? "text-black bg-gray-500"
                  : "text-gray-200 hover:text-black"
              }`}
            >
              Artists
            </Link>
            <Link
              to="/auctions"
              title="Auctions"
              className={`block text-sm py-4 px-2 font-semibold ${
                props.page === "auctions"
                  ? "text-black bg-gray-500"
                  : "text-gray-200 hover:text-black"
              }`}
            >
              Auctions
            </Link>
            <Link
              to="/listings"
              title="Listings"
              className={`block text-sm py-4 px-2 font-semibold ${
                props.page === "listings"
                  ? "text-black bg-gray-500"
                  : "text-gray-200 hover:text-black"
              }`}
            >
              Listings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
