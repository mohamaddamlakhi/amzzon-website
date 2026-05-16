import { useState } from 'react';
import { ShoppingCart, Tag, Percent, Info, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: ShoppingCart },
    { id: 'deals', label: 'العروض', icon: Tag },
    { id: 'products', label: 'المنتجات', icon: Percent },
    { id: 'about', label: 'من نحن', icon: Info },
    { id: 'contact', label: 'تواصل معنا', icon: Mail },
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
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="mr-3 text-2xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
              Amzzon
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 text-sm font-medium transition-colors flex items-center gap-2 ${
                  activeSection === item.id
                    ? 'text-green-600'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-orange-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <a
            href="https://amzn.to/4eQcyXZ"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-600 to-orange-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all"
          >
            <ShoppingCart className="w-4 h-4" />
            تسوّق الآن
          </a>

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
                className={`block w-full text-right py-3 px-4 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 ${
                  activeSection === item.id
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
            <a
              href="https://amzn.to/4eQcyXZ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-600 to-orange-500 text-white font-medium rounded-full"
            >
              <ShoppingCart className="w-4 h-4" />
              تسوّق الآن
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
