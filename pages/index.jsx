import {FaRobot} from "react-icons/fa"

export default function Home() {
  
  return (
    <div className="container m-auto text-grey-darkest">
      <h1 className="mb-4 text-center text-5xl">Welcome to Crypto Coders</h1>
      <h2 className="mb-2  text-center text-2xl">Here you can find powerful investment research and analysis tools</h2>
      <div>
        <span className="flex justify-center pt-12 mb-8">
          <FaRobot size="96" className="text-black-button-mike text-center" />
        </span>
      </div>
      <div className="mb-12 text-xl">Performance Analysis</div> 
      
      <div className="mb-8 flex justify-center items-center">
        
        <div className="border-2 border-gray-300/50 rounded mx-2">
          <div className="flex-1 py-3 px-3">
            <h4 className="text-2xl mb-3">Portfolio Analysis</h4>
            <p className="">This portfolio analysis tool allows you to backtest portfolio 
              returns, drawdowns, various risk characteristics, and compare them to 
              a benchmark.</p>
          </div>
        </div>

        <div className="border-2 border-gray-300/50 rounded mx-2">
          <div className="flex-1 py-3 px-3">
            <h4 className="text-2xl mb-3">Portfolio Analysis</h4>
            <p className="">This portfolio analysis tool allows you to backtest portfolio 
              returns, drawdowns, various risk characteristics, and compare them to 
              a benchmark.</p>
          </div>
        </div>

        <div className="border-2 border-gray-300/50 rounded mx-2">
          <div className="flex-1 py-3 px-3">
            <h4 className="text-2xl mb-3">Portfolio Analysis</h4>
            <p className="">This portfolio analysis tool allows you to backtest portfolio 
              returns, drawdowns, various risk characteristics, and compare them to 
              a benchmark.</p>
          </div>
        </div>
        

      </div>
    </div>
  )
}

// const MachineLearning = () => <FaRobot size="32" className="text-black-button-mike text-center" />;

// export async function getStaticProps(){
//   const fs = require("fs");
//   const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8');
//   const blogs = files.filter(fn => fn.endsWith(".md"));
//   const contentData = blogs.map(blog => {
//     const content = fs.readFileSync(`${process.cwd()}/content/${blog}`, 'utf8')
//     return content;
//   });

//   return {
//       props: {
//         contentData
//       }
//   }
// }