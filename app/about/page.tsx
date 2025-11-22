'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAbout } from '@/lib/storage'
import type { AboutContent } from '@/types/content'

export default function AboutPage() {
  const [about, setAbout] = useState<AboutContent | null>(null)

  useEffect(() => {
    setAbout(getAbout())
  }, [])

  if (!about) {
    return null
  }

  const workExperience = [
    {
      title: 'Independent Consultant & Development Manager',
      period: 'Since 2009 (15+ Years)',
      description: 'Led 30+ successful e-marketing & sales consulting projects. Designed comprehensive digital strategies, provided strategic market insights, built digital ERP implementations, and established brands for diverse clients in Saudi Arabia.'
    },
    {
      title: 'Modern Ideas Company | Business Development',
      period: 'May 2024 – Jul 2025',
      description: 'Spearheaded complete digitalization, Odoo ERP implementation, and operational efficiency improvements across all departments. Built 3x sales and marketing revenue.'
    },
    {
      title: 'Jazeera Paint Factory | Products Manager',
      period: 'Dec 2019 – Jan 2024',
      description: 'Managed end-to-end product lifecycle, from concept and requirements gathering to market launch, ensuring revenue and customer satisfaction.'
    },
    {
      title: 'Hilwa Water Company | Marketing Manager',
      period: 'May 2015 – Dec 2019',
      description: 'Oversaw marketing events, campaigns, and brand enhancement. Built strong relationships and managed multiple initiatives.'
    },
    {
      title: 'Domo Water Factory | Marketing Manager',
      period: 'May 2012 – May 2015',
      description: 'Launched high-impact campaigns and sales events, monitoring KPIs and conducting deep market analysis to drive strategic growth.'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-primary-100">
              Learn more about my professional journey and expertise
            </p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-16 h-16 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Wabel Adnan Alzaeem</h2>
                <p className="text-lg text-gray-600">Marketing Manager & Business Development Expert</p>
                <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Age: 40 Years
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    Nationality: Syria (Special Resident)
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Status: Married
                  </span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {about.bio}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-primary-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <h3 className="text-xl font-bold text-gray-900">Experience</h3>
                    </div>
                    <p className="text-gray-700">{about.experience}</p>
                  </div>

                  <div className="bg-gold-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-gold-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      <h3 className="text-xl font-bold text-gray-900">Education</h3>
                    </div>
                    <p className="text-gray-700">{about.education}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Areas of Expertise</h3>
                  <ul className="space-y-3">
                    {about.specializations.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 text-lg">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Work Experience Timeline */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h3>
                  <div className="space-y-6">
                    {workExperience.map((job, index) => (
                      <div key={index} className="border-l-4 border-primary-500 pl-6 py-2">
                        <h4 className="text-xl font-bold text-gray-900">{job.title}</h4>
                        <p className="text-primary-600 font-semibold mb-2">{job.period}</p>
                        <p className="text-gray-700 leading-relaxed">{job.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Skills */}
                <div className="mt-12 bg-primary-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Google Adwords',
                      'Adobe Suite (PS)',
                      'Google Analytics',
                      'Odoo',
                      'Photoshop Omniture',
                      'Facebook Ads',
                      'Screaming Frog SEO',
                      'Twitter Analytics',
                      'SmartFocus',
                      'MailChimp',
                      'Apple',
                      'Analytics',
                      'Wunderlist',
                      'Trello',
                      'Slack',
                      'Instagram Insights',
                      'Basic FileZilla',
                      'HTML'
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700 border border-primary-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Collaborate on Your Next Project
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Schedule a consultation today and discover how my expertise can drive your business forward
            </p>
            <a
              href="/contact"
              className="inline-block bg-gold-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition shadow-lg"
            >
              Contact Me Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
