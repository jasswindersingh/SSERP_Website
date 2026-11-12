'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function IndustriesPage() {
  const industriesList = [
    {
      title: 'Oil and Gas',
      badge: 'EAM Leader Choice',
      image: '/Rig.png',
      stat: '400+ Projects',
      statDesc: 'Asset-oriented companies running IFS worldwide',
      desc: 'ARC Advisory Group rated IFS as the top EAM solution choice for Oil and Gas. IFS is the global leader for EPCI contractors, drilling contractors, oilfield machinery, and offshore service companies. We specialize in implementing IFS across complex, multi-site drilling operations.',
      highlights: [
        'Offshore & Onshore Drilling Operations',
        'EPCI Contractor Workflow Management',
        'Oilfield Equipment Maintenance & Asset Telemetry',
        'ARC Advisory Rated #1 EAM Architecture',
      ],
    },
    {
      title: 'Aerospace and Defense',
      badge: 'Pioneer Implementation',
      image: '/Aerospace.png',
      stat: 'Thousands',
      statDesc: 'Active users across defense divisions & plants',
      desc: 'We are pioneers in the Aerospace and Defense domain. Our expert solutions help streamline and seamlessly manage intricate MRO, Manufacturing, Engineering Design, Supply Chain, Customer Service, and Financial compliance across global defense divisions.',
      highlights: [
        'Complex MRO & Fleet Maintenance Tracking',
        'Precision Manufacturing & Engineering Design',
        'Defense Supply Chain & Security Governance',
        'Multi-Division User Role & Asset Access',
      ],
    },
    {
      title: 'Manufacturing & Distribution',
      badge: 'End-to-End Control',
      image: '/Factory.png',
      stat: '100% Automated',
      statDesc: 'Repetitive supply chain & execution tasks',
      desc: 'Our integrated solution supports all segments of the manufacturing process—empowering leadership to analyze, execute, and control every variable. We automate repetitive tasks and optimize supply chain methods spread across different locations and international territories.',
      highlights: [
        'Multi-Site Inventory & Warehouse Control',
        'Repetitive Process & Shop Floor Automation',
        'Scalable Supply Chain Adaptability',
        'Make-to-Order & Freight Execution',
      ],
    },
    {
      title: 'Utility and Automobiles',
      badge: 'Fool-Proof Setup',
      image: '/Fleet.png',
      stat: 'Global Leaders',
      statDesc: 'Automotive & utility enterprise partners',
      desc: 'We hold an impeccable record of implementing fool-proof IFS solutions for Utility and Automotive giants. From greenfield implementations to post-go-live SLA support, we streamline intrinsic plant processes and maintenance operations.',
      highlights: [
        'Preventive Equipment & Fleet Asset Control',
        'Automotive Assembly Line Logistics',
        'Utility Infrastructure & Metering Workflows',
        'Multi-Currency Financial Reconciliation',
      ],
    },
    {
      title: 'Telecommunications',
      badge: 'Infrastructure BI',
      image: '/Tower.png',
      stat: 'Domain Experts',
      statDesc: 'Preferred implementation partners globally',
      desc: 'Our in-depth domain knowledge and technical expertise make us the most preferred IFS implementation partner for telecom leaders across the globe, supporting infrastructure management, network inventory, and billing integration.',
      highlights: [
        'Telecom Network Asset & License Tracking',
        'Field Service & Tower Maintenance Orders',
        'Subledger Billing & Revenue Recognition',
        'Real-Time Operational Dashboard Analytics',
      ],
    },
    {
      title: 'Ports and Terminals',
      badge: 'Smart Port EAM',
      image: '/Harbor.png',
      stat: 'Global Ports',
      statDesc: 'Powering terminal operations like APM Terminals',
      desc: 'Asset management is the core backbone of smart port operation. Our expert team of IFS consultants brings deep domain knowledge to drive IT support, crane maintenance, berth scheduling, and mixed payment resolutions.',
      highlights: [
        'Container Terminal Crane & EAM Maintenance',
        'Vessel Berth & Cargo Telemetry Sync',
        'SLA Resolution Timelines for Port IT Operations',
        'Complex Payment & Tariff Reconciliations',
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#120826] text-white min-h-screen relative overflow-hidden">
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6b2fe0]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Hero Banner Section */}
      <section className="relative py-16 bg-[#1b0f35]/60 border-b border-[#33224f] backdrop-blur-md">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
              Industry Vertical Expertise
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Industries We Transform
            </h1>
            <p className="text-lg text-[#d9cdf5] leading-relaxed mb-8">
              We specialize in designing tailored IFS solutions for high-complexity domain giants. Our clients across 20+ countries swear by our high standards, technical depth, and 100% implementation success record.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-[#e5389a] hover:bg-[#c4287e] text-white font-bold transition-all shadow-lg shadow-[#e5389a]/30 text-sm"
              >
                Schedule Industry Demo
              </Link>
              <Link
                href="/services"
                className="px-8 py-3.5 rounded-full border border-white/40 text-white font-bold hover:bg-white/10 transition-colors text-sm"
              >
                Explore ERP Services
              </Link>
            </div>
          </div>

          {/* Full uncropped image display using object-contain */}
          <div className="lg:col-span-5 relative h-[380px] w-full rounded-3xl overflow-hidden border border-[#33224f] shadow-2xl group bg-[#0b0418]/60 flex items-center justify-center p-2">
            <Image
              src="/Title.png"
              alt="SingleStream ERP Industry Solutions Telemetry"
              fill
              priority
              loading="eager"
              sizes="(max-width: 1080px) 100vw, 40vw"
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Industry Verticals Grid */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesList.map((ind, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#1b0f35]/80 border border-[#33224f] hover:border-emerald-500/60 transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-emerald-500/10"
              >
                <div>
                  {/* Image Header with dedicated sector graphic */}
                  <div className="relative h-48 w-full overflow-hidden border-b border-[#33224f] bg-[#0b0418]">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b0f35] via-[#1b0f35]/30 to-transparent pointer-events-none" />

                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0b0418]/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md z-10">
                      {ind.badge}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#6b2fe0] to-[#e5389a] flex items-center justify-center font-extrabold text-white text-sm shadow-md">
                        0{idx + 1}
                      </div>
                      <div className="text-right">
                        <span className="block text-sm font-extrabold text-emerald-400">{ind.stat}</span>
                        <span className="text-[10px] text-[#b3a8cf]">{ind.statDesc}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-sm text-[#b3a8cf] leading-relaxed mb-6">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                {/* Highlights Footer */}
                <div className="px-8 pb-8 pt-4 border-t border-[#33224f]/60 bg-[#0b0418]/40">
                  <h4 className="text-[11px] font-bold uppercase text-emerald-400 tracking-wider mb-3">
                    Specialized Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {ind.highlights.map((feat, fIdx) => (
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

      {/* Global Client Proof Banner */}
      <section className="py-16 bg-gradient-to-r from-[#1b0f35] via-[#241348] to-[#1b0f35] border-y border-[#33224f]">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-2">
              Trusted in Every Conceivable Domain
            </h2>
            <p className="text-[#b3a8cf] text-sm max-w-xl">
              From Maersk Drilling in Denmark to APM Terminals in Costa Rica and HAL Lucknow, we simplify intrinsic process complexities for world leaders.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all shadow-lg shadow-emerald-500/30 text-sm whitespace-nowrap"
          >
            Connect With Domain Experts
          </Link>
        </div>
      </section>
    </div>
  );
}