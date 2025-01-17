import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    getCartCount,
    navigate,
    token,
    setToken,
    setcartItems,
    setSearch,
    search,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setcartItems({});
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="flex items-center justify-between py-5 font-medium">
        <NavLink to={"/"}>
          <img src={assets.logo} className="w-40" alt="Logo" />
        </NavLink>
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-full border-none h-[1.5px] bg-black hidden" />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>Products</p>
            <hr className="w-full border-none h-[1.5px] bg-black hidden" />
          </NavLink>
          <NavLink to="/orders" className="flex flex-col items-center gap-1">
            <p>Orders</p>
            <hr className="w-full border-none h-[1.5px] bg-black hidden" />
          </NavLink>
        </ul>
        <div className="flex gap-6 items-center">
          <div className="flex items-center border-black border rounded-full bg-gray-100 px-4 py-2 shadow-sm w-full max-w-md">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              className="bg-gray-100 flex-grow text-[12px] font-normal placeholder-gray-500 text-gray-800 focus:outline-none"
              placeholder="What are you looking for?"
            />
            <button className="ml-2">
              <img
                src={assets.search_icon} // Replace with your search icon path
                alt="Search Icon"
                className="w-5 h-5 text-gray-500"
              />
            </button>
          </div>
          <div className="group relative">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              src={assets.profile_icon}
              className="w-6 cursor-pointer object-contain"
              alt="Profile Icon"
            />
            {/* Dropdown Menu */}
            {token && (
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-black/70 rounded border-red-500 border-2">
                  <p
                    onClick={logout}
                    className="cursor-pointer text-white hover:text-gray-200 text-[12px] font-normal"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              className="w-6 min-w-5"
              alt="Cart Icon"
            />
            <p className="absolute top-0 left-4 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt="Menu Icon"
          />
        </div>
      </div>
      {/* side bar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col test-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
