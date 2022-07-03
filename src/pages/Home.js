import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <section className="sectionHome">
      <h1 className="section-title">Welcome To My Website</h1>
      <p>This website is the final project of the Web Beginner's Study Club KSM Android </p>
      <p>on this website we can read various news and articles related to spaceflight news</p>
      <p>made with ReactJS, using public API, and news will be updated daily </p>
      <p className="green">This website will be further developed</p>

      <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#7cae7a" fill-opacity="1" d="M0,128L288,32L576,96L864,192L1152,128L1440,160L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path>
      </svg>
    </section>
  );
}
