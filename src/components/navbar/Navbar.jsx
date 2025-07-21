import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skill", href: "#skill" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="bg-black rounded-full px-6 py-3 flex items-center justify-between text-white shadow-lg">
        <h1 className="text-xl font-bold">YH</h1>
        <div className="hidden md:flex gap-10 text-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-gray-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-2" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center bg-black text-white rounded-xl py-4 px-6 gap-4 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-gray-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
