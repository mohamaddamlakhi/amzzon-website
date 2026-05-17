import { Monitor, Palette, Code, BarChart, Camera, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'تصميم المواقع',
      description: 'نصمم مواقع ويب احترافية وجذابة تعكس هوية علامتك التجارية وتوفر تجربة مستخدم استثنائية.',
      features: ['تصميم متجاوب', 'سريع ومُحسّن', 'SEO مدمج', 'لوحة تحكم سهلة'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Palette,
      title: 'تصميم الهوية',
      description: 'نبتكر هويات بصرية فريدة ومميزة تساعدك على التميز في سوق المنافسة.',
      features: ['شعار احترافي', 'دليل الألوان', 'الخطوط الرسمية', 'تطبيقات الهوية'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Code,
      title: 'تطوير التطبيقات',
      description: 'نبني تطبيقات ويب و موبايل متقدمة باستخدام أحدث التقنيات وأفضل الممارسات.',
      features: ['React & Next.js', 'تطبيقات iOS', 'تطبيقات Android', 'APIs متقدمة'],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: BarChart,
      title: 'التسويق الرقمي',
      description: 'نساعدك على الوصول لجمهورك المستهدف وزيادة المبيعات من خلال استراتيجيات تسويق فعالة.',
      features: ['إدارة السوشيال ميديا', 'إعلانات مدفوعة', 'تحسين محركات البحث', 'تحليل البيانات'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Camera,
      title: 'التصوير الفوتوغرافي',
      description: 'نقدم خدمات تصوير احترافية للمنتجات والفعاليات والصور الإعلانية بجودة عالية.',
      features: ['تصوير منتجات', 'تصوير فعاليات', 'تعديل الصور', 'صور إعلانية'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Shield,
      title: 'الأمن السيبراني',
      description: 'نحمي بياناتك وأنظمتك من التهديدات الإلكترونية بأحدث تقنيات الأمان.',
      features: ['فحص الثغرات', 'حماية البيانات', 'نسخ احتياطي', 'الدعم الأمني'],
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            حلول <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">رقمية</span> متكاملة
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الرقمية المصممة خصيصاً لتلبية احتياجات عملك وتحقيق أهدافك.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 text-green-500 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full py-3 bg-gray-50 text-gray-700 font-medium rounded-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white">
                اعرف المزيد
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">هل لديك مشروع في ذهنك؟</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            دعنا نساعدك في تحويل فكرتك إلى واقع رقمي ناجح. تواصل معنا اليوم واحصل على استشارة مجانية.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            ابدأ مشروعك الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
