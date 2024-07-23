import React from "react";
import {
  FaChalkboardTeacher,
  FaBook,
  FaUserGraduate,
  FaPlayCircle,
  FaClock,
  FaBookOpen,
  FaStar,
} from "react-icons/fa";
import farhan from "../../assets/farhan.png";
import img from "../../assets/img.png";

const DetailKursus = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-2xl font-semibold mb-4">
            Python Programing Masterclass
          </h1>
          <p className="text-gray-600 mb-2">Teachers / Dea Afrizal</p>
          <div className="bg0white p-4 rounded-lg shadow-md flex items-center mb-6 bg-white">
            <img
              src={farhan}
              alt="teacher"
              className="w-20 h-20 rounded-full mr-4"
            />
            <div className="bg-white">
              <h2 className="text-xl font-semibold">Dea Afrizal</h2>
              <p className="text-gray-600">Teachers Progaming</p>
              <p className="text-gray-600 mb-2">
                Hi Student saya Dea Afrizal seorang dosen dan peneliti di bidang
                Ilmu Komputer dengan fokus pada kecerdasan buatan dan machine
                learning. Beliau memiliki pengalaman lebih dari 10 tahun
                mengajar berbagai mata kuliah pemrograman, termasuk Python.
              </p>
              <div className="flex space-x-2 mt-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                  Pemograman Python
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                  Machine Learning
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                  Kecerdasan buatan
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                  Pengolahan Data
                </span>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <div className="flex items-center">
                  <FaChalkboardTeacher className="text-gray-600 mr-2" />{" "}
                  <span className="text-gray-600 text-sm">
                    5+ year experience
                  </span>
                </div>
                <div className="flex items-center">
                  <FaBook className="text-gray-600 mr-2" />{" "}
                  <span className="text-gray-600 text-sm">20 courses</span>
                </div>
                <div className="flex items-center">
                  <FaUserGraduate className="text-gray-600 mr-2" />{" "}
                  <span className="text-gray-600 text-sm">250+ students</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <div className="flex justify-around border-b pb-2 mb-2">
              <button className="text-gray-600">About Me</button>
              <button className="text-gray-600">Schedule</button>
              <button className="text-gray-600">Course</button>
              <button className="text-gray-600">Resume</button>
              <button className="text-gray-600">Reviews 238+</button>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">About Me</h3>
              <p className="text-gray-600 text-sm">
                aya memiliki pengalaman lebih dari 10 tahun mengajar berbagai
                mata kuliah pemrograman, termasuk Python, di tingkat sarjana dan
                pascasarjana. Selain mengajar, saya aktif melakukan penelitian
                dalam bidang kecerdasan buatan dan machine learning, dengan
                fokus pada aplikasi praktis di industri dan pengembangan
                algoritma baru.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Schedule</h3>
            <div className="text-gray-600 text-sm">
              <span className="text-gray-600 test-sm">
                Pick time for first lesson. The timings are displayed in your
                local timezone
              </span>
              <span className="text-gray-600 text-sm">PST UTC-08:00</span>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-3">
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
              <button className="bg-blue-600 py-2 text-white rounded-lg">
                08:30
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white p-4 rounded-lg shadow-md mt-20">
            <button className="relative w-full">
              <img src={img} alt="profile" className="w-full rounded-lg mb-4" />
              <FaPlayCircle className="absolute inset-0 w-16 h-16 text-white opacity-75 m-auto" />
            </button>
            <p className="text-gray-600 text-center mb-2">Harga per Kelas</p>
            <p className="text-center text-2xl font-semibold mb-4">
              Rp.2.000.000
            </p>
            <button className="bg-blue-500 text-white w-full py-2 rounded-lg mb-2">
              Booking Kelas
            </button>
            <button className="bg-gray-200 text-gray-600 w-full py-2 rounded-lg">
              Send Message
            </button>
            <div className="flex justify-between items-center mt-4">
              <FaBookOpen className="text-gray-600 mr-2" />
              <p className="text-gray-600 text-sm">
                5 Lessons booked in 5 hours
              </p>
            </div>
            <div className="flex items-center">
              <FaClock className="text-gray-600 mr-2" />
              <p className="text-gray-600 text-sm">3 hours response time</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-lg font-semibold">Review(236)</div>
              <button className="text-blue-500">View All</button>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-semibold mr-2 mt-4">4.9</span>
              <div className="flex">
                <FaStar className="text-yellow-500 mr-1" />
                <FaStar className="text-yellow-500 mr-1" />
                <FaStar className="text-yellow-500 mr-1" />
                <FaStar className="text-yellow-500 mr-1" />
                <FaStar className="text-yellow-500 " />
              </div>
              <span className="ml-2 text-gray-600">(235 Reviws)</span>
            </div>
            <div className="flex mb-4">
              <div className="flex-1">
                <p className="text-gray-600">Qualifications</p>
                <p className="text-yellow-500">4.9</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-600">Expertise</p>
                <p className="text-yellow-500">4.7</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-600">Communication</p>
                <p className="text-yellow-500">4.8</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-600">Value for money</p>
                <p className="text-yellow-500">5.0</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <img
                src={farhan}
                alt="student"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold">Natasha Wilona</h4>
                <p className="text-yellow-500 mb-2">5 stars</p>
                <p className="text-gray-600">
                  Pengalaman Belajar yang Luar Biasa! Saya sangat menikmati
                  mengikuti Kelas Python Programming ini. Para pengajar
                  benar-benar ahli di bidang mereka dan memiliki cara mengajar
                  yang interaktif dan mudah dipahami. Saya merasa sangat
                  terbantu dengan pendekatan berbasis proyek yang diterapkan di
                  kelas ini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailKursus;
