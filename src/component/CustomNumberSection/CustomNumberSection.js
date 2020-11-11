import React from 'react';
import AnimatedNumber from 'animated-number-react';
const formatValue = (value) => value.toFixed(0);
export const CustomNumberSection = () => {
  return (
    <div>
      <div className="flexDirectionRow">
        <div style={{ width: '20%' }}>
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
            />
          </div>
          <div>lines of code</div>
        </div>
        <div style={{ width: '20%' }}>
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
            />
          </div>
          <div>pixels rendered</div>
        </div>
        <div style={{ width: '20%' }}>
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
            />
          </div>
          <div>youtube videos</div>
        </div>
        <div style={{ width: '20%' }}>
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
            />
          </div>
          <div>projects completed</div>
        </div>
      </div>
    </div>
  );
};
