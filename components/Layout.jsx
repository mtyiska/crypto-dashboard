import Header from "./Header"
import Head from "next/head"


import MenuIcons from "./SideBar/MenuIcons";
import Menu  from "./SideBar/Menu";
import Container from "./Container";
import Rightbar from "./SideBar/Rightbar";
import { useEffect, useState } from "react";
import {menuItems} from '../utils/menudata'

const Layout = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
    // set default active to Portfolio management
    const [activeMenu, setActiveMenu] = useState('Portfolio Management')
    
    // Set menu data to const menuItems above filtered by Active Menu data
    const [menuData, setMenuData] = useState(()=>
        menuItems.filter((name) => name.menu == activeMenu)
    )

    useEffect(() =>{
        setMenuData(menuItems.filter((name) => name.menu == activeMenu))
    }, [activeMenu])

    return (
        <>
        <Head>
            <title>Crypto Dashboard</title>
        </Head>
        <div className="flex flex-1 flex-col">
            <div className="flex flex-col min-h-screen h-screen">
                <div className="flex flex-col bg-blue-500">
                    <Header setIsOpen={setIsOpen} isOpen={isOpen}/>
                </div>
                <div className="flex-1 flex flex-row overflow-y-hidden">
                    <div className="relative  md:flex ">
                        <div className={`sidebar flex flex-row bg-blue-800 text-blue-100 absolute inset-y-0 left-0 transform ${isOpen?"-translate-x-full":""} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
                            <MenuIcons activeMenu={setActiveMenu}/>
                            <Menu activeMenuItems={menuData}/>  
                        </div>
                        <Container >
                            {children}
                        </Container>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
    
}


export default Layout
