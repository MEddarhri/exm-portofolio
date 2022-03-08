import Head from 'next/head';
import React from 'react';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>ExM Portofolio</title>
        <link rel='icon' href={'/images/exm-logo.svg'} />
      </Head>
      {children}
    </div>
  );
}

export default Layout;
