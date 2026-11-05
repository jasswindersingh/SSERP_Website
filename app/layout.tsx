import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Single Stream ERP – One system for the whole business',
  description: 'Single Stream ERP connects finance, supply chain, operations, and people in one system.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth">
      <body className="bg-[#120826] text-[#f1ecfb] font-sans antialiased min-h-screen flex flex-col justify-between">
        {/* Navigation Bar */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#120826]/95 backdrop-blur-md border-b border-[#33224f] transition-all">
          <div className="max-w-[1280px] mx-auto px-6 h-[88px] flex items-center justify-between gap-4">
            {/* Prominent Logo + Brand Title */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-14 h-14 bg-white rounded-xl p-1 shadow-md border border-white/20 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/logo.jpg"
                  alt="Single Stream ERP Logo"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight whitespace-nowrap">
                SingleStream <span className="text-[#e5389a]">ERP</span>
              </span>
            </Link>

            {/* Navigation links adjusted for single-line fit */}
            <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold whitespace-nowrap">
              <Link href="/" className="hover:text-[#e5389a] hover:underline underline-offset-8 transition-colors">
                Home
              </Link>
              <Link href="/about-us" className="hover:text-[#e5389a] hover:underline underline-offset-8 transition-colors">
                About us
              </Link>
              <Link href="/services" className="hover:text-[#e5389a] hover:underline underline-offset-8 transition-colors">
                Services
              </Link>
              <Link href="/our-work-process" className="hover:text-[#e5389a] hover:underline underline-offset-8 transition-colors">
                Work Process
              </Link>
              <Link href="/industries" className="hover:text-[#e5389a] hover:underline underline-offset-8 transition-colors">
                Industries
              </Link>
              <Link href="/case-studies" className="hover:text-[#e5389a] hover:underline underline-offset-8 transition-colors">
                Case Studies
              </Link>
              <Link href="/our-team" className="hover:text-[#e5389a] hover:underline underline-offset-8 transition-colors">
                Team
              </Link>
              <Link href="/our-portfolio" className="hover:text-[#e5389a] hover:underline underline-offset-8 transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="px-5 py-2.5 rounded-full bg-[#e5389a] text-white font-bold text-xs hover:shadow-lg shadow-[#e5389a]/30 transition-all hover:scale-105">
                Contact us
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="border-t border-[#33224f] py-12 text-[#b3a8cf] text-sm bg-[#0b0418]">
          <div className="max-w-[1180px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-white rounded-lg p-1 border border-white/20 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Single Stream ERP Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <Link href="/" className="text-lg font-bold text-white">
                  SingleStream ERP
                </Link>
                <p className="text-xs text-[#b3a8cf]">
                  One system for finance, supply chain, operations and people.
                </p>
              </div>
            </div>

            <div className="flex gap-6 flex-wrap justify-center text-xs font-semibold">
              <Link href="/" className="hover:text-[#e5389a] transition-colors">Home</Link>
              <Link href="/about-us" className="hover:text-[#e5389a] transition-colors">About us</Link>
              <Link href="/services" className="hover:text-[#e5389a] transition-colors">Services</Link>
              <Link href="/our-work-process" className="hover:text-[#e5389a] transition-colors">Work Process</Link>
              <Link href="/industries" className="hover:text-[#e5389a] transition-colors">Industries</Link>
              <Link href="/case-studies" className="hover:text-[#e5389a] transition-colors">Case Studies</Link>
              <Link href="/our-team" className="hover:text-[#e5389a] transition-colors">Team</Link>
              <Link href="/our-portfolio" className="hover:text-[#e5389a] transition-colors">Portfolio</Link>
              <Link href="/contact" className="hover:text-[#e5389a] transition-colors">Contact</Link>
            </div>

            <div className="text-xs text-[#b3a8cf] whitespace-nowrap">
              © 2026 Single Stream ERP Pvt. Ltd. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}