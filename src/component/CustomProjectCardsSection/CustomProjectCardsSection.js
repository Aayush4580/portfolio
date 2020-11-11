import React from 'react';
import { CustomFlippingCards } from '../CustomFlippingCards/CustomFlippingCards';
import webApp from '../../assets/projects/webApp.jpg';
import analytics from '../../assets/projects/analytics.jpg';
import chatbot from '../../assets/projects/chatbot.jpg';
import app from '../../assets/projects/app.jpg';

export const CustomProjectCardsSection = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <div
        style={{
          color: 'rgb(58, 58, 58)',
          fontFamily: 'ProximaNovaT',
          fontSize: 65,
        }}
      >
        Projects
      </div>
      <div
        style={{
          display: 'flex',
          height: 600,
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: 300,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <CustomFlippingCards text={'sdfds'} image={app} />
          <CustomFlippingCards image={chatbot} />
        </div>
        <div
          style={{
            display: 'flex',
            height: 300,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <CustomFlippingCards image={analytics} />
          <CustomFlippingCards image={webApp} />
        </div>
      </div>
    </div>
  );
};
