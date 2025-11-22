import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Wabel Adnan Alzaeem
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-primary-100">
                Marketing Manager & More
              </p>
              <p className="text-lg md:text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
                14 years of experience in Digital Transformation Leadership, Strategic Marketing & Sales Growth, and Business Development
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-gold-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gold-600 transition shadow-lg"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/services"
                  className="bg-white text-primary-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
                >
                  My Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Work With Me?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Extensive Experience</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Over 14 years of proven success in marketing, sales, and digital transformation across diverse industries in Saudi Arabia
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Results-Driven</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Led 30+ successful e-marketing projects, implemented Odoo ERP, and significantly increased revenue and market share
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Team Leadership</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Built, trained, and led multiple high-performing sales and marketing teams to achieve ambitious targets
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              My Professional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Digital Transformation Leadership', icon: '🚀' },
                { title: 'Strategic Marketing & Sales Growth', icon: '📈' },
                { title: 'Team Leadership & Development', icon: '👥' },
                { title: 'Business Optimization', icon: '⚙️' },
                { title: 'Market Analysis & Innovation', icon: '💡' },
                { title: 'Budget & Project Management', icon: '📊' },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-primary-500 hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Core Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Creativity',
                'Organization',
                'Communication',
                'Social Media',
                'Teamwork',
                'SWOT Analysis',
                'Content Marketing',
                'Technology'
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
                >
                  <p className="text-lg font-semibold text-gray-900">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Let's discuss how my experience in digital transformation, marketing, and business development can help drive your success
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition shadow-lg"
            >
              Contact Me Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
