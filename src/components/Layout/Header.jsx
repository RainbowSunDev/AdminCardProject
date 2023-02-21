/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Candidates', href: '#', current: true },
    { name: 'Project', href: '#', current: false },
    { name: 'Lists', href: '#', current: false },
    { name: 'Integrations', href: '#', current: false },
    { name: 'Company', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const Header = () => {
    return(
    <Disclosure as="nav" className="bg-white shadow-[inset_0px_-1px_0px_rgba(237,237,237,1)]">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 lg:px-6">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-themePurple1 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className='text-[24px] font-semibold text-themeGrey3 block lg:hidden'>
                    Search
                  </h1>
                  <h1 className='text-[24px] font-semibold text-themeGrey3 hidden lg:block'>
                    Search
                  </h1>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex bg-[#F3F4F6]">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-themePurple1 text-white' : 'text-themeGrey2 hover:bg-[#ccbcf7] hover:text-white',
                          'w-[126px] h-[38px] rounded-[4px] text-sm font-medium flex items-center justify-center'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                <button
                  type="button"
                  className="text-themePurple1 hover:text-[#5734b8] border border-solid border-themeGrey1 rounded-lg w-[93px] h-[36px] text-sm font-semibold hidden xl:block"
                >
                  Feedback
                </button>

                <div className="vertical border border-solild border-themeGrey1 h-[36px] mx-6 hidden xl:block"></div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="flex items-center">
                      <div className="rounded-full text-sm">
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="h-9 w-9 rounded-full"
                            src="https://ucarecdn.com/206ec06d-a313-4d01-93f6-73d4e60875c4/avatar.png"
                            alt="avatar"  
                        />

                      </div>

                      <div className='ml-[12px] hidden lg:block'>
                        <p className='text-themeGrey3 text-xs font-semibold'>Esther Howard</p>
                        <p className='text-themeGrey2 text-[10px] font-medium mt-[2px]'>ester@gmail.com</p>
                      </div>

                      <div className='text-themeGrey4 w-6 h-6  items-center justify-center ml-2 hidden lg:flex'>
                        <img src='/image/icons/downarrow.svg' alt='downarrow' />
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-themeGrey3 py-1 shadow-lg  focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <div className={classNames(active ? 'bg-[#34314d]' : '', 'mt-2 cursor-pointer' )}>
                            <span className="absolute top-0 right-2 w-3 h-3 bg-themeGrey3 transform rotate-45 -mt-1 ml-6"></span>
                            <div className="flex items-center justify-center">
                                <div className="rounded-full text-sm py-2">
                                    <img
                                        className="h-9 w-9 rounded-full"
                                        src="https://ucarecdn.com/206ec06d-a313-4d01-93f6-73d4e60875c4/avatar.png"
                                        alt="avatar"  
                                    />
                                </div>
                                <div className='ml-[12px]'>
                                    <p className='text-white text-base font-medium'>Esther Howard</p>
                                    <p className='text-themeGrey4 text-sm mt-[-2px]'>Admin</p>
                                </div>
                            </div>
                            <hr className='border border-solid border-[#242047] w-[158px] mx-auto'/>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-[#34314d]' : '', 'px-4 py-2 text-sm text-white flex items-center')}
                          >
                            <img src='/image/icons/setting.svg' alt='setting' />
                            <span className='ml-2'>Settings</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-[#34314d]' : '', 'px-4 py-2 text-sm text-white flex items-center')}
                          >
                            <img src='/image/icons/signout.svg' alt='signout' />
                            <span className='ml-2'>Sign out</span>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-themePurple1 text-white' : 'text-gray-300 hover:bg-[#ccbcf7] hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    )
}