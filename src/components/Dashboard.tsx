import React from 'react';
import { Users, Calendar, Bell, TrendingUp, Home, Heart, Shield, Briefcase } from 'lucide-react';

interface DashboardProps {
  setCurrentPage?: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setCurrentPage }) => {
  const stats = [
    {
      title: 'Total KK',
      value: '127',
      icon: Users,
      color: 'bg-blue-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      trend: '+2 bulan ini'
    },
    {
      title: 'Kegiatan/Bulan',
      value: '8',
      icon: Calendar,
      color: 'bg-green-500',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      trend: '+1 dari bulan lalu'
    },
    {
      title: 'Pengumuman Aktif',
      value: '12',
      icon: Bell,
      color: 'bg-yellow-500',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      trend: '3 penting'
    },
    {
      title: 'Tingkat Partisipasi',
      value: '94%',
      icon: TrendingUp,
      color: 'bg-purple-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      trend: '+5% dari target'
    }
  ];

  const quickActions = [
    {
      title: 'Lapor Masalah',
      description: 'Laporkan masalah infrastruktur atau keamanan',
      icon: Shield,
      color: 'bg-red-500',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      action: () => setCurrentPage?.('kontak')
    },
    {
      title: 'Ajukan Surat',
      description: 'Pengajuan surat keterangan dan dokumen',
      icon: Briefcase,
      color: 'bg-indigo-500',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      action: () => setCurrentPage?.('layanan')
    },
    {
      title: 'Kegiatan Sosial',
      description: 'Daftar kegiatan sosial dan gotong royong',
      icon: Heart,
      color: 'bg-pink-500',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      action: () => setCurrentPage?.('kegiatan')
    },
    {
      title: 'Info Fasilitas',
      description: 'Informasi fasilitas umum RT',
      icon: Home,
      color: 'bg-teal-500',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      action: () => setCurrentPage?.('profil-rt')
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.iconBg} rounded-lg flex items-center justify-center`}>
                  <Icon className={`h-6 w-6 ${stat.iconColor}`} />
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                <p className="text-xs text-gray-500">{stat.trend}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Layanan Cepat</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-100"
                onClick={action.action}
              >
                <div className={`w-12 h-12 ${action.iconBg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-6 w-6 ${action.iconColor}`} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{action.title}</h4>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;