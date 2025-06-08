import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NavLink } from '../../types';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: NavLink[] = [
  { title: 'Ana Sayfa', path: '/' },
  { title: 'Portfolyo', path: '/portfolyo' },
  { title: 'Hakkımda', path: '/hakkimda' },
  { title: 'İletişim', path: '/iletisim' },
];

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white dark:bg-[#161b22] shadow-md py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-slate-800 dark:text-[#c9d1d9]">
              Ali  <span className="text-teal-600 dark:text-[#58a6ff]"> Akpoyraz</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {Navigation.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-slate-700 hover:text-teal-600 dark:text-[#8b949e] dark:hover:text-[#58a6ff] transition-colors"
              >
                {link.title}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-[#21262d] text-slate-700 dark:text-[#c9d1d9]"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full bg-slate-100 dark:bg-[#21262d] text-slate-700 dark:text-[#c9d1d9]"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-700 dark:text-[#c9d1d9]"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white dark:bg-[#0d1117] z-40 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col space-y-4 p-4">
          {Navigation.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-lg py-2 px-4 text-slate-700 hover:text-teal-600 dark:text-[#c9d1d9] dark:hover:text-[#58a6ff] border-b border-slate-200 dark:border-[#30363d]"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;