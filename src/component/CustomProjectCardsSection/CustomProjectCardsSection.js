import React from 'react';
import { CustomFlippingCards } from '../CustomFlippingCards/CustomFlippingCards';
import webApp from '../../assets/projects/webApp.jpg';
import analytics from '../../assets/projects/analytics.jpg';
import chatbot from '../../assets/projects/chatbot.jpg';
import app from '../../assets/projects/app.jpg';
import styles from './CustomProjectCardsSectionStyle';

export const CustomProjectCardsSection = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <div style={styles.header}>Projects</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={styles.grid}>
          <CustomFlippingCards
            headerText={'Hybrid App Development'}
            image={app}
          />
          <CustomFlippingCards
            headerText={'Chatbot Development'}
            image={chatbot}
          />
        </div>
        <div style={styles.grid}>
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
