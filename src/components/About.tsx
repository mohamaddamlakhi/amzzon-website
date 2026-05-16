import { Target, TrendingUp, Shield, Gift } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'منتج مختار' },
    { number: '10K+', label: 'مشتري سعيد' },
    { number: '5%', label: 'عمولة مميزة' },
    { number: '100%', label: 'مصداقية' },
  ];

  const values = [
    {
      icon: Target,
      title: 'أفضل اختيار',
      description: 'نختار لك أفضل المنتجات بعناية لنضمن لك جودة عالية وأسعار منافسة.',
    },
    {
      icon: TrendingUp,
      title: 'صفقات حصرية',
      description: 'نوفر لك أحدث العروض والصفقات الحصرية من أشهر المتاجر العالمية.',
    },
    {
      icon: Shield,
      title: 'تسوق آمن',
      description: 'جميع المنتجات من متاجر موثوقة مع ضمان الجودة والاسترجاع.',
    },
    {
      icon: Gift,
      title: 'عمولة مميزة',
      description: 'اربح عمولة على كل عملية شراء من خلال روابط التسويق الخاصة بنا.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            من نحن
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            لماذا <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">Amzzon</span>؟
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نحن منصتك الموثوقة للتسوق الذكي. نوفر لك أفضل المنتجات مع عروض حصرية
            وروابط تسويق بالعمولة تتيح لك الربح من كل عملية شراء.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-green-600 to-orange-500 rounded-3xl" />
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <span className="block text-4xl font-bold bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
                      {stat.number}
                    </span>
                    <span className="text-sm text-gray-300">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <p className="text-lg font-medium mb-2">مهمتنا</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  توفير أفضل تجربة تسوق مع توفير المال والحصول على عمولة من كل عملية شراء.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">كيف نعمل؟</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                نختار بعناية أفضل المنتجات من أمازون ومتاجر عالمية أخرى، ونقدمها لك
                مع تقييمات حقيقية وأسعار تنافسية.
              </p>
              <p>
                من خلال روابط التسويق بالعمولة، نحصل على نسبة صغيرة من كل عملية شراء
                تقوم بها من خلال موقعنا، مما يساعدك على الادخار والحصول على منتجات مميزة.
              </p>
              <p>
                نسعى دائماً لتوفير أفضل العروض والصفقات الحصرية لمتابعيها، مع ضمان جودة
                المنتجات وخدمة عملاء متميزة.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>منتجات مختارة</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>عروض حصرية</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>ربح مع كل شراء</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;