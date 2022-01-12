import React, { useEffect, useState } from "react";

import {useRouter} from "next/router"
import * as AIcons from "react-icons/ai"
import *as MDIcons from "react-icons/md"
import * as FIcons from "react-icons/fi"
import {BsBinocularsFill} from "react-icons/bs"
import {FaRunning} from "react-icons/fa"
import Link from "next/link"
import { FiUsers} from "react-icons/fi";

const Menu = ({menuData}) =>{    
    const router = useRouter()
    const [localMenuData, setLocalMenuData] = useState([])
    
    useEffect(() =>{
        setLocalMenuData(menuData)
    }, [menuData])
    
    const displayMenu = localMenuData.map((item) =>{
        const tIcon = item.iconsub;
        const iconName = item.icon;
        
        const myicon = tIcon === "ai" ? AIcons[iconName]:
        tIcon === "md" ? MDIcons[iconName]: FIcons[iconName]

        return (
            <div key={item.id}>
                <a 
                className="flex px-3 py-2 space-x-3 rounded transition duration-200 text-gray-700 hover:bg-blue-700 hover:text-gray-200 active:font-semibold no-underline">
                    <span>{React.createElement(myicon, {size:"32", className:"text-black-button-mike"})}</span>
                    <h3 className="uppercase tracking-wide font-semibold text-xs active:text-gray-100"> {item.section}</h3>
                </a>
                {item.showitems&&<ul>
                    {item.items.map(({title, longname}) =>
                    <li key={`${item.id} - ${title} - id`}
                    className="block py-0.5 rounded transition duration-200 text-gray-700 hover:bg-blue-700 hover:text-white no-underline truncate ...">   
                        <div className="flex items-center px-y">
                            {/* <button onClick={() => router.push(`/tools/${title.toLowerCase().replace(" ", "-")}`)}> */}
                            <Link href={`/tools/${title.toLowerCase().replace(" ", "-")}`}>
                            <span className="ml-2 text-sm py-1 cursor-pointer">{longname}</span>
                            </Link>
                            {/* </button> */}
                        </div>
                    </li>
                    )}
                </ul>}
            </div>
        )
    })

    return(
        <nav > 
            <Link href="/quick-portfolio">
                <a className="pb-4 px-3 py-2 space-x-3 flex rounded transition duration-200 text-gray-700 hover:bg-blue-700 hover:text-white-mike no-underline">
                    <FaRunning size="32" className="text-black-button-mike" />
                    <h3 className="uppercase tracking-wide font-semibold text-xs active:text-gray-100">Quick Portfolio</h3>   
                </a>
            </Link>
            {/* <a href="#" className="pb-4 px-3 py-2 space-x-3 flex rounded transition duration-200 text-gray-700 hover:bg-blue-700 hover:text-white-mike no-underline">
                <BsBinocularsFill size="32" className="text-black-button-mike" />
                <h3 className="uppercase tracking-wide font-semibold text-xs active:text-gray-100">Crypto Scanner</h3>   
            </a> */}

            <Link href="/about">
            <a className="pb-4 px-3 py-2 space-x-3 flex rounded transition duration-200 text-gray-700 hover:bg-blue-700 hover:text-white-mike no-underline border-b border-gray-300/80 mb-8">
                <FiUsers size="32" className="text-black-button-mike" />
                <h3 className="uppercase tracking-wide font-semibold text-xs active:text-gray-100">About Me</h3>   
            </a>
            </Link>
            
            {displayMenu}
        </nav>
    )
}

export default Menu

