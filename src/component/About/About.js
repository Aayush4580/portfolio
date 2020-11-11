import React from 'react';
import { CustomAvatar } from '../CustomAvatar/CustomAvatar';

export const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '35%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomAvatar />
      </div>
      <div
        style={{
          width: '35%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            color: '#3a3a3a',
            fontFamily: 'ProximaNovaT',
            fontSize: '65px',
          }}
        >
          About Me
        </div>
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
