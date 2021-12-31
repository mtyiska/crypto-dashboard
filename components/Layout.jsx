import Header from "./Header"
import Head from "next/head"


import MenuIcons from "./SideBar/MenuIcons";
import Menu  from "./SideBar/Menu";
import Container from "./Container";
import Rightbar from "./SideBar/Rightbar";


const Layout = ({children}) => {
    return (
    <>
    <Head>
        <title>Crypto Dashboard</title>
    </Head>

    <div className="flex flex-row">
        <MenuIcons/>
        <div className="flex flex-1 flex-col">
            <div className="flex flex-col min-h-screen h-screen">
                <Header/>
                <div className="flex-1 flex flex-row overflow-y-hidden">
                    <Menu/>               
                    <Container children={children}/>
                    {/* <Rightbar/> */}
                </div>
            </div>
        </div>
    </div>
    </>
      

    )
}


export default Layout