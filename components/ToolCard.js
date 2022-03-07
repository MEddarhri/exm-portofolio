import React from 'react';

function ToolCard({ name, src, url }) {
  return (
    <div className='grid grid-rows-[180px_auto] sm:grid-rows-[200px] md:grid-rows-[230px_auto]  border overflow-hidden border-[#e5e7eb] rounded-[15px]'>
      <div className='image overflow-hidden'>
        <img
          className='object-cover w-full h-full block'
          src={src}
          alt={name}
        />
      </div>

      <div className='border-t border-t-[#e5e7eb] p-3 '>
        <p>{name}</p>
        <p className='underline text-[#4b5563]'>{url}</p>
      </div>
    </div>
  );
}

export default ToolCard;
