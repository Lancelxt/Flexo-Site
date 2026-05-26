import { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function RefundPage() {
  const [activeSection, setActiveSection] = useState('window');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['window', 'custom', 'timeline', 'dispute'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-background text-on-surface">
      {/* Hero Section */}
      <header className="bg-surface-container-lowest border-b border-outline-variant py-16">
        <div className="max-w-container-max mx-auto px-margin">
          <div className="flex flex-col md:flex-row gap-gutter items-start justify-between">
            <div className="flex-1">
              <span className="font-section-label text-section-label text-primary mb-4 block">DOCUMENT ID: REF-2024-FLX</span>
              <h1 className="font-headline-lg text-4xl font-extrabold text-on-surface mb-6">
                Cancellation &amp; Refund Policy
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                At FlexBook, we prioritize precision and transparency. This policy outlines the procedural framework for order adjustments, cancellations, and financial reconciliations to ensure professional uptime for all clients.
              </p>
            </div>
            
            {/* Quick Summary Card */}
            <div className="w-full md:w-80 bg-white border border-outline-variant p-6 float-shadow mt-8 md:mt-0 rounded-lg">
              <span className="font-section-label text-section-label mb-4 block text-primary font-bold">QUICK SUMMARY</span>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">timer</span>
                  <span className="font-technical-data text-technical-data text-on-surface">24H Cancellation Window</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                  <span className="font-technical-data text-technical-data text-on-surface">100% Refund on Stock Items</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">payments</span>
                  <span className="font-technical-data text-technical-data text-on-surface">5-7 Day Processing Time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="max-w-container-max mx-auto px-margin py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          
          {/* Sidebar Nav */}
          <aside className="md:col-span-3 hidden md:block">
            <nav className="sticky top-24 space-y-2 blueprint-axis pl-6">
              <button
                onClick={() => scrollTo('window')}
                className={`block font-section-label text-section-label text-left py-2 transition-colors cursor-pointer w-full ${
                  activeSection === 'window' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                01. CANCELLATION WINDOW
              </button>
              <button
                onClick={() => scrollTo('custom')}
                className={`block font-section-label text-section-label text-left py-2 transition-colors cursor-pointer w-full ${
                  activeSection === 'custom' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                02. CUSTOM ORDERS
              </button>
              <button
                onClick={() => scrollTo('timeline')}
                className={`block font-section-label text-section-label text-left py-2 transition-colors cursor-pointer w-full ${
                  activeSection === 'timeline' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                03. TIMELINES
              </button>
              <button
                onClick={() => scrollTo('dispute')}
                className={`block font-section-label text-section-label text-left py-2 transition-colors cursor-pointer w-full ${
                  activeSection === 'dispute' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                04. DISPUTE RESOLUTION
              </button>
            </nav>
          </aside>

          {/* Content Canvas */}
          <div className="md:col-span-9 space-y-16">
            
            {/* Section 01 */}
            <ScrollReveal>
              <article id="window" className="bg-surface-container-lowest border border-outline-variant p-8 float-shadow rounded-lg scroll-mt-24">
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-section-label text-section-label bg-surface-container px-2 py-1 rounded">SEC_01</span>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">Order Cancellation Window</h2>
                </div>
                <div className="space-y-4 font-body-md text-on-surface-variant leading-relaxed">
                  <p>
                    Standard industrial equipment and consumable orders may be cancelled within <span className="font-technical-data text-on-surface font-bold">24 hours</span> of order confirmation without incurring any processing fees. All cancellation requests must be submitted via the Client Portal or via certified electronic mail to <span className="font-technical-data">ops@flexbooksystems.com</span>.
                  </p>
                  <p>
                    Orders that have already entered the "Staged for Shipping" status are subject to a 15% restocking fee, even if cancelled within the initial 24-hour window.
                  </p>
                </div>
              </article>
            </ScrollReveal>

            {/* Section 02 */}
            <ScrollReveal>
              <article id="custom" className="bg-surface-container-lowest border border-outline-variant p-8 float-shadow rounded-lg scroll-mt-24">
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-section-label text-section-label bg-surface-container px-2 py-1 rounded">SEC_02</span>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">Custom Orders &amp; Technical Specs</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4 font-body-md text-on-surface-variant">
                    <p>For custom-machined parts and specific ink formulations, refund eligibility is strictly governed by the production stage:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">arrow_forward</span>
                        <span>Pre-Engineering: 100% Refund minus design setup fees.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">arrow_forward</span>
                        <span>In-Production: 30% Material recovery refund value.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-error text-[18px]">block</span>
                        <span>Post-Production: Non-refundable due to raw material loss.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded border border-outline-variant">
                    <span className="font-section-label text-section-label text-outline mb-3 block">ENGINEERING NOTE</span>
                    <p className="font-technical-data text-technical-data italic text-on-surface-variant leading-relaxed">
                      "Custom signage and print orders involve non-reversible metallurgical cutting and chemical curing. Once fabrication begins, substrate integrity cannot be restored for alternate client applications."
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            {/* Section 03 */}
            <ScrollReveal>
              <article id="timeline" className="bg-surface-container-lowest border border-outline-variant p-8 float-shadow rounded-lg scroll-mt-24">
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-section-label text-section-label bg-surface-container px-2 py-1 rounded">SEC_03</span>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">Processing Timelines</h2>
                </div>
                <div className="overflow-x-auto border border-outline-variant rounded-lg">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container border-b border-outline-variant">
                        <th className="p-4 font-section-label text-section-label">ACTION ITEM</th>
                        <th className="p-4 font-section-label text-section-label">TIME ESTIMATE</th>
                        <th className="p-4 font-section-label text-section-label">STATUS CODE</th>
                      </tr>
                    </thead>
                    <tbody className="font-technical-data text-technical-data">
                      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                        <td className="p-4 text-on-surface font-semibold">Refund Verification</td>
                        <td className="p-4 text-on-surface-variant">24 - 48 Hours</td>
                        <td className="p-4 flex items-center gap-2 text-on-surface-variant">
                          <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(77,166,255,0.6)]"></div>
                          STG_VERIFY
                        </td>
                      </tr>
                      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                        <td className="p-4 text-on-surface font-semibold">Bank Reconciliation</td>
                        <td className="p-4 text-on-surface-variant">3 - 5 Business Days</td>
                        <td className="p-4 flex items-center gap-2 text-on-surface-variant">
                          <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(77,166,255,0.6)]"></div>
                          FIN_AUTH
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low transition-colors">
                        <td className="p-4 text-on-surface font-semibold">Statement Reflection</td>
                        <td className="p-4 text-on-surface-variant">Varies by Bank</td>
                        <td className="p-4 flex items-center gap-2 text-on-surface-variant">
                          <div className="w-2 h-2 rounded-full bg-outline shadow-none"></div>
                          EXT_PROC
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </ScrollReveal>

            {/* Section 04 */}
            <ScrollReveal>
              <article id="dispute" className="bg-primary text-white p-8 float-shadow relative overflow-hidden rounded-lg scroll-mt-24 pb-12">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="font-section-label text-section-label bg-white/10 text-primary-fixed px-2 py-1 rounded">SEC_04</span>
                    <h2 className="font-headline-md text-2xl font-bold">Dispute Resolution</h2>
                  </div>
                  <p className="font-body-md mb-8 opacity-90 max-w-2xl leading-relaxed">
                    In the event of a disagreement regarding refund eligibility for technical defects or shipping delays, FlexBook employs an Industrial Arbitration Protocol. We commit to a resolution within 10 business days of a formal dispute filing.
                  </p>
                  <a
                    href="mailto:ops@flexbooksystems.com"
                    className="bg-surface-container-lowest text-primary font-semibold px-6 py-3 rounded flex items-center gap-3 hover:bg-white transition-all shadow-lg w-max cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">gavel</span>
                    File a Resolution Ticket
                  </a>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-20 -rotate-45 translate-x-32 -translate-y-32"></div>
              </article>
            </ScrollReveal>

          </div>
        </div>
      </main>
    </div>
  );
}
