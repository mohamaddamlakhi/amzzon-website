import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد',
      role: 'المدير التنفيذي',
      company: 'شركة الخليج للتقنية',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'تجربة رائعة جداً مع فريق MD85bs. ساعدونا في تحويل حضورنا الرقمي بالكامل. التصميم احترافي والخدمة ممتازة.',
      rating: 5,
    },
    {
      id: 2,
      name: 'سارة العلي',
      role: 'مديرة التسويق',
      company: 'مؤسسة النور',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      content: 'فريق محترف وملتزم. أنجزوا مشروعنا في الوقت المحدد وبجودة عالية. أنصح بهم بشدة لأي مشروع رقمي.',
      rating: 5,
    },
    {
      id: 3,
      name: 'خالد الرشيد',
      role: 'رائد أعمال',
      company: 'مشروع ناشئ',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'بدأت مشروعي الصغير معهم والآن تحول إلى منصة ناجحة. الإبداع والدعم المستمر جعلا الفارق الكبير.',
      rating: 5,
    },
    {
      id: 4,
      name: 'نورة السعيد',
      role: 'صاحبة متجر',
      company: 'متجر الأناقة',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'متجري الإلكتروني حقق مبيعات تجاوزت التوقعات بعد إعادة التصميم. شكراً لفريق العمل على المجهود الرائع.',
      rating: 5,
    },
    {
      id: 5,
      name: 'محمد الفهد',
      role: 'مدير المشاريع',
      company: 'مجموعة الفهد',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      content: 'احترافية عالية في التعامل والتنفيذ. فريق يفهم احتياجات العميل ويقدم حلولاً مبتكرة ومخصصة.',
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            آراء العملاء
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ماذا يقول <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">عملاؤنا</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ثقة عملائنا هي أكبر دليل على جودة عملنا. إليك بعض آراء من تعاملوا معنا.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <Quote className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-8">
                      "{testimonial.content}"
                    </p>

                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                      />
                      <div className="text-right">
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                        <p className="text-sm text-blue-600">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6 rtl:rotate-180" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 rtl:rotate-180" />
            </button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <p className="text-gray-600">نسبة رضا العملاء</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              85%
            </div>
            <p className="text-gray-600">عملاء يعودون لنا</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <p className="text-gray-600">تقييمنا على جوجل</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
