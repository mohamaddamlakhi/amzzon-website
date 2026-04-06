import { Target, Eye, Heart, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '5+', label: 'سنوات من الخبرة' },
    { number: '150+', label: 'مشروع منجز' },
    { number: '50+', label: 'عميل راضٍ' },
    { number: '20+', label: 'فريق متخصص' },
  ];

  const values = [
    {
      icon: Target,
      title: 'الالتزام بالجودة',
      description: 'نسعى دائماً لتقديم أعلى معايير الجودة في جميع مشاريعنا وخدماتنا.',
    },
    {
      icon: Eye,
      title: 'الابتكار المستمر',
      description: 'نواكب أحدث التقنيات وال趋势 لنقدم حلولاً مبتكرة لعملائنا.',
    },
    {
      icon: Heart,
      title: 'خدمة عملاء متميزة',
      description: 'نضع رضا العميل في صميم عملنا ونقدم دعماً متواصلاً.',
    },
    {
      icon: Award,
      title: 'المصداقية والاحترافية',
      description: 'نبني علاقات طويلة الأمد مبنية على الثقة والشفافية.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            من نحن
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            قصة <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MD85bs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نحن فريق من المحترفين الشغوفين بالتكنولوجيا والتصميم، نعمل معاً لتقديم حلول رقمية
            تلبي احتياجات عملائنا وتفوق توقعاتهم.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl" />
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <span className="block text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.number}
                    </span>
                    <span className="text-sm text-gray-300">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <p className="text-lg font-medium mb-2">رؤيتنا</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  أن نكون الخيار الأول للشركات والعلامات التجارية الطموحة في حلولها الرقمية.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">قصتنا</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                بدأت رحلتنا في عام 2019 برؤية واضحة: تقديم حلول تقنية مبتكرة تساعد الشركات
                على التحول الرقمي وتحقيق أهدافها.
              </p>
              <p>
                على مدار السنوات، نمت فريقنا ليضم أكثر من 20 متخصصاً في مجالات التصميم
                والتطوير والتسويق الرقمي، وقد أنجزنا أكثر من 150 مشروعاً ناجحاً.
              </p>
              <p>
                نؤمن بأن كل مشروع هو فرصة لإبداع جديد، ونعمل بكل جدية لتحويل أفكار عملائنا
                إلى واقع رقمي успе.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>فريق محترف</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>أسعار تنافسية</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>دعم فني متواصل</span>
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
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
