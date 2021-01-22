import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { CustomAvatar } from '../CustomAvatar/CustomAvatar';
import './AboutSection.css';
export const AboutSection = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="aboutSectionContainer">
      <div className="avatar">
        <CustomAvatar />
      </div>
      <div className="aboutSection">
        <div className="aboutText">About Me</div>
        <div style={{ textAlign: 'left', lineHeight: '1.5' }}>
          Hi I am Aayush Bhattacharya, a 27 year old Full Stack developer,
          YouTuber, and an Artist living in Kolkata, India. I am a coding nerd
          with Electrical Engineering background, currently working with awesome
          folks at&nbsp;
          <a
            href="https://www2.deloitte.com/us/en.html/"
            className="company"
            rel="noopener noreferrer"
            target="_blank"
          >
            Deloitte.
          </a>
          <br />
          <br />
          Have a look at my YouTube Channel, skills or just connect with me on
          LinkedIn. I am always excited to do business with like minded people,
          lets discuss over coffee.
        </div>
      </div>
    </div>
  );
};
