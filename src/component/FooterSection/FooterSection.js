import {
  Copyright,
  Facebook,
  Favorite,
  LinkedIn,
  MailOutline,
  YouTube,
} from '@material-ui/icons';
import React from 'react';
import footerImage from '../../assets/footerImage.jpg';
import signature from '../../assets/signature.png';
import instagram from '../../assets/instagram.png';
import './FooterSection.css';

export const FooterSection = () => {
  return (
    <div>
      <div className="heading">Coffee with Me</div>
      <div className="subHeading">
        I am always excited to work on some awesome projects, message me and
        let's discuss over coffee.
      </div>
      <div className="footerRow">
        <div>
          <div style={{ display: 'flex', fontWeight: 'bold' }}>
            No &nbsp;
            <Copyright style={{ height: 18, width: 18, padding: 0 }}>
              filled
            </Copyright>
            &nbsp;copyright issues.
          </div>
          <div className="footerColumnSubOne">
            Feel free to copy. If you need any help,
            <br /> ping me !
          </div>
        </div>
        <div>
          <div className="footerColumnTwo">
            <img src={signature} alt="" className="signature" />
            <div style={{ display: 'flex' }}>
              Made with
              <Favorite className="love" />
              in India
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="footerColumnOne">You can find me Everywhere</div>
          </div>
          <div className="footerImageSection">
            <YouTube
              onClick={() =>
                window.open('https://www.youtube.com/aayushBhattacharya')
              }
              style={{
                cursor: 'pointer',
                height: 30,
                width: 30,
                padding: 0,
                color: 'red',
              }}
            >
              filled
            </YouTube>
            <LinkedIn
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/aayush-bhattacharya-75784a123/'
                )
              }
              style={{
                cursor: 'pointer',
                height: 20,
                width: 20,
                padding: 5,
                color: '#287bbc',
              }}
            >
              filled
            </LinkedIn>
            <img src={instagram} alt="" style={{ height: 17, width: 17 }} />
            <Facebook
              style={{
                cursor: 'pointer',
                height: 20,
                width: 20,
                padding: 5,
                color: '#3b5998',
              }}
            >
              filled
            </Facebook>
            <MailOutline
              style={{
                cursor: 'pointer',
                height: 20,
                width: 20,
                padding: 5,
                color: '#d14836',
              }}
            >
              outlined
            </MailOutline>
          </div>
        </div>
      </div>
      <div className="footerImageSection">
        <img src={footerImage} alt="" className="footerImage" />
      </div>
    </div>
  );
};
