'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <div className="pt-28 pb-20 bg-[#120826] text-white min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6b2fe0]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-[#e5389a]/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Hero Showcase */}
      <section className="relative py-16 bg-[#1b0f35]/60 border-b border-[#33224f] backdrop-blur-md">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#e5389a]/20 border border-[#e5389a]/40 text-[#e5389a] text-xs font-bold uppercase tracking-wider mb-6">
              Record-Breaking Implementation
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Case Studies & Success Stories
            </h1>
            <p className="text-lg text-[#d9cdf5] leading-relaxed mb-8">
              Discover how SingleStream ERP delivers lightning-fast, high-precision enterprise digital transformations for industrial powerhouses across India.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-[#e5389a] hover:bg-[#c4287e] text-white font-bold transition-all shadow-lg shadow-[#e5389a]/30 text-sm"
              >
                Consult With Our Team
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[320px] w-full rounded-3xl overflow-hidden border border-[#33224f] shadow-2xl group bg-[#0b0418]/60 flex items-center justify-center p-2">
            <Image
              src="/Combine1.png"
              alt="SingleStream ERP Featured Success Story"
              fill
              priority
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120826]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Featured Case Study: Victoria Industries Pvt. Ltd. */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
              Flagship Enterprise Project
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
              Victoria Industries Pvt. Ltd. (Faridabad, Haryana)
            </h2>
            <p className="text-[#b3a8cf] text-base max-w-2xl mx-auto">
              Achieving the fastest IFS Cloud implementation in India within a minimal period of just 6 months.
            </p>
          </div>

          {/* Main Case Study Card */}
          <div className="rounded-3xl bg-[#1b0f35]/90 border border-[#33224f] p-8 sm:p-12 shadow-2xl backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase">
                <span>⏱️ 6-Month Record Execution</span>
                <span>•</span>
                <span>📍 Faridabad, Haryana</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Transforming Manufacturing Operations with IFS Cloud
              </h3>

              <p className="text-sm sm:text-base text-[#b3a8cf] leading-relaxed">
                SingleStream ERP’s expert techno-functional consultants are currently spearheading a landmark enterprise project with <strong className="text-white">Victoria Industries Pvt. Ltd.</strong> located in Faridabad, Haryana. 
              </p>

              <p className="text-sm sm:text-base text-[#b3a8cf] leading-relaxed">
                Our team took on the ambitious mandate of implementing <strong className="text-white">IFS Cloud</strong> across their core manufacturing and supply chain processes. By leveraging our streamlined agile methodology, master setup expertise, and deep domain knowledge, we engineered a rapid deployment cycle completed within <strong className="text-emerald-400">just 6 months</strong>—establishing the <strong className="text-white">fastest IFS Cloud implementation in India</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-[#0b0418]/60 border border-[#33224f]">
                  <h4 className="text-xs font-bold uppercase text-emerald-400 mb-1">Timeline Benchmark</h4>
                  <p className="text-xl font-extrabold text-white">6 Months Go-Live</p>
                  <p className="text-xs text-[#b3a8cf] mt-1">Fastest record rollout nationwide in India.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0b0418]/60 border border-[#33224f]">
                  <h4 className="text-xs font-bold uppercase text-[#e5389a] mb-1">Core System</h4>
                  <p className="text-xl font-extrabold text-white">IFS Cloud ERP</p>
                  <p className="text-xs text-[#b3a8cf] mt-1">Complete process and subledger automation.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 bg-[#0b0418]/80 p-8 rounded-2xl border border-[#33224f]">
              <h4 className="text-sm font-bold uppercase text-emerald-400 tracking-wider">
                Key Project Highlights
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-[#d9cdf5]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span><strong>Rapid Process Mapping:</strong> Streamlined complex manufacturing procedures in Faridabad with minimal operational downtime.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-[#d9cdf5]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span><strong>Minimal Period Execution:</strong> Delivered fully configured IFS Cloud modules within 6 months from project initiation.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-[#d9cdf5]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span><strong>Advanced Data & Inventory Sync:</strong> Unified supply chain and financial ledgers into one single source of truth.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-[#d9cdf5]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span><strong>On-Site & Remote Expert SLA:</strong> Continuous support backed by Mr. Rohtash Singh and the SingleStream consulting team.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-[#33224f]">
                <Link
                  href="/contact"
                  className="block text-center py-3 rounded-full bg-[#e5389a] hover:bg-[#c4287e] text-white text-xs font-bold transition-all shadow-md"
                >
                  Inquire About Similar Rollouts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="py-16 bg-gradient-to-r from-[#1b0f35] via-[#241348] to-[#1b0f35] border-t border-[#33224f]">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-2">
              Want to Accelerate Your ERP Deployment?
            </h2>
            <p className="text-[#b3a8cf] text-sm max-w-xl">
              Partner with the leaders in record-breaking IFS implementations and business intelligence reporting.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all shadow-lg shadow-emerald-500/30 text-sm whitespace-nowrap"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
