'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true); // Default muted for smooth browser autoplay compatibility
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const solutions = [
    {
      num: 1,
      title: 'Supply Chain Management',
      desc: 'End-to-end configuration including Inventory Management, Purchase Management (Centralized & Change Orders), Subcontracting, MRP, Shipment Handling, Sales Order Processing, and Freight Planning.',
    },
    {
      num: 2,
      title: 'Financials & Taxation',
      desc: 'Subledger mapping for simplified reconciliation. Master setup handling local country taxations (GST, VAT, Sales Tax, WHT) across global territories.',
    },
    {
      num: 3,
      title: 'Project Management',
      desc: 'Complete project lifecycle management from initiation to closing: Budgeting, Forecasting, Cost Controlling, Project Invoicing, Supplier Invoice Forwarding, and Sales Contract Management.',
    },
    {
      num: 4,
      title: 'App Customizations & Plugins',
      desc: 'Tailored add-ons and plugins connecting 3rd party applications, tweaking existing modules, and automating intrinsic business processes.',
    },
    {
      num: 5,
      title: 'Data Migrations',
      desc: 'Seamless data migration from legacy systems or scattered ERP applications into centralized IFS ERP environments.',
    },
    {
      num: 6,
      title: 'ERP Upgrades & BI',
      desc: 'Careful evaluation of upgrade implications, feature impacts, and change repercussions paired with Business Intelligence reporting.',
    },
  ];

  const testimonials = [
    {
      quote:
        "We struggled to locate and fix errors in mixed payment. Mr. Rohtash Singh and his team did a fabulous job in identifying and fixing these complex errors for us. Highly recommended for their expertise.",
      author: "Peter Nicolai Brostrup",
      company: "Maersk Drilling – Denmark",
    },
    {
      quote:
        "SingleStreamERP are the best implementation partners we've ever worked with. The team is the perfect blend of knowledge, experience, and high professionalism.",
      author: "Ms. Christina / Melanie Hutson",
      company: "APM Terminals – Costa Rica",
    },
    {
      quote:
        "Mr. Rohtash Singh is highly professional with deep accounting knowledge. We managed to get the best out of the IFS ERP implementation in HAL Lucknow.",
      author: "A.K. Srivastava",
      company: "Finance Director – HAL Lucknow",
    },
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay prevented or video missing:", err);
      });
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-end bg-[#0b0418] text-white overflow-hidden pt-20">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85 mix-blend-screen z-0"
        >
          <source src="/Background6.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-l from-[#0b0418]/80 via-[#0b0418]/40 to-transparent z-0 pointer-events-none" />

        {/* Audio Toggle Button */}
        <div className="absolute bottom-8 left-8 z-20">
          <button
            onClick={toggleAudio}
            className="px-4 py-2 rounded-full bg-[#1b0f35]/80 border border-[#33224f] text-white text-xs font-bold hover:bg-[#6b2fe0] transition-all backdrop-blur-md flex items-center gap-2 shadow-lg cursor-pointer"
          >
            {isMuted ? '🔇 Unmute Video' : '🔊 Mute Video'}
          </button>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 pr-8 lg:pr-16 py-24 w-full flex flex-col items-end text-right">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            Global IFS & Enterprise ERP Specialists
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight mb-6 max-w-[17ch] drop-shadow-lg">
            Think of IFS, Think of SingleStream ERP.
          </h1>
          <p className="max-w-[54ch] text-lg sm:text-xl text-[#d9cdf5] mb-10 leading-relaxed drop-shadow">
            Unmatched expertise in end-to-end IFS, Oracle, EBS, and NetSuite implementations across 20+ countries and 5 continents.
          </p>
          <div className="flex gap-4 flex-wrap justify-end">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold hover:scale-105 transition-all shadow-lg shadow-emerald-500/30"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-full border-2 border-white/80 text-white font-bold hover:bg-white/10 transition-colors backdrop-blur-xs"
            >
              Explore ERP Services
            </Link>
          </div>
        </div>
      </section>

      {/* Verified Metrics Section */}
      <section className="bg-[#1b0f35] py-16 border-y border-[#33224f]">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <strong className="block text-4xl font-extrabold text-[#6b2fe0]">100%</strong>
            <span className="text-sm text-[#b3a8cf]">Success Record</span>
          </div>
          <div>
            <strong className="block text-4xl font-extrabold text-[#6b2fe0]">20+</strong>
            <span className="text-sm text-[#b3a8cf]">Countries Served</span>
          </div>
          <div>
            <strong className="block text-4xl font-extrabold text-[#6b2fe0]">5</strong>
            <span className="text-sm text-[#b3a8cf]">Continents Covered</span>
          </div>
          <div>
            <strong className="block text-4xl font-extrabold text-[#6b2fe0]">24/7</strong>
            <span className="text-sm text-[#b3a8cf]">Dedicated Support</span>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-[#0b0418] relative">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              End-to-End Enterprise Solutions
            </h2>
            <p className="text-[#b3a8cf] text-lg max-w-2xl mx-auto">
              Customized modules tailored directly to your complex business scenarios and supply chain workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#1b0f35] border border-[#33224f] hover:border-emerald-500/50 hover:-translate-y-2 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6b2fe0] group-hover:bg-emerald-500 mb-6 flex items-center justify-center font-bold text-white text-lg transition-colors">
                  {item.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-[#b3a8cf] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-[#1b0f35] border-t border-[#33224f]">
        <div className="max-w-[1180px] mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4">
            Industries We Transform
          </h2>
          <p className="text-center text-[#b3a8cf] mb-12 max-w-xl mx-auto">
            Deep domain expertise across high-complexity global sectors.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Oil and Gas',
              'Aerospace and Defense',
              'Manufacturing & Distribution',
              'Utility and Automobiles',
              'Telecommunications',
              'Ports and Terminals',
            ].map((ind, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0b0418] border border-[#33224f] text-center font-bold text-white hover:border-emerald-500 transition-colors"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0b0418] border-t border-[#33224f]">
        <div className="max-w-[1180px] mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4">
            Trusted by Global Industry Leaders
          </h2>
          <p className="text-center text-[#b3a8cf] mb-12 max-w-xl mx-auto">
            See how our consultants solve complex ERP challenges across continents.
          </p>

          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="max-w-3xl mx-auto p-10 rounded-3xl bg-[#1b0f35] border border-[#33224f] text-center relative shadow-xl cursor-pointer transition-all hover:border-[#6b2fe0]"
          >
            <p className="text-lg sm:text-xl text-[#d9cdf5] italic leading-relaxed mb-8 transition-opacity duration-300">
              "{testimonials[currentTestimonial].quote}"
            </p>
            <div>
              <h4 className="text-lg font-bold text-white">
                {testimonials[currentTestimonial].author}
              </h4>
              <p className="text-sm font-semibold text-emerald-400">
                {testimonials[currentTestimonial].company}
              </p>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index
                      ? 'bg-emerald-400 w-8'
                      : 'bg-[#33224f] hover:bg-[#6b2fe0]'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}