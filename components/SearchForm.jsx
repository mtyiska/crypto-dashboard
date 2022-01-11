import { useState } from "react"
import FnTable from "./Table"
import {AiOutlineDownload, AiOutlineClose} from "react-icons/ai"
import {FaSave} from "react-icons/fa"

const SearchForm = ({title="Portfolio"}) => {
  const [symbols, setSymbols] = useState([0,1])
    return (

      
      <form action="#" method="POST">
        <div className="mt-8 mb-12">
            
            {/* Header of form */}
            <div className="flex px-4 py-3 justify-between items-center border border-gray-300/50">
                <span className="text-gray-700 text-xl">{title}</span>
                <button
                  type="button"
                  className="flex bg-white-mike py-2 px-3 border space-x-2 border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <AiOutlineDownload size={16}/>
                  <span>SELECT PORTFOLIO</span>
                </button>
            </div>

            <div className="py-3  space-y-6 w-full border border-gray-400/50 ">

                {/* Middle section 1 of form */}
                <div className="px-3">
                  <input className="mt-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-inner"  type="text" placeholder="Add to portfolio"/>
                  {symbols.length === 0 &&
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm text-gray-600 py-4">
                        <p className="pl-1">Your portfolio is empty. Add symbols manually or select an existing portfolio.</p>
                      </div>
                    </div>
                  </div>
                  }
                </div>  

                {/* Middle section 1 of form */}
                {symbols.length !== 0 &&
                  <div className="flex justify-between flex-col space-y-6 pb-6 text-sm">
                      <div className="flex w-full justify-between space-x-1 border-b border-gray-300/50 px-3 py-2">
                        <div className="w-4/6"><span>Symbol</span></div>
                        <div className="w-1/6"><span>Weight</span></div>
                        <div className="w-1/6"><span></span></div>
                      </div>
                      <div className="flex w-full justify-between space-x-1 border-b border-gray-300/50 px-3 py-2">
                        <div className="w-4/6">
                          <span className="block">VTI</span> 
                          <span className="block">Vanguard Total Stock Market ETF</span>
                        </div>
                        <div className="w-1/6">
                          <input className="mt-1 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="%"/>
                        </div>
                        <div className="w-1/6 flex items-center justify-center">
                          <AiOutlineClose size={20}/>
                          </div>
                      </div>
                      <div className="flex w-full justify-between space-x-1 px-3">
                        <div className="w-4/6">
                          <span>Total</span>
                        </div>
                        <div className="w-2/6">
                          <span>100%</span>
                        </div>
                      </div>
                  </div>
                }

            </div> 



            {/* Bottom section of form */}
            <div className="flex px-4 py-3 justify-end  border border-gray-300/50">
                <button
                  type="button"
                  className="flex space-x-2 bg-white-mike py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <FaSave size={16}/>
                  <span>Save As</span>
                </button>
            </div>
        </div>
      </form>
    )
}

export default SearchForm