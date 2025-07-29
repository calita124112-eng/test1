import React from 'react';
import { Wifi, Check, Zap, Shield, Clock, Users } from 'lucide-react';

const WiFiAd: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-purple-700 rounded-2xl p-8 text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* Left Side - Service Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                <Wifi className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Layanan WiFi RT</h2>
            </div>
            
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Nikmati internet cepat dan stabil dengan paket khusus warga RT 003 / RW 05
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg">Kecepatan hingga 100 Mbps</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg">Gratis pemasangan untuk warga RT</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg">Support teknis 24/7</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg">Harga khusus warga RT</span>
              </div>
            </div>
            
            <button 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              onClick={() => {
                alert('Untuk pendaftaran WiFi RT, silakan hubungi:\n\n📞 0812-3456-7890 (Pak RT)\n📱 WhatsApp: 0856-7890-1234\n📧 wifi.rt003@gmail.com\n\nTim kami akan segera menghubungi Anda untuk proses instalasi.');
              }}
            >
              Daftar Sekarang
            </button>
          </div>

          {/* Right Side - Pricing */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Paket Spesial RT</h3>
            </div>

            {/* Paket Keluarga */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="text-center mb-4">
                <h4 className="text-xl font-semibold mb-2">Paket Keluarga</h4>
                <div className="text-4xl font-bold mb-1">Rp 250K</div>
                <p className="opacity-90">per bulan • 50 Mbps</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Zap className="h-4 w-4 mr-2" />
                  <span>Download hingga 50 Mbps</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>Unlimited kuota</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>Cocok untuk 3-4 pengguna</span>
                </div>
              </div>
            </div>

            {/* Paket Premium */}
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-purple-800 px-4 py-1 rounded-full text-sm font-semibold">
                  TERPOPULER
                </span>
              </div>
              <div className="text-center mb-4">
                <h4 className="text-xl font-semibold mb-2">Paket Premium</h4>
                <div className="text-4xl font-bold mb-1">Rp 350K</div>
                <p className="opacity-90">per bulan • 100 Mbps</p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Zap className="h-4 w-4 mr-2" />
                  <span>Download hingga 100 Mbps</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>Unlimited kuota</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>Cocok untuk 5-8 pengguna</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Priority support</span>
                </div>
              </div>
            </div>

            {/* Promo */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl mr-2">🎉</span>
                <span className="font-bold text-purple-800">Diskon 20% untuk 3 bulan pertama!</span>
              </div>
              <p className="text-sm text-purple-700">*Khusus pendaftar baru sampai akhir bulan</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-lg mb-2">Informasi dan Pendaftaran:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span>📞 0812-3456-7890 (Pak RT)</span>
            <span>📱 WhatsApp: 0856-7890-1234</span>
            <span>📧 wifi.rt003@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WiFiAd;