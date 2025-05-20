import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import bgImage from '../assets/images/nkwa12.jpg'
import leafImg from '../assets/layer.png'
import devIcon from '../assets/icons/property-dev.png';
import landIcon from '../assets/icons/land-planning.png';
import jointIcon from '../assets/icons/joint-ventures.png';
import archIcon from '../assets/icons/architecture.png';
import manageIcon from '../assets/icons/property-manage.png';
import salesIcon from '../assets/icons/property-sales.png';
import investIcon from '../assets/icons/investment.png';

export default function AboutPage(){
  const services = [
    { label: 'Property Development', icon: devIcon },
    { label: 'Land Acquisition & Planning', icon: landIcon },
    { label: 'Joint Ventures & Partnerships', icon: jointIcon },
    { label: 'Architectural Services', icon: archIcon },
  ];

  const services_alt = [
    { label: 'Property Management', icon: manageIcon },
    { label: 'Property Sales & Renting', icon: salesIcon },
    { label: 'Real Estate Investment', icon: investIcon },
  ]

  return(
    <>
      <Navbar/>
      <div
        className="relative bg-cover bg-center min-h-[500px] flex items-end justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="bg-white absolute bottom-[-4rem] w-full max-w-6xl mx-auto p-6 md:p-10 shadow-lg rounded-t-lg text-center">
          <p className="core-value-main tracking-widest mb-4 uppercase">
            Our Core Values
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <span className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className='core-value-header'>Effectiveness</span>
            </span>
            <span className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className='core-value-header'>Integrity</span>
            </span>
            <span className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className='core-value-header'>Innovation</span>
            </span>
            <span className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className='core-value-header'>Efficiency</span>
            </span>
          </div>
        </div>
      </div>
      
      <section className="relative py-16 px-6 lg:px-20 bg-white overflow-hidden mt-28">
        {/* Leaf Background */}
        <img
          src={leafImg}
          alt="Leaf"
          className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 opacity-10 w-[80%] max-w-[800px] z-0"
        />

        {/* Vision and Mission */}
        <div className="relative z-10 flex flex-col gap-12 mb-16">
          <div className='flex flex-col md:flex-row lg:flex-row justify-between'>
            <h2 className="core-value-text-main border-l-4 border-green-700 pl-4 mb-2">
              Our Vision
            </h2>
            <p className="core-value-text w-[100%] md:w-[40%]">
              To be the preferred and leading Real Estate Brand in Ghana and beyond.
            </p>
          </div>
          <div className='flex flex-col md:flex-row lg:flex-row justify-between'>
            <h2 className="core-value-text-main border-l-4 border-green-700 pl-4 mb-2">
              Our Mission
            </h2>
            <p className="core-value-text w-[100%] md:w-[40%]">
              To develop and manage sustainable and affordable communities that meets every day needs of stakeholders.
            </p>
          </div>
        </div>

        {/* Services Header */}
        <h3 className="text-center core-services relative z-10 mb-10">
          Our Services
        </h3>

        {/* Services Grid */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center text-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={service.icon} alt={service.label} className="w-24 h-24 mb-3" />
              <p className="core-services-text max-w-[205px]">{service.label}</p>
            </div>
          ))}
        </div>
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center text-center mt-20">
          {services_alt.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={service.icon} alt={service.label} className="w-24 h-24 mb-3" />
              <p className="core-services-text max-w-[205px]">{service.label}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  )
}