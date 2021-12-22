import React from "react";
import {Brand} from "./Brand"
import {Menu} from "./Menu";


const SideBar = () =>{
    return (
        <div className="md:w-4/12 w-6/12 h-screen shadow-2xl">
            <Brand/>
            <Menu/>
        </div>
    )
}

export default SideBar;