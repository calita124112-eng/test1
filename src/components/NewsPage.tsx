import React, { useState } from 'react';
import { Calendar, User, ArrowRight, ArrowLeft, Search, Filter, Eye, Clock, Tag } from 'lucide-react';

interface NewsPageProps {
  selectedNewsId?: number | null;
  onBackToList?: () => void;
}

const NewsPage: React.FC<NewsPageProps> = ({ selectedNewsId, onBackToList }) => {
  const [localSelectedNews, setLocalSelectedNews] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Semua');

  const categories = ['Semua', 'Prestasi', 'Lingkungan', 'Infrastruktur', 'Kesehatan', 'Sosial', 'Pendidikan'];

  const allNews = [
    {
      id: 1,
      title: 'RT 003 Raih Penghargaan RT Terbaik 2024',
      excerpt: 'Berkat partisipasi aktif warga dan program-program inovatif, RT 003 berhasil meraih penghargaan RT Terbaik tingkat Kelurahan.',
      content: `
        <p>Dalam acara penganugerahan yang diselenggarakan oleh Kelurahan Maju Jaya pada tanggal 15 Desember 2024, RT 003 / RW 05 berhasil meraih penghargaan sebagai RT Terbaik tahun 2024. Penghargaan ini diberikan berdasarkan penilaian komprehensif terhadap berbagai aspek pengelolaan RT.</p>
        
        <h3>Kriteria Penilaian</h3>
        <p>Penilaian dilakukan berdasarkan beberapa kriteria utama:</p>
        <ul>
          <li>Partisipasi warga dalam kegiatan RT (94% tingkat partisipasi)</li>
          <li>Inovasi program pemberdayaan masyarakat</li>
          <li>Pengelolaan administrasi yang tertib dan transparan</li>
          <li>Kebersihan dan keindahan lingkungan</li>
          <li>Kerukunan dan toleransi antar warga</li>
        </ul>
        
        <h3>Program Unggulan</h3>
        <p>Beberapa program unggulan yang menjadi poin plus dalam penilaian:</p>
        <ul>
          <li><strong>Bank Sampah RT:</strong> Berhasil mengumpulkan 500kg sampah daur ulang dalam 3 bulan</li>
          <li><strong>Posyandu Terpadu:</strong> Melayani 127 keluarga dengan tingkat kesehatan yang meningkat</li>
          <li><strong>Taman Bermain Anak:</strong> Pembangunan fasilitas bermain yang ramah anak</li>
          <li><strong>WiFi RT:</strong> Penyediaan internet murah untuk warga</li>
        </ul>
        
        <h3>Ucapan Terima Kasih</h3>
        <p>Pak Ajip selaku Ketua RT menyampaikan, "Penghargaan ini adalah hasil kerja keras semua warga RT 003. Tanpa partisipasi aktif dan gotong royong yang kuat, pencapaian ini tidak mungkin terwujud. Kami berkomitmen untuk terus meningkatkan pelayanan dan program-program yang bermanfaat bagi warga."</p>
        
        <p>Penghargaan ini juga disertai dengan bantuan dana pembangunan sebesar Rp 50 juta yang akan digunakan untuk melanjutkan program-program pemberdayaan masyarakat di tahun 2025.</p>
      `,
      date: '2024-12-20',
      author: 'Admin RT',
      category: 'Prestasi',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=500',
      views: 245,
      readTime: '5 menit'
    },
    {
      id: 2,
      title: 'Program Bank Sampah Mencapai Target',
      excerpt: 'Program bank sampah RT 003 berhasil mengumpulkan 500kg sampah daur ulang dalam 3 bulan terakhir.',
      content: `
        <p>Program Bank Sampah RT 003 yang diluncurkan pada bulan September 2024 telah mencapai target yang ditetapkan. Dalam kurun waktu 3 bulan, program ini berhasil mengumpulkan 500 kilogram sampah daur ulang dari warga RT.</p>
        
        <h3>Jenis Sampah yang Dikumpulkan</h3>
        <ul>
          <li>Plastik: 200 kg (40%)</li>
          <li>Kertas: 150 kg (30%)</li>
          <li>Logam: 100 kg (20%)</li>
          <li>Kaca: 50 kg (10%)</li>
        </ul>
        
        <h3>Manfaat Program</h3>
        <p>Program ini memberikan manfaat ganda bagi warga:</p>
        <ul>
          <li><strong>Lingkungan:</strong> Mengurangi volume sampah yang dibuang ke TPA</li>
          <li><strong>Ekonomi:</strong> Warga mendapat tambahan penghasilan dari penjualan sampah</li>
          <li><strong>Edukasi:</strong> Meningkatkan kesadaran tentang pengelolaan sampah</li>
        </ul>
        
        <h3>Pencapaian Finansial</h3>
        <p>Total nilai ekonomi yang dihasilkan mencapai Rp 15 juta, yang dibagikan kepada warga sesuai dengan kontribusi sampah masing-masing. Rata-rata setiap keluarga mendapat tambahan penghasilan Rp 50.000 - Rp 200.000 per bulan.</p>
        
        <h3>Rencana Pengembangan</h3>
        <p>Melihat kesuksesan program ini, pengurus RT berencana untuk:</p>
        <ul>
          <li>Menambah jenis sampah yang dapat didaur ulang</li>
          <li>Bekerja sama dengan industri daur ulang lokal</li>
          <li>Mengadakan workshop pembuatan kerajinan dari sampah</li>
          <li>Memperluas program ke RT tetangga</li>
        </ul>
      `,
      date: '2024-12-15',
      author: 'Tim Lingkungan',
      category: 'Lingkungan',
      image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=500',
      views: 189,
      readTime: '4 menit'
    },
    {
      id: 3,
      title: 'Pembangunan Taman Bermain Anak Selesai',
      excerpt: 'Taman bermain anak di area RT 003 telah selesai dibangun dan siap digunakan untuk aktivitas anak-anak.',
      content: `
        <p>Setelah melalui proses perencanaan dan pembangunan selama 2 bulan, taman bermain anak di RT 003 akhirnya selesai dan resmi dibuka untuk umum pada tanggal 10 Desember 2024.</p>
        
        <h3>Fasilitas Taman</h3>
        <p>Taman bermain ini dilengkapi dengan berbagai fasilitas modern dan aman:</p>
        <ul>
          <li><strong>Area Bermain:</strong> Perosotan, ayunan, dan jungkat-jungkit</li>
          <li><strong>Lapangan Mini:</strong> Untuk bermain bola dan aktivitas olahraga ringan</li>
          <li><strong>Gazebo:</strong> Tempat istirahat untuk orang tua</li>
          <li><strong>Jalur Jogging:</strong> Track sepanjang 200 meter</li>
          <li><strong>Taman Edukasi:</strong> Area dengan tanaman obat dan sayuran</li>
        </ul>
        
        <h3>Keamanan dan Kenyamanan</h3>
        <p>Aspek keamanan menjadi prioritas utama dalam pembangunan taman ini:</p>
        <ul>
          <li>Semua permainan menggunakan material berkualitas tinggi</li>
          <li>Lantai area bermain menggunakan rubber mat anti slip</li>
          <li>Pagar pengaman setinggi 1,2 meter mengelilingi area</li>
          <li>Penerangan LED yang memadai untuk aktivitas sore hari</li>
          <li>CCTV untuk monitoring keamanan 24 jam</li>
        </ul>
        
        <h3>Sumber Pendanaan</h3>
        <p>Pembangunan taman ini dibiayai dari:</p>
        <ul>
          <li>Iuran warga RT: Rp 75 juta (60%)</li>
          <li>Bantuan RW: Rp 25 juta (20%)</li>
          <li>CSR perusahaan lokal: Rp 25 juta (20%)</li>
        </ul>
        
        <h3>Aturan Penggunaan</h3>
        <p>Untuk menjaga kenyamanan bersama, ditetapkan aturan:</p>
        <ul>
          <li>Jam operasional: 06.00 - 21.00 WIB</li>
          <li>Anak-anak di bawah 8 tahun harus didampingi orang tua</li>
          <li>Dilarang membawa makanan dan minuman ke area bermain</li>
          <li>Wajib menjaga kebersihan dan tidak merusak fasilitas</li>
        </ul>
      `,
      date: '2024-12-10',
      author: 'Pengurus RT',
      category: 'Infrastruktur',
      image: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=500',
      views: 156,
      readTime: '3 menit'
    },
    {
      id: 4,
      title: 'Kegiatan Donor Darah Sukses Digelar',
      excerpt: 'Kegiatan donor darah yang diselenggarakan RT 003 berhasil mengumpulkan 45 kantong darah untuk PMI.',
      content: `
        <p>Kegiatan donor darah yang diselenggarakan oleh RT 003 bekerja sama dengan PMI Jakarta Selatan pada tanggal 5 Desember 2024 mendapat respons positif dari warga. Acara yang berlangsung di Balai RT berhasil mengumpulkan 45 kantong darah.</p>
        
        <h3>Antusiasme Warga</h3>
        <p>Dari 127 kepala keluarga di RT 003, sebanyak 60 warga mendaftar sebagai pendonor. Setelah melalui pemeriksaan kesehatan, 45 orang dinyatakan memenuhi syarat untuk mendonorkan darah.</p>
        
        <h3>Golongan Darah yang Terkumpul</h3>
        <ul>
          <li>Golongan O: 18 kantong (40%)</li>
          <li>Golongan A: 15 kantong (33%)</li>
          <li>Golongan B: 8 kantong (18%)</li>
          <li>Golongan AB: 4 kantong (9%)</li>
        </ul>
        
        <h3>Fasilitas Kesehatan</h3>
        <p>PMI menyediakan fasilitas lengkap untuk kegiatan ini:</p>
        <ul>
          <li>Tim medis berpengalaman (2 dokter, 4 perawat)</li>
          <li>Peralatan steril dan modern</li>
          <li>Pemeriksaan kesehatan gratis</li>
          <li>Konsumsi bergizi untuk pendonor</li>
          <li>Sertifikat dan kartu donor darah</li>
        </ul>
        
        <h3>Manfaat Kegiatan</h3>
        <p>Kegiatan ini memberikan manfaat besar:</p>
        <ul>
          <li><strong>Sosial:</strong> Membantu sesama yang membutuhkan transfusi darah</li>
          <li><strong>Kesehatan:</strong> Pendonor mendapat pemeriksaan kesehatan gratis</li>
          <li><strong>Komunitas:</strong> Mempererat tali silaturahmi antar warga</li>
        </ul>
        
        <h3>Apresiasi</h3>
        <p>Dr. Sari dari PMI Jakarta Selatan mengapresiasi antusiasme warga RT 003. "Ini adalah salah satu kegiatan donor darah dengan partisipasi tertinggi di tingkat RT. Semoga dapat menjadi contoh bagi RT lainnya."</p>
        
        <h3>Rencana Kegiatan Selanjutnya</h3>
        <p>Melihat kesuksesan kegiatan ini, RT 003 berencana mengadakan donor darah rutin setiap 3 bulan sekali. Kegiatan selanjutnya dijadwalkan pada bulan Maret 2025.</p>
      `,
      date: '2024-12-05',
      author: 'Karang Taruna',
      category: 'Kesehatan',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=500',
      views: 203,
      readTime: '4 menit'
    },
    {
      id: 5,
      title: 'Workshop Keterampilan Ibu-Ibu RT Sukses Digelar',
      excerpt: 'Workshop membuat kerajinan tangan dan kue kering untuk meningkatkan keterampilan dan ekonomi keluarga.',
      content: `
        <p>RT 003 menggelar workshop keterampilan untuk ibu-ibu pada tanggal 1 Desember 2024. Kegiatan yang berlangsung selama 2 hari ini diikuti oleh 35 ibu rumah tangga dengan antusiasme tinggi.</p>
        
        <h3>Materi Workshop</h3>
        <p>Workshop ini menyajikan berbagai materi praktis:</p>
        <ul>
          <li><strong>Hari Pertama:</strong> Membuat kerajinan dari barang bekas</li>
          <li><strong>Hari Kedua:</strong> Kursus membuat kue kering dan snack</li>
        </ul>
        
        <h3>Instruktur Berpengalaman</h3>
        <p>Kegiatan ini menghadirkan instruktur profesional:</p>
        <ul>
          <li>Ibu Sinta - Ahli kerajinan tangan dengan 10 tahun pengalaman</li>
          <li>Chef Rina - Pastry chef bersertifikat internasional</li>
        </ul>
        
        <h3>Hasil Workshop</h3>
        <p>Peserta berhasil membuat berbagai produk:</p>
        <ul>
          <li>Tas dari kain perca dan plastik bekas</li>
          <li>Hiasan dinding dari botol plastik</li>
          <li>Nastar, kastengel, dan cookies premium</li>
          <li>Kemasan produk yang menarik</li>
        </ul>
        
        <h3>Dampak Ekonomi</h3>
        <p>Setelah workshop, beberapa ibu mulai mengembangkan usaha kecil:</p>
        <ul>
          <li>5 ibu membuka usaha kerajinan tangan</li>
          <li>8 ibu memulai bisnis kue kering</li>
          <li>Omzet rata-rata Rp 500.000 - Rp 2.000.000 per bulan</li>
        </ul>
        
        <h3>Dukungan RT</h3>
        <p>Pengurus RT memberikan dukungan penuh:</p>
        <ul>
          <li>Bantuan modal awal melalui koperasi RT</li>
          <li>Promosi produk melalui media sosial RT</li>
          <li>Pameran produk setiap bulan di balai RT</li>
        </ul>
        
        <h3>Rencana Lanjutan</h3>
        <p>RT 003 berencana mengadakan workshop lanjutan dengan tema:</p>
        <ul>
          <li>Digital marketing untuk UMKM</li>
          <li>Manajemen keuangan usaha kecil</li>
          <li>Inovasi produk dan kemasan</li>
        </ul>
      `,
      date: '2024-12-01',
      author: 'Tim Pemberdayaan',
      category: 'Sosial',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=500',
      views: 178,
      readTime: '5 menit'
    },
    {
      id: 6,
      title: 'Program Bimbingan Belajar Gratis Dimulai',
      excerpt: 'RT 003 meluncurkan program bimbingan belajar gratis untuk anak-anak SD dan SMP dengan tenaga pengajar berkualitas.',
      content: `
        <p>Dalam upaya meningkatkan kualitas pendidikan anak-anak di lingkungan RT 003, pengurus RT meluncurkan program bimbingan belajar gratis yang dimulai pada tanggal 25 November 2024.</p>
        
        <h3>Latar Belakang Program</h3>
        <p>Program ini diluncurkan berdasarkan survei yang menunjukkan:</p>
        <ul>
          <li>60% orang tua kesulitan membantu anak belajar di rumah</li>
          <li>Biaya les privat yang mahal memberatkan keluarga</li>
          <li>Perlunya pendampingan khusus untuk mata pelajaran tertentu</li>
        </ul>
        
        <h3>Fasilitas dan Tenaga Pengajar</h3>
        <p>Program ini didukung fasilitas lengkap:</p>
        <ul>
          <li><strong>Lokasi:</strong> Balai RT yang nyaman dan ber-AC</li>
          <li><strong>Pengajar:</strong> 6 mahasiswa S1 dan S2 dari universitas ternama</li>
          <li><strong>Mata Pelajaran:</strong> Matematika, IPA, Bahasa Indonesia, Bahasa Inggris</li>
          <li><strong>Fasilitas:</strong> Proyektor, whiteboard, buku-buku referensi</li>
        </ul>
        
        <h3>Jadwal Kegiatan</h3>
        <p>Program berjalan dengan jadwal terstruktur:</p>
        <ul>
          <li><strong>SD Kelas 1-3:</strong> Senin & Rabu, 15.30-17.00 WIB</li>
          <li><strong>SD Kelas 4-6:</strong> Selasa & Kamis, 15.30-17.00 WIB</li>
          <li><strong>SMP:</strong> Jumat & Sabtu, 15.30-17.00 WIB</li>
        </ul>
        
        <h3>Metode Pembelajaran</h3>
        <p>Pendekatan pembelajaran yang digunakan:</p>
        <ul>
          <li>Pembelajaran interaktif dan menyenangkan</li>
          <li>Kelompok kecil maksimal 8 anak per kelas</li>
          <li>Pendekatan individual sesuai kemampuan anak</li>
          <li>Evaluasi berkala dan laporan perkembangan</li>
        </ul>
        
        <h3>Antusiasme Warga</h3>
        <p>Program ini mendapat sambutan luar biasa:</p>
        <ul>
          <li>45 anak mendaftar dalam minggu pertama</li>
          <li>Orang tua sangat terbantu dengan program ini</li>
          <li>Anak-anak menunjukkan peningkatan motivasi belajar</li>
        </ul>
        
        <h3>Dukungan dan Keberlanjutan</h3>
        <p>Program ini didukung oleh:</p>
        <ul>
          <li>Dana operasional dari kas RT</li>
          <li>Donasi buku dari warga</li>
          <li>Komitmen jangka panjang pengurus RT</li>
          <li>Evaluasi rutin untuk perbaikan program</li>
        </ul>
      `,
      date: '2024-11-25',
      author: 'Tim Pendidikan',
      category: 'Pendidikan',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=500',
      views: 167,
      readTime: '4 menit'
    }
  ];

  // Use selectedNewsId from props if provided, otherwise use local state
  const selectedNews = selectedNewsId 
    ? allNews.find(news => news.id === selectedNewsId) || localSelectedNews
    : localSelectedNews;

  const filteredNews = allNews.filter(news => {
    const matchesCategory = activeFilter === 'Semua' || news.category === activeFilter;
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Prestasi': return 'bg-yellow-100 text-yellow-800';
      case 'Lingkungan': return 'bg-green-100 text-green-800';
      case 'Infrastruktur': return 'bg-blue-100 text-blue-800';
      case 'Kesehatan': return 'bg-red-100 text-red-800';
      case 'Sosial': return 'bg-purple-100 text-purple-800';
      case 'Pendidikan': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (selectedNews) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Back Button */}
        <button
          onClick={() => {
            if (onBackToList) {
              onBackToList();
            } else {
              setLocalSelectedNews(null);
            }
          }}
          className="flex items-center text-green-600 hover:text-green-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Kembali ke Daftar Berita
        </button>

        {/* Article Header */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative">
            <img 
              src={selectedNews.image} 
              alt={selectedNews.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute top-6 left-6">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(selectedNews.category)}`}>
                <Tag className="h-4 w-4 inline mr-2" />
                {selectedNews.category}
              </span>
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {selectedNews.title}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600 border-b border-gray-200 pb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formatDate(selectedNews.date)}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{selectedNews.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{selectedNews.readTime} baca</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                <span>{selectedNews.views} views</span>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedNews.content }}
              style={{
                lineHeight: '1.8',
              }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Bagikan Artikel</h3>
              <div className="flex space-x-4">
                <button 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => alert('Fitur berbagi ke Facebook akan segera tersedia')}
                >
                  Facebook
                </button>
                <button 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  onClick={() => alert('Fitur berbagi ke WhatsApp akan segera tersedia')}
                >
                  WhatsApp
                </button>
                <button 
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link artikel berhasil disalin!');
                  }}
                >
                  Salin Link
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Berita RT 003 / RW 05</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Baca berita terkini dan informasi lengkap seputar kegiatan dan perkembangan RT 003 / RW 05
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Cari berita..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map((news) => (
          <div key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                  {news.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2">{news.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{formatDate(news.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-3 w-3 mr-1" />
                    <span>{news.views}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{news.readTime}</span>
                </div>
              </div>
              
              <button 
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-200 flex items-center justify-center"
                onClick={() => setLocalSelectedNews(news)}
              >
                Baca Selengkapnya
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-16 w-16 mx-auto" />
          </div>
          <p className="text-gray-500 text-lg">Tidak ada berita yang ditemukan</p>
          <p className="text-gray-400">Coba ubah filter atau kata kunci pencarian</p>
        </div>
      )}
    </div>
  );
};

export default NewsPage;