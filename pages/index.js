import Head from 'next/head';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ToolCard from '../components/ToolCard';
import { toolsData } from '../data/tools';
import { projectsData } from '../data/projects';

export default function Home() {
  return (
    <div className='inter max-w-[1440px] mx-auto'>
      <Navbar />
      <Hero />
      <div
        id='about'
        className='px-[15px] sm:px-[30px] lg:px-0 pt-[80px] lg:max-w-[920px] lg:mx-auto'
      >
        <h1 className='text-[1.8rem] sm:text-[2.25rem] mb-[25px] text-[#111827] font-extrabold'>
          About me
        </h1>
        <p className='text-[#4b5563] mb-[25px] text-[1.125rem] leading-[1.75rem]'>
          Hi there! My name is Mokhtar. You can call me a designer, developer,
          or creator. Passionate front-end web developer with 2 years of
          experience using HTML, CSS, SASS, Javascript, React, Next JS, Strapi
          CMS, MongoDB to build all aspects of the user experience and user
          interface for client-facing landing pages.
        </p>
        {/* <p className='text-[#4b5563] text-[1.125rem] leading-[1.75rem]'>
          Today, I run Nothing, a community all about building websites, mostly
          from a frontend perspective. I also co-founded the Nothing Blog , a
          blog about Nothing (Science, tech, engineering, and math). I am
          planning to launch more projects soon.
        </p> */}
      </div>
      <div
        id='projects'
        className='px-[15px] sm:px-[30px] lg:px-0 pt-[50px] lg:max-w-[920px] lg:mx-auto'
      >
        <h1 className='text-[1.8rem] text-center sm:text-[2.25rem] mb-[25px] text-[#111827] font-extrabold md:text-left'>
          Projects
        </h1>
        <div className='grid gap-5 grid-cols-[300px] sm:grid-cols-[350px] md:grid-cols-[400px] justify-center lg:grid-cols-2'>
          {projectsData.map((item, index) => (
            <ToolCard
              key={index}
              name={item.name}
              src={item.src}
              url={item.url}
            />
          ))}
        </div>
      </div>
      <div
        id='tools'
        className='px-[15px] sm:px-[30px] lg:px-0 pt-[50px] lg:max-w-[920px] lg:mx-auto'
      >
        <h1 className='text-[1.8rem] text-center sm:text-[2.25rem] mb-[25px] text-[#111827] font-extrabold md:text-left'>
          Tools I use
        </h1>
        <div className='grid gap-5 grid-cols-[300px] sm:grid-cols-[350px] md:grid-cols-[400px] justify-center lg:grid-cols-2'>
          {toolsData.map((item, index) => (
            <ToolCard
              key={index}
              name={item.name}
              src={item.src}
              url={item.url}
            />
          ))}
        </div>
      </div>
      <div
        id='contactme'
        className='px-[15px] sm:px-[30px] lg:px-0 py-[100px] lg:max-w-[920px] lg:mx-auto'
      >
        <h1 className='text-[1.8rem] text-center sm:text-[2.25rem] mb-[25px] text-[#111827] font-extrabold md:text-left'>
          Contact me
        </h1>
        <p className='text-[#4b5563] mb-[25px] text-[1.125rem] leading-[1.75rem]'>
          {`I’m currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!`}
        </p>
        <a
          href={'mailTo:mokhtareddarhri@gmail.com'}
          className='bg-[#111827] block w-full sm:w-fit sm:px-[24px] sm:mx-auto md:mx-0 text-[.87rem] rounded-[.5rem] font-semibold text-center text-white py-[18px] hover:bg-[#374151] '
        >
          Hit me an email
        </a>
      </div>
    </div>
  );
}
