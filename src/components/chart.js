import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import './../App.css';
import Blink from 'react-blink-text';





export default function Chart() {

  const [dailyData, setdailyData] = useState([{}]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.covid19api.com/summary")
      let data = await response.json();
      setdailyData(data.Global)
    }
    getData()
  }, [])

  const data = {
    labels: ['Covid-19 Global Stats'],
    datasets: [
      {
        label: ['New Infected'],
        data: [dailyData.NewConfirmed],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: ['Total Infected'],
        data: [dailyData.TotalConfirmed],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },

      {
        label: ['New Recovered'],
        data: [dailyData.NewRecovered],
        backgroundColor: "#FA8072",

        borderColor: [
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: ['Total Recovered'],
        data: [dailyData.TotalRecovered],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },

      {
        label: ['New Deaths'],
        data: [dailyData.NewDeaths],
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: ['Total Deaths'],
        data: [dailyData.TotalConfirmed],
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },

    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (

    <>
      <div className='header'>
        <h1 align="center ">     <Blink color='#405d27' text='GLOBAL COVID-19 CHART' >
        </Blink> </h1>
        <div className="container">
          <Bar
            data={data}
            options={options}
          />
        </div>
      </div>
    </>

  )
}