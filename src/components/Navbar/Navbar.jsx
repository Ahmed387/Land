import { useEffect, useState } from "react";
import logo from "../../assets/logo.jpeg";
import { FaMoon, FaSun } from "react-icons/fa";
import { Helmet } from "react-helmet"; // Import Helmet

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Effect to apply dark mode class to the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Helmet>
        <title>Navbar - Your Company</title>
        <meta
          name="description"
          content="Welcome to our website. Explore our services and projects."
        />
      </Helmet>
      <nav className="bg-[#1A0909] dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-12 w-12 rounded-full"
              loading="lazy"
              alt="RedTilt Logo"
            />
          </a>

          {/* Right Section */}
          <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-black dark:text-white"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="hover:text-yellow-200" size={24} />
              ) : (
                <FaMoon className="hover:text-red-500" size={24} />
              )}
            </button>

            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Start a project
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white dark:text-gray-300 rounded md:bg-transparent md:p-0 hover:text-red-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white dark:text-gray-300 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-red-500 md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white dark:text-gray-300 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-red-500 md:p-0"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white dark:text-gray-300 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-red-500 md:p-0"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white dark:text-gray-300 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-red-500 md:p-0"
                >
                  Jobs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
