import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import { Popover } from '@headlessui/react'

export default function Navbar() {

  return (
    <Disclosure as="nav" className="bg-white nav-position">
      {({ open }) => (
        <>
          <div className="mt-3 max-w-[90rem] mx-auto px-2 sm:px-6 lg:px-8 h-20">
            <div className="relative flex flex-row items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center mt-4 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                  <XIcon className="block h-9 w-9" aria-hidden="true" />
                  ) : (
                  <MenuIcon className="block h-12 w-12" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="justify-center flex-shrink-0 flex sm:justify-start mr-12">
                <h6 className="uppercase font-semibold text-black flex items-center justify-center md:justify-start">
                  <img alt='' className="w-28 p-4" src={Logo} />
                </h6>
              </div>

              <div className="hidden lg:block md:block lg:w-auto">
                <div className="flex space-x-4">
                    <Link to={'/'} spy={true} smooth={true} className={'navbar-title text-default-blue cursor-pointer px-3 py-2 rounded-md text-lg font-normal'}>
                      Home
                    </Link>
                    <Popover className="relative px-3 py-2 rounded-md font-normal text-lg text-default-blue learn-display">
                      <Popover.Button className="inline-flex items-center whitespace-nowrap gap-1 focus:outline-none navbar-title">
                        About Us
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className="w-5 h-5">
                          <path d="M11 8L8 11L5 8" stroke="#181818" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </Popover.Button>

                      <Popover.Panel className="absolute z-10">
                        <div className="grid grid-cols-1 menu-bar">
                          <Link
                            to={"/services"}
                            spy={true}
                            smooth={true}
                            className="mb-6"
                          >
                            <h1 className="text-lg text-default-blue cursor-pointer">
                              Services
                            </h1>
                          </Link>
                          <Link
                            to={"/soon"}
                            spy={true}
                            smooth={true}
                          >
                            <h1 className="text-lg text-default-blue cursor-pointer">
                              Teams
                            </h1>
                          </Link>
                        </div>
                      </Popover.Panel>
                    </Popover>
                    <Popover className="relative px-3 py-2 rounded-md font-normal text-lg text-default-blue learn-display">
                      <Popover.Button className="inline-flex items-center whitespace-nowrap gap-1 focus:outline-none navbar-title">
                        Properties
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className="w-5 h-5">
                          <path d="M11 8L8 11L5 8" stroke="#181818" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </Popover.Button>

                      <Popover.Panel className="absolute z-10">
                        <div className="grid grid-cols-1 menu-bar">
                          <Link
                            to={"/soon"}
                            spy={true}
                            smooth={true}
                            className="mb-6"
                          >
                            <h1 className="text-lg text-default-blue cursor-pointer">
                              For rent
                            </h1>
                          </Link>
                          <Link
                            to={"/soon"}
                            spy={true}
                            smooth={true}
                            className="mb-6"
                          >
                            <h1 className="text-lg text-default-blue cursor-pointer">
                              For Sale
                            </h1>
                          </Link>
                          <Link
                            to={"/soon"}
                            spy={true}
                            smooth={true}
                          >
                            <h1 className="text-lg text-default-blue cursor-pointer">
                              Commercial
                            </h1>
                          </Link>
                        </div>
                      </Popover.Panel>
                    </Popover>
                    <Link to={'/landbank'} spy={true} smooth={true} className={'navbar-title text-default-blue cursor-pointer px-3 py-2 rounded-md text-lg font-normal'}>
                      Land Bank
                    </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <Disclosure.Panel className="sm:hidden mobile-nav-bg">
            <div className="px-2 pt-2 pb-3 flex flex-col">
              <Link
                to={"/"}
                spy={true}
                smooth={true}
                className={"block px-3 py-2 mobile-nav-text"}
              >
                Home
              </Link>
              <Popover className="relative px-3 rounded-md font-normal text-default-blue learn-display">
                <Popover.Button className="learn-display mobile-nav-text">
                  About Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="mobile-menu-drop-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Popover.Button>

                <Popover.Panel className="mt-4">
                  <div className="grid grid-cols-1 mobile-menu-bar">
                    <Link
                      to={"/services"}
                      spy={true}
                      smooth={true}
                      className={"mb-6 mobile-dropdown-text"}
                    >
                      Services
                    </Link>
                    <Link
                      to={"/soon"}
                      spy={true}
                      smooth={true}
                      className="mb-6 mobile-dropdown-text"
                    >
                      Teams
                    </Link>
                  </div>
                </Popover.Panel>
              </Popover>
              <Popover className="relative px-3 rounded-md font-normal text-default-blue learn-display">
                <Popover.Button className="learn-display mobile-nav-text">
                  Properties
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="mobile-menu-drop-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Popover.Button>

                <Popover.Panel className="mt-4">
                  <div className="grid grid-cols-1 mobile-menu-bar">
                    <Link
                      to={"/soon"}
                      spy={true}
                      smooth={true}
                      className={"mb-6 mobile-dropdown-text"}
                    >
                      For Sale
                    </Link>
                    <Link
                      to={"/soon"}
                      spy={true}
                      smooth={true}
                      className="mb-6 mobile-dropdown-text"
                    >
                      For Rent
                    </Link>
                    <Link
                      to={"/soon"}
                      spy={true}
                      smooth={true}
                      className="mb-6 mobile-dropdown-text"
                    >
                      Commercial
                    </Link>
                  </div>
                </Popover.Panel>
              </Popover>
              <Link
                to={"/landbank"}
                spy={true}
                smooth={true}
                className={"block px-3 py-2 mobile-nav-text"}
              >
                Land Bank
              </Link>
            </div>
          </Disclosure.Panel>
          
          {/* Mobile */}
        </>
      )}
    </Disclosure>
  )
}

