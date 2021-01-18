import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { CustomFlippingCards } from '../CustomFlippingCards/CustomFlippingCards';
import webApp from '../../assets/projects/webApp.jpg';
import analytics from '../../assets/projects/analytics.jpg';
import chatbot from '../../assets/projects/chatbot.jpg';
import app from '../../assets/projects/app.jpg';
import './CustomProjectCardsSectionStyle.css';
import { useEffect } from 'react';

export const CustomProjectCardsSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div style={{ marginTop: 20 }}>
      <div className="header">Projects</div>
      <div className="container">
        <div className="grid">
          <div data-aos="fade-right">
            <CustomFlippingCards
              headerText={'Hybrid App Development'}
              image={app}
            />
          </div>
          <div data-aos="fade-left">
            <CustomFlippingCards
              headerText={'Chatbot Development'}
              image={chatbot}
            />
          </div>
        </div>
        <div className="grid">
          <div data-aos="fade">
            <CustomFlippingCards
              headerText={'Machine Learning'}
              image={analytics}
            />
          </div>
          <div data-aos="fade-up">
            <CustomFlippingCards
              headerText={'Web App Development'}
              image={webApp}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
