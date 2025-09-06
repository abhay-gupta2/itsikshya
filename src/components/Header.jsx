import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const crossIcon = "/assets/icons/cross.svg";
const hamburgerIcon = "/assets/icons/hamburger-menu.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <section
        className='w-full z-40 sticky top-0 left-0 right-0 transition-all duration-300 bg-white'
      >
        <header className="container px-1 relative py-[14px] bg-transparent mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link className="flex gap-2 items-center" to={"/"}>
                <img
                  className="w-[60px]"
                  src="/assets/logo/it-sikshya-logo.svg"
                  alt="IT Sishya logo"
                />
                <span className="text-[20px] text-[#0d5d59] font-medium">IT Sikshya</span>
              </Link>
            </div>

            <div className="lg:flex gap-6 items-center hidden">
              <ul className=" hidden lg:flex gap-6 text-[#333] text-[18px]">
                {[
                  { path: '/', lable: 'Home' },
                  { path: '/about', lable: 'About' },
                  { path: '/faqs', lable: 'FAQs' },
                  { path: '/courses', lable: 'Courses' },
                  { path: '/contact', lable: 'Contact' }
                ].map((a) => (
                  <li>
                    <NavLink to={a.path} className={({ isActive }) =>
                      isActive ? "text-[#0d5d59]" : "hover:text-[#0d5d59]"
                    }>{a.lable}</NavLink>
                  </li>
                ))}
              </ul>

              <Link className="apply" to={"/apply"}>
                Apply Now
              </Link>
              <div className="h-[35px] w-[2px] bg-[#0d5d59]"></div>
              <a href="mailto:info@sriyog.com">
                <img
                  className="w-[35px]"
                  src="/assets/icons/email.svg"
                  alt="envelope"
                />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden z-50 ">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transition-transform duration-300 ease-in-out"
              >
                <img
                  src={isMenuOpen ? crossIcon : hamburgerIcon}
                  alt="menu-toggle"
                  className={`w-[30px] transition-transform duration-300 ${isMenuOpen ? "rotate-90" : "rotate-0"
                    }`}
                />
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
              className={`absolute top-[100%] left-0 w-full bg-white shadow-md z-40 transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                } lg:hidden`}
            >
              <ul className="flex flex-col gap-4 p-4 text-[#0d5d59] text-[18px] items-center">
                <li>
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apply"
                    onClick={() => setIsMenuOpen(false)}
                    className="apply"
                  >
                    Apply Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default Header;
