import React, { useEffect } from 'react';

export default function Profile() {
  useEffect(() => {
    document.title = 'Profile';
  }, []); //penamaan pada title di browser
  return (
    <section className="sectionHome">
      <h1 className="section-title">My Profile</h1>
      <p>Hi, Fellas! I’m a first year student majoring in Informatics at Universitas Pembangunan</p>
      <p>Nasional Veteran Jakarta. For now I currently focusing on exploring my passion about</p>
      <p>Website & Cyber Security. Hopefully soon will continue to look for my additional passion </p>
      <p>related to the IT world. Thankyou for visit my spaceflight news website.</p>

      <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#7cae7a"
          fill-opacity="1"
          d="M0,64L480,32L960,96L1440,96L1440,320L960,320L480,320L0,320Z"
        ></path>                          
      </svg>
    </section>
  );
}
