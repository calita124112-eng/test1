import React, { useState } from 'react';
import { Home, User, Bell, FileText, Image, Calendar, Phone, Users, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'beranda', label: 'Beranda', icon: Home },
    { id: 'profil-rt', label: 'Profil RT', icon: User },
    { id: 'pengumuman', label: 'Pengumuman', icon: Bell },
    { id: 'layanan', label: 'Layanan', icon: FileText },
    { id: 'galeri', label: 'Galeri', icon: Image },
    { id: 'kegiatan', label: 'Kegiatan', icon: Calendar },
    { id: 'struktur', label: 'Struktur', icon: Users },
    { id: 'kontak', label: 'Kontak', icon: Phone },
  ];

  const handleMenuClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
  };
  return (
    <header className="bg-white shadow-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleMenuClick('beranda')}>
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                  <Home className="h-7 w-7 text-white" />
                </div>
                <div className="ml-3">
                  <div className="text-lg font-bold text-gray-900">RT 003 / RW 05</div>
                  <div className="text-sm text-gray-600">Kelurahan Maju Jaya</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md'
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    handleMenuClick(item.id);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition-colors ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;