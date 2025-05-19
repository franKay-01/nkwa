import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import bgImage from '../assets/images/nkwa10.jpg'
import constructionImg from '../assets/construction.png'

export default function ComingSoonPage(){
  return (
    <>
      <Navbar/>
      <div
        className="relative bg-cover bg-center min-h-[700px] flex items-end justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <img className='absolute top-[20%] w-24' src={constructionImg}/>
        <h1 className='landbank-header absolute top-[35%]'>Page Under Construction</h1>
        <h1 className='landbank-header-sub absolute top-[42%] md:top-[48%]'>Check back soon</h1>
      </div>
      <Footer/>
    </>
  )
}