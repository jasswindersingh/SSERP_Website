import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#120826] text-[#f1ecfb] py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#e5389a] mb-4">Get in Touch</h1>
          <p className="text-[#d9cdf5] text-lg max-w-2xl mx-auto">
            We’d love to hear from you. Reach out to us directly via email or phone for enterprise ERP consultations, support, and inquiries.
          </p>
        </div>

        {/* Contact Information Card */}
        <div className="bg-[#1b0f35] border border-[#33224f] rounded-2xl p-8 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Direct Email */}
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-[#e5389a]/10 rounded-xl text-[#e5389a]">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Email Us</h3>
              <p className="text-sm text-[#d9cdf5] mb-2">For business proposals & queries:</p>
              <a 
                href="mailto:info@singlestreamerp.com" 
                className="text-[#10b981] font-medium hover:underline text-lg select-all"
              >
                info@singlestreamerp.com
              </a>
            </div>
          </div>

          {/* Direct Phone */}
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-[#e5389a]/10 rounded-xl text-[#e5389a]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Call Us</h3>
              <p className="text-sm text-[#d9cdf5] mb-2">Speak directly with our team:</p>
              <a 
                href="tel:+91XXXXXXXXXX" 
                className="text-[#10b981] font-medium hover:underline text-lg select-all"
              >
                +91 XXXXX XXXXX
              </a>
            </div>
          </div>

          {/* Office Location */}
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-[#e5389a]/10 rounded-xl text-[#e5389a]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Our Office</h3>
              <p className="text-sm text-[#d9cdf5]">
                Single Stream ERP Pvt. Ltd.<br />
                [Insert Office Address Here]
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-[#e5389a]/10 rounded-xl text-[#e5389a]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Business Hours</h3>
              <p className="text-sm text-[#d9cdf5]">
                Monday – Saturday<br />
                9:00 AM – 6:00 PM IST
              </p>
            </div>
          </div>

        </div>

        {/* Quick Note Banner */}
        <div className="mt-8 text-center text-sm text-[#d9cdf5]/70">
          <p>You can easily copy the email address or phone number above to reach out via your preferred client.</p>
        </div>

      </div>
    </div>
  );
}