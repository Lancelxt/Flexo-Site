import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isPolicyPage = ['/privacy', '/terms', '/refund', '/shipping'].includes(location.pathname);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <nav className="bg-surface dark:bg-surface-dim border-b border-outline-variant shadow-sm sticky top-0 z-50 h-16 w-full">
      <div className="flex justify-between items-center h-full px-margin max-w-container-max mx-auto">
        
        {/* Brand Name */}
        <div className="flex items-center gap-8">
          <Link to="/" className="font-headline-lg text-headline-lg font-extrabold text-primary tracking-tight">
            FlexBook
          </Link>
          
          {/* Desktop Nav Items */}
          <div className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => handleNavClick('about')}
              className={`font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors cursor-pointer ${
                !isPolicyPage ? 'font-semibold border-b-2 border-primary pb-0.5' : ''
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Right Nav Utilities */}
        <div className="flex items-center gap-4">
          
          {/* Search box - strictly visible only on policy pages */}
          {isPolicyPage && (
            <div className="hidden sm:flex items-center bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant gap-2">
              <span className="material-symbols-outlined text-outline text-[18px]">search</span>
              <input
                type="text"
                placeholder="Search policy..."
                className="bg-transparent border-none focus:ring-0 text-body-md w-32 lg:w-48 outline-none"
              />
            </div>
          )}

          {/* Client Login Button */}
          <a
            href="https://app.flexoprinting.com" // Update to live Flexo ERP app URL
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-primary-container text-on-primary-container px-6 py-2 rounded font-semibold text-body-md hover:opacity-90 active:scale-95 duration-100 action-glow text-center"
          >
            Client Login
          </a>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary focus:outline-none flex items-center"
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-surface-container-lowest border-b border-outline-variant z-40 float-shadow animate-fade-in">
          <div className="flex flex-col p-6 space-y-4">
            <button
              onClick={() => handleNavClick('about')}
              className="text-left font-body-lg text-on-surface-variant hover:text-primary py-2 border-b border-outline-variant"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-left font-body-lg text-on-surface-variant hover:text-primary py-2 border-b border-outline-variant"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left font-body-lg text-on-surface-variant hover:text-primary py-2 border-b border-outline-variant"
            >
              Contact
            </button>
            <a
              href="https://app.flexoprinting.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-container text-on-primary-container py-3 rounded font-semibold text-body-md text-center action-glow"
            >
              Client Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
