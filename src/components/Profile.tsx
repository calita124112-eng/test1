import React from 'react';

const Profile: React.FC = () => {
  const visiMisi = {
    visi: "Mewujudkan RT 003 / RW 05 sebagai lingkungan yang harmonis, sejahtera, dan berkeadilan dengan tetap menjaga nilai-nilai gotong royong dan kekeluargaan.",
    misi: [
      "Meningkatkan partisipasi warga dalam kegiatan RT",
      "Menciptakan lingkungan yang bersih, sehat, dan nyaman",
      "Mengembangkan ekonomi kreatif dan UMKM warga",
      "Memfasilitasi kegiatan sosial dan keagamaan",
      "Menjaga kerukunan dan toleransi antar warga"
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Profil RT 003 / RW 05</h2>
        <p className="text-lg text-gray-600">Mengenal lebih dekat pengurus dan struktur organisasi RT 003 / RW 05</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Visi</h3>
          <p className="text-gray-700 leading-relaxed">{visiMisi.visi}</p>
        </div>

        <div className="bg-green-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Misi</h3>
          <div className="space-y-3">
            {visiMisi.misi.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sejarah RT</h3>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-4">
            Hatra Mahkota Sejahtera - Cluster Kalita didirikan pada tahun 2020 sebagai bagian dari pengembangan 
            permukiman yang terorganisir dan modern. Sejak awal berdirinya, Paguyuban ini telah berkomitmen untuk 
            menciptakan lingkungan yang harmonis dan sejahtera bagi seluruh warganya.
          </p>
          <p className="mb-4">
            Dengan jumlah Kepala Keluarga yang terus bertambah, saat ini Hatra Mahkota Sejahtera - Cluster Kalita menaungi 127 keluarga 
            yang tinggal di area seluas 2,5 hektar. Wilayah RT ini strategis karena dekat dengan fasilitas 
            umum seperti sekolah, puskesmas, dan pasar tradisional.
          </p>
          <p>
            Prestasi yang membanggakan adalah meraih penghargaan sebagai Paguyuban Terbaik tingkat Kelurahan pada 
            tahun 2025, berkat partisipasi aktif warga dalam berbagai kegiatan kemasyarakatan dan program 
            pembangunan berkelanjutan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;