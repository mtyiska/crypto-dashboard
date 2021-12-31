import React from "react";
import {Brand} from "./Brand"
import {Menu} from "./Menu";


const SideBar = () =>{
    return (
        // <nav className="md:w-2/12 w-4/12 h-screen shadow-2xl">
        <nav >
            <Brand/>
            <Menu/>
        </nav>
    )
}

export default SideBar;