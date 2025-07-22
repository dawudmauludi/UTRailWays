import { Link } from "react-router";
import { Home, Info, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-white hover:text-purple-300 transition-colors duration-300 group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                MyApp
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <Link
                to="/"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Home</span>
              </Link>
              
              <Link
                to="/about"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
              >
                <Info className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Stasiun</span>
              </Link>
              
              <Link
                to="/login"
                className="flex items-center space-x-2 px-4 py-2 ml-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 group"
              >
                <LogIn className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">Login</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 rounded-lg mt-2 backdrop-blur-sm">
            <Link
              to="/"
              onClick={toggleMenu}
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Home</span>
            </Link>
            
            <Link
              to="/about"
              onClick={toggleMenu}
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group"
            >
              <Info className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">About</span>
            </Link>
            
            <Link
              to="/login"
              onClick={toggleMenu}
              className="flex items-center space-x-3 px-3 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group mt-2"
            >
              <LogIn className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;