'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About us' },
  { href: '/services', label: 'Services' },
  { href: '/our-work-process', label: 'Work Process' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/our-team', label: 'Team' },
  { href: '/our-portfolio', label: 'Portfolio' },
];

export default function SiteNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#120826]/95 backdrop-blur-md border-b border-[#33224f]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-[72px] sm:h-[88px] flex items-center justify-between gap-3">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-2 sm:gap-3 shrink-0 group"
        >
          <div className="relative w-11 h-11 sm:w-14 sm:h-14 bg-white rounded-full overflow-hidden shadow-md border border-white/20 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/logo.jpg"
              alt="Single Stream ERP Logo"
              width={179}
              height={192}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight whitespace-nowrap">
            SingleStream <span className="text-[#e5389a]">ERP</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden xl:flex items-center gap-5 text-xs font-semibold text-[#f1ecfb] whitespace-nowrap">
          {navigationLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#e5389a] hover:underline underline-offset-8 transition-colors">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="px-5 py-2.5 rounded-full bg-[#e5389a] text-white font-bold text-xs hover:shadow-lg shadow-[#e5389a]/30 transition-all hover:scale-105">
            Contact us
          </Link>
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="xl:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#33224f] text-white hover:bg-[#1b0f35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5389a]"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-primary-navigation"
          aria-label="Mobile primary navigation"
          className="xl:hidden max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-[#33224f] bg-[#120826] px-4 pb-4 pt-2 shadow-xl"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col gap-1 sm:px-2">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold text-[#f1ecfb] hover:bg-[#1b0f35] hover:text-[#e5389a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5389a]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 flex min-h-11 items-center justify-center rounded-full bg-[#e5389a] px-5 text-sm font-bold text-white hover:bg-[#c4287e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Contact us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}