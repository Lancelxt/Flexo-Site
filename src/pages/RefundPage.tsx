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
              <span className="font-section-label text-section-label text-primary mb-4 block">DOCUMENT ID: REF-2026-FLX</span>
              <h1 className="font-headline-lg text-4xl font-extrabold text-on-surface mb-6">
                Cancellation &amp; Refund Policy
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                At Flexo ERP, we prioritize precision and transparency. This policy outlines the procedural framework for SaaS subscription cancellations, software trial adjustments, and UPI gateway reconciliations to ensure professional uptime for all clients.
              </p>
            </div>
            
            {/* Quick Summary Card */}
            <div className="w-full md:w-80 bg-white border border-outline-variant p-6 float-shadow mt-8 md:mt-0 rounded-lg">
              <span className="font-section-label text-section-label mb-4 block text-primary font-bold">QUICK SUMMARY</span>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">timer</span>
                  <span className="font-technical-data text-technical-data text-on-surface">14-Day Free Software Trial</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                  <span className="font-technical-data text-technical-data text-on-surface">Cancel Subscription Anytime</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">payments</span>
                  <span className="font-technical-data text-technical-data text-on-surface">24-48H UPI Settlement</span>
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
                01. SUBSCRIPTIONS
              </button>
              <button
                onClick={() => scrollTo('custom')}
                className={`block font-section-label text-section-label text-left py-2 transition-colors cursor-pointer w-full ${
                  activeSection === 'custom' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                02. GATEWAY CHARGES
              </button>
              <button
                onClick={() => scrollTo('timeline')}
                className={`block font-section-label text-section-label text-left py-2 transition-colors cursor-pointer w-full ${
                  activeSection === 'timeline' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                03. RECONCILIATIONS
              </button>
              <button
                onClick={() => scrollTo('dispute')}
                className={`block font-section-label text-section-label text-left py-2 transition-colors cursor-pointer w-full ${
                  activeSection === 'dispute' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                04. SUPPORT DESK
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
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">SaaS Subscription &amp; Cancellations</h2>
                </div>
                <div className="space-y-4 font-body-md text-on-surface-variant leading-relaxed">
                  <p>
                    Flexo ERP is provided on a multi-tenant cloud subscription basis. Tenants are provided a <span className="font-technical-data text-on-surface font-bold">14-Day Free Software Trial</span>. You may cancel your subscription trial or paid seats at any time via the billing console.
                  </p>
                  <p>
                    Once a monthly billing period initiates, cancellations will apply to the subsequent monthly cycle, ensuring access for the remainder of the currently active paid interval.
                  </p>
                </div>
              </article>
            </ScrollReveal>

            {/* Section 02 */}
            <ScrollReveal>
              <article id="custom" className="bg-surface-container-lowest border border-outline-variant p-8 float-shadow rounded-lg scroll-mt-24">
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-section-label text-section-label bg-surface-container px-2 py-1 rounded">SEC_02</span>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">UPI Gateway Fees &amp; Software Licenses</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4 font-body-md text-on-surface-variant">
                    <p>Refund eligibility on billing is strictly governed by the service stage:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">arrow_forward</span>
                        <span>Active Trials: 100% Free, zero-setup software charges.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">arrow_forward</span>
                        <span>Monthly SaaS Seats: Cancel anytime, non-refundable once billed.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-error text-[18px]">block</span>
                        <span>UPI Gateway fees: Zero-fee transactions for standard UPI remittance.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded border border-outline-variant">
                    <span className="font-section-label text-section-label text-outline mb-3 block">COMPLIANCE NOTE</span>
                    <p className="font-technical-data text-technical-data italic text-on-surface-variant leading-relaxed">
                      "Flexo ERP deep-links directly with merchant UPI gateways. We do not store or deduct transaction processing fees. All payment remittances settle directly from your client to your configured business bank account."
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
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">Reconciliation Timelines</h2>
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
                        <td className="p-4 text-on-surface font-semibold">Seat Adjustments</td>
                        <td className="p-4 text-on-surface-variant">Immediate Action</td>
                        <td className="p-4 flex items-center gap-2 text-on-surface-variant">
                          <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(77,166,255,0.6)]"></div>
                          SYS_SEATS
                        </td>
                      </tr>
                      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                        <td className="p-4 text-on-surface font-semibold">UPI Deep-Link Settlements</td>
                        <td className="p-4 text-on-surface-variant">Instant / 24-48 Hours</td>
                        <td className="p-4 flex items-center gap-2 text-on-surface-variant">
                          <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(77,166,255,0.6)]"></div>
                          UPI_SETTLE
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low transition-colors">
                        <td className="p-4 text-on-surface font-semibold">Gateway Arbitration</td>
                        <td className="p-4 text-on-surface-variant">3 - 5 Business Days</td>
                        <td className="p-4 flex items-center gap-2 text-on-surface-variant">
                          <div className="w-2 h-2 rounded-full bg-outline shadow-none"></div>
                          GW_RESOLVE
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
                    <h2 className="font-headline-md text-2xl font-bold">Support &amp; Arbitration Desk</h2>
                  </div>
                  <p className="font-body-md mb-8 opacity-90 max-w-2xl leading-relaxed">
                    In the event of a reconciliation discrepancy or gateway settlement failure, Flexo ERP maintains a dedicated B2B software support desk. We commit to a resolution within 48 business hours.
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
