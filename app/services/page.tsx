'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const coreServices = [
    {
      title: 'Supply Chain Management',
      badge: 'Logistics & MRP',
      image: '/Untitled design.png',
      desc: 'We cover end-to-end configuration which includes Inventory Management, Purchase Management including Centralized Management, Change Order Management, Subcontracting, Material Requirement Planning (MRP), Shipment Handling, and Sales Order Processing.',
      features: [
        'Centralized Purchase & Change Order Management',
        'Inventory Control & Subcontracting Workflows',
        'Material Requirement Planning (MRP) & Shipment Handling',
        'Sales Order Processing, Freight Planning & Make-to-Order',
      ],
    },
    {
      title: 'Financials Management & Taxation',
      badge: 'Global Compliance',
      image: '/aboutus-768x432.png',
      desc: 'Finance is the nerve center for any organization. We map all subledgers to simplify reconciliation processes, supported by master setups handling multi-book accounting (GAAP, IFRS) and local country taxations (GST, VAT, Sales Tax, WHT).',
      features: [
        'Corporate Setup, Payable & Receivable Management',
        'Credit Management, Budgeting & Roll Forward',
        'Fixed Asset Management & Tax Reporting',
        'Period End Financial Analysis & Multi-Book Compliance',
      ],
    },
    {
      title: 'Project Management & Controlling',
      badge: 'Lifecycle Ops',
      image: '/slide2.png',
      desc: 'We deliver complete project cycle management from initiation to closure. Our teams support optimal project mapping including budgeting, forecasting, cost controlling, project invoicing, supplier invoice forwarding, and sales contract management.',
      features: [
        'Budget & Forecast Setup and Tracking',
        'Project Cost Control & Invoicing',
        'Supplier Invoice Forwarding & Sales Contract Management',
        'Commitment Analysis & End-to-End Cycle Mapping',
      ],
    },
    {
      title: 'IFS Business Reporter',
      badge: 'Analytics & BI',
      image: '/report4.png',
      desc: 'Generate analytical business reports based on pre-packaged information models in IFS Applications. Extends Microsoft Excel as an efficient, secure client for planning, number crunching multi-dimensional data, subtotals, and KPI calculations.',
      features: [
        'Multi-Dimensional Data Aggregation & Grouping',
        'User-Defined Calculations (Totals, Margins, KPIs)',
        'Multi-Level Subtotals & Income Statement Layouts',
        'Native Excel Formatting, Analysis & Secure Reporting',
      ],
    },
    {
      title: 'Data Migration Manager',
      badge: 'Cloud Sync Overview',
      image: '/report5.png',
      desc: 'Migrate data seamlessly across environments using the IFS Data Migration Manager. Store, harmonize, clean data, flag duplicates, and deploy via metadata database links managed by cloud operations using the dedicated IFSMIG service user.',
      features: [
        'Data Harmonization, Cleaning & Duplicate Flagging',
        'Metadata-Driven Workflow & Schema Conversion',
        'IFSMIG Cloud Service User Database Link Deployment',
        'High-Quality Data Build Reducing Go-Live Duration & Risk',
      ],
    },
    {
      title: 'User Management & Security Controls',
      badge: 'Governance',
      image: '/aboutus-768x432.png',
      desc: 'Define users and enforce well-defined security controls built on IFS Permission Sets. Manage database object access, system privileges, company/site availability, user groups, profiles, and person object connections.',
      features: [
        'Assign Permission Sets & System Privileges',
        'Set User Account Lifetime & Profile Settings',
        'Configure Available Companies, Sites & User Groups',
        'Assign Business Roles & Connect to Person Objects',
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#0b0418] text-white min-h-screen relative overflow-hidden">
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6b2fe0]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Hero Banner */}
      <section className="relative py-16 bg-[#1b0f35]/60 border-b border-[#33224f] backdrop-blur-md">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
              360-Degree IFS ERP Capabilities
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Our Services & Business Intelligence
            </h1>
            <p className="text-lg text-[#d9cdf5] leading-relaxed mb-8">
              Think IFS implementation & support, think SingleStream ERP Solutions. We provide end-to-end services starting from process mapping, deployment, and customization to post-deployment SLA support.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all shadow-lg shadow-emerald-500/30 text-sm"
              >
                Get Online Consultation
              </Link>
              <Link
                href="/about-us"
                className="px-8 py-3.5 rounded-full border border-white/40 text-white font-bold hover:bg-white/10 transition-colors text-sm"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Explicit relative container for Hero Image */}
          <div className="lg:col-span-5 relative h-[320px] w-full rounded-3xl overflow-hidden border border-[#33224f] shadow-2xl group">
            <Image
              src="/Untitled design.png"
              alt="SingleStream Enterprise ERP Telemetry Dashboard"
              fill
              priority
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0418]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((svc, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#1b0f35]/80 border border-[#33224f] hover:border-emerald-500/60 transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-emerald-500/10"
              >
                <div>
                  {/* Explicit relative container for Card Image */}
                  <div className="relative h-48 w-full overflow-hidden border-b border-[#33224f] bg-[#0b0418]">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b0f35] via-[#1b0f35]/30 to-transparent pointer-events-none" />

                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0b0418]/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md z-10">
                      {svc.badge}
                    </span>
                  </div>

                  <div className="p-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#6b2fe0] to-emerald-500 mb-4 flex items-center justify-center font-extrabold text-white text-sm shadow-md">
                      0{idx + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[#b3a8cf] leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-4 border-t border-[#33224f]/60 bg-[#120826]/40">
                  <h4 className="text-[11px] font-bold uppercase text-emerald-400 tracking-wider mb-3">
                    Core Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {svc.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-[#d9cdf5] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Showcase Section */}
      <section className="py-20 bg-[#120826] border-t border-[#33224f]">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
              IFS Smart Data Manager Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
              Detailed Data Migration Architecture & Workflow
            </h2>
            <p className="text-[#b3a8cf] text-base max-w-2xl mx-auto">
              Our automated migration engine extracts legacy data, validates metadata container tables, flags duplicates, and deploys directly to target IFS environments.
            </p>
          </div>

          {/* Explicit relative container for Architecture Diagram */}
          <div className="relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-[#33224f] shadow-2xl bg-[#0b0418]">
            <Image
              src="/report6.png"
              alt="Detailed IFS Smart Data Manager Architecture Workflow Diagram"
              fill
              sizes="(max-width: 1200px) 100vw, 1180px"
              className="object-contain p-4"
            />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-gradient-to-r from-[#1b0f35] via-[#241348] to-[#1b0f35] border-y border-[#33224f]">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-2">
              Thinking of an Upgrade or App Customizations?
            </h2>
            <p className="text-[#b3a8cf] text-sm max-w-xl">
              Our consultants carefully evaluate upgrade implications and build robust add-on plugins connecting 3rd party applications to automate your business processes.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all shadow-lg shadow-emerald-500/30 text-sm whitespace-nowrap"
          >
            Get Free Evaluation & Demo
          </Link>
        </div>
      </section>
    </div>
  );
}