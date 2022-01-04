import {
    AiOutlinePieChart,
    AiOutlineDeploymentUnit,
    AiOutlineLineChart
} from "react-icons/ai";
import {
    FiLayers
} from "react-icons/fi"
import {BsBinocularsFill} from "react-icons/bs"
import {FaRobot} from "react-icons/fa"
import Link from 'next/link'
import { useEffect } from "react/cjs/react.development";


const MenuIcons = ({activeMenu}) => {

    return (
        <div className="bg-gray-900-mike w-20 flex-none flex-col min-h-screen h-screen overflow-y-auto px-2 py-2 divide-y-2">
        
            <div className="space-y-2 py-2">
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50/10 cursor-pointer">
                {/* <Link href="/dashboard"><a> </a></Link> */}
                    <button onClick={() =>activeMenu('Portfolio Management')}>
                        <Optimization/>
                    </button>
                </div>
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50/10 cursor-pointer">
                    <button onClick={() =>activeMenu('Arbitrage Management')}>
                        <Arbitrage/>
                        </button>
                </div>
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50/10 cursor-pointer">
                <button onClick={() =>activeMenu('Machine Learning Algo')}>
                    <MachineLearning/>
                    </button>
                </div>
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50/10 cursor-pointer">
                    {/* <button onClick={() =>activeMenu('BackTest')}> */}
                        <BackTest />
                    {/* </button> */}
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50/10 cursor-pointer">
                    {/* <button onClick={() =>activeMenu('QuickPortfolio')}> */}
                        <LayersIcon/>
                    {/* </button> */}
                </div>
                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50/10 cursor-pointer">
                    {/* <button onClick={() =>activeMenu('Screener')}> */}
                        <Screener/>
                    {/* </button> */}
                </div>
            </div>

        </div>
    )
}

const MachineLearning = () => <FaRobot size="32" className="text-gray-300" />;
const BackTest = () => <    AiOutlineLineChart size="32" className="text-gray-300" />;
const Screener = () => <BsBinocularsFill size="32" className="text-gray-300" />;
const LayersIcon = () => <FiLayers size="32" className="text-gray-300" />;
const Optimization = () => <AiOutlinePieChart size="32" className="text-gray-300"/>
const Arbitrage = () => <AiOutlineDeploymentUnit size="32" className="text-gray-300"/>
// const EcoIcon = () => <MdEco size="32" className="text-gray-300" />;
export default MenuIcons
