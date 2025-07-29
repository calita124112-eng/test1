import React from 'react';
import { FileText, Heart, Recycle, Building, Users, Phone, Clock, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Surat Keterangan',
      description: 'Pelayanan pembuatan surat keterangan domisili, surat pengantar, dan dokumen administrasi lainnya',
      icon: FileText,
      color: 'bg-blue-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      requirements: ['KTP asli', 'KK asli', 'Pas foto 3x4'],
      duration: '1-2 hari kerja',
      cost: 'Gratis'
    },
    {
      title: 'Pelayanan Kesehatan',
      description: 'Posyandu balita dan lansia, pemeriksaan kesehatan dasar, dan program kesehatan masyarakat',
      icon: Heart,
      color: 'bg-red-500',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      requirements: ['Buku KIA/KMS', 'Kartu BPJS (jika ada)'],
      duration: 'Setiap Rabu pagi',
      cost: 'Gratis'
    },
    {
      title: 'Pengelolaan Sampah',
      description: 'Program pengelolaan sampah terpilah, bank sampah, dan edukasi lingkungan hidup',
      icon: Recycle,
      color: 'bg-green-500',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      requirements: ['Sampah sudah dipilah', 'Wadah terpisah'],
      duration: 'Setiap hari',
      cost: 'Dapat reward'
    },
    {
      title: 'Infrastruktur',
      description: 'Pemeliharaan fasilitas umum, pembangunan infrastruktur RT, dan perbaikan jalan',
      icon: Building,
      color: 'bg-orange-500',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      requirements: ['Laporan kerusakan', 'Foto kondisi'],
      duration: '3-7 hari kerja',
      cost: 'Sesuai anggaran RT'
    },
    {
      title: 'Kegiatan Sosial',
      description: 'Koordinasi kegiatan gotong royong, arisan, dan program pemberdayaan masyarakat',
      icon: Users,
      color: 'bg-purple-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      requirements: ['Daftar hadir', 'Partisipasi aktif'],
      duration: 'Terjadwal rutin',
      cost: 'Iuran sukarela'
    },
    {
      title: 'Konsultasi RT',
      description: 'Konsultasi masalah warga, mediasi konflik, dan bimbingan administrasi',
      icon: Phone,
      color: 'bg-teal-500',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      requirements: ['Identitas diri', 'Penjelasan masalah'],
      duration: 'Sesuai jadwal',
      cost: 'Gratis'
    }
  ];

  const operationalHours = [
    { day: 'Senin - Jumat', time: '08.00 - 12.00 WIB', status: 'Pelayanan Penuh' },
    { day: 'Sabtu', time: '08.00 - 10.00 WIB', status: 'Pelayanan Terbatas' },
    { day: 'Minggu', time: 'Libur', status: 'Darurat Only' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Layanan RT 003 / RW 05</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Kami menyediakan berbagai layanan untuk memenuhi kebutuhan warga dan meningkatkan kualitas hidup bersama
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                <Icon className={`h-8 w-8 ${service.iconColor}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Persyaratan:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Durasi</p>
                    <p className="text-sm font-medium text-gray-700">{service.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Biaya</p>
                    <p className="text-sm font-medium text-gray-700">{service.cost}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Operational Hours */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-8 text-white">
        <div className="text-center mb-8">
          <Clock className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Jam Pelayanan</h3>
          <p className="opacity-90">Waktu operasional layanan RT 003 / RW 05</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {operationalHours.map((schedule, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <h4 className="font-bold text-lg mb-2">{schedule.day}</h4>
              <p className="text-xl font-semibold mb-2">{schedule.time}</p>
              <span className="inline-block px-3 py-1 bg-white/30 rounded-full text-sm">
                {schedule.status}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-lg font-medium mb-2">Kontak Darurat 24/7</p>
          <p className="text-xl font-bold">0812-3456-7890</p>
        </div>
      </div>

      {/* Service Process */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Alur Pelayanan</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Datang ke RT', desc: 'Kunjungi kantor RT sesuai jam pelayanan' },
            { step: '2', title: 'Siapkan Dokumen', desc: 'Bawa persyaratan yang diperlukan' },
            { step: '3', title: 'Isi Formulir', desc: 'Lengkapi formulir permohonan' },
            { step: '4', title: 'Selesai', desc: 'Terima layanan atau dokumen yang diminta' }
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                {process.step}
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{process.title}</h4>
              <p className="text-sm text-gray-600">{process.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;