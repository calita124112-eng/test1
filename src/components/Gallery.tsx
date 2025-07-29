import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const categories = ['Semua', 'Kebersihan', 'Olahraga', 'Rapat', 'Kesehatan', 'Sosial', 'Infrastruktur', 'Pendidikan', 'Lomba'];

  const galleryItems = [
    {
      id: 1,
      title: 'Gotong Royong Membersihkan Selokan',
      description: 'Warga RT bergotong royong membersihkan selokan untuk mencegah banjir',
      date: '15 Desember 2024',
      category: 'Kebersihan',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 2,
      title: 'Senam Sehat Bersama',
      description: 'Kegiatan senam sehat rutin setiap hari Minggu pagi',
      date: '10 Desember 2024',
      category: 'Olahraga',
      image: 'https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 3,
      title: 'Rapat RT Bulanan',
      description: 'Rapat koordinasi bulanan membahas program kerja RT',
      date: '5 Desember 2024',
      category: 'Rapat',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 4,
      title: 'Posyandu Balita',
      description: 'Pemeriksaan kesehatan rutin untuk balita dan ibu hamil',
      date: '3 Desember 2024',
      category: 'Kesehatan',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 5,
      title: 'Kegiatan Sosial Anak',
      description: 'Program pembinaan karakter dan kreativitas anak-anak RT',
      date: '1 Desember 2024',
      category: 'Sosial',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 6,
      title: 'Pembangunan Taman',
      description: 'Proyek pembangunan taman RT untuk area bermain anak',
      date: '25 November 2024',
      category: 'Infrastruktur',
      image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  const filteredItems = activeFilter === 'Semua' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Galeri Kegiatan RT</h2>
        <p className="text-lg text-gray-600">Dokumentasi berbagai kegiatan dan program RT 003 / RW 05</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => {
              alert(`Melihat detail: ${item.title}\n\nDeskripsi: ${item.description}\nTanggal: ${item.date}\nKategori: ${item.category}`);
            }}
          >
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                  item.category === 'Kebersihan' ? 'bg-green-500' :
                  item.category === 'Olahraga' ? 'bg-blue-500' :
                  item.category === 'Rapat' ? 'bg-purple-500' :
                  item.category === 'Kesehatan' ? 'bg-red-500' :
                  item.category === 'Sosial' ? 'bg-pink-500' :
                  item.category === 'Infrastruktur' ? 'bg-yellow-500' :
                  'bg-gray-500'
                }`}>
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>📅 {item.date}</span>
                <span>📁 Dokumentasi</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Tidak ada kegiatan dalam kategori ini.</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;