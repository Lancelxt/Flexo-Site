import { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('collection');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['collection', 'usage', 'sharing', 'security', 'cookies'];
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
          <div className="flex flex-col gap-4">
            <span className="font-section-label text-section-label text-primary uppercase">Legal Documentation</span>
            <h1 className="font-headline-lg text-4xl font-extrabold text-on-surface max-w-2xl">
              Privacy Policy &amp; Data Protection Protocol
            </h1>
            <p className="text-on-surface-variant font-body-lg max-w-3xl">
              This document outlines the precision standards for data handling at Flexo ERP. We apply the same level of security to your multi-tenant database as we do to internal software workflows.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full">
                <span className="font-technical-data text-technical-data text-on-surface-variant">Last Revision: 2026.05.26</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full">
                <span className="font-technical-data text-technical-data text-on-surface-variant">Protocol v2.4.0</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="max-w-container-max mx-auto px-margin py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          
          {/* Sticky Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-24 self-start">
            <div className="flex flex-col gap-1 border-l border-outline-variant ml-2">
              <button
                onClick={() => scrollTo('collection')}
                className={`pl-4 py-2 border-l-2 text-left text-body-md transition-all cursor-pointer ${
                  activeSection === 'collection'
                    ? 'border-primary text-primary font-semibold -ml-[2px]'
                    : 'border-transparent text-on-surface-variant hover:text-on-surface'
                }`}
              >
                01. Data Collection
              </button>
              <button
                onClick={() => scrollTo('usage')}
                className={`pl-4 py-2 border-l-2 text-left text-body-md transition-all cursor-pointer ${
                  activeSection === 'usage'
                    ? 'border-primary text-primary font-semibold -ml-[2px]'
                    : 'border-transparent text-on-surface-variant hover:text-on-surface'
                }`}
              >
                02. Data Usage
              </button>
              <button
                onClick={() => scrollTo('sharing')}
                className={`pl-4 py-2 border-l-2 text-left text-body-md transition-all cursor-pointer ${
                  activeSection === 'sharing'
                    ? 'border-primary text-primary font-semibold -ml-[2px]'
                    : 'border-transparent text-on-surface-variant hover:text-on-surface'
                }`}
              >
                03. Third-party Sharing
              </button>
              <button
                onClick={() => scrollTo('security')}
                className={`pl-4 py-2 border-l-2 text-left text-body-md transition-all cursor-pointer ${
                  activeSection === 'security'
                    ? 'border-primary text-primary font-semibold -ml-[2px]'
                    : 'border-transparent text-on-surface-variant hover:text-on-surface'
                }`}
              >
                04. Security Protocols
              </button>
              <button
                onClick={() => scrollTo('cookies')}
                className={`pl-4 py-2 border-l-2 text-left text-body-md transition-all cursor-pointer ${
                  activeSection === 'cookies'
                    ? 'border-primary text-primary font-semibold -ml-[2px]'
                    : 'border-transparent text-on-surface-variant hover:text-on-surface'
                }`}
              >
                05. Cookie Architecture
              </button>
            </div>

            <div className="mt-12 p-6 bg-surface-container-low border border-outline-variant rounded-lg">
              <span className="font-section-label text-section-label text-on-surface block mb-3">TECHNICAL SUPPORT</span>
              <p className="text-technical-data text-on-surface-variant mb-4">
                Questions regarding our data processing algorithms or compliance status?
              </p>
              <a
                href="mailto:ops@flexbooksystems.com"
                className="w-full block text-center border border-outline-variant bg-white py-2 rounded font-semibold text-body-md hover:bg-surface-container transition-colors text-on-surface"
              >
                Contact DPO
              </a>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:col-span-9 space-y-16">
            
            {/* Section 01 */}
            <ScrollReveal>
              <section id="collection" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[18px]">database</span>
                  </div>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">01. Data Collection</h2>
                </div>
                <div className="bg-white float-shadow rounded-lg overflow-hidden border border-outline-variant">
                  <div className="bg-surface-container-low px-6 py-2 border-b border-outline-variant flex justify-between items-center">
                    <span className="font-section-label text-section-label text-on-surface-variant">REGISTRY TYPE: PERSONAL_IDENTIFICATION</span>
                    <span className="font-technical-data text-technical-data text-primary">ENCRYPTED</span>
                  </div>
                  <div className="p-6 space-y-6">
                    <p className="font-body-lg text-on-surface-variant">
                      We collect information strictly required to facilitate multi-tenant Print ERP software workflows, lead management, and custom design approvals. This process is governed by the principle of data minimization.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border border-outline-variant rounded bg-surface-container-lowest">
                        <h4 className="font-semibold text-on-surface mb-2">Technical Metadata</h4>
                        <p className="text-body-md text-on-surface-variant">IP addresses, browser configurations, and machine-level telemetry used for system optimization.</p>
                      </div>
                      <div className="p-4 border border-outline-variant rounded bg-surface-container-lowest">
                        <h4 className="font-semibold text-on-surface mb-2">Account Specifics</h4>
                        <p className="text-body-md text-on-surface-variant">Corporate identifiers, delivery coordinates, and authorized personnel contact records.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Section 02 */}
            <ScrollReveal>
              <section id="usage" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[18px]">settings_suggest</span>
                  </div>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">02. Data Usage</h2>
                </div>
                <div className="space-y-6">
                  <p className="font-body-lg text-on-surface-variant">
                    Flexo ERP utilizes processed data to maintain the integrity of your multi-tenant workshop operations and client portals.
                  </p>
                  <div className="overflow-x-auto border border-outline-variant rounded-lg">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-surface-container-low border-b border-outline-variant">
                          <th className="p-4 font-section-label text-section-label">PURPOSE</th>
                          <th className="p-4 font-section-label text-section-label">LEGAL BASIS</th>
                          <th className="p-4 font-section-label text-section-label">RETENTION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-outline-variant">
                          <td className="p-4 font-body-md font-medium text-on-surface">Order Execution</td>
                          <td className="p-4 font-technical-data text-technical-data text-on-surface-variant">Contractual Obligation</td>
                          <td className="p-4 font-technical-data text-technical-data text-on-surface-variant">7 Years</td>
                        </tr>
                        <tr className="border-b border-outline-variant">
                          <td className="p-4 font-body-md font-medium text-on-surface">System Security</td>
                          <td className="p-4 font-technical-data text-technical-data text-on-surface-variant">Legitimate Interest</td>
                          <td className="p-4 font-technical-data text-technical-data text-on-surface-variant">90 Days</td>
                        </tr>
                        <tr className="border-b border-outline-variant">
                          <td className="p-4 font-body-md font-medium text-on-surface">Process Optimization</td>
                          <td className="p-4 font-technical-data text-technical-data text-on-surface-variant">Consent</td>
                          <td className="p-4 font-technical-data text-technical-data text-on-surface-variant">2 Years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Section 03 */}
            <ScrollReveal>
              <section id="sharing" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[18px]">hub</span>
                  </div>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">03. Third-party Sharing</h2>
                </div>
                <div className="bg-surface-container p-8 rounded-lg border border-outline-variant">
                  <p className="font-body-lg text-on-surface-variant mb-6">
                    We do not trade or sell personal data. Information exchange is limited to mission-critical infrastructure partners.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-2">
                      <span className="font-section-label text-section-label text-primary">LOGISTICS</span>
                      <p className="text-body-md text-on-surface-variant">Authenticated shipping partners for physical material delivery.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-section-label text-section-label text-primary">COMPUTING</span>
                      <p className="text-body-md text-on-surface-variant">Cloud infrastructure providers with SOC2 Type II certification.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-section-label text-section-label text-primary">FINANCIAL</span>
                      <p className="text-body-md text-on-surface-variant">PCI-compliant gateways for secure transactional processing.</p>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Section 04 */}
            <ScrollReveal>
              <section id="security" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[18px]">verified_user</span>
                  </div>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">04. Security Protocols</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div className="relative overflow-hidden rounded-lg h-64 border border-outline-variant bg-surface-container-high flex flex-col items-center justify-center p-6 text-center">
                    <span className="material-symbols-outlined text-[64px] text-primary mb-4 animate-pulse">lock</span>
                    <span className="font-section-label text-section-label text-primary">ENCRYPTION LAYER</span>
                    <h4 className="font-headline-md text-headline-md font-bold text-on-surface">AES-256 Protocol</h4>
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <p className="font-bold text-on-surface">End-to-End Encryption</p>
                        <p className="text-body-md text-on-surface-variant">All data in transit is protected via TLS 1.3 architecture.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <p className="font-bold text-on-surface">Secure Backup Vaults</p>
                        <p className="text-body-md text-on-surface-variant">Physical backups are maintained in redundant, off-site vaults.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <p className="font-bold text-on-surface">Access Granularity</p>
                        <p className="text-body-md text-on-surface-variant">Internal access is restricted via Role-Based Access Control (RBAC).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            {/* Section 05 */}
            <ScrollReveal>
              <section id="cookies" className="scroll-mt-24 pb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[18px]">cookie</span>
                  </div>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">05. Cookie Architecture</h2>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-lg flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <p className="text-body-lg text-on-surface-variant mb-4">
                      Our platform uses functional cookies to maintain your industrial session and preferences. We do not use intrusive cross-site tracking mechanisms.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-body-md text-on-surface">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <strong>Essential:</strong> Core system functionality.
                      </li>
                      <li className="flex items-center gap-2 text-body-md text-on-surface">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <strong>Performance:</strong> Aggregated load balancing data.
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-64">
                    <button className="w-full bg-primary-container text-on-primary-container py-3 rounded font-semibold text-body-md action-glow hover:opacity-90 active:scale-95 duration-100 cursor-pointer">
                      Manage Preferences
                    </button>
                  </div>
                </div>
              </section>
            </ScrollReveal>

          </div>
        </div>
      </main>
    </div>
  );
}
