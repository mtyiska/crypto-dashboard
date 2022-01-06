export const menuItems = [
    {
        id: "1",
        menu:"Portfolio Management",
        section:"Performance Analysis",
        showitems:true,
        items:[
            {title:"Portfolio Analysis", longname:"Portfolio Analysis"}, 
            {title:"Portfolio Performance", longname:"Portfolio Performance"}, 
            {title:"Sharpe Ratio", longname:"Sharpe Ratio"}, 
            {title:"Sortino Ratio", longname:"Sortino Ratio"}, 
            {title:"Calmer Ratio", longname:"Calmer Ratio"},
            {title:"Black Litterman", longname:"Black Litterman"},
            {title:"Hier Equal Risk Contr.", longname:"Hierarchical Equal Risk Contribution"},
            {title:"Entropy Pooling", longname:"Entropy Pooling"},
            {title:"Theory Implied Cor", longname:"Theory Implied Correlation"}
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

export const menuNames = [
    {
        menuName:'Portfolio Management',
        url:'/portfolio'
    },
    {
        menuName:'Arbitrage Management',
        url:'/arbitrage'
    },
    {
        menuName:'Machine Learning Algo',
        url:'/machinelearning'
    }
]