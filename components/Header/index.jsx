import React from "react";
import {
    MdOutlineDashboard,
    MdCrop169,
    MdExitToApp
} from "react-icons/md";

import {
    AiOutlineAppstore,
} from "react-icons/ai";

const Header = () =>{
    return (
        <header className="flex shadow-sm bg-gray-50 p-4 justify-between">
            <div className="flex space-x-3">
                <p className="text-gray-400">Address</p>
                <p className="text-gray-400">0xc14D1bdD7A28b12fa3e88FE2bE9e193Bdfdlk8bb940A6</p>
                <CropLandscapeIcon/>
                <DashboardIcon/>
            </div>
            <div className="flex space-x-4 text-gray-400 mr-3">
                <AppsIcon/>
                <ExitToAppIcon/>
                <p className="text-gray-600 font-semibold">Close</p>
            </div>
        </header>
    );
}

export default Header;
const DashboardIcon = () => (<MdOutlineDashboard size="24" className="text-gray-300"/>);
const CropLandscapeIcon = () => <MdCrop169 size="24" className="text-gray-300" />;
const AppsIcon = () => <AiOutlineAppstore size="24" className="text-gray-300" />;
const ExitToAppIcon = () => <MdExitToApp size="24" className="text-gray-300" />;
