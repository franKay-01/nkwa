import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import bgImage from '../assets/images/nkwa7.jpg'
import layerImage from '../assets/layer_green.png'
import leafImg from '../assets/layer.png'

export default function LandbankPage(){
  return (
    <>
      <Navbar/>
      <div
        className="relative bg-cover bg-center min-h-[500px] flex items-end justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <h1 className='landbank-header absolute top-[35%]'>Secure Tomorrow’s Value, Today through Land Banking</h1>
      </div>
      <div className='hidden md:flex items-end justify-center'>
        <div className="absolute bottom-[1rem] max-w-7xl mx-auto justify-center p-6 md:p-10">
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='landbank-card'>
              <img src={layerImage} className="h-24 mb-3"/>
              <div className='flex flex-row gap-2'>
                <h1 className='landbank-card-text'>East Airport</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="#181818"/>
                </svg>
              </div>
            </div>
            <div className='landbank-card'>
              <img src={layerImage} className="h-24 mb-3"/>
              <div className='flex flex-row gap-2'>
                <h1 className='landbank-card-text'>Kuntunse</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="#181818"/>
                </svg>
              </div>
            </div>
            <div className='landbank-card'>
              <img src={layerImage} className="h-24 mb-3"/>
              <div className='flex flex-row gap-2'>
                <h1 className='landbank-card-text'>Bundaase</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="#181818"/>
                </svg>
              </div>
            </div>
            <div className='landbank-card'>
              <img src={layerImage} className="h-24 mb-3"/>
              <div className='flex flex-row gap-2'>
                <h1 className='landbank-card-text'>Akosombo</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="#181818"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden md:flex flex items-end justify-center'>
        <div className="absolute lg:bottom-[-18rem] bottom-[-34rem] w-full max-w-7xl mx-auto flex justify-center p-6">
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='landbank-card'>
              <img src={layerImage} className="h-24 mb-3"/>
              <div className='flex flex-row gap-2'>
                <h1 className='landbank-card-text'>Spintex</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="#181818"/>
                </svg>
              </div>
            </div>
            <div className='landbank-card'>
              <img src={layerImage} className="h-24 mb-3"/>
              <div className='flex flex-row gap-2'>
                <h1 className='landbank-card-text'>Adombrobe</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="#181818"/>
                </svg>
              </div>
            </div>
            <div className='landbank-card'>
              <img src={layerImage} className="h-24 mb-3"/>
              <div className='flex flex-row gap-2'>
                <h1 className='landbank-card-text'>Senchi</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="#181818"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
      <div className='flex justify-center'>
      <div className='relative grid md:hidden grid-cols-1 gap-8 mt-4'>
        <div className='landbank-card'>
          <img src={layerImage} className="h-24 mb-3"/>
          <div className='flex flex-row gap-2'>
            <h1 className='landbank-card-text'>East Airport</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="#181818"/>
            </svg>
          </div>
        </div>
        <div className='landbank-card'>
          <img src={layerImage} className="h-24 mb-3"/>
          <div className='flex flex-row gap-2'>
            <h1 className='landbank-card-text'>Kuntunse</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="#181818"/>
            </svg>
          </div>
        </div>
        <div className='landbank-card'>
          <img src={layerImage} className="h-24 mb-3"/>
          <div className='flex flex-row gap-2'>
            <h1 className='landbank-card-text'>Bundaase</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="#181818"/>
            </svg>
          </div>
        </div>
        <div className='landbank-card'>
          <img src={layerImage} className="h-24 mb-3"/>
          <div className='flex flex-row gap-2'>
            <h1 className='landbank-card-text'>Akosombo</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="#181818"/>
            </svg>
          </div>
        </div>
        <div className='landbank-card'>
          <img src={layerImage} className="h-24 mb-3"/>
          <div className='flex flex-row gap-2'>
            <h1 className='landbank-card-text'>Spintex</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="#181818"/>
            </svg>
          </div>
        </div>
        <div className='landbank-card'>
          <img src={layerImage} className="h-24 mb-3"/>
          <div className='flex flex-row gap-2'>
            <h1 className='landbank-card-text'>Adombrobe</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="#181818"/>
            </svg>
          </div>
        </div>
        <div className='landbank-card'>
          <img src={layerImage} className="h-24 mb-3"/>
          <div className='flex flex-row gap-2'>
            <h1 className='landbank-card-text'>Senchi</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="#181818"/>
            </svg>
          </div>
        </div>
        
        
      </div>
      </div>
      <section className="relative py-1 px-1 md:py-16 md:px-6 lg:py-16 lg:px-6 lg:px-20 overflow-hidden mt-0 md:mt-28 lg:mt-28 h-[0vh] md:h-[85vh] lg:h-[50vh]">
      </section>
      <Footer/>
    </>
  )
}