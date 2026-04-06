import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />

            <div className="relative">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
                مرحباً بك في MD85bs
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                نبني
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> حلولاً </span>
                <br />
                رقمية مبتكرة
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                نحن شركة رائدة في تقديم الحلول التقنية المتكاملة. نجمع بين الإبداع والابتكار
                لنقدم لك تجربة رقمية استثنائية تحقق أهدافك وتفوق توقعاتك.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center group"
                >
                  اكتشف خدماتنا
                  <ArrowRight className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                </button>

                <button className="px-8 py-4 bg-white text-gray-700 font-medium rounded-full border-2 border-gray-200 hover:border-blue-300 transition-all flex items-center group">
                  <Play className="mr-2 w-5 h-5" />
                  شاهد我们的工作
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div>
                  <span className="block text-3xl font-bold text-gray-900">+150</span>
                  <span className="text-gray-500 text-sm">مشروع منجز</span>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <span className="block text-3xl font-bold text-gray-900">+50</span>
                  <span className="text-gray-500 text-sm">عميل سعيد</span>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <span className="block text-3xl font-bold text-gray-900">5+</span>
                  <span className="text-gray-500 text-sm">سنوات خبرة</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl transform rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl transform -rotate-3 opacity-40" />
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">سرعة فائقة</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">أمان عالي</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 col-span-2">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/30 rounded-xl flex items-center justify-center">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block font-semibold">دعم متواصل</span>
                        <span className="text-sm text-white/80">24/7 على مدار الساعة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
