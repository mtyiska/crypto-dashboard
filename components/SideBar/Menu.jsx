import { useEffect, useState } from "react";
import {
    FiChevronDown
} from "react-icons/fi";
import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap_white.css'
import Link from "next/link"



const Menu = ({activeMenuItems}) =>{    
    const [localMenuData, setLocalMenuData] = useState([])
    useEffect(() =>{
        setLocalMenuData(activeMenuItems)
        
    }, [activeMenuItems])

    const displayMenu = localMenuData.map((item) =>{

        return (
            <div key={item.id}>
                <button 
                onClick={() =>{
                    
                    const index = localMenuData.findIndex(menu => menu.id === item.id) // find index of item to update
                    const newMenuArray = [...localMenuData]//copy array
                    newMenuArray[index] = {...item, showitems: !item.showitems}
                    setLocalMenuData(newMenuArray) 
                }}
                className="flex items-center text-gray-500 hover:text-gray-200 active:font-semibold">
                    <ChevDown/>
                    <h3 className="uppercase tracking-wide font-semibold text-xs active:text-gray-100"> {item.section}</h3>
                </button>
                {item.showitems&&<ul className="px-2 py-3 pt-2">
                    {item.items.map(({title, longname}) =><li key={`${item.id} - ${title} - id`}
                        className="text-gray-200 px-2 active:text-gray-100 hover:bg-gray-50 hover:text-blue-600 cursor-pointer rounded"> 
                            <Tooltip placement="right" trigger={['hover']}
                            mouseEnterDelay={0}
                            mouseLeaveDelay={0.1}
                            overlay={<span>{longname}</span>}
                            align={{
                                offset: [-90, 10],
                            }}
                            >
                            <div className="flex items-center">
                            <span className="text-xl">#</span>
                            <Link href={`/portfolio/${longname.toLowerCase().replace(" ", "-")}`}><a> 
                                <span className="ml-2">{title}</span>
                                </a></Link>
                            </div>
                            </Tooltip>
                        </li>)}
                </ul>}
            </div>
        )
    })

    return(
        <div className="bg-gray-800-mike w-56 flex-none flex flex-col justify-between">
            <div className="overflow-y-auto active:text-gray-100 hover:text-gray-200 text-gray-400">
                <ul className="px2 py-3">
                    <li className="text-gray-300 px-2 active:text-gray-100 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                        <a href="#" className="flex items-center">
                            <span className="text-xl">#</span>
                            <span className="ml-2">welcome</span>
                        </a>
                    </li>
                    <li className="text-gray-300 px-2 active:text-gray-100 hover:bg-gray-50 hover:text-blue-600 cursor-pointer">
                        <a href="#" className="flex items-center">
                            <span className="text-xl">#</span>
                            <span className="ml-2">faq</span>
                        </a>
                    </li>
                   {displayMenu}
                </ul>
            </div>
            <div className="bg-gray-footer-mike h-12 px-3 py-2"> footer</div>
        </div>
    )
}

export default Menu

const ChevDown = () => <FiChevronDown size="32" className="text-gray-300" />;