import React, { useState } from "react";
import Subtract from "../assets/Subtract.png";
import highlight from "../assets/highlight.png";
import ui from "../assets/ui.png";
import ui2 from "../assets/ui2.png";
import farhan from "../assets/farhan.png";

const Home = () => {
  const [activeTab, setActiveTab] = useState("highlight");
  const [testimonials, setTestimonials] = useState([
    {
      name: "Farhan Azidan",
      review:
        " Great amenities and peaceful environment and teacher is friendly",
      rating: 5,
    },
    {
      name: "Farhan Azidan",
      review:
        " Great amenities and peaceful environment and teacher is friendly",
      rating: 5,
    },
  ]);

  const [formInput, setFormInput] = useState({
    name: "",
    review: "",
    rating: 5,
  });

  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTestimonials([...testimonials, formInput]);
    setFormInput({ name: "", review: "", rating: 5 });
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    // Handle contact form submission (e.g., send data to a server or API)
    console.log("Contact Form Submitted", contactForm);
    setContactForm({ fullName: "", email: "", message: "" });
  };

  return (
    <div className="bg-white" style={{ minHeight: "100vh" }}>
      <section className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl text-blue-600 mb-2">
              Welcome to Your New Home
            </h2>
            <div className="flex justify-center md:justify-start mb-4">
              <span className="bg-gray-200 text-blue-600 px-2 py-1 rounded mr-2">
                Comfortable Living
              </span>
              <span className="bg-gray-200 text-blue-600 px-2 py-1 rounded">
                Convenient
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-semibold mb-4">
              Selamat Datang
            </h1>
            <h2 className="text-5xl md:text-6xl text-blue-600 font-bold mb-4">
              Di Kelas Online Kami.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Di Sini, kami menawarkan berbagai kelas desain yang dirancang
              untuk mengembangkan kreativitas dan pengetahuan dengan design
              thinking.
            </p>
            <div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded mr-4">
                Get Started
              </button>
              <button className="bg-white border-blue-600 text-blue-600 py-2 px-4 rounded">
                Sign In
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={Subtract}
              alt="Online Class"
              className="w-full md:max-w-md h-auto object-cover rounded"
            />
          </div>
        </div>
      </section>

      <section className="text-center py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded shadow">
            <p>Profesi</p>
            <h2 className="text-2xl font-bold">10+</h2>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded shadow">
            <p>Keberhasilan</p>
            <h2 className="text-2xl font-bold">99%</h2>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded shadow">
            <p>Kursus</p>
            <h2 className="text-2xl font-bold">400+</h2>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded shadow">
            <p>Pelajar</p>
            <h2 className="text-2xl font-bold">1000+</h2>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-5xl md:text-6xl text-blue-600 font-bold mb-2">
              Highlight Kelas Untuk
            </h2>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Tempatmu Belajar
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Di sini kami menawarkan kategori kelas untuk anda yang ingin
              belajar desain dan coding.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={highlight}
              alt="Online Class"
              className="w-full md:max-w-md h-auto object-cover rounded"
            />
          </div>
        </div>
      </section>

      <section className="text-center py-10 bg-white mb-6">
        <div className="flex justify-center mb-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg mr-2">
            Highlight Course
          </button>
          <button className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg">
            Kelas Popular
          </button>
        </div>
        {activeTab === "highlight" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {[
              {
                title: "Kursus Gratis",
                description: "Cek Beberapa Kursus Gratis",
                img: ui,
              },
              {
                title: "Promo",
                description: "Cek Beberapa Kursus Gratis",
                img: ui2,
              },
              {
                title: "Kursus Popular",
                description: "Cek Beberapa Kursus Gratis",
                img: ui2,
              },
              {
                title: "Konten Terbaru",
                description: "Cek Beberapa Kursus Gratis",
                img: ui2,
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white border shadow-lg rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                    <h2 className="text-xl font-bold mb-2 text-white">
                      {card.title}
                    </h2>
                    <p className="text-white">{card.description}</p>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
                      See
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="text-center py-20 bg-white">
        <h2 className="text-4xl md:text-5xl text-blue-600 font-bold mb-8">
          Testimonials
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Find out what our residents have to say about living here
        </p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
          <form
            className="bg-white border shadow-lg rounded-lg p-6 w-full md:w-1/2"
            onSubmit={handleFormSubmit}
          >
            <h3 className="text-2xl font-bold mb-4 ml-3">
              Submit your testimonial
            </h3>
            <div className="mb-4">
              <label className="block text-left mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={formInput.name}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2">Review:</label>
              <textarea
                name="review"
                value={formInput.review}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2">Rating:</label>
              <select
                name="rating"
                value={formInput.rating}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              >
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded">
              Submit
            </button>
          </form>
          <div className="w-full md:w-1/2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border shadow-lg rounded-lg p-6 mb-4"
              >
                <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                <p className="text-gray-600 mb-2">{testimonial.review}</p>
                <p className="text-yellow-500">
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold">Admin</h2>
            <div className="flex justify-center md:justify-start mb-4">
              <span className="bg-gray-200 text-blue-600 px-2 py-1 rounded mr-2">
                Home Seeker
              </span>
              <span className="bg-gray-200 text-blue-600 px-2 py-1 rounded">
                Property Enthusiast
              </span>
            </div>
            <p className="text-lg md:text-xl">
              Your dedicated housing consultant
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <button className="bg-white text-blue-600 py-2 px-4 rounded">
              Contact Now
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-6">
              Have any questions? We'd love to hear from you.
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Address:</strong> 1234 Street Name, City, State, Zip Code
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="text-lg text-gray-600">
              <strong>Email:</strong> info@company.com
            </p>
          </div>
          <form
            className="bg-white border shadow-lg rounded-lg p-6 w-full md:w-1/2"
            onSubmit={handleContactFormSubmit}
          >
            <div className="mb-4">
              <label className="block mb-2 text-lg font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={contactForm.fullName}
                onChange={handleContactInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-lg font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleContactInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-lg font-medium">Message</label>
              <textarea
                name="message"
                value={contactForm.message}
                onChange={handleContactInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
