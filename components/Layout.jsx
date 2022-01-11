import Head from "next/head"
import Menu  from "./SideBar/Menu";
import Container from "./Container";
import { useState } from "react";
import {menuItems} from '../utils/menudata'
import Header from "./Header";

const Layout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuData, setMenuData] = useState(menuItems)

    return (
        <div className="h-screen">
            <Head>
                <title>Crypto Coders</title>
            </Head>
            <div className="flex flex-col h-full">               
                <Header {...{ setIsOpen, isOpen}}/>
                <div className="overflow-y-hidden relative h-full flex">
                    <div className={`overflow-y-auto bg-white-mike border-r border-gray-700 shadow-lg shadow-gray-300 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isOpen? "translate-x-0":"-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
                        <Menu menuData={menuData}/>
                    </div>

                    <div className="overflow-y-auto bg-white-mike flex-1 px-3 py-2">
                        <Container>
                            {children}
                        </Container>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Layout
