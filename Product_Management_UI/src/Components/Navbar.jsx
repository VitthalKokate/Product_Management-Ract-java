import { NavLink } from 'react-router-dom';
import './Navbar.css'; // We will define styles here

const Navbar = () => {
  return (
    <>
      <nav className="navbar-container bg-black relative overflow-hidden shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 relative z-10">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNkLtRdpoJelG8ZmmJzQ4o12thERy1_eh-4A&s"
              className="h-10 transform transition-all duration-300 hover:scale-110"
              alt="Logo"
            />
            <span className="self-center text-3xl font-bold text-gray-800 whitespace-nowrap transform transition-all duration-300 hover:scale-105">
              Product Management
            </span>
          </NavLink>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 transition-all duration-300 transform hover:scale-110"
            >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-md transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-600 text-white' // Active page color
                        : 'text-gray-900 hover:bg-blue-200'
                    }`
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addProduct"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-md transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-600 text-white' // Active page color
                        : 'text-gray-900 hover:bg-blue-200'
                    }`
                  }
                >
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/editProduct"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-md transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-600 text-white' // Active page color
                        : 'text-gray-900 hover:bg-blue-200'
                    }`
                  }
                >
                  Edit Product
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Background Animated Balls */}
        <div className="balls-container absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
