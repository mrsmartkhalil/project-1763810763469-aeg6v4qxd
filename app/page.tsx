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
                المحامي أحمد
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-primary-100">
                استشارات قانونية متخصصة وتمثيل قانوني محترف
              </p>
              <p className="text-lg md:text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
                خبرة واسعة في القضايا المدنية والجنائية والتجارية. نلتزم بتقديم أفضل الخدمات القانونية لموكلينا
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-gold-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gold-600 transition shadow-lg"
                >
                  احجز استشارة
                </Link>
                <Link
                  href="/services"
                  className="bg-white text-primary-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
                >
                  خدماتنا
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              لماذا تختار المحامي أحمد؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">خبرة واسعة</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  أكثر من 15 عامًا من الخبرة في مختلف المجالات القانونية والتمثيل أمام المحاكم
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">استجابة سريعة</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  نلتزم بالرد السريع على استفسارات العملاء وتقديم الاستشارات في الوقت المناسب
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">احترافية عالية</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  نقدم خدمات قانونية احترافية مع الحفاظ على السرية التامة لمعلومات العملاء
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              خدماتنا القانونية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'القضايا المدنية', icon: '⚖️' },
                { title: 'القضايا الجنائية', icon: '🔨' },
                { title: 'القضايا التجارية', icon: '💼' },
                { title: 'قضايا الأسرة', icon: '👨‍👩‍👧‍👦' },
                { title: 'العقود والاتفاقيات', icon: '📝' },
                { title: 'الاستشارات القانونية', icon: '💡' },
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
                عرض جميع الخدمات
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              هل تحتاج إلى استشارة قانونية؟
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              تواصل معنا اليوم للحصول على استشارة مجانية وتقييم حالتك القانونية
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition shadow-lg"
            >
              تواصل معنا الآن
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
