import Header from "./Header"
import Head from "next/head"


import MenuIcons from "./SideBar/MenuIcons";
import Menu  from "./SideBar/Menu";
import Container from "./Container";
import Rightbar from "./SideBar/Rightbar";
import { useEffect, useState } from "react";
import {menuItems} from '../utils/menudata'


const Layout = ({children}) => {
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

    <div className="flex flex-row">
        <div className="flex flex-1 flex-col">
            <div className="flex flex-col min-h-screen h-screen">
                <Header/>
                <div className="flex-1 flex flex-row overflow-y-hidden">
                    <MenuIcons activeMenu={setActiveMenu}/>
                    <Menu activeMenuItems={menuData}/>               
                    <Container >
                        {children}
                    </Container>
                    {/* <Rightbar/> */}
                </div>
            </div>
        </div>
    </div>
    </>
    )
}


export default Layout
