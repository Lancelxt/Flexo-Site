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
              <span className="font-section-label text-section-label text-primary mb-4 block">DOCUMENT ID: SLA-2026-FLX</span>
              <h1 className="font-headline-lg text-4xl font-extrabold text-on-surface mb-6">
                Digital Delivery &amp; SLA Policy
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Flexo ERP provides instant provisioning for B2B multi-tenant cloud workspaces. This document details our service level agreements, digital vector assets storage, and technical response times.
              </p>
            </div>
            
            {/* Quick Summary Card */}
            <div className="w-full md:w-80 bg-white border border-outline-variant p-6 float-shadow mt-8 md:mt-0 rounded-lg">
              <span className="font-section-label text-section-label mb-4 block text-primary font-bold">SLA SUMMARY</span>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">cloud_queue</span>
                  <span className="font-technical-data text-technical-data text-on-surface">Instant SaaS Provisioning</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">dns</span>
                  <span className="font-technical-data text-technical-data text-on-surface">99.9% Application Uptime</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">support_agent</span>
                  <span className="font-technical-data text-technical-data text-on-surface">12-Hour Max Ticket SLA</span>
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
                01. RESPONSE TIMELINES
              </button>
              <button
                onClick={() => scrollTo('packaging')}
                className={`block font-section-label text-section-label text-left py-2 transition-colors cursor-pointer w-full ${
                  activeSection === 'packaging' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                02. DIGITAL ASSET INTEGRITY
              </button>
              <button
                onClick={() => scrollTo('tracking')}
                className={`block font-section-label text-section-label text-left py-2 transition-colors cursor-pointer w-full ${
                  activeSection === 'tracking' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                03. SERVICE METRICS
              </button>
              <button
                onClick={() => scrollTo('liability')}
                className={`block font-section-label text-section-label text-left py-2 transition-colors cursor-pointer w-full ${
                  activeSection === 'liability' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                04. SYSTEM REDUNDANCY
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
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">Digital Provisioning &amp; Response SLA</h2>
                </div>
                <div className="space-y-6">
                  <p className="font-body-md text-on-surface-variant">
                    All tenant workspaces are provisioned instantly upon subscription check. Response SLAs for server infrastructure issues follow strict resolution timelines:
                  </p>
                  <div className="overflow-x-auto border border-outline-variant rounded-lg">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-surface-container border-b border-outline-variant">
                          <th className="p-4 font-section-label text-section-label">ISSUE SEVERITY</th>
                          <th className="p-4 font-section-label text-section-label">RESOLUTION SLA</th>
                          <th className="p-4 font-section-label text-section-label">SUPPORT TEAM</th>
                        </tr>
                      </thead>
                      <tbody className="font-technical-data text-technical-data">
                        <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                          <td className="p-4 text-on-surface font-semibold">Tier-1 Critical (Outage)</td>
                          <td className="p-4 text-on-surface-variant">2 - 4 Hours</td>
                          <td className="p-4 text-on-surface-variant">Active DevOps Alert Array</td>
                        </tr>
                        <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                          <td className="p-4 text-on-surface font-semibold">Tier-2 Performance (Lag)</td>
                          <td className="p-4 text-on-surface-variant">4 - 8 Hours</td>
                          <td className="p-4 text-on-surface-variant">Systems Engineer Desk</td>
                        </tr>
                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="p-4 text-on-surface font-semibold">Tier-3 General (Questions)</td>
                          <td className="p-4 text-on-surface-variant">8 - 12 Hours</td>
                          <td className="p-4 text-on-surface-variant">B2B Account Managers</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            {/* Section 02: Protective Packaging -> Digital Asset Integrity */}
            <ScrollReveal>
              <article id="packaging" className="bg-surface-container-lowest border border-outline-variant p-8 float-shadow rounded-lg scroll-mt-24">
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-section-label text-section-label bg-surface-container px-2 py-1 rounded">SEC_02</span>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">Digital Assets &amp; CAD Integrity</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4 font-body-md text-on-surface-variant">
                    <p>To preserve custom vector uploads, design blueprints, and multi-tenant assets, we enforce cloud integrity standards:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                        <span>AES-256 encrypted design attachments storage.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                        <span>Supabase Row-Level Security database schemas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                        <span>Multi-zone redundant cloud backup systems.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-surface-container-low p-6 rounded border border-outline-variant">
                    <span className="font-section-label text-section-label text-outline mb-3 block">CAD SECURITY DIRECTIVE</span>
                    <p className="font-technical-data text-technical-data italic text-on-surface-variant leading-relaxed">
                      "Flexo ERP isolates client assets into multi-tenant buckets. High-fidelity prints, CAD paths, and customer job vector data are protected from adjacent account visibility."
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            {/* Section 03: Tracking Protocols -> Service Metrics */}
            <ScrollReveal>
              <article id="tracking" className="bg-surface-container-lowest border border-outline-variant p-8 float-shadow rounded-lg scroll-mt-24">
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-section-label text-section-label bg-surface-container px-2 py-1 rounded">SEC_03</span>
                  <h2 className="font-headline-md text-2xl font-bold text-on-surface">Service Delivery Metrics</h2>
                </div>
                <div className="space-y-4 font-body-md text-on-surface-variant leading-relaxed">
                  <p>
                    Workspaces are provisioned immediately upon active subscription creation. Administrative login credentials and client OTP endpoints deliver instantly via automated secure email triggers.
                  </p>
                  <p>
                    Our active telemetry systems track API speed and database index query performances. Real-time latency logs are maintained for all B2B sign-shop modules.
                  </p>
                </div>
              </article>
            </ScrollReveal>

            {/* Section 04: Transit Liability -> System Redundancy */}
            <ScrollReveal>
              <article id="liability" className="bg-primary text-white p-8 float-shadow relative overflow-hidden rounded-lg scroll-mt-24 pb-12">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="font-section-label text-section-label bg-white/10 text-primary-fixed px-2 py-1 rounded">SEC_04</span>
                    <h2 className="font-headline-md text-2xl font-bold">System Redundancy</h2>
                  </div>
                  <p className="font-body-md mb-8 opacity-90 max-w-2xl leading-relaxed">
                    Flexo ERP operates redundant server instances across distinct geographical centers to guarantee maximum software availability. If database connection failures disrupt your workshop production floor, alert our team to activate immediate failovers.
                  </p>
                  <a
                    href="mailto:ops@flexbooksystems.com"
                    className="bg-surface-container-lowest text-primary font-semibold px-6 py-3 rounded flex items-center gap-3 hover:bg-white transition-all shadow-lg w-max cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">local_post_office</span>
                    Report System Outage
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
