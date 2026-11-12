import React from 'react';

export default function OurTeamPage() {
  const teamMembers = [
    {
      name: 'Mr. Rohtash Singh',
      role: 'Founder & Principal Consultant',
      desc: 'Extensive expertise in end-to-end IFS ERP implementations, complex accounting structures, and financial ledgers across 20+ countries.',
      initials: 'RS',
    },
  ];

  const testimonials = [
    {
      quote: "We struggled to locate and fix errors in mixed payment. Mr. Rohtash Singh and his team did a fabulous job in identifying and fixing these complex errors for us.",
      client: "Peter Nicolai Brostrup",
      company: "Maersk Drilling – Denmark",
    },
    {
      quote: "SingleStreamERP are the best implementation partners we've ever worked with. The team is the perfect blend of knowledge, experience, and high professionalism.",
      client: "Melanie Hutson / Ms. Christina",
      company: "APM Terminals – Costa Rica",
    },
    {
      quote: "Mr. Rohtash Singh is highly professional with deep accounting knowledge. We managed to get the best out of the IFS ERP implementation in HAL Lucknow.",
      client: "A.K. Srivastava",
      company: "Finance Director – HAL Lucknow",
    },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Page Header */}
      <div className="bg-[#0b0418] py-20 border-b border-[#33224f]">
        <div className="max-w-[1180px] mx-auto px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">Our Team</h1>
          <p className="text-xl text-[#d9cdf5] max-w-2xl">
            The people who plan, build, and support your system with unmatched domain expertise.
          </p>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 py-16">
        {/* Team Grid */}
        <h2 className="text-3xl font-extrabold text-white mb-8">Leadership & Expertise</h2>
        <div className="grid grid-cols-1 max-w-xs gap-6 mb-20">
          {teamMembers.map((member, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#1b0f35] border border-[#33224f] text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#6b2fe0] to-[#e5389a] mx-auto mb-6 flex items-center justify-center font-extrabold text-2xl text-white shadow-lg">
                {member.initials}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-xs font-semibold text-[#e5389a] mb-4">{member.role}</p>
              <p className="text-sm text-[#b3a8cf] leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>

        {/* Client Endorsements */}
        <h2 className="text-3xl font-extrabold text-white mb-8">Client Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-[#1b0f35] border border-[#33224f] flex flex-col justify-between">
              <p className="text-sm text-[#b3a8cf] italic leading-relaxed mb-6">&quot;{t.quote}&quot;</p>
              <div>
                <h4 className="text-base font-bold text-white">{t.client}</h4>
                <p className="text-xs text-[#e5389a] font-semibold">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}