import React from 'react';
import { defaults, HorizontalBar } from 'react-chartjs-2';
defaults.scale.gridLines.display = false;

export const ChartComponent = () => {
  const data = {
    labels: [
      'React Js',
      'React Native',
      'Angular',
      'Java',
      'Node Js',
      'SQL/ NoSQL',
    ],
    datasets: [
      {
        label: 'Languages I Speak',
        backgroundColor: 'rgba(26, 166, 226,0.5)',
        borderColor: 'rgba(26, 166, 226)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(26, 166, 226)',
        hoverBorderColor: 'rgba(26, 166, 226)',
        data: [8.5, 8, 8.5, 8.5, 8, 7],
      },
    ],
  };

  return (
    <div className="chartContainer">
      <HorizontalBar
        data={data}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                ticks: {
                  min: 0,
                  max: 10,
                  fontColor: 'black',
                },
              },
            ],
            yAxes: [
              {
                stacked: true,
                fontColor: 'black',
              },
            ],
          },
        }}
        height={200}
      />
    </div>
  );
};
