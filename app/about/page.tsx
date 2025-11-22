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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">من أنا</h1>
            <p className="text-xl text-primary-100">
              تعرف على المحامي أحمد وخبراته المهنية
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
                <h2 className="text-3xl font-bold text-gray-900 mb-2">المحامي أحمد</h2>
                <p className="text-lg text-gray-600">محامي ومستشار قانوني</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {about.bio}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-primary-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-primary-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <h3 className="text-xl font-bold text-gray-900">الخبرة</h3>
                    </div>
                    <p className="text-gray-700">{about.experience}</p>
                  </div>

                  <div className="bg-gold-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-gold-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      <h3 className="text-xl font-bold text-gray-900">التعليم</h3>
                    </div>
                    <p className="text-gray-700">{about.education}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">مجالات التخصص</h3>
                  <ul className="space-y-3">
                    {about.specializations.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-primary-600 ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 text-lg">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              دعني أساعدك في قضيتك القانونية
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              احجز استشارة قانونية اليوم واحصل على المشورة المهنية التي تحتاجها
            </p>
            <a
              href="/contact"
              className="inline-block bg-gold-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition shadow-lg"
            >
              تواصل معي الآن
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
