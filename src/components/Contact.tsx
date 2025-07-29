import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
        <p className="text-lg text-gray-600">Informasi kontak dan lokasi RT 003 / RW 05</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Informasi Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Telepon</p>
                  <p className="text-gray-600">0812-3456-7890 (Ketua RT)</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">rt003rw05@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Alamat</p>
                  <p className="text-gray-600">Hatra Mahkota Sejahtera - Cluster Kalita<br />Jakarta Selatan 12345</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Jam Pelayanan</p>
                  <p className="text-gray-600">Senin - Jumat: 08.00 - 12.00 WIB<br />Sabtu: 08.00 - 10.00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Media Sosial</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-gray-700">WhatsApp Group RT: bit.ly/wa-rt003</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">📘</span>
                <span className="text-gray-700">Facebook: RT 003 Maju Jaya</span>
              </div>
              <div className="flex items-center">
                <span className="text-pink-600 mr-3">📷</span>
                <span className="text-gray-700">Instagram: @rt003majujaya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Kirim Pesan</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
              <input 
                type="text" 
                id="nama"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Masukkan nama lengkap"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="nama@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">No. Telepon</label>
              <input 
                type="tel" 
                id="telepon"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="08xxxxxxxxxx"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
              <input 
                type="text" 
                id="subjek"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Subjek pesan"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
              <textarea 
                rows={4}
                id="pesan"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                const nama = (document.getElementById('nama') as HTMLInputElement)?.value;
                const email = (document.getElementById('email') as HTMLInputElement)?.value;
                const telepon = (document.getElementById('telepon') as HTMLInputElement)?.value;
                const subjek = (document.getElementById('subjek') as HTMLInputElement)?.value;
                const pesan = (document.getElementById('pesan') as HTMLTextAreaElement)?.value;
                
                if (!nama || !email || !telepon || !subjek || !pesan) {
                  alert('Mohon lengkapi semua field yang diperlukan.');
                  return;
                }
                
                alert(`Terima kasih ${nama}! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda melalui ${email} atau ${telepon}.`);
                
                // Reset form
                (document.getElementById('nama') as HTMLInputElement).value = '';
                (document.getElementById('email') as HTMLInputElement).value = '';
                (document.getElementById('telepon') as HTMLInputElement).value = '';
                (document.getElementById('subjek') as HTMLInputElement).value = '';
                (document.getElementById('pesan') as HTMLTextAreaElement).value = '';
              }}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Lokasi RT</h3>
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin className="h-12 w-12 mx-auto mb-2" />
            <p>Peta Lokasi RT 003 / RW 05</p>
            <p className="text-sm">Kelurahan Maju Jaya, Jakarta Selatan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;