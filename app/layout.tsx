import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';
import SiteNavigation from './site-navigation';

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
        <SiteNavigation />

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