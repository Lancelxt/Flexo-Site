
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isPolicyPage = ['/privacy', '/terms', '/refund', '/shipping'].includes(location.pathname);

  if (isPolicyPage) {
    // Policy Page Footer - Light Theme
    return (
      <footer className="w-full py-margin bg-surface-container border-t border-outline-variant mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter px-margin max-w-container-max mx-auto">
          <div className="flex flex-col gap-6">
            <span className="font-headline-md text-headline-md font-bold text-on-surface">Flexzy ERP</span>
            <p className="font-body-md text-on-surface-variant max-w-md">
              The ultimate operating system for print manufacturers and signage companies. Connect sales leads, design approvals, QC checks, and automated WhatsApp billing.
            </p>
            <span className="font-technical-data text-technical-data text-on-surface-variant">
              © 2026 Flexzy ERP Systems. All rights reserved. Ambikapur.
            </span>
          </div>
          <div className="flex flex-col md:items-end justify-between gap-8">
            <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
              <Link to="/privacy" className={`font-section-label text-section-label hover:text-primary transition-all ${location.pathname === '/privacy' ? 'text-primary font-semibold underline' : 'text-on-surface-variant'}`}>
                Privacy
              </Link>
              <Link to="/terms" className={`font-section-label text-section-label hover:text-primary transition-all ${location.pathname === '/terms' ? 'text-primary font-semibold underline' : 'text-on-surface-variant'}`}>
                Terms
              </Link>
              <Link to="/refund" className={`font-section-label text-section-label hover:text-primary transition-all ${location.pathname === '/refund' ? 'text-primary font-semibold underline' : 'text-on-surface-variant'}`}>
                Refund
              </Link>
              <Link to="/shipping" className={`font-section-label text-section-label hover:text-primary transition-all ${location.pathname === '/shipping' ? 'text-primary font-semibold underline' : 'text-on-surface-variant'}`}>
                SLA Policy
              </Link>
              <a href="mailto:ops@flexbooksystems.com" className="font-section-label text-section-label text-on-surface-variant hover:text-primary transition-all">
                Contact
              </a>
            </div>
            <div className="flex gap-4">
              <a href="mailto:ops@flexbooksystems.com" className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container-high cursor-pointer transition-colors text-on-surface">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </a>
              <a href="tel:+91800FLEXBOOK" className="w-10 h-10 rounded border border-outline-variant flex items-center justify-center hover:bg-surface-container-high cursor-pointer transition-colors text-on-surface">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Home Page Footer - Dark Theme
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface py-16 mt-0">
      <div className="max-w-container-max mx-auto px-margin grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="font-headline-md text-white mb-6 font-bold">Flexzy ERP Systems</div>
          <p className="text-surface-variant max-w-sm">
            Registered Name: Flexzy ERP Systems Pvt. Ltd. <br />
            Modernizing the global printing and signage manufacturing industry through unified cloud ERP automation.
          </p>
          <div className="font-body-md text-surface-variant pt-2">
            © 2026 Flexzy ERP Systems. All rights reserved. Ambikapur.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 w-full">
          <div>
            <h4 className="section-label text-white/50 mb-6">Compliance</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy" className="font-body-md text-surface-variant hover:text-secondary-fixed-dim transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="font-body-md text-surface-variant hover:text-secondary-fixed-dim transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund" className="font-body-md text-surface-variant hover:text-secondary-fixed-dim transition-colors">
                  Cancellation &amp; Refund
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="section-label text-white/50 mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/shipping" className="font-body-md text-surface-variant hover:text-secondary-fixed-dim transition-colors">
                  Service SLA Policy
                </Link>
              </li>
              <li>
                <a href="mailto:ops@flexbooksystems.com" className="font-body-md text-surface-variant hover:text-secondary-fixed-dim transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/terms" className="font-body-md text-surface-variant hover:text-secondary-fixed-dim transition-colors underline decoration-secondary-fixed-dim underline-offset-4">
                  Technical KYC
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
