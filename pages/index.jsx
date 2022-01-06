import {FaRobot} from "react-icons/fa"

export default function Home() {
  
  return (
    <div className="container m-auto p-2 text-grey-darkest">
      <h1 className="mb-4 text-center text-5xl">Welcome to Crypto Coders</h1>
      <h2 className="mb-2  text-center text-2xl">Here you can find powerful investment research and analysis tools</h2>
      <span className="flex flex-1 justify-center pt-12 mb-8">
        <FaRobot size="96" className="text-black-button-mike text-center" />
      </span>
      <div className="divider mb-12 text-xl">Performance Analysis</div> 
      <div className="mb-8 p-2 w-full flex">
        <div className="flex border-2 w-1/3 bg-card-surface mx-2">
          <div className="flex-1 py-3 px-3">
            <h4 className="text-2xl mb-3">Portfolio Analysis</h4>
            <p className="">This portfolio analysis tool allows you to backtest portfolio 
              returns, drawdowns, various risk characteristics, and compare them to 
              a benchmark.</p>
          </div>
        </div>
        <div className="flex border-2 w-1/3 bg-card-surface mx-2">
          <div className="flex-1 py-3 px-3">
            <h4 className="text-2xl mb-3">Portfolio Analysis</h4>
            <p className="">This portfolio analysis tool allows you to backtest portfolio 
              returns, drawdowns, various risk characteristics, and compare them to 
              a benchmark.</p>
          </div>
        </div>
        <div className="flex border-2 w-1/3 bg-card-surface mx-2">
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