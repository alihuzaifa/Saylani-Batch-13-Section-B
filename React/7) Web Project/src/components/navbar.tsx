import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="max-w-[1200px] w-full flex justify-between items-center px-4 py-4 shadow-lg">
          <h2 className="text-2xl font-bold">Shop Mart</h2>
          <nav className="gap-6 md:flex hidden">
            <a href="/" className="transition-colors">Home</a>
            <a href="/about" className="transition-colors">About</a>
            <a href="/services" className="transition-colors">Services</a>
            <a href="/contact" className="transition-colors">Contact Us</a>
          </nav>
          <div>
            <div className="md:flex hidden">
              <ModeToggle />
            </div>
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? (
                <X className="cursor-pointer" />
              ) : (
                <Menu className="cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div 
          className={`fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">Menu</h3>
              <button onClick={toggleMenu}>
                <X className="cursor-pointer" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="text-lg py-2 transition-color"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="/about" 
                className="text-lg py-2 transition-color"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="/services" 
                className="text-lg py-2 transition-color"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a 
                href="/contact" 
                className="text-lg py-2 transition-color"
                onClick={toggleMenu}
              >
                Contact Us
              </a>
            </nav>
            
            <div className="mt-8 pt-4 border-t">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
