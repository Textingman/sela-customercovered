import Link from 'next/link';

export default function AboutPage() {
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
                <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
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
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            About Customer Covered
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help businesses grow by driving high-intent inbound phone calls through AI-powered outreach — so your team spends time closing, not chasing.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-4">
            Customer Covered was built to solve a simple but costly problem: businesses spend too much time and money chasing leads that never convert. We flip the script — using AI-powered SMS outreach to turn cold prospects into warm, inbound phone calls.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            When a prospect calls you, the dynamic changes entirely. They're interested, they're ready, and your team can focus on what they do best: closing deals.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
          <p className="text-lg text-gray-600 mb-4">
            Customer Covered provides AI-driven call generation services that help businesses fill their pipelines with live, inbound phone calls. Our platform includes:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-8 space-y-2">
            <li>AI-powered SMS outreach campaigns that drive inbound calls</li>
            <li>Lead pre-qualification through automated messaging flows</li>
            <li>Real-time call tracking and performance analytics</li>
            <li>Campaign optimization to maximize call volume and quality</li>
            <li>Compliance-first messaging built for carrier requirements</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            Phone calls convert at a dramatically higher rate than any other lead type. We've built a system that consistently delivers warm, ready-to-buy callers to your business — so you can stop wasting time on unresponsive leads and start having real conversations that close.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-8">Our Address</h2>
          <p className="text-lg text-gray-600">
            1391 Speer Blvd, Ste 850<br />
            Denver, Colorado 80204<br />United States of America
          </p>
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
