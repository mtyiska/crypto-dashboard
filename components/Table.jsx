import {FaSave} from "react-icons/fa"

const FnTable = ({style, title}) => {
    return (
        <div className="mt-8 mb-12 pt-8">  
            <div className="flex px-4 py-3 justify-between items-center border border-gray-300/50 ">
                <span className="text-gray-700 text-xl">{title}</span>  
            </div>
            <div className='overflow-x-auto w-full'>
                <table className={style}>
                    <thead className="">
                        <tr className="text-gray-900 text-left text-xs border-b border-gray-400/50">
                            <th className="font-semibold text-sm uppercase px-6 py-4"> Name </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4"> Designation </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> status </th>
                        </tr>
                    </thead>
                    <tbody className=" text-gray-500">
                        <tr className="border-b border-gray-400/50">
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
                            <td className="px-6 py-4">
                                <p className="text-sm"> Development </p>
                            </td>
                        </tr>
                        <tr>
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
                            <td className="px-6 py-4">
                                <p className="text-sm"> Development </p>
                            </td>
                        </tr>
                        
                        
                    </tbody>
                </table>
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
    )
}

export default FnTable
