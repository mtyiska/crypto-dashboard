import { useRouter} from 'next/router'
import {menuItems, menuNames} from "../../utils/menudata"
import matter from 'gray-matter';
import ReactMarkdown from "react-markdown";
import FnTable from '../../components/Table';
import SearchForm from '../../components/SearchForm';
import Footer from '../../components/Footer';
// import GraphTable from '../../components/GraphTable';
import AnalyzeButton from '../../components/AnalyzeButton';
// import PortfolioCharts from '../../components/PortfolioCharts';

import dynamic from 'next/dynamic'

const GraphTable = dynamic(() =>import('../../components/GraphTable'), {
  ssr: false
})

const PortfolioCharts = dynamic(() =>import('../../components/PortfolioCharts'), {
    ssr: false
  })

const ToolDetails = ({contentData}) => {
    const router = useRouter()
    const {tool} = router.query
    if(router.isFallback){
        return <h1>Loading....</h1>
    }
    const {data, content} = matter(contentData[0].toString());
    return (


        <div className="container m-auto text-grey-darkest min-h-screen space-y-4 py-3">
            {/* <h2 className="mb-4 text-5xl">{data.title.toUpperCase()}</h2>
            <h3 className='mb-4 text-lg'>{data.description}</h3> */}
            <ReactMarkdown children={content} />
            

            {/* Portfolio */}
            <SearchForm/>
            
            {/* Allocation */}
            <GraphTable/>

            {/* Analyze */}
            <AnalyzeButton/>

            {/* Performance Chart */}
            <PortfolioCharts title="Portfolio Performance" sub="The chart shows the growth of $10,000 invested in Portfolio on Sep 9, 2010 and compares it to the S&P 500 index or another benchmark. It would be worth nearly $46,315 for a total return of roughly 363.15%. All prices are adjusted for splits and dividends. The portfolio is rebalanced Quarterly"/>
      
            {/* Returns */}
            <FnTable style={'mx-auto w-full whitespace-nowrap overflow-hidden border border-gray-700'} title="Portfolio Returns"/>

            {/* Sharpe Ratio Chart */}
            <PortfolioCharts title="Sharpe Ratio Chart" sub="The Sharpe ratio shows whether the portfolio's excess returns are due to smart investment decisions or a result of taking a higher risk. The higher a portfolio's Sharpe ratio, the better its risk-adjusted performance. The chart below displays rolling 12-month Sharpe Ratio."/>


            {/* Drawdown chart */}
            <PortfolioCharts title="Drawdown Chart" sub="The Drawdowns chart displays portfolio losses from any high point along the way."/>

            {/* Portfolio Worst Drawdown */}
            <FnTable style={'mx-auto w-full whitespace-nowrap overflow-hidden border border-gray-700'} title="Portfolio Worst Drawdowns"/>
            
            {/* Portfolio volatility Chart */}
            <PortfolioCharts title="Portfolio Volatility Chart" sub="The chart below shows the rolling 10-day volatility. Volatility is a statistical measure showing how big price swings are in either direction. The higher asset volatility, the riskier it is, because the price movements are less predictable."/>
         
            <Footer/>
        </div>
    )
}



export default ToolDetails

export async function getStaticPaths(){  
    const paths = []
    menuItems.map((menu) => menu.items.map(item =>{
        paths.push({
            params: {
                tool: `${item.title.toLowerCase().replace(" ", "-")}`
            }
        })
    }))

    return{
        paths,
        fallback: false
    }
}


export async function getStaticProps(){
    const fs = require("fs");
    const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8');
    const blogs = files.filter(fn => fn.endsWith(".md"));
    const contentData = blogs.map(blog => {
        const content = fs.readFileSync(`${process.cwd()}/content/${blog}`, 'utf8')
        return content;
    });

    return {
        props: {
            contentData
        }
    }
}



