import React from "react";
import { FaBook, FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import recta from "../../assets/recta.png";
import image_container from "../../assets/image_container.png";
import image_container2 from "../../assets/image_container2.png";
import image from "../../assets/image.png";

const Course = () => {
  return (
    <div className="bg-white" style={{ minHeight: "100vh" }}>
      <section className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-6xl text-blue-600 font-bold mb-4">
              Explore Courses
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Find the perfect course for you
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded">
              Browse Courses
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={recta}
              alt="Courses"
              className="w-full md:w-3/4 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-600 mb-10">
            Course Categories
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <FaBook
                className="mx-auto mb-2 text-blue-600 hover:text-blue-700 cursor-pointer"
                size={50}
              />
              <h3 className="text-lg font-medium">Academic Courses</h3>
              <p>Physics, Math, History</p>
            </div>
            <div className="text-center">
              <FaBriefcase
                className="mx-auto mb-2 text-blue-600 hover:text-blue-700 cursor-pointer"
                size={50}
              />
              <h3 className="text-lg font-medium">Professional Courses</h3>
              <p>Finance, Marketing, Management</p>
            </div>
            <div className="text-center">
              <FaLaptopCode
                className="mx-auto mb-2 text-blue-600 hover:text-blue-700 cursor-pointer"
                size={50}
              />
              <h3 className="text-lg font-medium">Technical Skills</h3>
              <p>Programming, Design, IT</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Pilihan Kelas Untukmu
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <button className="bg-blue-600 text-white py-2 px-4 rounded">
              Kelas Populer
            </button>
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded">
              Kelas Terbaru
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="DetailKursus" className="block">
              <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                <img
                  src={image_container2}
                  alt="Digital Marketing Fundamentals"
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-medium">
                  Digital Marketing Fundamentals
                </h3>
                <p className="text-gray-600">Desain Web</p>
              </div>
            </Link>
            <Link
              to="/courses/python-programming-masterclass"
              className="block"
            >
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={image}
                  alt="Python Programming Masterclass"
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-medium">
                  Python Programming Masterclass
                </h3>
                <p className="text-gray-600">Advanced Level</p>
              </div>
            </Link>
            <Link to="/courses/ui-ux-design-essentials" className="block">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={image_container}
                  alt="UI/UX Design Essentials"
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-medium">UI/UX Design Essentials</h3>
                <p className="text-gray-600">Beginner Level</p>
              </div>
            </Link>

            <Link
              to="/courses/digital-marketing-fundamentals"
              className="block"
            >
              <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                <img
                  src={image_container2}
                  alt="Digital Marketing Fundamentals"
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-medium">
                  Digital Marketing Fundamentals
                </h3>
                <p className="text-gray-600">Desain Web</p>
              </div>
            </Link>
            <Link
              to="/courses/python-programming-masterclass"
              className="block"
            >
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={image}
                  alt="Python Programming Masterclass"
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-medium">
                  Python Programming Masterclass
                </h3>
                <p className="text-gray-600">Advanced Level</p>
              </div>
            </Link>
            <Link to="/courses/ui-ux-design-essentials" className="block">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={image_container}
                  alt="UI/UX Design Essentials"
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-medium">UI/UX Design Essentials</h3>
                <p className="text-gray-600">Beginner Level</p>
              </div>
            </Link>

            <Link
              to="/courses/digital-marketing-fundamentals"
              className="block"
            >
              <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                <img
                  src={image_container2}
                  alt="Digital Marketing Fundamentals"
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-medium">
                  Digital Marketing Fundamentals
                </h3>
                <p className="text-gray-600">Desain Web</p>
              </div>
            </Link>
            <Link
              to="/courses/python-programming-masterclass"
              className="block"
            >
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={image}
                  alt="Python Programming Masterclass"
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-medium">
                  Python Programming Masterclass
                </h3>
                <p className="text-gray-600">Advanced Level</p>
              </div>
            </Link>
            <Link to="/courses/ui-ux-design-essentials" className="block">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={image_container}
                  alt="UI/UX Design Essentials"
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-medium">UI/UX Design Essentials</h3>
                <p className="text-gray-600">Beginner Level</p>
              </div>
            </Link>

            {/* Repeat for other courses */}
          </div>
          <div className="text-center mt-10">
            <button className="bg-blue-600 text-white py-2 px-4 rounded">
              Lihat Semua Kelas
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-10">
            Testimonials
          </h2>
          <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 space-y-8 md:space-y-0">
            <div className="bg-white p-8 rounded-lg shadow-md md:w-1/3">
              <p className="text-lg text-gray-600 mb-6">
                "This platform has transformed my career. The courses are
                top-notch and the instructors are incredibly knowledgeable."
              </p>
              <h3 className="text-lg font-medium">Farhan Azida </h3>
              <p className="text-gray-600">Software Engineer</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md md:w-1/3">
              <p className="text-lg text-gray-600 mb-6">
                "I've learned so much from the courses here. The content is
                well-structured and easy to follow."
              </p>
              <h3 className="text-lg font-medium">Xaviera</h3>
              <p className="text-gray-600">Digital Marketer</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md md:w-1/3">
              <p className="text-lg text-gray-600 mb-6">
                "The technical skills I've gained have been invaluable. I highly
                recommend this platform to anyone looking to improve their
                skills."
              </p>
              <h3 className="text-lg font-medium">Farhan</h3>
              <p className="text-gray-600">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
