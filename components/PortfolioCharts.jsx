import CustomGraph from "./Chart/CustomGraph"
import {FaSave} from "react-icons/fa"
import { useEffect, useState } from "react"


import React from 'react';
import plotly from 'plotly.js/dist/plotly';
import createPlotComponent from 'react-plotly.js/factory';

const Plot = createPlotComponent(plotly);
const PortfolioCharts = ({title, sub=""}) => {
    const [x, setX] = useState([])
    const [y, setY] = useState([])
    const [y2, setY2] = useState([])

    useEffect(()=>{
        processData()
    }, [])


    const processData =() =>{
        let rawData=[
            {
                date: '2019-1-9',
                recall: '0.1',
                percentage: '60'
            }, {
                date: '2019-6-4',
                recall: '0.27',
                percentage: '80'
            }, {
                date: '2019-11-24',
                recall: '0.3',
                percentage: '67'
            }, {
                date: '2019-12-9',
                recall: '0.904',
                percentage: '68'
            }, {
                date: '2020-1-2',
                recall: '0.8',
                percentage: '67'
            }, {
                date: '2020-1-12',
                recall: '0.19',
                percentage: '90'
            }
        ];
        let x=[];
        let y=[];
        let y2=[];
        rawData.forEach(function(datum, i) {
            const splits = datum['date'].split('-');
            x.push(new Date(splits[0], splits[1]-1, splits[2]));
            y.push(datum['recall']);
            y2.push(datum['percentage']);
        });
        setX(x);
        setY(y);
        setY2(y2);
      }


      const trace1 = {
        type: "scatter",
        mode: "lines",
        x: x,
        y: y,
        line: {color: '#17BECF'}
      }
      
      const trace2 = {
        type: "scatter",
        mode: "lines",
        x: x,
        y: y2,
        line: {color: '#7F7F7F'}
      }
      
      const data = [trace1,trace2];
      
      const layout = {
        title: 'Bitcoin',
        xaxis: {
          range: ['2019-1-9', '2020-1-12'],
          type: 'date'
        },
        yaxis: {
          autorange: true,
          range: [86.8700008333, 138.870004167],
          type: 'linear'
        }
      };

      const options = {
        scrollZoom: true,
        displayModeBar: true,
        modeBarButtonsToRemove: ['autoScale2d', 'resetScale2d','pan2d','zoom2d', 'zoomIn2d', 'zoomOut2d'],
        displaylogo: false
      }


    return (
        <div className="mt-8 mb-12 pt-8">
            
            <div className="px-4 py-3 space-y-3 border border-gray-300/50">
            <div className="text-gray-700 text-xl">{title}</div>
            <div className="text-gray-700 text-sm">{sub}</div>
            </div>

            <div className="flex h-full w-full border border-gray-400/50 ">

                {/* <CustomGraph/> */}

                <Plot
                    data={data}
                    layout={layout}
                    config={options}
                    useResizeHandler
                    className="w-full h-full"
                />

            </div> 



            {/* Bottom section of form */}
            {/* <div className="flex px-4 py-3 justify-end  border border-gray-300/50">
                <button
                  type="button"
                  className="flex space-x-2 bg-white-mike py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <FaSave size={16}/>
                  <span>Save As</span>
                </button>
            </div> */}
        </div>
    )
}

export default PortfolioCharts
