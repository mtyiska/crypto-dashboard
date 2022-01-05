import React from "react";

import { FiUsers} from "react-icons/fi";
import {BiSearch} from "react-icons/bi"

const Header = ({setIsOpen, isOpen}) =>{
    return (
        <header className="flex text-white h-16">
            {/* <div className="flex flex-1 items-center justify-between bg-gray-900-mike px-4 border-b border-gray-900"> */}
            <div className="flex flex-1 items-center justify-between bg-black-surface-mike px-4 border-b border-gray-900">
                <div className="flex items-center">
                    <div className="text-black-button-mike text-2xl hidden md:block">Crypto Coders</div>
                    <a href="#" className="ml-4">
                        <div className="flex-1">

                        <form action="#" className="relative">
                            <input type="text" placeholder="Search" className="bg-gray-700 rounded h-8 w-64 text-gray-200  px-2 py-1"/>
                        </form>
                        <span className="absolute top-6 ml-52"><Search/></span>
                        </div>
                    </a>

                </div>

                <div className="flex items-center ">
                    <a href="#" className="ml-4"><Users/></a>
                <button 
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                aria-controls="mobile-menu"
                aria-expanded="false"
                className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700 md:hidden"
                >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>   
                </div>
            </div>
        </header>

    );
}

export default Header;

const Users = () => <FiUsers size="24" className="text-black-button-mike" />
const Search = () => <BiSearch size="16" className="text-black-button-mike"/>