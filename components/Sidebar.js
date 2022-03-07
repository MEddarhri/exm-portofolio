import React from 'react';
import { BsTwitter } from 'react-icons/bs';

function Sidebar({ showSide, setShowSide, btnSide }) {
  function handleClickSideBar(e) {
    if (e.target.localName == 'a') {
      document.body.classList.remove('overflow-hidden');
      btnSide.current.classList.remove('active');
      setShowSide(false);
    }
  }

  return (
    <div
      className={`absolute shadow-lg z-10 w-[350px] max-w-full bg-white right-0 top-0 rounded-[10px] rounded-tr-[15px] ${
        showSide == false && 'invisible opacity-0 pointer-events-none'
      }`}
    >
      <ul className='p-5 grid gap-5' onClick={handleClickSideBar}>
        <li className=' pl-3 text-[1rem] font-semibold text-[#111827]'>
          <a className='target' href='#about'>
            About
          </a>
        </li>
        <li className=' pl-3 text-[1rem] font-semibold text-[#111827]'>
          <a className='target' href='#tools'>
            Tools
          </a>
        </li>
        <li className=' pl-3 text-[1rem] font-semibold text-[#111827]'>
          <a className='target' href='#projects'>
            Projects
          </a>
        </li>
        <li className=' pl-3 text-[1rem] font-semibold text-[#111827]'>
          <a className='target' href='#contactme'>
            Contact me
          </a>
        </li>
        <li className=' pl-3 text-[1rem] font-semibold text-[#111827]'>
          <a className='target' href='#blog'>
            Blog ->
          </a>
        </li>
        <li className=' pl-3 text-[1rem] font-semibold text-[#111827]'>
          <a href='#'>
            <BsTwitter className='text-[#9ca3af] text-[1.25rem]' />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
