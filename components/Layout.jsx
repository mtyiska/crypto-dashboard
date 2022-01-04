import Header from "./Header"
import Head from "next/head"


import MenuIcons from "./SideBar/MenuIcons";
import Menu  from "./SideBar/Menu";
import Container from "./Container";
import Rightbar from "./SideBar/Rightbar";
import { useEffect, useState } from "react/cjs/react.development";

const menuItems = [
    {
        id: "1",
        menu:"Portfolio Management",
        section:"Performance Analysis",
        showitems:true,
        items:[
            {title:"PA", longname:"Portfolio Analysis"}, 
            {title:"PP", longname:"Portfolio Performance"}, 
            {title:"AC", longname:"Asset Comparison"}, 
            {title:"SHR", longname:"Sharpe Ratio"}, 
            {title:"SOR", longname:"Sortino Ratio"}, 
            {title:"CR", longname:"Calmer Ratio"},
            {title:"BL", longname:"Black Litterman"},
            {title:"HERC", longname:"Hierarchical Equal Risk Contribution"},
            {title:"EP", longname:"Entropy Pooling"},
            {title:"TIC", longname:"Theory Implied Correlation"}
        ]
    },
    {
        id: "2",
        menu:"Portfolio Management",
        section:"Risk Analysis",
        showitems:true,
        items:[
            {title:"Drawdowns", longname:"Drawdowns"},
            {title:"VAR", longname:"Value at Risk"},
            {title:"ES", longname:"Expected Shortfall"},
            {title:"C2C V", longname:"Close-to-Close Volatility"},
            {title:"PV", longname:"Parkinson Volatility"},
            {title:"GKV", longname:"Garman klass Volatility"},
            {title:"RSV", longname:"Rogers-Satchell Volatility"},
            {title:"YZV", longname:"Yang Zhang Volatility"},
            {title:"RBA", longname:"Robust Bayesian Allocation"},
            {title:"OPS", longname:"Online Portfolio Selection"}
        ]
    },
    {
        id: "3",
        menu:"Portfolio Management",
        section:"Optimization",
        showitems:true,
        items:[
            {title:"AC", longname:"Asset Correlations"},
            {title:"PO", longname:"Portfolio Optimization"},
            {title:"CLA", longname:"Critical Line Algorithm"},
            {title:"HRP", longname:"Hierachial Risk Parity"},
            {title:"MVO", longname:"Mean Variance Optimization"},
            {title:"NCO", longname:"Nested Clustered Optimization"},
            {title:"Shrinkage", longname:"Shrinkage (Basic LW, OAS)"},
            {title:"D&D", longname:"De-noising and Detoning"}
        ]
    },
    {
        id: "4",
        menu:"Portfolio Management",
        section:"Factor Model",
        showitems:true,
        items:[{title:"Alpha", longname:"Alpha"}, {title:"Beta", longname:"Beta"}]
    },
    {
        id: "5",
        menu:"Arbitrage Management",
        section:"Statistical Arbitrage",
        showitems:true,
        items:[
            {title:"DA", longname:"Distance Approach"},
            {title:"CA", longname:"Cointegration Approach"},
            {title:"TSA", longname:"Time Series Approach"},
            {title:"SCA", longname:"Stochastic Control Approach"},
            {title:"COA", longname:"Copula Approach"},
            {title:"PA", longname:"PCA Approach"},
            {title:"MLA", longname:"Machine Learning Approach"}
        ]
    },
    {
        id: "6",
        menu:"Arbitrage Management",
        section:"Triangular Arbitrage",
        showitems:true,
        items:[{title:"TA", longname:"Triangular Arbitrage"}]
    },
    {
        id: "7",
        menu:"Machine Learning Algo",
        section:"Financial DS",
        showitems:true,
        items:[{title:"FDS", longname:"Financial Data Structures"}]
    },
    {
        id: "8",
        menu:"Machine Learning Algo",
        section:"Labeling Techniques",
        showitems:true,
        items:[{title:"LT", longname:"Labeling Techniques"}]
    },
    {
        id: "9",
        menu:"Machine Learning Algo",
        section:"Feature Engineering",
        showitems:true,
        items:[{title:"FE", longname:"Feature Engineering"}]
    },
    {
        id: "10",
        menu:"Machine Learning Algo",
        section:"ML Modelling",
        showitems:true,
        items:[{title:"MLM", longname:"Machine Learning"}]
    },
    {
        id: "11",
        menu:"Machine Learning Algo",
        section:"Codependence",
        showitems:true,
        items:[{title:"C&N", longname:"Codependence & Networks"}]
    },
    {
        id: "12",
        menu:"Machine Learning Algo",
        section:"Synthetic Data",
        showitems:true,
        items:[{title:"SDG", longname:"Synthetic Data Generation"}]
    },
    {
        id: "13",
        menu:"Machine Learning Algo",
        section:"Clustering Techniques",
        showitems:true,
        items:[{title:"CT", longname:"Clustering Techniques"}]
    },
    {
        id: "14",
        menu:"Machine Learning Algo",
        section:"Networks Modelling",
        showitems:true,
        items:[{title:"NM", longname:"Networks Modelling"}]
    }

]

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
        <MenuIcons activeMenu={setActiveMenu}/>
        
        <div className="flex flex-1 flex-col">
            <div className="flex flex-col min-h-screen h-screen">
                <Header/>
                <div className="flex-1 flex flex-row overflow-y-hidden">
                    <Menu activeMenuItems={menuData}/>               
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