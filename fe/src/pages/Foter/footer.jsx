import React from "react";

const footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Tentang Future</h3>
            <p className="Text-sm">
              Future adalah platform belajar yang memberikan akses kepada kursus
              online berkualitas untuk membantu Anda meningkatkan skill dan
              meraih mimpi.
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Kontak</h3>
            <p className="text-sm">Email: info@future.com</p>
            <p className="text-sm">+62 812 43939 22</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
