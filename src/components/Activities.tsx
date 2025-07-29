import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, Search } from 'lucide-react';

const Activities: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Semua', 'Rutin', 'Sosial', 'Kesehatan', 'Olahraga', 'Pendidikan', 'Keagamaan'];

  const activities = [
    {
      id: 1,
      title: 'Posyandu Balita',
      description: 'Pemeriksaan kesehatan rutin untuk balita dan ibu hamil dengan tenaga medis profesional',
      date: '2025-01-22',
      time: '08.00 - 11.00 WIB',
      location: 'Balai RT 003',
      category: 'Kesehatan',
      participants: 25,
      maxParticipants: 30,
      status: 'Terbuka',
      organizer: 'Kader Posyandu',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 2,
      title: 'Senam Sehat Bersama',
      description: 'Kegiatan senam sehat untuk semua usia dengan instruktur berpengalaman',
      date: '2025-01-26',
      time: '06.30 - 07.30 WIB',
      location: 'Lapangan RT',
      category: 'Olahraga',
      participants: 45,
      maxParticipants: 50,
      status: 'Terbuka',
      organizer: 'Karang Taruna',
      image: 'https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 3,
      title: 'Gotong Royong Bersih Lingkungan',
      description: 'Kegiatan bersih-bersih lingkungan RT untuk menjaga kebersihan dan kesehatan bersama',
      date: '2025-01-28',
      time: '07.00 - 09.00 WIB',
      location: 'Seluruh Area RT',
      category: 'Sosial',
      participants: 60,
      maxParticipants: 80,
      status: 'Terbuka',
      organizer: 'Pengurus RT',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 4,
      title: 'Arisan RT Bulanan',
      description: 'Pertemuan arisan bulanan warga RT dengan doorprize menarik',
      date: '2025-02-01',
      time: '19.00 - 21.00 WIB',
      location: 'Balai RT 003',
      category: 'Sosial',
      participants: 40,
      maxParticipants: 50,
      status: 'Terbuka',
      organizer: 'Ibu-ibu RT',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 5,
      title: 'Bimbingan Belajar Anak',
      description: 'Program bimbingan belajar gratis untuk anak-anak SD dan SMP',
      date: '2025-02-03',
      time: '16.00 - 18.00 WIB',
      location: 'Rumah Pak RT',
      category: 'Pendidikan',
      participants: 15,
      maxParticipants: 20,
      status: 'Terbuka',
      organizer: 'Mahasiswa KKN',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 6,
      title: 'Pengajian Rutin',
      description: 'Pengajian rutin mingguan dengan kajian agama dan tausiyah',
      date: '2025-02-05',
      time: '19.30 - 21.00 WIB',
      location: 'Musholla Al-Ikhlas',
      category: 'Keagamaan',
      participants: 30,
      maxParticipants: 40,
      status: 'Terbuka',
      organizer: 'Takmir Musholla',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesCategory = activeFilter === 'Semua' || activity.category === activeFilter;
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Terbuka': return 'bg-green-100 text-green-800';
      case 'Penuh': return 'bg-red-100 text-red-800';
      case 'Selesai': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Kesehatan': return 'bg-red-500';
      case 'Olahraga': return 'bg-blue-500';
      case 'Sosial': return 'bg-green-500';
      case 'Pendidikan': return 'bg-purple-500';
      case 'Keagamaan': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Kegiatan RT 003 / RW 05</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Ikuti berbagai kegiatan menarik dan bermanfaat untuk mempererat tali silaturahmi warga
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Cari kegiatan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredActivities.map((activity) => (
          <div key={activity.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <img 
                src={activity.image} 
                alt={activity.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(activity.category)}`}>
                  {activity.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                  {activity.status}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800 mb-2">{activity.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{activity.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2 text-green-500" />
                  <span>{formatDate(activity.date)}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-blue-500" />
                  <span>{activity.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-red-500" />
                  <span>{activity.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-2 text-purple-500" />
                  <span>{activity.participants}/{activity.maxParticipants} peserta</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Oleh: {activity.organizer}</span>
                <button 
                  className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-200"
                  onClick={() => {
                    alert(`Pendaftaran untuk kegiatan "${activity.title}" akan segera dibuka. Silakan hubungi pengurus RT untuk informasi lebih lanjut.`);
                  }}
                >
                  Daftar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredActivities.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Calendar className="h-16 w-16 mx-auto" />
          </div>
          <p className="text-gray-500 text-lg">Tidak ada kegiatan yang ditemukan</p>
          <p className="text-gray-400">Coba ubah filter atau kata kunci pencarian</p>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Punya Ide Kegiatan?</h3>
        <p className="text-lg mb-6 opacity-90">
          Sampaikan usulan kegiatan Anda kepada pengurus RT untuk kemajuan bersama
        </p>
        <button 
          className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          onClick={() => {
            alert('Silakan hubungi pengurus RT melalui kontak yang tersedia untuk mengajukan kegiatan baru.');
          }}
        >
          Ajukan Kegiatan
        </button>
      </div>
    </div>
  );
};

export default Activities;