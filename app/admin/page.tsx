'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { isAuthenticated, logout, getCurrentUser } from '@/lib/auth'
import { getServices, deleteService, getAbout, getContact } from '@/lib/storage'
import type { Service, AboutContent, ContactInfo } from '@/types/content'

export default function AdminPage() {
  const router = useRouter()
  const [services, setServices] = useState<Service[]>([])
  const [about, setAbout] = useState<AboutContent | null>(null)
  const [contact, setContact] = useState<ContactInfo | null>(null)
  const [username, setUsername] = useState('')
  const [activeTab, setActiveTab] = useState<'services' | 'about' | 'contact'>('services')

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login')
      return
    }

    const user = getCurrentUser()
    if (user) {
      setUsername(user.username)
    }

    // Load data
    setServices(getServices())
    setAbout(getAbout())
    setContact(getContact())
  }, [router])

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  const handleDeleteService = (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذه الخدمة؟')) {
      deleteService(id)
      setServices(getServices())
    }
  }

  if (!isAuthenticated()) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">لوحة التحكم</h1>
              <p className="text-sm text-gray-600">مرحباً، {username}</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/"
                className="px-4 py-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                عرض الموقع
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                تسجيل الخروج
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('services')}
              className={`flex-1 px-6 py-4 font-semibold transition ${
                activeTab === 'services'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              إدارة الخدمات
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`flex-1 px-6 py-4 font-semibold transition ${
                activeTab === 'about'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              معلومات عني
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`flex-1 px-6 py-4 font-semibold transition ${
                activeTab === 'contact'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              معلومات الاتصال
            </button>
          </div>
        </div>

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">الخدمات</h2>
              <div className="text-sm text-gray-600">
                {services.length} خدمة متاحة
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div key={service.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-3xl">{service.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mr-2">
                      <button
                        onClick={() => handleDeleteService(service.id)}
                        className="text-red-600 hover:text-red-700 font-semibold text-sm"
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About Tab */}
        {activeTab === 'about' && about && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">معلومات عني</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">السيرة الذاتية</h3>
                <p className="text-gray-700 leading-relaxed">{about.bio}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">الخبرة</h3>
                <p className="text-gray-700">{about.experience}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">التعليم</h3>
                <p className="text-gray-700">{about.education}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">التخصصات</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {about.specializations.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && contact && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">معلومات الاتصال</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">رقم الهاتف</p>
                  <p className="text-gray-700">{contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">البريد الإلكتروني</p>
                  <p className="text-gray-700">{contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">العنوان</p>
                  <p className="text-gray-700">{contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">ساعات العمل</p>
                  <p className="text-gray-700">{contact.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
