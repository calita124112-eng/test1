import React from 'react';
import { Users, MapPin, Award, Calendar, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-green-500 via-teal-500 to-blue-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              SapaKalita
            </h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Membangun komunitas yang harmonis, gotong royong, dan sejahtera bersama
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-3 hover:bg-white/30 transition-all duration-300">
              <Users className="h-5 w-5" />
              <span className="font-medium">127 Keluarga</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-3 hover:bg-white/30 transition-all duration-300">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Kelurahan Maju Jaya</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-3 hover:bg-white/30 transition-all duration-300">
              <Award className="h-5 w-5" />
              <span className="font-medium">RT Terbaik 2024</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">127</div>
              <div className="text-sm md:text-base opacity-90">Total KK</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">8</div>
              <div className="text-sm md:text-base opacity-90">Kegiatan/Bulan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">94%</div>
              <div className="text-sm md:text-base opacity-90">Partisipasi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">12</div>
              <div className="text-sm md:text-base opacity-90">Pengumuman</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default Hero;