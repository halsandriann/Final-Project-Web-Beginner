import React, { useEffect } from 'react';
import email from '../pages/email.png';
import instagram from '../pages/instagram.gif';
import linkedin from '../pages/linkedin.gif';

export default function Contact() {
  useEffect(() => {
    document.title = 'My Contact';
  }, []);

  return (
    <section className="sectionHome">
      <h1 className="section-title">My Contact</h1>
      <p className="section-description">If you have any questions, feel free to contact me.</p>

      <div class="sosmed">
        <ul class="sosial-media">
          <li>
            <img class="gmail" src={email} alt="Gmail" href="https://www.instagram.com/aldiindrn/" />
          </li>
          <li>
            <img class="instagram" src={instagram} alt="Instagram" />
          </li>
          <li>
            <img class="linkedin" src={linkedin} alt="Linkedin" />
          </li>
        </ul>
        <ul class="sosial-media-text">
          <li>
            <a href="mailto:rifkyhalsandrian@gmail.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/aldiindrn" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rifkyh" target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#7cae7a" fill-opacity="1" d="M0,128L720,32L1440,128L1440,320L720,320L0,320Z"></path>
      </svg>
    </section>
  );
}
