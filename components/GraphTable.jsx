import CustomPie from "./Chart/CustomPie"
import FnTable from "./Table"

import React from 'react';
import plotly from 'plotly.js/dist/plotly';
import createPlotComponent from 'react-plotly.js/factory';

const Plot = createPlotComponent(plotly);

const GraphTable = () => {


    const data = [{
        type: "pie",
        values: [2, 3, 4, 4],
        labels: ["Wages", "Operating expenses", "Cost of sales", "Insurance"],
        // textinfo: "label+percent",
        textposition: "inside",
        automargin: true,
        hoverinfo: 'label+percent',
        hole: .4,
      }]
      
      const layout  = {
        autosize: true, 
        title: 'Portfolio Allocation', 
        showlegend: false,
        annotations: [
            {
              font: {
                size: 20
              },
              showarrow: false,
              text: 'GHG',
            }
          ],
      }

      const options = {
        // scrollZoom: true,
        displayModeBar: true,
        modeBarButtonsToRemove: ['autoScale2d', 'resetScale2d','pan2d','zoom2d', 'zoomIn2d', 'zoomOut2d'],
        displaylogo: false
      }
      
    return (
        <div className="mt-8 mb-12 ">  
            <div className="flex px-4 py-3 justify-between items-center border border-gray-300/50">
                <span className="text-gray-700 text-xl">Portfolio Asset Allocation</span>  
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="flex h-full w-full md:w-2/5 px-4 py-3 justify-center items-center border border-gray-300/50">
                <Plot
                    data={data}
                    layout={layout}
                    useResizeHandler
                    className="w-full h-full"
                    config={options}
                />
            
                </div>
                <div className="w-full md:w-3/5 border border-gray-300/50">
                    <div className='overflow-x-auto w-full'>
                        <table className="mx-auto w-full whitespace-nowrap bg-white-mike overflow-hidden border border-gray-700">
                            <thead className="">
                                <tr className="text-gray-900 text-left text-xs border-b border-gray-400/50">
                                    <th className="font-semibold text-sm uppercase px-6 py-4"> Name </th>
                                    <th className="font-semibold text-sm uppercase px-6 py-4"> Designation </th>
                                    <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> status </th>
                                </tr>
                            </thead>
                            <tbody className=" text-gray-500">
                                <tr className="border-b border-gray-400/50">
                                    <td className="px-6 py-4 ">
                                        <p className="text-sm"> Development </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm"> Development </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm"> Development </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm"> Development </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm"> Development </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 ">
                                        <p className="text-sm"> Development </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm"> Development </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm"> Development </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm"> Development </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm"> Development </p>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default GraphTable



            
            