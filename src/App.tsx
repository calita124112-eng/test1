import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Announcements from './components/Announcements';
import Profile from './components/Profile';
import Structure from './components/Structure';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Services from './components/Services';
import Activities from './components/Activities';
import News from './components/News';
import Footer from './components/Footer';
import WiFiAd from './components/WiFiAd';

function App() {
  const [currentPage, setCurrentPage] = useState('beranda');

  const renderPage = () => {
    switch (currentPage) {
      case 'beranda':
        return (
          <>
            <Hero />
            <Dashboard setCurrentPage={setCurrentPage} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 py-8">
              <Announcements />
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">Kegiatan Mendatang</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm font-semibold">📅</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Posyandu Balita</h4>
                      <p className="text-sm text-gray-600">Setiap Rabu, 08.00 WIB</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-sm font-semibold">🏃</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Senam Sehat</h4>
                      <p className="text-sm text-gray-600">Setiap Minggu, 06.30 WIB</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-600 text-sm font-semibold">📋</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Arisan RT</h4>
                      <p className="text-sm text-gray-600">Setiap bulan, minggu ke-3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <News />
            <WiFiAd />
          </>
        );
      case 'profil-rt':
        return <Profile />;
      case 'pengumuman':
        return <Announcements fullPage={true} />;
      case 'layanan':
        return <Services />;
      case 'galeri':
        return <Gallery />;
      case 'kegiatan':
        return <Activities />;
      case 'struktur':
        return <Structure />;
      case 'kontak':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <Dashboard setCurrentPage={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;