"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const Navbar = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navbarRef = useRef(null);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleMenuItemClick = (sectionId) => {
    const section = sections[sectionId];
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', link: 'home' },
    { label: 'Testimonials', link: 'testimonials' },
    { label: 'Skills', link: 'skills' },
    { label: 'Works', link: 'works' },
    { label: 'Skills In Progress', link: 'skillsInProgress' },
    { label: 'Resume', link: 'resume' },
    { label: 'Contact', link: 'contact' },
    { label: 'Hire me!', link: 'hire' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    menuItems.forEach(menuItem => {
      const section = sections[menuItem.link];
      if (section && section.current) {
        observer.observe(section.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return (
    <div ref={navbarRef} className={`lg:max-w-[1440px] xl:px-[90px] mx-auto m-auto px-[20px] py-[20px] ${activeSection ? 'fixed-navbar' : ''}`}>
      <div className='hidden md:block '>
        <div className='flex flex-row justify-between items-center menubars'>
          <div>
            <h1 className='font-sans text-[35px] text-[#7746DB] font-bold'>MV</h1>
          </div>

          <div>
            <ul className='flex flex-row gap-[35px] text-white items-center'>
              {menuItems.map((menuItem, index) => (
                <li
                  key={index}
                  className={`font-sans text-[16px] font-semibold cursor-pointer ${
                    index === menuItems.length - 1 ? 'last-item bg-gradient px-[30px] rounded-[50px] py-[10px]' : 'relative'
                  } ${activeSection === menuItem.link ? 'active-menu-item' : ''}`}
                  onClick={() => handleMenuItemClick(menuItem.link)}
                >
                  <span>{menuItem.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='md:hidden'>
        <>
          <div className='flex flex-row justify-between'>
            <button
              className='text-white text-[22px] bg-gradient2 w-[40px] h-[40px] rounded-[50px]'
              onClick={toggleDrawer}
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div>
              <h1 className='font-sans text-[35px] text-[#7746DB] font-bold'>MV</h1>
            </div>
          </div>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            className='bla bla bla drawer_section'
            style={{ height: '-webkit-fill-available' }}
          >
            <div>
              <ul className='flex flex-col gap-[22px] text-white p-[20px]'>
                {menuItems.map((menuItem, index) => (
                  <li
                    key={index}
                    className={`font-sans text-[16px] font-semibold cursor-pointer ${
                      index === menuItems.length - 1 ? 'last-item bg-gradient px-[30px] rounded-[50px] py-[10px]' : 'relative'
                    } ${activeSection === menuItem.link ? 'active-menu-item' : ''}`}
                    onClick={() => handleMenuItemClick(menuItem.link)}
                  >
                    <span>{menuItem.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Drawer>
        </>
      </div>
    </div>
  );
};

export default Navbar;
