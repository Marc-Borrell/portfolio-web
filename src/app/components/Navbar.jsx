"use client";
import Link from "next/link";
import { useState, useEffect  } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // showing navbar when up scrolling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true); 
      } else {
        setIsVisible(false); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div>
      <nav 
      style={{
          transform: isVisible ? "translateX(-50%)" : "translateX(-50%) translateY(-150%)",
          left: "50%",
          transition: "transform 0.3s ease-in-out",
        }}
      className="fixed top-3 w-[95%] max-w-6xl px-4 py-4 bg-white/5 shadow border border-white/10 lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[9999] rounded-2xl"
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto text-white">
          <Link
            href="/"
            className="mr-4 block cursor-pointer py-1.5 text-cyan-400 font-bold text-2xl font-serif"
          >
            <img src="/logo.png" alt="logo"  height= "300px" width="300px"/> 
          </Link>

          <div className="lg:hidden">
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 min-h-screen w-64 bg-neutral-900 border-r border-white/10 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50`}
          >
            <div className="flex flex-row items-center border-b border-white/10 pb-4">
              <Link
                href="/"
                className="mr-4 block cursor-pointer py-1.5 font-bold text-2xl font-serif bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent"
                style={{ filter: "drop-shadow(0 0 12px rgba(34,211,238,0.6))" }}
              >
                MARC BORRELL
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-neutral-400 hover:text-cyan-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col h-full gap-4 p-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-2 text-neutral-400 hover:text-cyan-400 transition-colors"
                >
                  <Link onClick={() => { setIsMobileMenuOpen(false); }} href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-2 text-neutral-400 hover:text-cyan-400 transition-colors"
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}