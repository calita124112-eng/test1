import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const News: React.FC = () => {
  const news = [
    {
      id: 1,
      title: 'RT 003 Raih Penghargaan RT Terbaik 2024',
      excerpt: 'Berkat partisipasi aktif warga dan program-program inovatif, RT 003 berhasil meraih penghargaan RT Terbaik tingkat Kelurahan.',
      date: '2024-12-20',
      author: 'Admin RT',
      category: 'Prestasi',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true
    },
    {
      id: 2,
      title: 'Program Bank Sampah Mencapai Target',
      excerpt: 'Program bank sampah RT 003 berhasil mengumpulkan 500kg sampah daur ulang dalam 3 bulan terakhir.',
      date: '2024-12-15',
      author: 'Tim Lingkungan',
      category: 'Lingkungan',
      image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: false
    },
    {
      id: 3,
      title: 'Pembangunan Taman Bermain Anak Selesai',
      excerpt: 'Taman bermain anak di area RT 003 telah selesai dibangun dan siap digunakan untuk aktivitas anak-anak.',
      date: '2024-12-10',
      author: 'Pengurus RT',
      category: 'Infrastruktur',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: false
    },
    {
      id: 4,
      title: 'Kegiatan Donor Darah Sukses Digelar',
      excerpt: 'Kegiatan donor darah yang diselenggarakan RT 003 berhasil mengumpulkan 45 kantong darah untuk PMI.',
      date: '2024-12-05',
      author: 'Karang Taruna',
      category: 'Kesehatan',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Prestasi': return 'bg-yellow-100 text-yellow-800';
      case 'Lingkungan': return 'bg-green-100 text-green-800';
      case 'Infrastruktur': return 'bg-blue-100 text-blue-800';
      case 'Kesehatan': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const featuredNews = news.find(item => item.featured);
  const regularNews = news.filter(item => !item.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Berita & Informasi Terkini</h2>
        <p className="text-lg text-gray-600">Update terbaru seputar kegiatan dan perkembangan RT 003 / RW 05</p>
      </div>

      {/* Featured News */}
      {featuredNews && (
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredNews.category)}`}>
                    {featuredNews.category}
                  </span>
                  <span className="ml-2 px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{featuredNews.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredNews.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{formatDate(featuredNews.date)}</span>
                    <User className="h-4 w-4 ml-4 mr-2" />
                    <span>{featuredNews.author}</span>
                  </div>
                  <button 
                    className="flex items-center text-green-600 hover:text-green-700 font-medium"
                    onClick={() => {
                      alert(`Membaca artikel: "${featuredNews.title}"`);
                    }}
                  >
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Regular News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularNews.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{formatDate(item.date)}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-3 w-3 mr-1" />
                  <span>{item.author}</span>
                </div>
              </div>
              
              <button 
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-200"
                onClick={() => {
                  alert(`Membaca artikel: "${item.title}"`);
                }}
              >
                Baca Selengkapnya
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ingin Berbagi Berita?</h3>
          <p className="text-lg mb-6 opacity-90">
            Kirimkan informasi atau berita menarik seputar kegiatan RT untuk dipublikasikan
          </p>
          <button 
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => {
              alert('Silakan kirim berita atau informasi melalui email rt003rw05@gmail.com atau hubungi pengurus RT.');
            }}
          >
            Kirim Berita
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;