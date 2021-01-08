import $ from 'jquery';
import React, { useEffect } from 'react';
import Particles from 'react-particles-js';
import { animateScroll as scroll, Element, scroller } from 'react-scroll';
import scrollImg from '../../assets/scroll.gif';
import { AboutSection } from '../../component/AboutSection/AboutSection';
import { CustomNumberSection } from '../../component/CustomNumberSection/CustomNumberSection';
import { CustomProjectCardsSection } from '../../component/CustomProjectCardsSection/CustomProjectCardsSection';
import { FooterSection } from '../../component/FooterSection/FooterSection';
import { TransitionsModal } from '../../component/TransitionsModal/TransitionsModal';
import { headerAnimation } from '../../util/util';
import './HomePageStyle.css';

export const HomePage = () => {
  useEffect(() => {
    headerAnimation($);
  }, []);

  return (
    <div>
      <Particles
        className="particle"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: false,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
        }}
        style={{
          width: '100%',
          // position: 'absolute',
          backgroundColor: 'black',
        }}
      />
      <div className="navbar">
        <div
          style={{
            display: 'flex',
            top: 0,
            height: 50,
            width: '100%',
            position: 'absolute',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              color: 'white',
            }}
          >
            <div
              className="navItem"
              onClick={() =>
                scroller.scrollTo('aboutSection', {
                  duration: 1000,
                  delay: 100,
                  smooth: true,
                  offset: 50,
                })
              }
            >
              About
            </div>
            <div className="navItem">Skills</div>
            <div
              className="navItem"
              onClick={() =>
                scroller.scrollTo('myProjects', {
                  duration: 1000,
                  delay: 100,
                  smooth: true,
                  offset: 50,
                })
              }
            >
              Projects
            </div>
            <div className="navItem">Coffee with Me</div>
          </div>
        </div>
      </div>
      <div className="transparentBox">
        <div style={{ fontSize: 50, fontWeight: 'bold', color: 'white' }}>
          Hey I'm Aayush
        </div>
        <div className="cd-intro">
          <h1 className="cd-headline clip is-full-width">
            <span className="cd-words-wrapper">
              <b className="is-visible">A Full Stack Developer</b>
              <b>A Hybrid App Developer</b>
              <b>A Guitarist</b>
              <b>A Painter</b>
              <b>A Travel Bug</b>
              <b>A Proud Indian</b>
            </span>
          </h1>
        </div>
        <div>
          <TransitionsModal buttonText={`Coffee with Me`} />
          <div style={{ color: 'white' }}>Scroll Down</div>
          <img
            alt=""
            className="scroll"
            src={scrollImg}
            style={{ cursor: 'pointer' }}
            onClick={() => scroll.scrollTo(900)}
          />
        </div>
      </div>
      <Element name="aboutSection">
        <AboutSection />
      </Element>
      <div className="divider" />
      <CustomNumberSection className="numberSection" />
      <Element name="myProjects">
        <CustomProjectCardsSection />
      </Element>
      <FooterSection />
    </div>
  );
};
