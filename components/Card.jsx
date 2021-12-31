import React from "react"

import {
    MdDone,
    MdAllOut,
    MdEco,
} from "react-icons/md";
import {AiOutlineLock} from "react-icons/ai";


const AllOutIcon = () => <MdAllOut size="small" className="text-white" />;
const DoneIcon = () => <MdDone size="small" className="text-white" />;
const EcoIcon = () => <MdEco size="small" className="text-white" />;
const LockIcon = () => <AiOutlineLock size="small" className="text-white" />;

const arrayIcon = [
<AllOutIcon key="1"/>, 
<DoneIcon key="2"/>, 
<EcoIcon key="3"/>, 
<LockIcon key="4"/>
]

const Color = [
    "from-indigo-500 to-blue-500", 
    "from-blue-400 to-blue-300", 
    "from-green-500 to-green-400", 
    "from-yellow-600 to-yellow-500"]

const Card = ({title, balance, icon}) =>{
    
    return (
        <div className={`transform hover:scale-110 cursor-pointer transition delay-100 w-3/12  p-2 py-4 shadow-xl  border rounded-xl bg-gradient-to-r ${Color[icon]}`} >
            <div className="flex justify-between">
                <div></div>
                <div className=" w-10  h-10 flex items-center justify-center  bg-gray-300 rounded-xl m-1  bg-opacity-30">
                    {arrayIcon[icon]}
                </div>
            </div>
            <p className="text-gray-200 text-xs  ">
                {title}
            </p>
            <p className="text-gray-50 text-lg  font-semibold  ">
                {balance} BTC
            </p>
            <p className="text-gray-300  text-sm ">
                ${balance}
            </p>
        </div>
    )
}

export default Card;