import React from 'react';
import AnimatedNumber from 'animated-number-react';
import './CustomNumberSection.css';
import ChartComponent from '../ChartComponent/ChartComponent';
const formatValue = (value) => value.toFixed(0);
export const CustomNumberSection = () => {
  return (
    <div className="customNumberContainer">
      <div className="flexDirectionRow">
        <div className="numberSubContainer">
          <div className="textStyle">
            <AnimatedNumber
              value={120000}
              formatValue={formatValue}
              duration={2500}
              delay={1800}
            />
          </div>
          <div>lines of code</div>
        </div>
        <div className="numberSubContainer">
          <div className="textStyle">
            <AnimatedNumber
              value={23920000}
              formatValue={formatValue}
              duration={2500}
              delay={1800}
            />
          </div>
          <div>pixels rendered</div>
        </div>
        <div className="numberSubContainer">
          <div className="textStyle">
            <AnimatedNumber
              value={52}
              formatValue={formatValue}
              duration={2500}
              delay={1800}
            />
          </div>
          <div>youtube videos</div>
        </div>
        <div className="numberSubContainer">
          <div className="textStyle">
            <AnimatedNumber
              value={15}
              formatValue={formatValue}
              duration={2500}
              delay={1800}
            />
          </div>
          <div>projects completed</div>
        </div>
      </div>
      <div
        style={{
          width: '50%',
          display: 'flex',
        }}
      >
        <ChartComponent />
      </div>
    </div>
  );
};
