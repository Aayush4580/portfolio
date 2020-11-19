import React from 'react';
import { CustomFlippingCards } from '../CustomFlippingCards/CustomFlippingCards';
import webApp from '../../assets/projects/webApp.jpg';
import analytics from '../../assets/projects/analytics.jpg';
import chatbot from '../../assets/projects/chatbot.jpg';
import app from '../../assets/projects/app.jpg';
import './CustomProjectCardsSectionStyle.css';

export const CustomProjectCardsSection = () => {
  return (
    <div style={{ marginTop: 20 }}>
      <div className="header">Projects</div>
      <div className="container">
        <div className="grid">
          <CustomFlippingCards
            headerText={'Hybrid App Development'}
            image={app}
          />
          <CustomFlippingCards
            headerText={'Chatbot Development'}
            image={chatbot}
          />
        </div>
        <div className="grid">
          <CustomFlippingCards
            headerText={'Machine Learning'}
            image={analytics}
          />
          <CustomFlippingCards
            headerText={'Web App Development'}
            image={webApp}
          />
        </div>
      </div>
    </div>
  );
};
