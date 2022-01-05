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
import {useRouter} from "next/router"
import {menuNames} from '../../utils/menudata'

const MenuIcons = ({activeMenu}) => {
    const router = useRouter()

    return (
        <div className="bg-black-surface-mike w-20 flex-none flex-col min-h-screen h-screen overflow-y-auto px-2 py-2 divide-y-2">
        
            <div className="space-y-2 py-2">
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50/10 cursor-pointer">
                    <button onClick={() =>{activeMenu(menuNames[0].menuName); router.replace(menuNames[0].url)} }>
                        <Optimization/>
                    </button>
                </div>
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50/10 cursor-pointer">
                <button onClick={() =>{activeMenu(menuNames[1].menuName); router.replace(menuNames[1].url)} }>
                        <Arbitrage/>
                    </button>
                </div>
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50/10 cursor-pointer">
                <button onClick={() =>{activeMenu(menuNames[2].menuName); router.replace(menuNames[2].url)} }>
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

const MachineLearning = () => <FaRobot size="32" className="text-black-button-mike" />;
const BackTest = () => <    AiOutlineLineChart size="32" className="text-black-button-mike" />;
const Screener = () => <BsBinocularsFill size="32" className="text-black-button-mike" />;
const LayersIcon = () => <FiLayers size="32" className="text-black-button-mike" />;
const Optimization = () => <AiOutlinePieChart size="32" className="text-black-button-mike"/>
const Arbitrage = () => <AiOutlineDeploymentUnit size="32" className="text-black-button-mike"/>
// const EcoIcon = () => <MdEco size="32" className="text-black-button-mike" />;
export default MenuIcons
