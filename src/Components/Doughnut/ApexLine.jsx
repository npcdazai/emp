import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function ApexLine() {
  const [chartOptions, setChartOptions] = useState({
    series: [{
      name: 'Rate',
      data: [45, 23, 70, 65, 5, 34, 32],
      gradientToColors: ['#004017'],
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        toolbar: {
          show: false // Hide the action icons
        }
      },
      stroke: {
        width: 5,
        curve: 'smooth',
        colors: ['#598369'], // Customize the line color here
      },
      markers: {
        size: 6, // Size of markers
        colors: ['#004118'], // Marker (dot) color
        strokeColor: '#fff', // Stroke color of the marker
        strokeWidth: 2
      },
      xaxis: {
        type: 'category', // Change from 'datetime' to 'category'
        categories: ['BH', 'KW', 'OM', 'QA', 'SA', 'UAE', 'IND'],
        tickAmount: 7
      },
      title: {
        text: 'Exchange Rate Currency', // Adjust the title if needed
        align: 'left',
        style: {
          fontSize: '15px',
          color: '#000',
          fontWeight: 400
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#004017'],
          shadeIntensity: 4,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100] // Gradient stops
        },
      }
    }
  });

  return (
    <div>
      <ReactApexChart  options={chartOptions.options} series={chartOptions.series} type="line" height={"100%"} width={"600"} />
    </div>
  );
}

export default ApexLine;
