import React from 'react';
import AnimatedNumber from 'animated-number-react';
import './CustomNumberSection.css';
const formatValue = (value) => value.toFixed(0);
export const CustomNumberSection = () => {
  return (
    <div>
      <div className="flexDirectionRow">
        <div className="numberSubContainer">
          <div
            style={{
              fontSize: '40px',
              fontWeight: '400',
              color: '#1aa6e2',
            }}
          >
            <AnimatedNumber
              value={120000}
              formatValue={formatValue}
              duration={1800}
              delay={1000}
            />
          </div>
          <div>lines of code</div>
        </div>
        <div className="numberSubContainer">
          <div
            style={{
              fontSize: '40px',
              fontWeight: '400',
              color: '#1aa6e2',
            }}
          >
            <AnimatedNumber
              value={23920000}
              formatValue={formatValue}
              duration={1800}
              delay={1000}
            />
          </div>
          <div>pixels rendered</div>
        </div>
        <div className="numberSubContainer">
          <div
            style={{
              fontSize: '40px',
              fontWeight: '400',
              color: '#1aa6e2',
            }}
          >
            <AnimatedNumber
              value={52}
              formatValue={formatValue}
              duration={1800}
              delay={1000}
            />
          </div>
          <div>youtube videos</div>
        </div>
        <div className="numberSubContainer">
          <div
            style={{
              fontSize: '40px',
              fontWeight: '400',
              color: '#1aa6e2',
            }}
          >
            <AnimatedNumber
              value={15}
              formatValue={formatValue}
              duration={1800}
              delay={1000}
            />
          </div>
          <div>projects completed</div>
        </div>
      </div>
    </div>
  );
};
