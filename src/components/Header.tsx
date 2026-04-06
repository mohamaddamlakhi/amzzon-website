import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'الرئيسية', labelEn: 'Home' },
    { id: 'about', label: 'من نحن', labelEn: 'About' },
    { id: 'services', label: 'خدماتنا', labelEn: 'Services' },
    { id: 'gallery', label: 'معرض الأعمال', labelEn: 'Gallery' },
    { id: 'testimonials', label: 'آراء العملاء', labelEn: 'Testimonials' },
    { id: 'contact', label: 'تواصل معنا', labelEn: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">MD</span>
            </div>
            <span className="mr-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MD85bs
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            تواصل الآن
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-right py-3 px-4 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full"
            >
              تواصل الآن
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
