export const menuItems = [
    {
        id: "1",
        menu:"Portfolio Management",
        section:"Performance Analysis",
        showitems:true,
        items:[
            {title:"portfolio-analysis", longname:"Portfolio Analysis"}, 
            {title:"portfolio-performance", longname:"Portfolio Performance"}, 
            {title:"sharpe-ratio", longname:"Sharpe Ratio"}, 
            {title:"sortino-ratio", longname:"Sortino Ratio"}, 
            {title:"calmer-ratio", longname:"Calmer Ratio"},
            {title:"black-litterman", longname:"Black Litterman"},
            {title:"herc", longname:"Hierarchical Equal Risk Contribution"},
            {title:"entropy-pooling", longname:"Entropy Pooling"},
            {title:"tip", longname:"Theory Implied Correlation"}
        ]
    },
    {
        id: "2",
        menu:"Portfolio Management",
        section:"Risk Analysis",
        showitems:true,
        items:[
            {title:"drawdowns", longname:"Drawdowns"},
            {title:"value-at-risk", longname:"Value at Risk"},
            {title:"expected-shortfall", longname:"Expected Shortfall"},
            {title:"close-to-close-vol", longname:"Close-to-Close Volatility"},
            {title:"parkinson-volatility", longname:"Parkinson Volatility"},
            {title:"garman-klass-vol", longname:"Garman klass Volatility"},
            {title:"roger-satchell-vol", longname:"Rogers-Satchell Volatility"},
            {title:"yang-zhang-vol", longname:"Yang Zhang Volatility"},
            {title:"rba", longname:"Robust Bayesian Allocation"},
            {title:"online-portfilio-selection", longname:"Online Portfolio Selection"}
        ]
    },
    {
        id: "3",
        menu:"Portfolio Management",
        section:"Optimization",
        showitems:true,
        items:[
            {title:"asset-correlation", longname:"Asset Correlations"},
            {title:"portfolio-optimization", longname:"Portfolio Optimization"},
            {title:"critical-line-algo", longname:"Critical Line Algorithm"},
            {title:"hrp", longname:"Hierachial Risk Parity"},
            {title:"mean-var-optimization", longname:"Mean Variance Optimization"},
            {title:"nested-clusterd-opt", longname:"Nested Clustered Optimization"},
            {title:"shrinkage", longname:"Shrinkage (Basic LW, OAS)"},
            {title:"dnd", longname:"De-noising and Detoning"}
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
            {title:"distance-approach", longname:"Distance Approach"},
            {title:"coint-approach", longname:"Cointegration Approach"},
            {title:"ts-approach", longname:"Time Series Approach"},
            {title:"stoch-control-approach", longname:"Stochastic Control Approach"},
            {title:"copula-approach", longname:"Copula Approach"},
            {title:"pc-approach", longname:"PCA Approach"},
            {title:"ml-approach", longname:"Machine Learning Approach"},
            {title:"triangle-arbitrage", longname:"Triangular Arbitrage"}
        ]
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