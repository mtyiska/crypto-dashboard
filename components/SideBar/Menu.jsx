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
    FiLayers,
} from "react-icons/fi";
import Link from 'next/link'



export const Menu = () =>{
    return(
    <div className="p-4 space-y-14">
        <div className="space-y-4">
            <h1 className="text-gray-400">Menu</h1>
            <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                <DonutLargeIcon/>
            <Link href="/dashboard">
                <a>Dashboard</a>
            </Link>
            </div>
            <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                <ClearAllIcon/>
            <Link href="/about">
                <a>Transaction</a>
                </Link>
            </div>
            <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                <ArrowUpwardIcon/>
                <p>Send</p>
            </div>
            <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                <ArrowDownwardIcon/>
                <p>Receive</p>
            </div>
            <div className="flex p-3 text-gray-700 space-x-4 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                <SyncAltIcon/>
                <p>Buy</p>
            </div>
        </div>
        
        <div className="space-y-6">
            <h1 className="text-gray-400">Delegations</h1>
            <div>
                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <LockIcon/>
                    <p className="text-gray-600">Delegate</p>
                </div>
            </div>
            <div>
                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <EcoIcon/>
                    <p className="text-gray-600">Delegate</p>
                </div>
            </div>
        </div>

        <div className="space-y-6">
            <h1 className="text-gray-400">Taking</h1>
            <div>
                <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                    <LayersIcon/>
                    <p className="text-gray-600  " >Validate</p>
                </div>
            </div>
        </div>

    </div>
    )
}

const DonutLargeIcon = () => (<MdDonutLarge size="24" className="text-gray-300"/>);
const ClearAllIcon = () => <MdOutlineClearAll size="24" className="text-gray-300" />;
const ArrowUpwardIcon = () => <AiOutlineArrowUp size="24" className="text-gray-300" />;
const ArrowDownwardIcon = () => <AiOutlineArrowDown size="24" className="text-gray-300" />;
const SyncAltIcon = () => <MdSyncAlt size="24" className="text-gray-300" />;
const LockIcon = () => <AiOutlineLock size="24" className="text-gray-300" />;
const EcoIcon = () => <MdEco size="24" className="text-gray-300" />;
const LayersIcon = () => <FiLayers size="24" className="text-gray-300" />;
