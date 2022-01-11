
import Footer from "../components/Footer"
import FnTable from "../components/Table"
const QuickPortfolio = () => {
    return (

    <div className="container m-auto text-grey-darkest min-h-screen">
      <h1 className="mb-4 text-5xl">Welcome to Crypto Coders</h1>
      <p className="mb-12 text-lg">A lazy portfolio is a set-and-forget collection of investments that require little or no maintenance. Most portfolios consist of a small number of low-cost funds that are easy to implement and rebalance. Lazy portfolios are designed to perform well in most market conditions, making them the perfect choice for long-term investors. Here you can find a list of the most popular lazy portfolios implemented with ETFs.</p>
        
    
      <FnTable style={'mx-auto w-full whitespace-nowrap overflow-hidden border border-gray-700'} title="Quick Portfolio"/>
      <Footer/>
      
    </div>
    )
}

export default QuickPortfolio
