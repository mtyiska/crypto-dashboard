import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const  RightBar = () => {
  return (
      <div className="bg-white  w-4/12 rounded-xl border border-gray-100">
            <div className="border-b p-3 border-gray-100">
                <p className="font-semibold  ">Delegation </p>
            </div>
            <div className="flex flex-col items-center p-3">
                <p className="font-semibold text-lg text-gray-800" > 21 h 47 m 51s</p>
                <p className="text-gray-600 text-sm">until next rewards batch is distributed</p>
            </div>

            <div className="p-4  flex items-center justify-center">
                Right

                {/* <Doughnut data={data} /> */}

            </div>

            <div className="flex flex-col items-center p-3">
                <p className="text-gray-600 text-sm text-center"> These  are reards availbaleto be claimed right now.</p>
            </div>
        </div>
  )

}

export default RightBar