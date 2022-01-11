const AnalyzeButton = () => {
    return (
        <div className="mt-8 mb-12 pt-8">
            
      
            <div className="flex px-4 py-3 justify-between items-center border border-gray-300/50">
                <span className="text-gray-700 text-xl">Portfolio Analysis Settings</span>
            </div>

            <div className="py-3 flex space-y-6 w-full border border-gray-400/50 ">

                <div className="flex w-full justify-center px-3 space-x-3">
 
                    <div className="relative w-1/3 border-2 border-gray-700 rounded">
                        <select className="appearance-none h-full w-full bg-white-mike border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Yearly</option>
                            <option>Quarterly</option>
                            <option>Montly</option>
                            <option>Weekly</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>

                   
                    <input disabled className="block appearance-none w-1/3 rounded border-2 border-gray-700 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Bitcoin"/>
                    


                    <button
                    type="button"
                    className="block appearance-none w-1/3 bg-gray-900-mike border rounded text-white-mike"
                    >
                        <span>Analyze Portfolio</span>
                    </button>
  

                </div>  

            </div> 
        </div>



    )
}

export default AnalyzeButton
