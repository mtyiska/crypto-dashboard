import React from "react";
import {
    MdOutlineDashboard,
    MdCrop169,
    MdExitToApp
} from "react-icons/md";

import {
    AiOutlineQuestionCircle,
    AiOutlineAppstore,
} from "react-icons/ai";

import {
    FiChevronDown,FiAtSign, FiUsers
} from "react-icons/fi";
import {
    BiBell,
    BiSearch
} from "react-icons/bi"
import {
    BsFillPinAngleFill
} from "react-icons/bs"

const Header = () =>{
    return (
        <header className="flex text-white h-12">
            <div className="bg-gray-800-mike w-56 flex-none flex items-center justify-between py-2 px-3 border-b border-gray-900">
                Crypto Coders
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
                        <div className="flex-1">

                        <form action="#" className="relative">
                            <input type="text" placeholder="Search" className="bg-gray-900 rounded text-gray-200 text-xs px-2 py-1"/>
                        </form>
                        <span className="absolute right-0 top-4 mr-28"><Search/></span>
                        </div>
                    </a>
                    <a href="#" className="ml-4"><AT/></a>
                    <a href="#" className="ml-4"><Question/></a>
                </div>
            </div>
        </header>

    );
}

export default Header;
const DashboardIcon = () => (<MdOutlineDashboard size="24" className="text-gray-300"/>);
const CropLandscapeIcon = () => <MdCrop169 size="24" className="text-gray-300" />;
const AppsIcon = () => <AiOutlineAppstore size="24" className="text-gray-300" />;
const ExitToAppIcon = () => <MdExitToApp size="24" className="text-gray-300" />;

const ChevDown = () => <FiChevronDown size="32" className="text-gray-300" />;
const Bell = () => <BiBell size="24" className="text-gray-300"/>
const Pin = () => <BsFillPinAngleFill  size="24" className="text-gray-300" />
const AT = () => <FiAtSign size="24" className="text-gray-300" />
const Users = () => <FiUsers size="24" className="text-gray-300" />
const Question = () => <AiOutlineQuestionCircle size="24" className="text-gray-300" />
const Search = () => <BiSearch size="16" className="text-gray-300"/>