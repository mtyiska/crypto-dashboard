import SideBar from "../SideBar"

import Header from "../Header"
import Head from "next/head"

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
    AiOutlineQuestionCircle
} from "react-icons/ai";
import {
    FiLayers,FiChevronDown,FiAtSign, FiUsers
} from "react-icons/fi";
import Link from 'next/link'
import {
    BiBell,
    BiSearch
} from "react-icons/bi"
import {
    BsFillPinAngleFill
} from "react-icons/bs"


const Layout = ({children}) => {
    return (
    <>
    <Head>
        <title>Crypto Dashboard</title>
    </Head>

    <div className="flex flex-row">
        {/* logos */}

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
        <div className="flex flex-1 flex-col">
            <div className="flex flex-col min-h-screen h-screen">
            {/* Top bar */}
            <div className="flex text-white h-12">
                <div className="bg-gray-800-mike w-56 flex-none flex items-center justify-between py-2 px-3 border-b border-gray-900">
                    TailWind Css
                    <button>
                        <ChevDown/>
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-between bg-gray-700-mike px-4 border-b border-gray-900">
                    <div className="flex items-center">
                        <div className="text-gray-500 text-2xl">#</div>
                        <div className="ml-2 text-sm text-white">general</div>
                        <div className="border-l pl-3 ml-3 border-gray-600 text-xs text-gray-400"> general discussion</div>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="ml-4"><Bell/></a>
                        <a href="#" className="ml-4"><Pin/></a>
                        <a href="#" className="ml-4"><Users/></a>
                        <a href="#" className="ml-4">
                            <form action="#" className="relative">
                                <input type="text" placeholder="Search" className="bg-gray-900 rounded text-gray-200 text-xs px-2 py-1"/>
                            </form>
                            <span className="absolute right-0 top-4 mr-22"><Search/></span>
                        </a>
                        <a href="#" className="ml-4"><AT/></a>
                        <a href="#" className="ml-4"><Question/></a>
                    </div>
                    </div>
            </div>

            {/* 2nd bar */}
            <div className="flex-1 flex flex-row overflow-y-hidden">

                {/* 2nd left */}
                <div className="bg-gray-800-mike w-56 flex-none flex flex-col justify-between">
                    <div className="overflow-y-auto active:text-gray-100 hover:text-gray-200 text-gray-400">
                        Sidebar
                    </div>
                    <div className="bg-gray-footer-mike h-12 px-3 py-2"> footer</div>
                </div>
                
                {/* 2nd Right */}
                <div className="flex-1 flex">

                    <div className="bg-gray-700-mike flex-1 flex flex-col justify-between border-r border-gray-500/30">
                        <div className="overflow-y-auto">
                        Container.
                        </div>
                
                    </div>
                    
                    {/* <div className="bg-gray-700-mike w-56 flex-none overflow-y-auto">Righ Side. </div> */}
                </div>
            </div>
            </div>
        </div>

    </div>
    </>
      

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
const ChevDown = () => <FiChevronDown size="32" className="text-gray-300" />;
const Bell = () => <BiBell size="16" className="text-gray-300"/>
const Pin = () => <BsFillPinAngleFill  size="16" className="text-gray-300" />
const AT = () => <FiAtSign size="16" className="text-gray-300" />
const Users = () => <FiUsers size="16" className="text-gray-300" />
const Question = () => <AiOutlineQuestionCircle size="16" className="text-gray-300" />
const Search = () => <BiSearch size="16" className="text-gray-300"/>
export default Layout
