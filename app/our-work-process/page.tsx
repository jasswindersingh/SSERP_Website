'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OurWorkProcessPage() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      stepNum: '01',
      phase: 'INITIATE PROJECT',
      title: 'Project Initiation & Goal Alignment',
      subtitle: 'Establish, plan and prepare project',
      desc: 'We establish the business case for the project and align the implementation directly with your organizational goals. We evaluate budgets, define project timelines using Agile methodology, and assign dedicated techno-functional core resources.',
      deliverables: [
        'Business case establishment & executive alignment',
        'Budget evaluation & Agile timeline mapping',
        'Core resource allocation & governance setup',
      ],
    },
    {
      stepNum: '02',
      phase: 'CONFIRM PROTOTYPE',
      title: 'Operational Rules & Prototype Confirmation',
      subtitle: 'Document operational rules, build prototype & analyze legacy data',
      desc: 'We define clear operational business rules and construct working prototype models. Stakeholders get complete clarity on software execution, removing abstractions through progressive elaboration. We gather feedback, refine solution scope, specify development add-ons, define data usage, and outline legacy migration strategies.',
      deliverables: [
        'Operational business rules documentation',
        'Working prototype build & stakeholder demo',
        'Refined scope confirmation & development spec',
        'Legacy data analysis & migration approach definition',
      ],
    },
    {
      stepNum: '03',
      phase: 'ESTABLISH SOLUTION',
      title: 'Solution Building, Testing & Readiness',
      subtitle: 'Configurations, migration setup, solution acceptance & training plan',
      desc: 'Our engineers build custom configurations, reports, interfaces, and modifications. We establish data parameters, set up and test migration jobs, verify application logic, run Solution Acceptance Tests (SAT), and prepare end-user training alongside governance frameworks.',
      deliverables: [
        'Configurations, reports, interfaces & modifications',
        'Data migration job setup & integration testing',
        'Rigorous Solution Acceptance Testing (SAT)',
        'Change management & training plan preparation',
      ],
    },
    {
      stepNum: '04',
      phase: 'IMPLEMENT SOLUTION',
      title: 'Cutover Execution & User Onboarding',
      subtitle: 'Test cutover, operational readiness & end-user training',
      desc: 'We execute test cutovers to ensure zero business interruption, run Operational Readiness Tests (ORT), and deliver intensive end-user training across operational teams to guarantee rapid adoption.',
      deliverables: [
        'Dry-run test cutover execution',
        'Operational Readiness Testing (ORT)',
        'Comprehensive end-user training & change management',
      ],
    },
    {
      stepNum: '05',
      phase: 'GO LIVE & CLOSE PROJECT',
      title: 'Live Production & 24/7 Operational Support',
      subtitle: 'Cutover to live running and SLA operational support',
      desc: 'Seamless transition into production with immediate cutover to live running operations. Our accredited support system strictly adheres to defined SLAs and resolution timelines for ongoing operational peace of mind.',
      deliverables: [
        'Production environment live cutover',
        'SLA-backed 24/7 post-implementation support',
        'Project closure & continuous optimization audit',
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#0b0418] text-white min-h-screen relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6b2fe0]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Hero Banner Section */}
      <section className="relative py-16 bg-[#1b0f35]/60 border-b border-[#33224f] backdrop-blur-md">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
              Agile & Proven Methodology
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Our Work Process
            </h1>
            <p className="text-lg text-[#d9cdf5] leading-relaxed mb-8">
              Our comprehensive, time-tested, and well-researched methodology helps you achieve robust, clear, and complete ERP solution implementation across your entire organization with zero downtime.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all shadow-lg shadow-emerald-500/30 text-sm"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="px-8 py-3.5 rounded-full border border-white/40 text-white font-bold hover:bg-white/10 transition-colors text-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[320px] rounded-3xl overflow-hidden border border-[#33224f] shadow-2xl group">
            <Image
              src="/slide4.png"
              alt="SingleStream Work Process Planning Desk"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0418]/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Implementation Blueprint Graphic Section */}
      <section className="py-20 bg-[#120826] border-b border-[#33224f]">
        <div className="max-w-[1180px] mx-auto px-6 text-center">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
            Implementation Blueprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            End-to-End Implementation Architecture
          </h2>
          <p className="text-[#b3a8cf] text-base max-w-2xl mx-auto mb-12">
            A visual overview of how we navigate from initial project setup and prototype confirmation through data migration, solution establishment, and live operational support.
          </p>

          <div className="relative w-full h-[320px] sm:h-[450px] rounded-3xl overflow-hidden border border-[#33224f] bg-[#0b0418] shadow-2xl p-4">
            <Image
              src="/work1.png"
              alt="SingleStream ERP Implementation Methodology Diagram"
              fill
              sizes="(max-width: 1200px) 100vw, 1180px"
              className="object-contain p-2"
            />
          </div>
        </div>
      </section>

      {/* Interactive 5-Step Process Timeline */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Step-by-Step Execution Journey
            </h2>
            <p className="text-[#b3a8cf] text-lg max-w-2xl mx-auto">
              Click on any phase below to inspect specific milestones, deliverables, and quality control checks.
            </p>
          </div>

          {/* Navigation Bar for Steps */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {processSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`px-5 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 border ${
                  activeStep === idx
                    ? 'bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/20 scale-105'
                    : 'bg-[#1b0f35] border-[#33224f] text-[#b3a8cf] hover:border-emerald-500/50 hover:text-white'
                }`}
              >
                <span className="opacity-75">{step.stepNum}</span>
                <span>{step.phase}</span>
              </button>
            ))}
          </div>

          {/* Active Step Content Display */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#1b0f35]/90 border border-[#33224f] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center backdrop-blur-md">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6b2fe0] to-emerald-500 flex items-center justify-center font-extrabold text-white text-lg shadow-md">
                  {processSteps[activeStep].stepNum}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase text-emerald-400 tracking-widest block">
                    {processSteps[activeStep].phase}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {processSteps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#b3a8cf] leading-relaxed">
                {processSteps[activeStep].desc}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase text-emerald-400 tracking-wider mb-3">
                  Key Milestones & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {processSteps[activeStep].deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-[#d9cdf5] bg-[#0b0418]/60 p-3 rounded-xl border border-[#33224f]">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Card Summary */}
            <div className="lg:col-span-4 p-8 rounded-2xl bg-[#0b0418]/80 border border-[#33224f] text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#6b2fe0]/20 border border-[#6b2fe0]/40 text-emerald-400 flex items-center justify-center font-bold text-xl mx-auto">
                Step {activeStep + 1}
              </div>
              <h4 className="text-lg font-bold text-white">
                {processSteps[activeStep].subtitle}
              </h4>
              <p className="text-xs text-[#b3a8cf]">
                Strict adherence to SLA timelines and transparent progress monitoring at every phase.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-all shadow-md"
              >
                Discuss Implementation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-gradient-to-r from-[#1b0f35] via-[#241348] to-[#1b0f35] border-t border-[#33224f]">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-2">
              Ready to Streamline Your ERP Implementation?
            </h2>
            <p className="text-[#b3a8cf] text-sm max-w-xl">
              Partner with SingleStream ERP for a 100% successful rollout backed by proven Agile methodologies and 24/7 post-deployment support.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-all shadow-lg shadow-emerald-500/30 text-sm whitespace-nowrap"
          >
            Get Free Evaluation & Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}