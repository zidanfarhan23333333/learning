import React from "react";
import log from "../../assets/log.jpg";

import ui2 from "../../assets/ui2.png";

const about = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center bg-gray-100 h-96">
        <img
          src={log}
          alt="bacckground"
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="relative text-center">
          <h1 className="text-5xl font-bold text-blue-600">
            Belajarlah dan raih mimpi di sini.
          </h1>
          <p className="text-gray-600 mt-4">
            Dalam membersamai ribuat member untuk merain mimpinya.Disini Kami
            menciptakan Platfrom belajar yang bagus
          </p>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Tentang Future</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-600">
              Kurangnya skill,Mari kita tingkatkan disini
            </h3>
            <p className="text-gray-600">
              Di awal 2024,Founder future yang masih mahasiswa melihat orang
              orang di tahun ini masih butuh skill skil maka kami membuat
              platfrom ini
            </p>
            <p className="text-gray-600">
              Meningkatnya lulusan terdidik yang belum memiliki skill spesifik
              juga menjadi penyebab lainnya. Apalagi di era digital. Anak muda
              dituntut untuk menguasai banyak skill sekaligus, khususnya yang
              berhubungan dengan IT{" "}
            </p>
          </div>
          <div>
            <img
              src={ui2}
              alt="about"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4 bg-gary-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Mengawali langkah dengan percaya diri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Akses Selamanya</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Praktek Langsung</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Kelas Online</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
