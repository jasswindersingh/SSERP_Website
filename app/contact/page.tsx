import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#120826] text-[#f1ecfb] pt-28 pb-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#e5389a] mb-4">Get in Touch</h1>
          <p className="text-[#d9cdf5] text-lg max-w-2xl mx-auto">
            We’d love to hear from you. Reach out to us directly via email or phone for enterprise ERP consultations, support, and inquiries.
          </p>
        </div>

        {/* Contact Information Card */}
        <div className="bg-[#1b0f35] border border-[#33224f] rounded-2xl p-5 sm:p-8 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Direct Email */}
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-[#e5389a]/10 rounded-xl text-[#e5389a]">
              <Mail className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-white mb-1">Email Us</h3>
              <p className="text-sm text-[#d9cdf5] mb-2">For business proposals & queries:</p>
              <a 
                href="mailto:info@singlestreamerp.com" 
                className="text-[#10b981] font-medium hover:underline text-base sm:text-lg select-all break-words"
              >
                info@singlestreamerp.com
              </a>
              <a 
                href="mailto:Rohtashsingh@singlestreamerp.com" 
                className="block text-[#10b981] font-medium hover:underline text-base sm:text-lg select-all break-words"
              >
                Rohtashsingh@singlestreamerp.com
              </a>
            </div>
          </div>

          {/* Direct Phone */}
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-[#e5389a]/10 rounded-xl text-[#e5389a]">
              <Phone className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-white mb-1">Call Us</h3>
              <p className="text-sm text-[#d9cdf5] mb-2">Speak directly with our team:</p>
              <a 
                href="tel:+918826036507" 
                className="text-[#10b981] font-medium hover:underline text-lg select-all"
              >
                +91 88260 36507
              </a>
            </div>
          </div>

          {/* Office Location */}
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-[#e5389a]/10 rounded-xl text-[#e5389a]">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-white mb-1">Our Offices</h3>
              <p className="text-sm text-[#d9cdf5]">
                <strong className="text-white">Registered Office:</strong><br />
                B601 Cosmos GoldenHeights, Crossing Republic, Ghaziabad 201016<br /><br />
                <strong className="text-white">Corporate Office:</strong><br />
                NH9 Near Brijghat, Gajraula, Amroha 244235
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-[#e5389a]/10 rounded-xl text-[#e5389a]">
              <Clock className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-white mb-1">Business Hours</h3>
              <p className="text-sm text-[#d9cdf5]">
                Monday – Saturday<br />
                9:00 AM – 6:00 PM IST
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}