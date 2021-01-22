import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Avatar, makeStyles } from '@material-ui/core';
import { Facebook, LinkedIn, MailOutline, YouTube } from '@material-ui/icons';
import face from '../../assets/face.jpeg';
import instagram from '../../assets/instagram.png';

import './CustomAvatar.css';
import { useEffect } from 'react';

export const CustomAvatar = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const classes = useStyles();
  return (
    <div className="container">
      <div>
        <Avatar alt="Remy Sharp" src={face} className={classes.large} />
      </div>
      <div className="containerTwo" data-aos="fade-down">
        <YouTube
          onClick={() =>
            window.open('https://www.youtube.com/aayushBhattacharya')
          }
          style={{
            cursor: 'pointer',
            height: 60,
            width: 60,
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
            height: 50,
            width: 50,
            padding: 5,
            color: '#287bbc',
          }}
        >
          filled
        </LinkedIn>
        <img src={instagram} alt="" style={{ height: 40, width: 40 }} />
        <Facebook
          style={{
            cursor: 'pointer',
            height: 50,
            width: 50,
            padding: 5,
            color: '#3b5998',
          }}
        >
          filled
        </Facebook>
        <MailOutline
          style={{
            cursor: 'pointer',
            height: 50,
            width: 50,
            padding: 5,
            color: '#d14836',
          }}
        >
          filled
        </MailOutline>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));
