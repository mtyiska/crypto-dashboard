import {
    MdDonutLarge,
    MdOutlineClearAll,
    MdSyncAlt,
    MdEco,
} from "react-icons/md";
import {
    AiOutlineArrowUp,
    AiOutlineArrowDown,
    AiOutlineLock,

} from "react-icons/ai";
import {
    FiLayers
} from "react-icons/fi"
import Link from 'next/link'

const MenuIcons = () => {
    return (
        <div className="bg-gray-900-mike w-20 flex-none flex-col min-h-screen h-screen overflow-y-auto px-2 py-2 divide-y-2">
        
            <div className="space-y-2 py-2">
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                <Link href="/dashboard">
                    <a><DonutLargeIcon/></a>
                </Link>
                </div>
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <Link href="/about">
                    <a><ClearAllIcon/></a>
                    </Link>
                </div>
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <ArrowUpwardIcon/>
                </div>
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <ArrowDownwardIcon/>
                </div>
                <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <SyncAltIcon/>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <LockIcon/>
                </div>
                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <EcoIcon/>
                </div>
            </div>

            <div className="space-y-2 py-2">
                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <LayersIcon/>
                </div> 
            </div>

        </div>
    )
}

const DonutLargeIcon = () => (<MdDonutLarge size="32" className="text-gray-300"/>);
const ClearAllIcon = () => <MdOutlineClearAll size="32" className="text-gray-300" />;
const ArrowUpwardIcon = () => <AiOutlineArrowUp size="32" className="text-gray-300" />;
const ArrowDownwardIcon = () => <AiOutlineArrowDown size="32" className="text-gray-300" />;
const SyncAltIcon = () => <MdSyncAlt size="32" className="text-gray-300" />;
const LockIcon = () => <AiOutlineLock size="32" className="text-gray-300" />;
const EcoIcon = () => <MdEco size="32" className="text-gray-300" />;
const LayersIcon = () => <FiLayers size="32" className="text-gray-300" />;

export default MenuIcons
