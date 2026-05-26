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

// Route Title Tracker for clean and precise dynamic SEO tags
function TitleTracker() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'FlexBook | Industrial Grade Printing & Signage Solutions';
        break;
      case '/privacy':
        document.title = 'Privacy Policy | FlexBook Industrial Printing';
        break;
      case '/terms':
        document.title = 'Terms and Conditions | FlexBook Industrial Printing';
        break;
      case '/refund':
        document.title = 'Cancellation & Refund Policy | FlexBook Industrial Printing';
        break;
      case '/shipping':
        document.title = 'Shipping & Delivery Policy | FlexBook Industrial Printing';
        break;
      default:
        document.title = 'FlexBook | Industrial Grade Printing';
    }
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
