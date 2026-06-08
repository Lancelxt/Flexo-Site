import { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('ip');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['ip', 'user-resp', 'liability', 'governing'];
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
      {/* Header */}
      <header className="pt-16 pb-12 px-margin max-w-container-max mx-auto border-b border-outline-variant">
        <div className="mb-4">
          <span className="font-section-label text-section-label text-primary mb-2 block uppercase tracking-widest">
            Document No. FX-2026-TC
          </span>
          <h1 className="font-headline-lg text-4xl font-extrabold text-on-surface border-l-4 border-primary pl-6 py-2">
            Terms and Conditions
          </h1>
          <p className="font-technical-data text-technical-data text-on-surface-variant mt-4">
            Last Updated: May 26, 2026 | Revision 5.0
          </p>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-container-max mx-auto px-margin py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          
          {/* Sidebar Nav */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-24 space-y-4">
              <p className="font-section-label text-section-label text-on-surface-variant mb-6 uppercase">Quick Access</p>
              <nav className="flex flex-col gap-1 border-l border-outline-variant">
                <button
                  onClick={() => scrollTo('ip')}
                  className={`pl-4 py-2 text-left text-body-md transition-all cursor-pointer border-l-2 -ml-[1.5px] ${
                    activeSection === 'ip' ? 'text-primary font-semibold border-primary' : 'text-on-surface-variant border-transparent'
                  }`}
                >
                  Intellectual Property
                </button>
                <button
                  onClick={() => scrollTo('user-resp')}
                  className={`pl-4 py-2 text-left text-body-md transition-all cursor-pointer border-l-2 -ml-[1.5px] ${
                    activeSection === 'user-resp' ? 'text-primary font-semibold border-primary' : 'text-on-surface-variant border-transparent'
                  }`}
                >
                  User Responsibilities
                </button>
                <button
                  onClick={() => scrollTo('liability')}
                  className={`pl-4 py-2 text-left text-body-md transition-all cursor-pointer border-l-2 -ml-[1.5px] ${
                    activeSection === 'liability' ? 'text-primary font-semibold border-primary' : 'text-on-surface-variant border-transparent'
                  }`}
                >
                  Limitation of Liability
                </button>
                <button
                  onClick={() => scrollTo('governing')}
                  className={`pl-4 py-2 text-left text-body-md transition-all cursor-pointer border-l-2 -ml-[1.5px] ${
                    activeSection === 'governing' ? 'text-primary font-semibold border-primary' : 'text-on-surface-variant border-transparent'
                  }`}
                >
                  Governing Law
                </button>
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <div className="md:col-span-9 space-y-12">
            
            {/* Introduction Card */}
            <ScrollReveal>
              <section className="bg-surface-container-lowest p-8 rounded-lg float-shadow border border-outline-variant">
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  These Terms and Conditions govern your use of the Flexzy ERP platform and services. By accessing our high-fidelity workshop software, creating digital job sheets, or uploading client design files, you agree to adhere to the technical and legal standards outlined herein.
                </p>
              </section>
            </ScrollReveal>

            {/* Section 1: IP */}
            <ScrollReveal>
              <section id="ip" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">inventory_2</span>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">1. Intellectual Property Rights</h2>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant overflow-hidden rounded-lg">
                  <div className="bg-surface-container-low px-6 py-2 border-b border-outline-variant">
                    <span className="font-section-label text-section-label text-on-surface-variant">SPECIFICATION: IP_PROTECTION_V3</span>
                  </div>
                  <div className="p-8 space-y-4">
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      All software proprietary algorithms, database structures, UI dashboard designs, and version updates featured on Flexzy ERP are the exclusive property of Flexzy ERP. This includes but is not limited to:
                    </p>
                    <ul className="space-y-3 font-body-md text-on-surface">
                      <li className="flex gap-3">
                        <span className="text-primary font-technical-data">[01]</span>
                        <span>The code bases, OTP auth flows, and layout frameworks generated through our SaaS application.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-technical-data">[02]</span>
                        <span>Multi-tenant database configuration protocols, row-level security structures, and custom API schemas.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-technical-data">[03]</span>
                        <span>Dual-unit size calculation metrics (feet/inches to inches parsing) and WhatsApp invoice transmission modules.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Section 2: User Responsibilities */}
            <ScrollReveal>
              <section id="user-resp" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">engineering</span>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">2. User Responsibilities &amp; Conduct</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg float-shadow">
                    <h3 className="font-technical-data font-bold text-primary mb-4 uppercase">Security Credentials</h3>
                    <p className="font-body-md text-on-surface-variant mb-4">
                      SaaS tenant administrators are responsible for defining staff permissions and protecting OTP credentials. Any unauthorized access resulting from negligent role-access allocations is the sole responsibility of the client.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4da6ff]"></div>
                      <span className="font-technical-data text-technical-data text-on-surface">Status: Active Enforcement</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg float-shadow">
                    <h3 className="font-technical-data font-bold text-primary mb-4 uppercase">Data Accuracy</h3>
                    <p className="font-body-md text-on-surface-variant mb-4">
                      Estimators must provide exact technical dimensions. Flexzy ERP is not liable for manufacturing errors arising from incorrect size configurations or substrate settings entered on the platform.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4da6ff]"></div>
                      <span className="font-technical-data text-technical-data text-on-surface">Precision Metric: Calibrated</span>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Section 3: Limitation of Liability */}
            <ScrollReveal>
              <section id="liability" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">gavel</span>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">3. Limitation of Liability</h2>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-surface-container-low border-b border-outline-variant">
                      <tr>
                        <th className="px-6 py-4 font-section-label text-section-label text-on-surface-variant">EVENT CATEGORY</th>
                        <th className="px-6 py-4 font-section-label text-section-label text-on-surface-variant">LIABILITY SCOPE</th>
                      </tr>
                    </thead>
                    <tbody className="font-technical-data text-technical-data">
                      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                        <td className="px-6 py-4 text-on-surface font-semibold">Service Interruption</td>
                        <td className="px-6 py-4 text-on-surface-variant">Limited to pro-rated service credit for planned maintenance windows. Target SLA: 99.9% Uptime.</td>
                      </tr>
                      <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                        <td className="px-6 py-4 text-on-surface font-semibold">File Upload Loss</td>
                        <td className="px-6 py-4 text-on-surface-variant">We assume no liability for vector designs or CAD blueprints beyond the active job sheet lifecycle.</td>
                      </tr>
                      <tr className="hover:bg-surface-container-low transition-colors">
                        <td className="px-6 py-4 text-on-surface font-semibold">Data Breach</td>
                        <td className="px-6 py-4 text-on-surface-variant">Flexzy ERP enforces Supabase Row-Level Security (RLS) to isolate database schemas between tenants.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollReveal>

            {/* Section 4: Governing Law */}
            <ScrollReveal>
              <section id="governing" className="scroll-mt-24 pb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">balance</span>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">4. Governing Law</h2>
                </div>
                <div className="relative bg-surface-container border border-outline-variant p-8 rounded-lg">
                  <div className="relative z-10">
                    <p className="font-body-md text-on-surface leading-relaxed max-w-2xl">
                      These terms are governed by and construed in accordance with the laws of the State of Chhattisgarh, India. Any disputes or arbitration proceedings shall be conducted exclusively in the judicial courts located in Ambikapur.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <div className="bg-surface-container-lowest px-4 py-2 border border-outline-variant rounded flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-primary">verified</span>
                        <span className="font-technical-data text-xs uppercase text-on-surface">Compliance Verified</span>
                      </div>
                      <div className="bg-surface-container-lowest px-4 py-2 border border-outline-variant rounded flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-primary">pin_drop</span>
                        <span className="font-technical-data text-xs uppercase text-on-surface">Jurisdiction: IN-CG</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Contact Inquiry CTA */}
            <ScrollReveal>
              <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h4 className="font-headline-md text-xl font-bold text-on-surface mb-1">Legal Inquiry?</h4>
                  <p className="font-body-md text-on-surface-variant">Direct all SaaS contract questions to ops@flexbooksystems.com</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="mailto:ops@flexbooksystems.com"
                    className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded font-semibold text-body-md action-glow flex items-center gap-2 hover:opacity-90 transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">mail</span>
                    Submit Query
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </main>
    </div>
  );
}
