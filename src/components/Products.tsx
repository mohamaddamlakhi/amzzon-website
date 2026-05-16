import { ShoppingCart, ExternalLink, Star, Heart, TrendingUp } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'منتج أمازون مميز',
      description: 'منتج عالي الجودة مع تقييم 4.5 نجوم',
      price: '299',
      originalPrice: '399',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      rating: 4.5,
      affiliateLink: 'https://amzn.to/4eQcyXZ',
      badge: 'الأكثر مبيعاً',
    },
    {
      id: 2,
      name: 'إكسسوارات تقنية',
      description: 'أحدث الإكسسوارات التقنية بأسعار منافسة',
      price: '149',
      originalPrice: '199',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      rating: 4.2,
      affiliateLink: 'https://amzn.to/4eQcyXZ',
      badge: 'خصم 25%',
    },
    {
      id: 3,
      name: 'أجهزة إلكترونية',
      description: 'أجهزة إلكترونية مختارة بعناية',
      price: '899',
      originalPrice: '1199',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop',
      rating: 4.8,
      affiliateLink: 'https://amzn.to/4eQcyXZ',
      badge: 'جديد',
    },
    {
      id: 4,
      name: 'ملابس وأزياء',
      description: 'أحدث صيحات الموضة بأسعار مناسبة',
      price: '199',
      originalPrice: '299',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop',
      rating: 4.0,
      affiliateLink: 'https://amzn.to/4eQcyXZ',
      badge: 'عرض محدود',
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            المنتجات المميزة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            أفضل <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">العروض والمنتجات</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            اكتشف أفضل المنتجات المختارة بعناية مع عروض حصرية وروابط تسويق بالعمولة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-orange-500 text-white text-xs font-medium rounded-full">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{product.description}</p>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 mr-1">({product.rating})</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-green-600">{product.price} ر.س</span>
                  <span className="text-sm text-gray-400 line-through">{product.originalPrice} ر.س</span>
                </div>

                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-gradient-to-r from-green-600 to-orange-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  اشترِ الآن
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://amzn.to/4eQcyXZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-medium rounded-full border-2 border-green-600 hover:bg-green-600 hover:text-white transition-all"
          >
            <TrendingUp className="w-5 h-5" />
            عرض جميع المنتجات على أمازون
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;