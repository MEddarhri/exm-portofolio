import React from 'react';

function Hero() {
  return (
    <main className='grid gap-6 px-[20px] sm:justify-center py-[80px]'>
      <h1 className='text-[1.8rem] sm:text-[3rem] font-extrabold text-center text-[#111827]'>
        {`Hi. I'm Mokhtar`}
      </h1>
      <p className='text-[#4b5563] text-center text-[1.125rem]'>
        Designer, Developer, Creator
      </p>
      <button className='bg-[#111827] block text-[.87rem] rounded-[.5rem] font-semibold text-white py-[18px] sm:px-[24px] sm:justify-self-center hover:bg-[#374151]'>
        {`Check out my blog ->`}
      </button>
    </main>
  );
}

export default Hero;
