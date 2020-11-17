import React, {useContext, useEffect} from 'react';
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import './App.css';
import {initializeclass, StoreContext} from "./context";


const options= {
  chart: {
    style:{
     center: true,
    },
  },
  title: {
    text: 'Delay Types Pareto Chart'
  },
  xAxis: [{
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    crosshair: true
  }],
      yAxis: [{ // Primary yAxis
  labels: {
    format: '{value}°C',
    style: {
      color: '#696969',
    }
  },
  title: {
    text: '',
    style: {
      color: '#696969',
    }
  }
}, { // Secondary yAxis
  title: {
    text: '',
    style: {
      color: '#696969',
    }
  },
  labels: {
    format: '{value} mm',
    style: {
      color: '#696969',
    }
  },
  opposite: true
}],
    tooltip: {
  shared: true
},
  legend: {
    enabled: false,
    backgroundColor:"transparent",
  },
  series: [{
    name: 'Rainfall',
    type: 'column',
    yAxis: 1,
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    tooltip: {
      valueSuffix: ' mm',
    },
    color:"blue",

  }, {
    name: 'Temperature',
    type: 'spline',
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
    tooltip: {
      valueSuffix: '°C',
    },
    lineColor: "#bfd1ee",
    color:"blue",
    marker: {
      lineColor: "white",
      lineWidth: 2,
    },

  }]
};
export const App= () => {
  const {apiDataStore} = useContext(StoreContext);
  const { loadApiResponse, apis} = apiDataStore;
  useEffect(()=> {
    loadApiResponse(apiDataStore);
  }, []);

  return (
    <div className="App">
      <HighchartsReact highcharts={Highcharts} options={options}></HighchartsReact>
    </div>
  );
};

