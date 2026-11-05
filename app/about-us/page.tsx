import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="pt-24 pb-20 bg-[#0b0418] text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 bg-[#1b0f35] border-b border-[#33224f]">
        <div className="max-w-[1180px] mx-auto px-6 text-center">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-2 mb-4">
            About SingleStream ERP
          </h1>
          <p className="text-xl text-[#d9cdf5] max-w-2xl mx-auto leading-relaxed">
            Your single point of contact for end-to-end IFS ERP implementation, process optimization, and complex digital transformations.
          </p>
        </div>
      </section>

      {/* Main Story & Image Section */}
      <section className="py-20">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
              Think of IFS, Think of SingleStream
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
              Unmatched 100% Success Record Across 5 Continents
            </h2>
            <p className="text-[#b3a8cf] text-base leading-relaxed mb-6">
              SingleStream ERP stands explicitly as the premier consulting partner in the IFS implementation gamut. Having worked extensively across more than 20 countries and 5 continents, we hold an immaculate track record of 100% success in end-to-end IFS implementations for complex global enterprise operations.
            </p>
            <p className="text-[#b3a8cf] text-base leading-relaxed mb-8">
              From Oil & Gas and Aerospace to Manufacturing and Automobiles, our teams tailor every module to eliminate transactional friction in your supply chain, financial reconciliation, and asset management.
            </p>
            <div className="flex gap-4">
              <Link
                href="/services"
                className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all shadow-lg shadow-emerald-500/20 text-sm"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full border border-white/40 text-white font-bold hover:bg-white/10 transition-colors text-sm"
              >
                Talk to Consultants
              </Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-[#33224f] shadow-2xl h-[420px]">
            <Image
              src="/aboutus-768x432.jpg"
              alt="SingleStream ERP Team Collaboration"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0418]/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-16 bg-[#1b0f35] border-y border-[#33224f]">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <strong className="block text-4xl sm:text-5xl font-extrabold text-emerald-400">100%</strong>
            <span className="text-sm text-[#b3a8cf]">Implementation Success</span>
          </div>
          <div>
            <strong className="block text-4xl sm:text-5xl font-extrabold text-emerald-400">20+</strong>
            <span className="text-sm text-[#b3a8cf]">Countries Covered</span>
          </div>
          <div>
            <strong className="block text-4xl sm:text-5xl font-extrabold text-emerald-400">5</strong>
            <span className="text-sm text-[#b3a8cf]">Continents Served</span>
          </div>
          <div>
            <strong className="block text-4xl sm:text-5xl font-extrabold text-emerald-400">24/7</strong>
            <span className="text-sm text-[#b3a8cf]">Dedicated SLA Support</span>
          </div>
        </div>
      </section>

      {/* Process Blueprint & Work Culture */}
      <section className="py-20">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-[#33224f] shadow-2xl h-[400px] order-2 lg:order-1">
            <Image
              src="/slide2.jpg"
              alt="IFS Process Planning and Architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0418]/80 via-transparent to-transparent" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-6">
              Precision Engineering for Complex Workflows
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6b2fe0] flex items-center justify-center font-bold text-white shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Process Mapping & Customization</h3>
                  <p className="text-sm text-[#b3a8cf] mt-1">
                    We map every subledger, master setup, and warehouse flow directly to your business logic using custom PL/SQL, Page Designer, and Camunda BPMN automation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6b2fe0] flex items-center justify-center font-bold text-white shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Multi-Country Tax & Financial Mastery</h3>
                  <p className="text-sm text-[#b3a8cf] mt-1">
                    Expert handling of local country taxation setup including GST, VAT, Sales Tax, WHT, and multi-currency ledgers across international subsidiaries.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#6b2fe0] flex items-center justify-center font-bold text-white shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Strict SLA Post-Go-Live Support</h3>
                  <p className="text-sm text-[#b3a8cf] mt-1">
                    Our accredited support team strictly adheres to pre-agreed resolution timelines to ensure uninterrupted production and operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}