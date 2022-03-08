import React, { useState, useRef } from 'react';
import Sidebar from './Sidebar';
import { BsTwitter } from 'react-icons/bs';

function Navbar() {
  const [showSide, setShowSide] = useState(false);
  const btnSide = useRef(null);

  function handleShowSideBar(e) {
    if (e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.remove('active');
      document.body.classList.remove('overflow-hidden');
      setShowSide(false);
    } else {
      e.currentTarget.classList.add('active');
      document.body.classList.add('overflow-hidden');
      setShowSide(true);
    }
  }

  function handleOverlay() {
    btnSide.current.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
    setShowSide(false);
  }

  return (
    <nav
      className='relative flex items-center  pl-[20px]
    lg:py-[30px] lg:px-[35px]'
    >
      <div className='twitterProfile mr-auto'>
        <a
          href={`/`}
          className='font-semibold text-[.87rem] text-[#374151] hover:text-[#6b7280] transition'
        >
          @MEddarhri
        </a>
      </div>
      <ul className='hidden lg:flex items-center space-x-8'>
        <li className='text-[.87rem] font-semibold text-[#111827]'>
          <a href='#about' className='hover:text-[#6b7280] transition'>
            About
          </a>
        </li>
        <li className='text-[.87rem] font-semibold text-[#111827]'>
          <a href='#tools' className='hover:text-[#6b7280] transition'>
            Tools
          </a>
        </li>
        <li className='text-[.87rem] font-semibold text-[#111827]'>
          <a href='#projects' className='hover:text-[#6b7280] transition'>
            Projects
          </a>
        </li>
        <li className='text-[.87rem] font-semibold text-[#111827]'>
          <a href='#contactme' className='hover:text-[#6b7280] transition'>
            Contact me
          </a>
        </li>
        <li className='text-[.87rem] font-semibold text-[#111827]'>
          <a
            href={'https://exm-blog.vercel.app'}
            target={'_blank'}
            rel='noreferrer'
            className='hover:text-[#6b7280] transition'
          >
            {`Blog ->`}
          </a>
        </li>
        <li>
          <a
            href={'https://twitter.com/MokhtarExM'}
            target={'_blank'}
            rel='noreferrer'
          >
            <BsTwitter className='text-[#9ca3af] text-[1.25rem] hover:text-[#6b7280] transition' />
          </a>
        </li>
      </ul>
      <button
        className='bg-transparent p-[20px]  z-20 showSide lg:hidden'
        onClick={handleShowSideBar}
        ref={btnSide}
      >
        <span className='block w-[16px] bg-[#6b7280] h-[2px] my-[4px] origin-right rounded-[3px] transition'></span>
        <span className='block w-[16px] bg-[#6b7280] h-[2px] my-[4px] origin-right rounded-[3px] transition'></span>
        <span className='block w-[16px] bg-[#6b7280] h-[2px] my-[4px] origin-right rounded-[3px] transition'></span>
      </button>
      <Sidebar
        showSide={showSide}
        setShowSide={setShowSide}
        btnSide={btnSide}
      />
      {showSide && (
        <div
          className='overlay  backdrop-blur-[4px] bg-[#0002] w-full h-[150vh] absolute top-0 right-0 left-0'
          onClick={handleOverlay}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
