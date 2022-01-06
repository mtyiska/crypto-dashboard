import { useRouter} from 'next/router'
import {menuItems, menuNames} from "../../utils/menudata"
import matter from 'gray-matter';
import ReactMarkdown from "react-markdown";

const ToolDetails = ({contentData}) => {
    const router = useRouter()
    const {tool} = router.query
    // console.log(data)
    if(router.isFallback){
        return <h1>Loading....</h1>
    }
    const {data, content} = matter(contentData[0].toString());
    return (
        <div>
            <h1>Details about algo {tool}</h1>
            <div id="blog-post-container">

            <h2 className="header">{data.title}</h2>
            <h3>{data.description}</h3>
                <ReactMarkdown children={content} /> 
            </div>
        </div>
    )
}



export default ToolDetails

export async function getStaticPaths(){  
    const paths = []
    menuItems.map((menu) => menu.items.map(item =>{
        paths.push({
            params: {
                tool: `${item.title.toLowerCase().replace(" ", "-")}`
            }
        })
    }))

    return{
        paths,
        fallback: false
    }
}


export async function getStaticProps(){
    const fs = require("fs");
    const files = fs.readdirSync(`${process.cwd()}/content`, 'utf-8');
    const blogs = files.filter(fn => fn.endsWith(".md"));
    const contentData = blogs.map(blog => {
        const content = fs.readFileSync(`${process.cwd()}/content/${blog}`, 'utf8')
        return content;
    });

    return {
        props: {
            contentData
        }
    }
}



