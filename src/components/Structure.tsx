import React from 'react';
import { Phone, Mail, MapPin, User } from 'lucide-react';

const Structure: React.FC = () => {
  const pengurus = [
    {
      nama: 'Pak Fery',
      jabatan: 'Pembina',
      telepon: '0812-1111-1111',
      email: 'pembina.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 1',
      color: 'bg-red-500'
    },
    {
      nama: 'Pak Bilal',
      jabatan: 'Penasehat 1',
      telepon: '0812-2222-2222',
      email: 'penasehat1.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 2',
      color: 'bg-indigo-500'
    },
    {
      nama: 'Pak Danil',
      jabatan: 'Penasehat 2',
      telepon: '0812-3333-3333',
      email: 'penasehat2.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 3',
      color: 'bg-indigo-500'
    },
    {
      nama: 'Pak Ajip',
      jabatan: 'Ketua RT',
      telepon: '0812-3456-7890',
      email: 'ketua.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 12',
      color: 'bg-blue-500'
    },
    {
      nama: 'Pak Irfan',
      jabatan: 'Sekretaris 1',
      telepon: '0856-4444-4444',
      email: 'sekretaris1.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 5',
      color: 'bg-green-500'
    },
    {
      nama: 'Bu Cici',
      jabatan: 'Sekretaris 2',
      telepon: '0856-5555-5555',
      email: 'sekretaris2.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 6',
      color: 'bg-green-500'
    },
    {
      nama: 'Bu Amel',
      jabatan: 'Bendahara 1',
      telepon: '0821-6666-6666',
      email: 'bendahara1.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 7',
      color: 'bg-purple-500'
    },
    {
      nama: 'Bu Sera',
      jabatan: 'Bendahara 2',
      telepon: '0821-7777-7777',
      email: 'bendahara2.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 8',
      color: 'bg-purple-500'
    },
    {
      nama: 'Pak Ari',
      jabatan: 'Humas',
      telepon: '0878-8888-8888',
      email: 'humas1.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 9',
      color: 'bg-pink-500'
    },
    {
      nama: 'Pak Farhan',
      jabatan: 'Humas',
      telepon: '0878-9999-9999',
      email: 'humas2.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 10',
      color: 'bg-pink-500'
    },
    {
      nama: 'Pak Zaka',
      jabatan: 'Sie. Perlengkapan',
      telepon: '0877-1111-1111',
      email: 'perlengkapan1.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 11',
      color: 'bg-teal-500'
    },
    {
      nama: 'Pak Arif',
      jabatan: 'Sie. Perlengkapan',
      telepon: '0877-2222-2222',
      email: 'perlengkapan2.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 12',
      color: 'bg-teal-500'
    },
    {
      nama: 'Bu Sarwendah',
      jabatan: 'Sie. Konsumsi',
      telepon: '0876-3333-3333',
      email: 'konsumsi1.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 13',
      color: 'bg-orange-500'
    },
    {
      nama: 'Bu Cintya',
      jabatan: 'Sie. Konsumsi',
      telepon: '0876-4444-4444',
      email: 'konsumsi2.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 14',
      color: 'bg-orange-500'
    },
    {
      nama: 'Bu Siska',
      jabatan: 'Sie. Konsumsi',
      telepon: '0876-5555-5555',
      email: 'konsumsi3.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 15',
      color: 'bg-orange-500'
    },
    {
      nama: 'Bu Veny',
      jabatan: 'Sie. Konsumsi',
      telepon: '0876-6666-6666',
      email: 'konsumsi4.rt003@gmail.com',
      alamat: 'Jl. Maju Jaya No. 16',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Struktur Pengurus</h2>
        <p className="text-lg text-gray-600">Pengurus RT 003 / RW 05 periode 2024-2027</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pengurus.map((person, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className={`w-16 h-16 ${person.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                <User className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{person.nama}</h3>
                <p className="text-green-600 font-medium mb-3 text-sm">{person.jabatan}</p>
                
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex items-center">
                    <Phone className="h-3 w-3 mr-2 text-gray-400 flex-shrink-0" />
                    <span>{person.telepon}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-3 w-3 mr-2 text-gray-400 flex-shrink-0" />
                    <span>{person.email}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-2 text-gray-400 flex-shrink-0" />
                    <span>{person.alamat}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Jadwal Pelayanan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Senin - Jumat</h4>
            <p>08.00 - 12.00 WIB</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Sabtu</h4>
            <p>08.00 - 10.00 WIB</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Minggu</h4>
            <p>Libur (Kecuali darurat)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;