import logoImg from '../assets/logo.png'
import { Link } from 'react-router-dom';
import FacebookImg from '../assets/FacebookLogo.png'
import InstagramImg from '../assets/InstagramLogo.png'
import TiktokImg from '../assets/TiktokLogo.png'
import YoutubeImg from '../assets/YoutubeLogo.png'

export default function Footer(){
  return (
    <>
      <div className='block lg:block md:block max-w-[90rem] mx-auto p-8'>
        <div className='flex flex-col md:flex-col lg:flex-row justify-between p-2'>
          <div className='flex flex-col gap-2 mb-4 md:mb-0'>
            <img  className='w-16' src={logoImg} alt=""/>
            <h1 className='footer-header'>
              NKWA Homes is a real estate company based in Accra, Ghana. We build and manage modern, high-quality homes that offer comfort, style, and great investment value — whether you live in Ghana or abroad.
            </h1>
          </div>
          <div className='flex flex-col md:flex-col lg:flex-row gap-10 md:gap-20'>
            <div className='flex flex-col gap-4'>
              <h1 className='footer-sub-header'>Contact</h1>
              <h1 className='footer-list mt-4'>14 Airport road, Accra, Ghana</h1>
              <h1 className='footer-list'>info@nkwa.homes</h1>
              <h1 className='footer-list'>233 908 723 1283</h1>
              <h1 className='footer-list'>233 908 723 1283</h1>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='footer-sub-header'>Company</h1>
              <h1 className='footer-list mt-4'>About</h1>
              <h1 className='footer-list'>Services</h1>
              <h1 className='footer-list'>Terms and Conditions</h1>
              <h1 className='footer-list'>Privacy Policies</h1>
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='footer-sub-header'>Services</h1>
              <h1 className='footer-list mt-4'>Joint Venture Development & Partnerships</h1>
              <h1 className='footer-list'>Property Development</h1>
              <h1 className='footer-list'>Land Acquisition & Planning</h1>
              <h1 className='footer-list'>Architectural Services</h1>
              <h1 className='footer-list'>Property Management</h1>
              <h1 className='footer-list'>Property Sales & Renting</h1>
              <h1 className='footer-list'>Real Estate Investment</h1>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row justify-between mt-20'>
          <h1 className='copy-right-text'>Copyright ©2025 NKWA Homes - All Rights Reserved</h1>
          <div className='flex flex-row gap-4'>
            <img  className='w-8 h-8' src={TiktokImg} alt=""/>
            <img  className='w-8 h-8' src={InstagramImg} alt=""/>
            <img  className='w-8 h-8' src={FacebookImg} alt=""/>
            <img  className='w-8 h-8' src={YoutubeImg} alt=""/>
          </div>
        </div>
      </div>
      
      <div className='block lg:hidden md:hidden'>
        <div className='grid grid-cols-1 p-8'>
          
        </div>
      </div>
    </>
  );   
}