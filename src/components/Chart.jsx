import React from "react";
import ReactApexChart from "react-apexcharts";

const RadialBarChart = () => {
  const options = {
    series: [80, 76, 74, 40, 81, 60],
    chart: {
      height: 350,
      width: 600,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 275,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: true,
            color: "#ffffff",
          },
          value: {
            show: true,
            color: "#ffffff",
          },
          total: {
            show: true,
            label: "Total",
            color: "#ffffff",
          },
        },
      },
    },
    colors: [
      "rgb(224,36,36)",
      "rgb(224,36,36)",
      "rgb(224,36,36)",
      "rgb(224,36,36)",
      "rgb(224,36,36)",
      "rgb(224,36,36)",
    ],
    labels: ["HTML", "CSS", "Javascript", "TypeScript", "ReactJs", "NodeJs"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
    annotations: {
      points: [
        // Define the points for the circle
        {
          x: 160, // X-coordinate of the center of the circle
          y: 195, // Y-coordinate of the center of the circle
          marker: {
            size: 170, // Size of the circle
            strokeWidth: 2, // Stroke width of the circle
            strokeColor: "#FF0000", // Stroke color of the circle
            radius: 0, // Radius of the circle
          },
        },
      ],
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={options.series}
        type="radialBar"
        height={options.chart.height}
      />
    </div>
  );
};

export default RadialBarChart;
