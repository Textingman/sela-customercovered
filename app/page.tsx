import Link from 'next/link';
import Image from 'next/image';
import { Phone, PhoneCall, PhoneIncoming } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-xl font-bold text-gray-900">Customer Covered</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="bg-gray-900 text-white hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
            Turn More Leads Into
            <span className="block text-gray-900">Live Phone Calls</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Customer Covered drives high-intent inbound calls to your business using AI-powered outreach. Stop chasing leads — let qualified prospects call you.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
            >
              Start Getting Calls
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-gray-900"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose Customer Covered?</h2>
          <p className="mt-4 text-xl text-gray-600">
            We specialize in one thing: getting your phone to ring with ready-to-buy customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-900 transition-all">
            <div className="flex justify-center mb-4">
              <PhoneIncoming className="w-12 h-12 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Inbound Call Generation
            </h3>
            <p className="text-gray-600 text-center">
              Our AI-powered SMS and outreach campaigns prompt high-intent prospects to call you directly — no cold calling required on your end.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-900 transition-all">
            <div className="flex justify-center mb-4">
              <PhoneCall className="w-12 h-12 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Pre-Qualified Callers
            </h3>
            <p className="text-gray-600 text-center">
              Every call that comes in has already been warmed up and pre-qualified through our automated messaging flow, so your team closes more deals.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-900 transition-all">
            <div className="flex justify-center mb-4">
              <Phone className="w-12 h-12 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
              Real-Time Call Tracking
            </h3>
            <p className="text-gray-600 text-center">
              Track every call, measure campaign performance, and optimize your outreach to maximize the volume and quality of inbound calls.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600">
              A simple, proven system that fills your phone with qualified callers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Steps List */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. We Reach Your Prospects</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our AI sends personalized SMS messages to your target audience, sparking interest and prompting them to take action — by calling your business directly.
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Prospects Call You</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Interested leads call your number directly. No forms, no waiting — just live, inbound phone conversations with people who want what you offer.
                </p>
              </div>

              {/* Step 3 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. You Close the Deal</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Your team handles warm, ready-to-convert callers. We track results and continuously optimize campaigns to keep the calls coming.
                </p>
              </div>
            </div>

            {/* Single Image */}
            <div className="rounded-lg overflow-hidden sticky top-8 flex items-start justify-center">
              <Image 
                src="/Covered.png" 
                alt="Customer Covered - Drive Phone Calls"
                width={350} 
                height={350}
                className="w-auto h-auto object-contain max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Fill Your Phone With Qualified Callers?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join businesses that trust Customer Covered to drive high-intent inbound calls and grow their revenue.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Getting Calls Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Customer Covered</h3>
              <p className="text-gray-400">
                AI-powered inbound call generation for businesses that want to grow.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                support@customercovered.com
              </p>
              <p className="text-gray-400 mt-4">
                1391 Speer Blvd, Ste 850<br />
                Denver, Colorado 80204<br />
                United States of America
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Customer Covered. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
