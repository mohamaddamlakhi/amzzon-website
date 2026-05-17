import { useState, useEffect, useRef } from 'react';

// ─── TYPES ───────────────────────────────────────────────────────────────────

interface Platform {
  id: string;
  name: string;
  description: string;
  commission: string;
  commissionValue: number;
  commissionType: 'percentage' | 'fixed';
  category: string;
  color: string;
  featured: boolean;
  badge?: string;
  features: string[];
  link: string;
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const PLATFORMS: Platform[] = [
  {
    id: 'amazon',
    name: 'أمازون',
    description: 'أكبر سوق إلكتروني في العالم. احصل على عمولة على ملايين المنتجات في كل الفئات.',
    commission: 'حتى 10%',
    commissionValue: 10,
    commissionType: 'percentage',
    category: 'shopping',
    color: '#FF9900',
    featured: true,
    badge: 'الأكثر ربحاً',
    features: ['ملايين المنتجات في كل الفئات', 'دفعات شهرية منتظمة', 'لوحة تتبع احترافية'],
    link: '#',
  },
  {
    id: 'noon',
    name: 'نون',
    description: 'المنصة العربية الرائدة للتسوق الإلكتروني في السعودية والإمارات ومصر.',
    commission: '8%',
    commissionValue: 8,
    commissionType: 'percentage',
    category: 'shopping',
    color: '#EABD00',
    featured: true,
    features: ['منتجات عربية حصرية', 'دعم كامل باللغة العربية', 'تتبع لحظي للمبيعات'],
    link: '#',
  },
  {
    id: 'booking',
    name: 'بوكينج',
    description: 'منصة الحجز الفندقي والسياحي العالمية. عمولات مرتفعة على كل حجز مكتمل.',
    commission: 'حتى 25%',
    commissionValue: 25,
    commissionType: 'percentage',
    category: 'travel',
    color: '#0071C2',
    featured: false,
    badge: 'عمولة عالية',
    features: ['آلاف الخيارات السياحية عالمياً', 'حجوزات فورية مضمونة', 'من أعلى عمولات السفر'],
    link: '#',
  },
  {
    id: 'shopify',
    name: 'شوبيفاي',
    description: 'منصة إنشاء المتاجر الأولى عالمياً. ارشد العملاء واحصل على مكافأة ضخمة عن كل اشتراك.',
    commission: '200$ لكل عميل',
    commissionValue: 200,
    commissionType: 'fixed',
    category: 'tech',
    color: '#96BF48',
    featured: false,
    badge: 'مكافأة ثابتة',
    features: ['مكافأة ثابتة بقيمة 200 دولار', 'سهولة الترويج للأعمال الجديدة', 'تحويلات عالية جداً'],
    link: '#',
  },
  {
    id: 'canva',
    name: 'كانفا',
    description: 'أداة التصميم الأكثر شعبية في العالم. برنامج إحالة بعمولات مرتفعة ومتكررة.',
    commission: '80% أول شهر',
    commissionValue: 80,
    commissionType: 'percentage',
    category: 'software',
    color: '#8B5CF6',
    featured: true,
    badge: 'مميز',
    features: ['عمولة متكررة شهرياً', 'تحويل سهل ومضمون', 'جمهور ضخم من المصممين'],
    link: '#',
  },
  {
    id: 'fiverr',
    name: 'فايفر',
    description: 'سوق العمل الحر الأول عالمياً. احصل على نسبة مرتفعة من أول طلب لكل عميل تحيله.',
    commission: '30% أول طلب',
    commissionValue: 30,
    commissionType: 'percentage',
    category: 'tech',
    color: '#1DBF73',
    featured: false,
    features: ['طلب مستمر ومتزايد على الخدمات', 'قاعدة مستخدمين ضخمة', 'تحويل سهل للجمهور العربي'],
    link: '#',
  },
  {
    id: 'aliexpress',
    name: 'علي إكسبرس',
    description: 'منصة البضائع الصينية الأكثر شعبية. آلاف المنتجات بأسعار لا تقاوم تجذب الجمهور.',
    commission: 'حتى 9%',
    commissionValue: 9,
    commissionType: 'percentage',
    category: 'shopping',
    color: '#E62121',
    featured: false,
    features: ['أسعار تنافسية جداً تسهّل البيع', 'تنوع هائل في المنتجات', 'شحن لجميع دول العالم'],
    link: '#',
  },
  {
    id: 'nordvpn',
    name: 'نورد VPN',
    description: 'أشهر خدمة VPN في العالم. برنامج إحالة بعمولات متكررة ومرتفعة جداً.',
    commission: '40% متكرر',
    commissionValue: 40,
    commissionType: 'percentage',
    category: 'software',
    color: '#4687D7',
    featured: false,
    badge: 'متكرر',
    features: ['عمولة شهرية متكررة ومضمونة', 'حاجة دائمة للخدمة', 'تحويل ممتاز ومنتظم'],
    link: '#',
  },
  {
    id: 'namshi',
    name: 'نمشي',
    description: 'وجهة الأزياء الأولى في الشرق الأوسط. عمولات على أحدث صيحات الموضة والماركات.',
    commission: '10%',
    commissionValue: 10,
    commissionType: 'percentage',
    category: 'fashion',
    color: '#E91E8C',
    featured: false,
    features: ['أبرز ماركات الأزياء العالمية', 'موسمية ترفع معدلات التحويل', 'جمهور شبابي واسع'],
    link: '#',
  },
  {
    id: 'agoda',
    name: 'أجودا',
    description: 'منصة حجز الفنادق والشقق في آسيا والشرق الأوسط. عروض وأسعار حصرية لا تجدها في مكان آخر.',
    commission: '5%',
    commissionValue: 5,
    commissionType: 'percentage',
    category: 'travel',
    color: '#7C3AED',
    featured: false,
    features: ['تغطية واسعة لآسيا والشرق الأوسط', 'عروض وأسعار حصرية', 'دفع آمن وموثوق'],
    link: '#',
  },
  {
    id: 'semrush',
    name: 'سيم راش',
    description: 'الأداة الأولى لتحسين محركات البحث والتسويق الرقمي. عمولات متكررة بقيمة حقيقية.',
    commission: '40% متكرر',
    commissionValue: 40,
    commissionType: 'percentage',
    category: 'software',
    color: '#FF6338',
    featured: false,
    badge: 'SEO',
    features: ['سوق B2B بقيمة عالية جداً', 'عمولة شهرية متكررة ومنتظمة', 'أداة لا غنى عنها للمسوقين'],
    link: '#',
  },
  {
    id: 'udemy',
    name: 'يوديمي',
    description: 'منصة التعليم الإلكتروني الأولى عالمياً. آلاف الدورات التعليمية بعشرات اللغات.',
    commission: 'حتى 15%',
    commissionValue: 15,
    commissionType: 'percentage',
    category: 'education',
    color: '#A435F0',
    featured: false,
    features: ['سوق تعليمي ضخم ومتنامٍ', 'خصومات متكررة ترفع نسب التحويل', 'طلب متصاعد ودائم'],
    link: '#',
  },
  {
    id: 'jarir',
    name: 'جرير',
    description: 'أكبر سلسلة لمبيعات الكتب والإلكترونيات في السعودية. برنامج شراكة للناشرين الرقميين.',
    commission: '5%',
    commissionValue: 5,
    commissionType: 'percentage',
    category: 'shopping',
    color: '#16A34A',
    featured: false,
    features: ['ثقة المستهلك السعودي الكبيرة', 'منتجات تقنية وتعليمية', 'تحويل سهل للجمهور المحلي'],
    link: '#',
  },
  {
    id: 'sephora',
    name: 'سيفورا',
    description: 'الوجهة الأولى للعناية بالبشرة والجمال والعطور لجمهور الجمال العربي.',
    commission: '5%',
    commissionValue: 5,
    commissionType: 'percentage',
    category: 'fashion',
    color: '#E11D48',
    featured: false,
    features: ['ماركات فاخرة وموثوقة', 'جمهور نسائي نشط وكبير', 'عروض موسمية مستمرة'],
    link: '#',
  },
  {
    id: 'envato',
    name: 'إنفاتو',
    description: 'السوق الأكبر للقوالب والأصول الرقمية والإضافات. برنامج إحالة مربح للمصممين.',
    commission: 'حتى 30%',
    commissionValue: 30,
    commissionType: 'percentage',
    category: 'tech',
    color: '#81C232',
    featured: false,
    badge: 'تقنية',
    features: ['سوق ضخم للمطورين والمصممين', 'عمولات على مبيعات متكررة', 'جمهور متخصص عالي التحويل'],
    link: '#',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'الكل' },
  { id: 'shopping', label: 'التسوق' },
  { id: 'travel', label: 'السفر' },
  { id: 'tech', label: 'التقنية' },
  { id: 'fashion', label: 'الأزياء' },
  { id: 'software', label: 'البرمجيات' },
  { id: 'education', label: 'التعليم' },
];

const FLOAT_BADGES = [
  { name: 'كانفا', value: '80%', color: '#8B5CF6', top: '4%', right: '8%', delay: '0s' },
  { name: 'بوكينج', value: '25%', color: '#0071C2', top: '12%', right: '54%', delay: '0.5s' },
  { name: 'أمازون', value: '10%', color: '#FF9900', top: '40%', right: '72%', delay: '1s' },
  { name: 'شوبيفاي', value: '$200', color: '#96BF48', top: '38%', right: '2%', delay: '1.5s' },
  { name: 'نورد VPN', value: '40%', color: '#4687D7', top: '68%', right: '60%', delay: '0.3s' },
  { name: 'نون', value: '8%', color: '#EABD00', top: '72%', right: '12%', delay: '0.8s' },
];

// ─── HEADER ──────────────────────────────────────────────────────────────────

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { href: '#platforms', label: 'المنصات' },
    { href: '#how', label: 'كيف يعمل؟' },
    { href: '#stats', label: 'أرباح الناشرين' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080810]/90 backdrop-blur-lg border-b border-[#1E1E35]'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'linear-gradient(135deg, #D4911A, #E8C547)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8C3 5.8 4.8 4 7 4h.5V2.5H7C3.96 2.5 1.5 4.96 1.5 8S3.96 13.5 7 13.5h.5V12H7C4.8 12 3 10.2 3 8zm2.5 0H8V6.5H5.5v3H8V8h-2.5zm4 0H10V6.5H7.5V8H10v1.5h2.5v-3H10V8z"
                fill="#080810"
              />
            </svg>
          </div>
          <span className="text-[#F0EEE8] font-black text-xl tracking-tight">رابح</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#9B98B0] hover:text-[#F0EEE8] text-sm font-medium transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a href="#" className="hidden md:block text-[#9B98B0] hover:text-[#F0EEE8] text-sm transition-colors">
            تسجيل الدخول
          </a>
          <a
            href="#"
            className="bg-[#D4911A] hover:bg-[#E8A825] text-[#080810] font-bold px-5 py-2 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#D4911A]/25"
          >
            انضم مجاناً
          </a>
          <button
            className="md:hidden text-[#9B98B0] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="القائمة"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0F0F1C] border-b border-[#1E1E35] px-4 py-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#9B98B0] hover:text-[#F0EEE8] text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_30%,_#D4911A0A_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_80%,_#8B5CF60A_0%,_transparent_60%)]" />
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #F0EEE8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-[#D4911A]/10 border border-[#D4911A]/25 rounded-full px-4 py-1.5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4911A] animate-pulse" />
              <span className="text-[#D4911A] text-xs font-semibold">أكثر من 50 منصة عالمية وعربية</span>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-black text-[#F0EEE8] leading-[1.1] mb-6">
              روابطك
              <span className="text-[#D4911A]"> = </span>
              دخلك
              <span className="block text-[#9B98B0] font-light text-[clamp(1.5rem,4vw,2.5rem)] mt-1">
                الدائم والمستمر
              </span>
            </h1>

            <p className="text-[#9B98B0] text-lg leading-relaxed mb-9 max-w-lg">
              اشترك في برامج الإحالة لأكبر المنصات العالمية والعربية، شارك روابطك مع جمهورك،
              واكسب عمولة تلقائية على كل عملية شراء تتم عبر رابطك.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#platforms"
                className="inline-flex items-center gap-2 bg-[#D4911A] hover:bg-[#E8A825] text-[#080810] font-bold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:shadow-2xl hover:shadow-[#D4911A]/30 hover:-translate-y-0.5"
              >
                تصفح المنصات
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 3L5 7l4 4" transform="scale(-1,1) translate(-14,0)" />
                </svg>
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 bg-[#141422] hover:bg-[#1E1E35] text-[#F0EEE8] font-medium px-7 py-3.5 rounded-xl border border-[#1E1E35] hover:border-[#D4911A]/30 text-sm transition-all duration-200"
              >
                كيف يعمل؟
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#5C5A72]">
              {['مجاني 100%', 'بدون متطلبات', 'دفعات آمنة'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="#D4911A">
                    <path d="M2 6.5l2.5 2.5L10 3" stroke="#D4911A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Floating commission badges */}
          <div className="hidden lg:block relative h-[440px]">
            {FLOAT_BADGES.map((badge) => (
              <div
                key={badge.name}
                className="absolute animate-float bg-[#0F0F1C] rounded-2xl px-5 py-4 shadow-2xl select-none"
                style={{
                  top: badge.top,
                  right: badge.right,
                  animationDelay: badge.delay,
                  border: `1px solid ${badge.color}30`,
                  boxShadow: `0 8px 32px ${badge.color}12`,
                }}
              >
                <div className="text-[#5C5A72] text-xs mb-1 font-medium">{badge.name}</div>
                <div className="font-black text-2xl leading-none" style={{ color: badge.color }}>
                  {badge.value}
                </div>
                <div className="text-[#5C5A72] text-[10px] mt-1">عمولة على كل بيع</div>
              </div>
            ))}
            {/* Center decorative element */}
            <div className="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 w-32 h-32 rounded-full border border-[#D4911A]/10 bg-[#D4911A]/5 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-[#D4911A]/20 bg-[#D4911A]/8 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#D4911A]/30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5C5A72] animate-bounce">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6l4 4 4-4" />
        </svg>
      </div>
    </section>
  );
}

// ─── PLATFORM CARD ───────────────────────────────────────────────────────────

const CATEGORY_LABELS: Record<string, string> = {
  shopping: 'تسوق',
  travel: 'سفر',
  tech: 'تقنية',
  fashion: 'أزياء',
  software: 'برمجيات',
  education: 'تعليم',
};

function PlatformCard({
  platform,
  copied,
  onCopy,
}: {
  platform: Platform;
  copied: boolean;
  onCopy: () => void;
}) {
  const { color } = platform;

  return (
    <article
      className="group relative bg-[#0F0F1C] border border-[#1E1E35] rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-default"
      style={{ ['--card-accent' as string]: color }}
    >
      {/* Top shine on hover */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, transparent 10%, ${color} 50%, transparent 90%)` }}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {/* Platform icon */}
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-base font-black shrink-0 transition-transform duration-200 group-hover:scale-110"
            style={{
              background: `${color}18`,
              border: `1.5px solid ${color}35`,
              color,
            }}
          >
            {platform.name[0]}
          </div>
          <div className="min-w-0">
            <h3 className="text-[#F0EEE8] font-bold text-base leading-none mb-1 truncate">
              {platform.name}
            </h3>
            <span className="text-[#5C5A72] text-xs">
              {CATEGORY_LABELS[platform.category] ?? platform.category}
            </span>
          </div>
        </div>

        {/* Commission */}
        <div
          className="shrink-0 rounded-xl px-3 py-2 text-center border"
          style={{ background: `${color}12`, borderColor: `${color}30` }}
        >
          <div className="font-black text-base leading-none" style={{ color }}>
            {platform.commission}
          </div>
          <div className="text-[#5C5A72] text-[10px] mt-0.5">عمولة</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#9B98B0] text-sm leading-relaxed line-clamp-2 flex-grow">
        {platform.description}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-1.5">
        {platform.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-[#5C5A72]">
            <span className="w-1 h-1 rounded-full shrink-0" style={{ background: color }} />
            {f}
          </li>
        ))}
      </ul>

      {/* Badge */}
      {platform.badge && (
        <span
          className="absolute top-4 left-4 text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: `${color}20`, color, border: `1px solid ${color}35` }}
        >
          {platform.badge}
        </span>
      )}

      {/* Actions */}
      <div className="flex gap-2 pt-1">
        <a
          href={platform.link}
          className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:brightness-110"
          style={{
            background: `${color}15`,
            color,
            border: `1px solid ${color}30`,
          }}
        >
          احصل على الرابط
        </a>
        <button
          onClick={onCopy}
          title="نسخ الرابط التسويقي"
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#141422] hover:bg-[#1E1E35] border border-[#1E1E35] text-[#5C5A72] hover:text-[#9B98B0] transition-all duration-200 shrink-0"
        >
          {copied ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#D4911A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 7l3 3 7-6" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="8" height="8" rx="1.5" />
              <path d="M2 10V3a1 1 0 011-1h7" />
            </svg>
          )}
        </button>
      </div>
    </article>
  );
}

// ─── HOW IT WORKS ────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: '01',
    title: 'سجّل مجاناً',
    desc: 'أنشئ حسابك في أقل من دقيقة. لا رسوم ولا متطلبات مسبقة.',
    color: '#D4911A',
  },
  {
    num: '02',
    title: 'اختر منصتك',
    desc: 'تصفح أكثر من 50 منصة وسجّل في برامج الإحالة المناسبة لجمهورك.',
    color: '#8B5CF6',
  },
  {
    num: '03',
    title: 'شارك رابطك',
    desc: 'انشر رابط الإحالة الخاص بك عبر وسائل التواصل أو موقعك أو أي قناة أخرى.',
    color: '#1DBF73',
  },
  {
    num: '04',
    title: 'اربح العمولة',
    desc: 'احصل على عمولتك تلقائياً مع كل عملية شراء تتم عبر رابطك.',
    color: '#FF9900',
  },
];

function HowItWorks() {
  return (
    <section id="how" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4911A05_0%,_transparent_70%)]" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <span className="text-[#D4911A] text-xs font-semibold uppercase tracking-widest block mb-3">
            آلية العمل
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#F0EEE8]">أربع خطوات للبدء في الربح</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1E1E35] rounded-2xl overflow-hidden">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="bg-[#080810] hover:bg-[#0C0C18] transition-colors duration-300 p-8 group"
            >
              <div
                className="text-[4.5rem] font-black leading-none mb-5 transition-all duration-300 group-hover:translate-x-1"
                style={{ color: `${step.color}22`, WebkitTextStroke: `1px ${step.color}40` }}
              >
                {step.num}
              </div>
              <h3 className="text-base font-bold mb-3" style={{ color: step.color }}>
                {step.title}
              </h3>
              <p className="text-[#5C5A72] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── STATS ───────────────────────────────────────────────────────────────────

function useAnimatedCounter(target: number, durationMs = 1600, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, durationMs, active]);
  return val;
}

function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const publishers = useAnimatedCounter(12847, 1800, active);
  const linksM = useAnimatedCounter(32, 2000, active);
  const commissionsM = useAnimatedCounter(48, 1600, active);
  const platformsCount = useAnimatedCounter(50, 1200, active);

  const stats = [
    { value: publishers.toLocaleString('ar-SA'), suffix: '+', label: 'ناشر نشط', color: '#D4911A' },
    { value: linksM, suffix: 'M+ رابط', label: 'رابط مشارك حتى الآن', color: '#8B5CF6' },
    { value: commissionsM, suffix: 'M+', label: 'ريال عمولات مدفوعة', color: '#1DBF73' },
    { value: platformsCount, suffix: '+', label: 'منصة عالمية وعربية', color: '#4687D7' },
  ];

  return (
    <section id="stats" ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#D4911A] text-xs font-semibold uppercase tracking-widest block mb-3">
            بالأرقام الحقيقية
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#F0EEE8]">
            ناشرون حقيقيون · أرباح حقيقية
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[#0F0F1C] border border-[#1E1E35] rounded-2xl p-6 sm:p-8 text-center hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
              style={{ borderColor: active ? `${s.color}25` : '' }}
            >
              <div className="font-black leading-none mb-2" style={{ color: s.color, fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                {s.value}
                <span className="text-xl mr-0.5">{s.suffix}</span>
              </div>
              <div className="text-[#5C5A72] text-xs sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA BANNER ──────────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-[#0F0F1C] border border-[#D4911A]/20 rounded-3xl p-10 sm:p-14 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4911A10_0%,_transparent_70%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4911A]/50 to-transparent" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-black text-[#F0EEE8] mb-4">
              ابدأ في الربح اليوم
            </h2>
            <p className="text-[#9B98B0] mb-8 max-w-md mx-auto leading-relaxed">
              انضم لآلاف الناشرين الذين يكسبون عمولات شهرية حقيقية من الروابط التي يشاركونها يومياً.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="bg-[#D4911A] hover:bg-[#E8A825] text-[#080810] font-bold px-8 py-3.5 rounded-xl text-sm transition-all duration-200 hover:shadow-2xl hover:shadow-[#D4911A]/35 hover:-translate-y-0.5"
              >
                أنشئ حسابك مجاناً
              </a>
              <a
                href="#platforms"
                className="bg-transparent hover:bg-[#141422] text-[#F0EEE8] font-medium px-8 py-3.5 rounded-xl border border-[#1E1E35] hover:border-[#D4911A]/30 text-sm transition-all duration-200"
              >
                تصفح المنصات أولاً
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1E1E35] mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, #D4911A, #E8C547)' }}
              >
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M3 7h4v2H3V7zM9 7h4v2H9V7zM7 3h2v10H7V3z" fill="#080810" />
                </svg>
              </div>
              <span className="text-[#F0EEE8] font-black text-lg">رابح</span>
            </div>
            <p className="text-[#5C5A72] text-sm leading-relaxed mb-4">
              منصة التسويق بالعمولة للناشرين العرب. اربح من كل رابط تشاركه.
            </p>
          </div>

          {[
            {
              title: 'فئات المنصات',
              links: ['التسوق الإلكتروني', 'السفر والفنادق', 'البرمجيات والتقنية', 'الأزياء والجمال', 'التعليم الإلكتروني'],
            },
            {
              title: 'للناشرين',
              links: ['سجّل الآن مجاناً', 'كيف يعمل البرنامج', 'سياسة العمولات', 'مركز المساعدة', 'الأسئلة الشائعة'],
            },
            {
              title: 'الشركة',
              links: ['من نحن', 'تواصل معنا', 'شروط الاستخدام', 'سياسة الخصوصية'],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[#F0EEE8] font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[#5C5A72] hover:text-[#9B98B0] text-sm transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1E1E35] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#5C5A72] text-xs">© {year} رابح. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-6">
            {['سياسة الخصوصية', 'شروط الاستخدام', 'اتصل بنا'].map((item) => (
              <a key={item} href="#" className="text-[#5C5A72] hover:text-[#9B98B0] text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── ROOT APP ────────────────────────────────────────────────────────────────

export default function AffiliateApp() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'commission'>('default');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = PLATFORMS.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const q = search.trim().toLowerCase();
    const matchSearch = !q || p.name.includes(q) || p.description.includes(q);
    return matchCat && matchSearch;
  }).sort((a, b) => sortBy === 'commission' ? b.commissionValue - a.commissionValue : 0);

  const categoryCounts = CATEGORIES.map((c) => ({
    ...c,
    count: c.id === 'all' ? PLATFORMS.length : PLATFORMS.filter((p) => p.category === c.id).length,
  }));

  function handleCopy(id: string) {
    navigator.clipboard.writeText(`https://rabeh.link/ref/${id}`).catch(() => {});
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#080810] text-[#F0EEE8]"
      style={{ fontFamily: "'Tajawal', sans-serif" }}
    >
      <SiteHeader />
      <HeroSection />

      {/* Platforms */}
      <section id="platforms" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-[#D4911A] text-xs font-semibold uppercase tracking-widest block mb-2">
              المنصات المتاحة
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-black text-[#F0EEE8]">
                اختر منصتك وابدأ الربح
              </h2>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'default' | 'commission')}
                className="bg-[#141422] border border-[#1E1E35] rounded-lg px-3 py-2 text-xs text-[#9B98B0] focus:outline-none focus:border-[#D4911A]/40 cursor-pointer max-w-fit"
              >
                <option value="default">الترتيب الافتراضي</option>
                <option value="commission">الأعلى عمولة أولاً</option>
              </select>
            </div>
          </div>

          {/* Filter bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="flex gap-2 overflow-x-auto pb-1 flex-1 hide-scrollbar">
              {categoryCounts.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-[#D4911A] text-[#080810] shadow-lg shadow-[#D4911A]/20'
                      : 'bg-[#141422] border border-[#1E1E35] text-[#9B98B0] hover:border-[#D4911A]/30 hover:text-[#F0EEE8]'
                  }`}
                >
                  {cat.label}
                  <span className={`mr-1.5 ${activeCategory === cat.id ? 'text-[#080810]/60' : 'text-[#5C5A72]'}`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative shrink-0">
              <svg
                className="absolute top-1/2 -translate-y-1/2 right-3 text-[#5C5A72] pointer-events-none"
                width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
              >
                <circle cx="6.5" cy="6.5" r="4" />
                <path d="M10 10l2.5 2.5" />
              </svg>
              <input
                type="search"
                dir="rtl"
                placeholder="ابحث عن منصة..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-[#141422] border border-[#1E1E35] rounded-xl pr-9 pl-4 py-2 text-sm text-[#F0EEE8] placeholder-[#5C5A72] focus:outline-none focus:border-[#D4911A]/40 w-full sm:w-48 transition-all"
              />
            </div>
          </div>

          {/* Results count */}
          <p className="text-[#5C5A72] text-xs mb-6">
            {filtered.length} منصة {activeCategory !== 'all' || search ? 'مطابقة' : 'متاحة'}
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((p) => (
                <PlatformCard
                  key={p.id}
                  platform={p}
                  copied={copiedId === p.id}
                  onCopy={() => handleCopy(p.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 border border-[#1E1E35] rounded-2xl bg-[#0F0F1C]/50">
              <div className="text-6xl mb-4" style={{ color: '#1E1E35' }}>؟</div>
              <p className="text-[#9B98B0] font-semibold mb-1">لا توجد منصات مطابقة</p>
              <p className="text-[#5C5A72] text-sm mb-4">جرب كلمة بحث مختلفة أو فئة أخرى</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('all'); }}
                className="text-[#D4911A] text-sm hover:underline transition-all"
              >
                إعادة ضبط الفلاتر
              </button>
            </div>
          )}
        </div>
      </section>

      <HowItWorks />
      <StatsSection />
      <CTABanner />
      <SiteFooter />
    </div>
  );
}
