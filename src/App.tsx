import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import RefundPage from './pages/RefundPage';
import ShippingPage from './pages/ShippingPage';
import './App.css';

// Route Title and Canonical URL Tracker for premium dynamic SEO tags
function TitleTracker() {
  const location = useLocation();

  useEffect(() => {
    // 1. Dynamic Title SEO Override
    switch (location.pathname) {
      case '/':
        document.title = 'Flexo ERP | Print ERP & Sign Shop Management Software';
        break;
      case '/privacy':
        document.title = 'Privacy Policy | Multi-Tenant Data Security | Flexo ERP';
        break;
      case '/terms':
        document.title = 'Terms and Conditions | Software Seat Licenses | Flexo ERP';
        break;
      case '/refund':
        document.title = 'Cancellation & Refund Policy | UPI Gateway Terms | Flexo ERP';
        break;
      case '/shipping':
        document.title = 'Digital Delivery & Service SLA Policy | Flexo ERP';
        break;
      default:
        document.title = 'Flexo ERP | Print Shop Management Software';
    }

    // 2. Dynamic Canonical URL Injection
    const canonicalBase = 'https://flexoprinting.com';
    const canonicalUrl = `${canonicalBase}${location.pathname === '/' ? '' : location.pathname}`;
    
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TitleTracker />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund" element={<RefundPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
