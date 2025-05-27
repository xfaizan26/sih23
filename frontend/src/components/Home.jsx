import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Replace with your actual relative image paths
import HeroImg from '../assets/ayush-hero.avif';
import AboutImg from '../assets/ayush-about.jpeg';
import MissionImg from '../assets/ayush-mission.jpg';
import WellnessImg from "../assets/ayush-wellness.avif";

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-green-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Welcome to Ayush Startup Portal</h1>
          <p className="text-lg text-gray-700 mb-8">
            Connecting innovation with Ayurveda. Find jobs, opportunities, and resources to grow in the holistic wellness ecosystem.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
            Get Started
          </button>

          <div className="mt-10 w-full h-64 overflow-hidden rounded-lg shadow-lg">
            <img src={HeroImg} alt="Ayush Hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-green-800 mb-4">About the Portal</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Ayush Startup Portal is a dedicated platform to support and empower startups working in Ayurveda, Yoga, Unani, Siddha, and Homeopathy.
            </p>
          </div>
          <img src={AboutImg} alt="About Ayush" className="w-full h-64 object-cover rounded-lg shadow" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To create a sustainable ecosystem for Ayurveda-based startups by providing visibility, talent, and support.
          </p>
          <div className="mt-8 w-full h-64 overflow-hidden rounded-lg shadow-lg">
            <img src={MissionImg} alt="Mission of Ayush" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img src={WellnessImg} alt="Ayush Wellness" className="w-full h-64 object-cover rounded-lg shadow" />
          <div>
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Opportunities in Ayurveda</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you're a job seeker, an Ayurvedic practitioner, or a startup founder, the portal offers curated listings and support.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-green-600 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Join the Ayush Revolution</h3>
        <p className="text-lg mb-6">Sign up today to explore career paths and build meaningful ventures in Ayurveda and holistic health.</p>
        <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded hover:bg-green-100 transition">
          Join Now
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
