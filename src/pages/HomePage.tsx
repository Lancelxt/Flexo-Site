import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function HomePage() {
  const location = useLocation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
    bottleneck: '',
  });

  // Handle smooth scroll from navigation redirect
  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const targetId = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', phone: '', details: '', bottleneck: '' });
      setTimeout(() => {
        setFormSubmitted(false);
      }, 4000);
    }, 1500);
  };

  return (
    <main>
      {/* Hero Section */}
      <section id="about" className="relative overflow-hidden technical-grid py-20 md:py-28 border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <ScrollReveal>
            <span className="section-label mb-4 block font-medium text-primary">Deal se Delivery tak</span>
            <h1 className="font-headline-lg text-4xl lg:text-5xl font-extrabold text-on-background mb-6 leading-tight tracking-tight">
              The Ultimate <br className="hidden lg:block"/>
              <span className="text-primary">Print ERP Software</span> <br/>
              for Sign &amp; Print Shops
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
              Connect sales estimators, designer assets, CNC production managers, and automated QC checklists into a single, high-fidelity ERP workspace. Modernize your print workshop operations from lead ingestion to instant WhatsApp UPI billing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const contactSec = document.getElementById('contact');
                  if (contactSec) {
                    window.scrollTo({
                      top: contactSec.offsetTop - 80,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="bg-action-gradient text-white px-8 py-4 rounded font-semibold shadow-action-glow hover:opacity-90 active:scale-95 duration-100 cursor-pointer text-center"
              >
                Book a Software Demo
              </button>
              <button
                onClick={() => {
                  const capabilitiesSec = document.getElementById('services');
                  if (capabilitiesSec) {
                    window.scrollTo({
                      top: capabilitiesSec.offsetTop - 80,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="border border-outline bg-white text-on-background px-8 py-4 rounded font-semibold hover:bg-surface-container-low active:scale-95 duration-100 cursor-pointer text-center"
              >
                Explore ERP Features
              </button>
            </div>
          </ScrollReveal>

          {/* Hero Visual Block */}
          <ScrollReveal delayMs={200} className="relative">
            <div className="absolute inset-0 bg-primary-container/5 rounded-full blur-3xl -z-10"></div>
            
            {/* Visual Image Placeholder */}
            <div className="w-full aspect-[4/3] rounded-lg bg-surface-container-high border border-outline-variant flex flex-col items-center justify-center p-6 text-center float-shadow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
              <div className="relative w-full h-full bg-white rounded-md border border-outline shadow-sm overflow-hidden flex items-center justify-center">
                 <span className="text-on-surface-variant font-medium">ERP Dashboard Screenshot Placeholder</span>
              </div>
            </div>

            {/* Pinned Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 float-shadow border border-outline-variant rounded-md hidden lg:block">
              <div className="section-label mb-2">Platform Telemetry</div>
              <div className="font-mono text-technical-data text-primary font-medium">Shops: 142+ Workshops</div>
              <div className="font-mono text-technical-data text-primary font-medium">Jobs Stage: 2.84M+ Sheets</div>
              <div className="font-mono text-technical-data text-primary font-medium">QC Accuracy: 99.98%</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Capabilities / Features */}
      <section id="services" className="py-24 bg-white border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin">
          
          <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="section-label">Unified Workshop Suite</span>
              <h2 className="font-headline-lg text-3xl font-extrabold mt-2 text-on-surface">Print Shop Management Modules</h2>
            </div>
            <p className="font-body-md text-on-surface-variant max-w-md">
              Flexzy is engineered to organize your internal operations, eliminating data silos between your designers, production floor, and invoicing desk.
            </p>
          </ScrollReveal>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <ScrollReveal delayMs={100} className="bg-white p-8 border border-outline-variant float-shadow rounded-lg group hover:border-primary transition-all duration-200 flex flex-col">
              <div className="w-full h-40 bg-surface-container-low rounded border border-outline-variant mb-6 flex items-center justify-center overflow-hidden relative">
                 <span className="text-on-surface-variant/50 text-sm font-medium">Leads Kanban Screenshot</span>
              </div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4">query_stats</span>
              <h3 className="font-headline-md text-headline-md mb-2 font-bold text-on-surface">Print CRM &amp; Lead Pipeline</h3>
              <p className="font-body-md text-on-surface-variant mt-auto">
                Track leads from "New" to "Won" with customized pipelines for Retail, Corporate, Channel Partners, and Architects.
              </p>
            </ScrollReveal>

            {/* Feature 2 */}
            <ScrollReveal delayMs={200} className="bg-white p-8 border border-outline-variant float-shadow rounded-lg group hover:border-primary transition-all duration-200 flex flex-col">
              <div className="w-full h-40 bg-surface-container-low rounded border border-outline-variant mb-6 flex items-center justify-center overflow-hidden relative">
                 <span className="text-on-surface-variant/50 text-sm font-medium">Job Sheet Creation Screenshot</span>
              </div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4">description</span>
              <h3 className="font-headline-md text-headline-md mb-2 font-bold text-on-surface">Smart Job Sheets</h3>
              <p className="font-body-md text-on-surface-variant mt-auto">
                Capture sizes (feet/inches) with auto-conversions, media types, lamination, and finishes with real-time cost estimation.
              </p>
            </ScrollReveal>

            {/* Feature 3 */}
            <ScrollReveal delayMs={300} className="bg-white p-8 border border-outline-variant float-shadow rounded-lg group hover:border-primary transition-all duration-200 flex flex-col">
              <div className="w-full h-40 bg-surface-container-low rounded border border-outline-variant mb-6 flex items-center justify-center overflow-hidden relative">
                 <span className="text-on-surface-variant/50 text-sm font-medium">Client OTP Portal Screenshot</span>
              </div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4">verified_user</span>
              <h3 className="font-headline-md text-headline-md mb-2 font-bold text-on-surface">Client OTP Approvals</h3>
              <p className="font-body-md text-on-surface-variant mt-auto">
                Eliminate design friction. Send secure links for clients to review and approve designs instantly via OTP.
              </p>
            </ScrollReveal>

            {/* Feature 4 */}
            <ScrollReveal delayMs={400} className="bg-white p-8 border border-outline-variant float-shadow rounded-lg group hover:border-primary transition-all duration-200 flex flex-col">
              <div className="w-full h-40 bg-surface-container-low rounded border border-outline-variant mb-6 flex items-center justify-center overflow-hidden relative">
                 <span className="text-on-surface-variant/50 text-sm font-medium">QC Checklists Screenshot</span>
              </div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4">fact_check</span>
              <h3 className="font-headline-md text-headline-md mb-2 font-bold text-on-surface">Floor QC Checklists</h3>
              <p className="font-body-md text-on-surface-variant mt-auto">
                Live status updates for Printing and Fabrication stages. Operator checklists and photo proofs for Quality Control.
              </p>
            </ScrollReveal>

            {/* Feature 5 */}
            <ScrollReveal delayMs={500} className="bg-white p-8 border border-outline-variant float-shadow rounded-lg group hover:border-primary transition-all duration-200 flex flex-col">
              <div className="w-full h-40 bg-surface-container-low rounded border border-outline-variant mb-6 flex items-center justify-center overflow-hidden relative">
                 <span className="text-on-surface-variant/50 text-sm font-medium">Delivery Challan Screenshot</span>
              </div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4">local_shipping</span>
              <h3 className="font-headline-md text-headline-md mb-2 font-bold text-on-surface">Automated Delivery Challans</h3>
              <p className="font-body-md text-on-surface-variant mt-auto">
                One-click generation of professional delivery challans with surveyor assignments and dispatch tracking.
              </p>
            </ScrollReveal>

            {/* Feature 6 */}
            <ScrollReveal delayMs={600} className="bg-white p-8 border border-outline-variant float-shadow rounded-lg group hover:border-primary transition-all duration-200 flex flex-col">
              <div className="w-full h-40 bg-surface-container-low rounded border border-outline-variant mb-6 flex items-center justify-center overflow-hidden relative">
                 <span className="text-on-surface-variant/50 text-sm font-medium">WhatsApp Billing Screenshot</span>
              </div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4">quick_phrases</span>
              <h3 className="font-headline-md text-headline-md mb-2 font-bold text-on-surface">WhatsApp Billing &amp; UPI</h3>
              <p className="font-body-md text-on-surface-variant mt-auto">
                Integrated Razorpay and Zoho, instant UPI deep-links, advance tracking, and automated WhatsApp payment reminders.
              </p>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-surface-container-low border-b border-outline-variant overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Process Visual */}
            <ScrollReveal className="order-2 md:order-1">
              <div className="w-full aspect-[4/3] rounded-lg bg-surface-container-high border border-outline-variant flex flex-col items-center justify-center p-6 text-center float-shadow relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                <div className="relative w-full h-full bg-white rounded-md border border-outline shadow-sm overflow-hidden flex items-center justify-center">
                   <span className="text-on-surface-variant font-medium">Workflow Diagram Placeholder</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Process Text */}
            <ScrollReveal delayMs={200} className="order-1 md:order-2">
              <span className="section-label">Platform Provisioning</span>
              <h2 className="font-headline-lg text-3xl font-extrabold mt-4 mb-6 text-on-surface">Scale Your Workshop</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Flexzy standardizes internal operations for sign manufacturers and commercial printing companies. Configure your workshop in 3 simple phases.
              </p>
              
              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <span className="font-mono text-primary font-bold text-lg">01</span>
                  <div>
                    <h4 className="font-bold text-on-surface">Capture &amp; Quote</h4>
                    <p className="text-body-md text-on-surface-variant">Lead ingestion with customized pipelines and real-time cost estimation based on smart job sheet auto-conversions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-primary font-bold text-lg">02</span>
                  <div>
                    <h4 className="font-bold text-on-surface">Design &amp; Produce</h4>
                    <p className="text-body-md text-on-surface-variant">Self-assign jobs in the Design Pick Studio, get frictionless client OTP approvals, and ensure quality with Floor QC checklists.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-mono text-primary font-bold text-lg">03</span>
                  <div>
                    <h4 className="font-bold text-on-surface">Deliver &amp; Collect</h4>
                    <p className="text-body-md text-on-surface-variant">Generate delivery challans in one click and send automated WhatsApp payment reminders with UPI deep links.</p>
                  </div>
                </div>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-container-max mx-auto px-margin">
          <ScrollReveal className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden float-shadow flex flex-col lg:flex-row">
            
            {/* Form Column */}
            <div className="p-8 md:p-12 lg:w-1/2">
              <span className="section-label">Demo Initiation</span>
              <h2 className="font-headline-lg text-3xl font-extrabold mt-4 mb-8 text-on-surface">Request a B2B Demo</h2>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg flex items-center gap-4 animate-fade-in">
                  <span className="material-symbols-outlined text-[32px] text-green-600">check_circle</span>
                  <div>
                    <h4 className="font-bold">Demo Request Received</h4>
                    <p className="text-body-md text-green-700">We have logged your workshop details. A B2B solutions specialist will contact you to schedule an onboarding slot.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-body-md font-semibold text-on-surface block">Your Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-outline-variant rounded p-3 focus:ring-2 focus:ring-secondary-container focus:border-primary outline-none transition-all duration-100 text-on-surface"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body-md font-semibold text-on-surface block">Workplace Email</label>
                      <input
                        required
                        type="email"
                        placeholder="owner@printshop.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-outline-variant rounded p-3 focus:ring-2 focus:ring-secondary-container focus:border-primary outline-none transition-all duration-100 text-on-surface"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-body-md font-semibold text-on-surface block">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 (999) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-outline-variant rounded p-3 focus:ring-2 focus:ring-secondary-container focus:border-primary outline-none transition-all duration-100 text-on-surface"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body-md font-semibold text-on-surface block">What is your biggest bottleneck?</label>
                    <select
                      required
                      value={formData.bottleneck}
                      onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                      className="w-full bg-white border border-outline-variant rounded p-3 focus:ring-2 focus:ring-secondary-container focus:border-primary outline-none transition-all duration-100 text-on-surface"
                    >
                      <option value="" disabled>Select your main challenge...</option>
                      <option value="sales">Sales &amp; Lead Tracking</option>
                      <option value="design">Design Approvals &amp; Revisions</option>
                      <option value="production">Production Floor QC &amp; Tracking</option>
                      <option value="billing">Invoicing &amp; Payment Collection</option>
                      <option value="other">Other / General Operations</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-body-md font-semibold text-on-surface block">Workshop Machinery &amp; Staff Size</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Specify your printers (e.g. UV flatbed, solvent), approximate staff count, or current job sheet volume..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-white border border-outline-variant rounded p-3 focus:ring-2 focus:ring-secondary-container focus:border-primary outline-none transition-all duration-100 text-on-surface"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-action-gradient text-white py-4 rounded font-semibold shadow-action-glow hover:opacity-95 transition-all cursor-pointer text-center flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
                        Processing Demo Ticket...
                      </>
                    ) : (
                      'Request Workshop Onboarding'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info Column */}
            <div className="bg-primary p-8 md:p-12 lg:w-1/2 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
              
              <div className="z-10">
                <h3 className="font-headline-md text-headline-md font-bold mb-8">Software HQ Coordinates</h3>
                <div className="space-y-8">
                  
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-secondary-fixed-dim text-[24px]">location_on</span>
                    <div>
                      <p className="font-bold">Flexzy ERP Operations Center</p>
                      <p className="text-primary-fixed/80">
                        Ambikapur,<br />
                        Chhattisgarh, 497001
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-secondary-fixed-dim text-[24px]">call</span>
                    <div>
                      <p className="font-bold">SaaS Onboarding Desk</p>
                      <a href="tel:+91800FLEXBOOK" className="text-primary-fixed hover:text-white transition-colors duration-100">
                        +91-1800-FLEXBOOK
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-secondary-fixed-dim text-[24px]">mail</span>
                    <div>
                      <p className="font-bold">Technical Support</p>
                      <a href="mailto:ops@flexbooksystems.com" className="text-primary-fixed hover:text-white transition-colors duration-100">
                        ops@flexbooksystems.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-12 z-10 pt-12 border-t border-white/10">
                <div className="section-label text-white/60 mb-2">Availability</div>
                <div className="font-mono text-technical-data">Mon-Fri: 08:00 - 20:00 IST</div>
                <div className="font-mono text-technical-data">Sat: 09:00 - 15:00 IST</div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
