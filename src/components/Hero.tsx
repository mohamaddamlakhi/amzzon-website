import { ArrowRight, ShoppingBag, TrendingUp, Percent } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-orange-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-green-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl" />

            <div className="relative">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-6">
                تسوق بذكاء - وفّر أكثر
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                اكتشف
                <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent"> أفضل العروض </span>
                <br />
                واحصل على عمولة
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                نوفر لك أفضل المنتجات من أشهر المتاجر العالمية مع روابط التسويق بالعمولة.
                تسوّق بذكاء واحصل على أفضل الصفقات!
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://amzn.to/4eQcyXZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-orange-500 text-white font-medium rounded-full hover:shadow-xl hover:shadow-green-500/30 transition-all flex items-center group"
                >
                  تسوّق الآن
                  <ArrowRight className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                </a>

                <button className="px-8 py-4 bg-white text-gray-700 font-medium rounded-full border-2 border-gray-200 hover:border-green-300 transition-all flex items-center group">
                  <TrendingUp className="mr-2 w-5 h-5" />
                  عرض المنتجات
                </button>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div>
                  <span className="block text-3xl font-bold text-gray-900">+500</span>
                  <span className="text-gray-500 text-sm">منتج مختار</span>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <span className="block text-3xl font-bold text-gray-900">+1000</span>
                  <span className="text-gray-500 text-sm">مشتري سعيد</span>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div>
                  <span className="block text-3xl font-bold text-gray-900">5%</span>
                  <span className="text-gray-500 text-sm">خصم حصري</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-orange-500 rounded-3xl transform rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-orange-500 rounded-3xl transform -rotate-3 opacity-40" />
              <div className="relative bg-gradient-to-br from-green-600 to-orange-500 rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mb-4">
                      <Percent className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium">خصومات حصرية</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mb-4">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium">منتجات مختارة</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 col-span-2">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/30 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="block font-semibold">عمولة على كل شراء</span>
                        <span className="text-sm text-white/80">اربح مع كل عملية شراء</span>
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
