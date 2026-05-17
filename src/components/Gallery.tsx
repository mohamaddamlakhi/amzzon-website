import { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'الكل' },
    { id: 'web', label: 'مواقع ويب' },
    { id: 'mobile', label: 'تطبيقات' },
    { id: 'branding', label: 'هوية بصرية' },
    { id: 'marketing', label: 'تسويق' },
  ];

  const projects = [
    {
      id: 1,
      title: 'متجر إلكتروني للأزياء',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'متجر أزياء متكامل مع سلة تسوق ونظام دفع',
    },
    {
      id: 2,
      title: 'تطبيق توصيل طعام',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
      description: 'تطبيق موبايل لتوصيل الطعام مع تتبع الطلبات',
    },
    {
      id: 3,
      title: 'هوية علامة تجارية',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      description: 'تصميم هوية بصرية كاملة لشركة تقنية',
    },
    {
      id: 4,
      title: 'حملة إعلانية',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'حملة تسويقية ناجحة لزيادة المبيعات',
    },
    {
      id: 5,
      title: 'منصة تعليمية',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      description: 'منصة تعلم إلكتروني مع دورات تفاعلية',
    },
    {
      id: 6,
      title: 'تطبيق لياقة بدنية',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      description: 'تطبيق تتبع التمارين والتغذية',
    },
    {
      id: 7,
      title: 'مطعم فاخر',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      description: 'هوية بصرية فاخرة لمطعم راقي',
    },
    {
      id: 8,
      title: 'إطلاق منتج جديد',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
      description: 'حملة إطلاق منتج تقني ناجحة',
    },
    {
      id: 9,
      title: 'بوابة عقارية',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      description: 'منصة عقارية مع خريطة تفاعلية',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            معرض أعمالنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مشاريع <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">نفخر</span> بها
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            شاهد مجموعة من أفضل أعمالنا التي نفذناها لعملائنا في مختلف القطاعات.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl bg-gray-100 aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs mb-3">
                    {filters.find(f => f.id === project.category)?.label}
                  </span>
                  <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                  <p className="text-sm text-white/80">{project.description}</p>
                  <button className="mt-4 px-6 py-2 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-xl hover:shadow-blue-500/30 transition-all">
            عرض جميع المشاريع
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
