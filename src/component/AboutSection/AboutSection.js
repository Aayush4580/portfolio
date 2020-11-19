import React from 'react';
import { CustomAvatar } from '../CustomAvatar/CustomAvatar';
import './AboutSection.css';
export const AboutSection = () => {
  return (
    <div className="aboutSectionContainer">
      <div className="avatar">
        <CustomAvatar />
      </div>
      <div
        className="aboutSection"
        // style={{
        //   width: '35%',
        //   display: 'flex',
        //   justifyContent: 'flex-start',
        //   alignItems: 'flex-start',
        //   flexDirection: 'column',
        // }}
      >
        <div className="aboutText">About Me</div>
        <div style={{ textAlign: 'left', lineHeight: '1.5' }}>
          Hi I am Aayush Bhattacharya, a 27 year old Full Stack developer,
          YouTuber, and a Digital Marketer living in Kolkata, India. I am a
          coding nerd with Electrical Engineering background, currently working
          with awesome folks at Deloitte.
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
