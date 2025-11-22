'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getServices } from '@/lib/storage'
import type { Service } from '@/types/content'

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    setServices(getServices())
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Services</h1>
            <p className="text-xl text-primary-100">
              Comprehensive marketing, digital transformation, and business development expertise
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary-500 hover:shadow-xl transition-all"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            {services.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No services available at the moment</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need Marketing or Business Development Support?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact me today to discuss how I can help drive your business growth
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
