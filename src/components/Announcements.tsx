import React from 'react';
import { Bell } from 'lucide-react';

interface AnnouncementsProps {
  fullPage?: boolean;
}

const Announcements: React.FC<AnnouncementsProps> = ({ fullPage = false }) => {
  const announcements = [
    {
      id: 1,
      title: 'Rapat Bulanan RT',
      date: '15 Januari 2025',
      content: 'Rapat bulanan RT akan dilaksanakan pada hari Minggu, 15 Januari 2025 pukul 19.00 WIB di Balai RT.',
      status: 'Penting',
      statusColor: 'bg-red-100 text-red-800'
    },
    {
      id: 2,
      title: 'Gotong Royong Bersih Lingkungan',
      date: '20 Januari 2025',
      content: 'Mari bergotong royong membersihkan lingkungan RT kita. Dimulai pukul 07.00 WIB.',
      status: 'Sedang',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 3,
      title: 'Posyandu Balita',
      date: '22 Januari 2025',
      content: 'Kegiatan posyandu balita rutin bulan Januari. Jangan lupa membawa buku KIA.',
      status: 'Info',
      statusColor: 'bg-blue-100 text-blue-800'
    }
  ];

  const containerClass = fullPage 
    ? "max-w-4xl mx-auto px-4 py-16" 
    : "bg-white rounded-lg shadow-md p-6";

  return (
    <div className={containerClass}>
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
          <Bell className="h-5 w-5 text-red-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          {fullPage ? 'Semua Pengumuman' : 'Pengumuman Terbaru'}
        </h3>
      </div>
      
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="border-l-4 border-green-500 pl-4 pb-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-800">{announcement.title}</h4>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${announcement.statusColor}`}>
                {announcement.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{announcement.date}</p>
            <p className="text-sm text-gray-700">{announcement.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;