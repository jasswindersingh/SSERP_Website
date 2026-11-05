import React from 'react';

export default function OurPortfolioPage() {
  const projects = [
    {
      title: 'Global IFS ERP Implementation',
      industry: 'Oil & Gas / Maritime Drilling',
      location: 'Denmark / Global Fleet',
      desc: 'End-to-end implementation and complex mixed payment reconciliation across international off-shore operations.',
      tags: ['IFS ERP', 'Finance', 'Mixed Payments'],
    },
    {
      title: 'Port & Terminal Management Platform',
      industry: 'Logistics & Ports',
      location: 'Costa Rica',
      desc: 'Seamless migration and post-implementation process optimization for high-concurrency cargo terminal workflows.',
      tags: ['APM Terminals', 'Supply Chain', 'Process Sync'],
    },
    {
      title: 'Aerospace Ledger & Plant Integration',
      industry: 'Aerospace & Defense',
      location: 'Lucknow, India',
      desc: 'Comprehensive accounting restructuring and production ledger sync for HAL Lucknow manufacturing facilities.',
      tags: ['IFS Cloud', 'HAL Lucknow', 'Cost Control'],
    },
    {
      title: 'Multi-Warehouse Inventory Control',
      industry: 'Healthcare & Distribution',
      location: 'South Africa',
      desc: 'Post-implementation troubleshooting, process streamlining, and automated stock reordering for Vital Distributions.',
      tags: ['Vital Distributions', 'Logistics', 'Warehouse'],
    },
    {
      title: 'Subcontractor & Project Accounting',
      industry: 'Automobiles & Utilities',
      location: 'Asia & Europe',
      desc: 'Integrated project cost allocation, timesheet tracking, and subcontractor billing platforms.',
      tags: ['Oracle / EBS', 'Project ERP', 'Billing'],
    },
    {
      title: 'Enterprise Service & Asset Management',
      industry: 'Telecommunications & Infrastructure',
      location: 'Global Deployments',
      desc: 'Telemetry stream ingestion and preventive work-order dispatching across telecommunication towers.',
      tags: ['EAM', 'Field Operations', 'IoT Integration'],
    },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <div className="bg-[#0b0418] py-20 border-b border-[#33224f]">
        <div className="max-w-[1180px] mx-auto px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">Our Portfolio</h1>
          <p className="text-xl text-[#d9cdf5] max-w-2xl">
            A selection of complex enterprise systems delivered with a 100% success record across 20+ countries.
          </p>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-[#1b0f35] border border-[#33224f] hover:-translate-y-2 transition-transform flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#e5389a] block mb-2">{p.industry}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-[#d9cdf5] font-semibold mb-4">{p.location}</p>
                <p className="text-sm text-[#b3a8cf] leading-relaxed mb-6">{p.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#33224f]">
                {p.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-[#120826] border border-[#33224f] text-[11px] font-semibold text-[#b3a8cf]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}