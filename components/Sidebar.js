import React, { useEffect } from 'react';
import { BsTwitter } from 'react-icons/bs';

function Sidebar({ showSide, setShowSide, btnSide }) {
  function handleClickSideBar(e) {
    if (e.target.localName == 'a') {
      document.body.classList.remove('overflow-hidden');
      btnSide.current.classList.remove('active');
      setShowSide(false);
    }
  }
  useEffect(() => {
    window.addEventListener('resize', (e) => {
      if (window.innerWidth > 1024) {
        document.body.classList.remove('overflow-hidden');
        btnSide.current.classList.remove('active');
        setShowSide(false);
      }
    });
  }, []);

  return (
    <div
      className={`absolute transition  duration-300  shadow-lg z-10 w-[350px] max-w-full bg-white right-0 top-0 rounded-[10px] rounded-tr-[15px] ${
        showSide == false && 'invisible opacity-0 pointer-events-none'
      }`}
    >
      <ul className='p-5 grid gap-5' onClick={handleClickSideBar}>
        <li className=' pl-3 text-[1rem] font-semibold text-[#111827]'>
          <a href='#about'>About</a>
        </li>
        <li className=' pl-3 text-[1rem] font-semibold text-[#111827]'>
          <a href='#tools'>Tools</a>
        </li>
        <li className=' pl-3 text-[1rem] font-semibold text-[#111827]'>
          <a href='#projects'>Projects</a>
        </li>
        <li className=' pl-3 text-[1rem] font-semibold text-[#111827]'>
          <a href='#contactme'>Contact me</a>
        </li>
        <li className=' pl-3 text-[1rem] font-semibold text-[#111827]'>
          <a
            href={'https://exm-blog.vercel.app'}
            target={'_blank'}
            rel='noreferrer'
          >
            {` Blog ->`}
          </a>
        </li>
        <li className=' pl-3 text-[1rem] font-semibold text-[#111827]'>
          <a
            href={'https://twitter.com/MokhtarExM'}
            target={'_blank'}
            rel='noreferrer'
          >
            <BsTwitter className='text-[#9ca3af] text-[1.25rem] pointer-events-none' />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
