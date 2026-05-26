import { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function ShippingPage() {
  const [activeSection, setActiveSection] = useState('timeline');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['timeline', 'packaging', 'tracking', 'liability'];
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
      {/* Page Header */}
      <header className="bg-surface-container-lowest border-b border-outline-variant py-16">
        <div className="max-w-container-max mx-auto px-margin">
          <div className="flex flex-col md:flex-row gap-gutter items-start justify-between">
            <div className="flex-1">
              <span className="font-section-label text-section-label text-primary mb-4 block">DOCUMENT ID: SHP-2024-FLX</span>
              <h1 className="font-headline-lg text-4xl font-extrabold text-on-surface mb-6">
                Shipping &amp; Delivery Policy
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                FlexBook manages high-volume transport and logistical fulfillment for heavy industrial print items, custom signs, and delicate substrates. This document details our transit conditions and dispatch guidelines.
              </p>
            </div>
            
            {/* Quick Summary Card */}
            <div className="w-full md:w-80 bg-white border border-outline-variant p-6 float-shadow mt-8 md:mt-0 rounded-lg">
              <span className="font-section-label text-section-label mb-4 block text-primary font-bold">LOGISTICS SUMMARY</span>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">local_shipping</span>
                  <span className="font-technical-data text-technical-data text-on-surface">National &amp; Local Shipping</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">package_2</span>
                  <span className="font-technical-data text-technical-data text-on-surface">Heavy Wood Crating</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
                  <span className="font-technical-data text-technical-data text-on-surface">3-7 Business Days Delivery</span>
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
                onClick={() => scrollTo('timeline')}
                className={`block font-section-label text-section-label text-left py-2 transition-colors cursor-pointer w-full ${
                  activeSection === 'timeline' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                01. TRANSIT TIMELINES
              </button>
              <button
                onClick={() => scrollTo('packaging')}
                className={`block font-section-label text-section-label text-left py-2 transition-colors cursor-pointer w-full ${
                  activeSection === 'packaging' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                02. PROTECTIVE PACKAGING
              </button>
              <button
                onClick={() => scrollTo('tracking')}
                className={`block font-section-label text-section-label text-left py-2 transition-colors cursor-pointer w-full ${
                  activeSection === 'tracking' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                03. TRACKING PROTOCOLS
              </button>
              <button
                onClick={() => scrollTo('liability')}
                className={`block font-section-label text-section-label text-left py-2 transition-colors cursor-pointer w-full ${
                  activeSection === 'liability' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                04. TRANSIT LIABILITY
              </button>
            </nav>
          </aside>

          {/* Content Canvas */}
          <div className="md:col-span-9 space-y-16">
            
            {/* Section 01: Timelines */}
            <ScrollReveal>
              <article id="timeline" className="bg-surface-container-lowest border border-outline-variant p-8 float-shadow rounded-lg scroll-mt-24">
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-section-label text-section-label bg-surface-container px-2 py-1 rounded">SEC_01</span>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">Transit Timelines</h2>
                </div>
                <div className="space-y-6">
                  <p className="font-body-md text-on-surface-variant">
                    All jobs are fabricated and packed at our Ambikapur facility. Production turnaround varies by item type, followed by standard shipping logistics:
                  </p>
                  <div className="overflow-x-auto border border-outline-variant rounded-lg">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-surface-container border-b border-outline-variant">
                          <th className="p-4 font-section-label text-section-label">REGION</th>
                          <th className="p-4 font-section-label text-section-label">TIMEFRAME</th>
                          <th className="p-4 font-section-label text-section-label">MODE</th>
                        </tr>
                      </thead>
                      <tbody className="font-technical-data text-technical-data">
                        <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                          <td className="p-4 text-on-surface font-semibold">Local (Ambikapur)</td>
                          <td className="p-4 text-on-surface-variant">1 - 2 Business Days</td>
                          <td className="p-4 text-on-surface-variant">Direct FlexBook Fleet</td>
                        </tr>
                        <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                          <td className="p-4 text-on-surface font-semibold">Chhattisgarh (Regional)</td>
                          <td className="p-4 text-on-surface-variant">2 - 4 Business Days</td>
                          <td className="p-4 text-on-surface-variant">Express Freight Partners</td>
                        </tr>
                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="p-4 text-on-surface font-semibold">National (Domestic)</td>
                          <td className="p-4 text-on-surface-variant">3 - 7 Business Days</td>
                          <td className="p-4 text-on-surface-variant">Air/Surface Certified</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            {/* Section 02: Protective Packaging */}
            <ScrollReveal>
              <article id="packaging" className="bg-surface-container-lowest border border-outline-variant p-8 float-shadow rounded-lg scroll-mt-24">
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-section-label text-section-label bg-surface-container px-2 py-1 rounded">SEC_02</span>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">Protective Packaging</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4 font-body-md text-on-surface-variant">
                    <p>To preserve structural and visual integrity, print substrates undergo strict physical reinforcement protocols:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                        <span>Multi-layer moisture-proof bubble wrap layer.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                        <span>Reinforced high-density plastic edge defenders.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                        <span>Custom wood crating structures for heavy acrylic and signs.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded border border-outline-variant">
                    <span className="font-section-label text-section-label text-outline mb-3 block">SHIPPING SECURITY NOTE</span>
                    <p className="font-technical-data text-technical-data italic text-on-surface-variant leading-relaxed">
                      "Our dispatch array isolates metal, wood, and acrylic materials into distinct segments to prevent abrasion friction and impact damage during standard freight transport."
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            {/* Section 03: Tracking Protocols */}
            <ScrollReveal>
              <article id="tracking" className="bg-surface-container-lowest border border-outline-variant p-8 float-shadow rounded-lg scroll-mt-24">
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-section-label text-section-label bg-surface-container px-2 py-1 rounded">SEC_03</span>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">Tracking Protocols</h2>
                </div>
                <div className="space-y-4 font-body-md text-on-surface-variant leading-relaxed">
                  <p>
                    Upon dispatch from the Ambikapur facility, clients receive automated tracking coordinates via electronic mail and WhatsApp.
                  </p>
                  <p>
                    The tracking link offers a real-time layout showing coordinates, current transport status, and estimated delivery dates. For high-volume projects, a dedicated freight manager coordinates the physical placement.
                  </p>
                </div>
              </article>
            </ScrollReveal>

            {/* Section 04: Transit Liability */}
            <ScrollReveal>
              <article id="liability" className="bg-primary text-white p-8 float-shadow relative overflow-hidden rounded-lg scroll-mt-24 pb-12">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="font-section-label text-section-label bg-white/10 text-primary-fixed px-2 py-1 rounded">SEC_04</span>
                    <h2 className="font-headline-md text-2xl font-bold">Transit Liability</h2>
                  </div>
                  <p className="font-body-md mb-8 opacity-90 max-w-2xl leading-relaxed">
                    FlexBook maintains fully-insured transit coverage for all freight shipments. If transit damage occurs, report the issue within 24 hours of receiving the shipment at ops@flexbooksystems.com to initiate replacement.
                  </p>
                  <a
                    href="mailto:ops@flexbooksystems.com"
                    className="bg-surface-container-lowest text-primary font-semibold px-6 py-3 rounded flex items-center gap-3 hover:bg-white transition-all shadow-lg w-max cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">local_post_office</span>
                    Report Delivery Issue
                  </a>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-20 -rotate-45 translate-x-32 -translate-y-32"></div>
              </article>
            </ScrollReveal>

          </div>
        </div>
      </main>
    </div>
  );
}
