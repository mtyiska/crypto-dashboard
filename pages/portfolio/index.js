import { useRouter} from 'next/router'
import matter from 'gray-matter';
import ReactMarkdown from "react-markdown";

const Portfolio = ({contentData}) => {
    const router = useRouter()
    // console.log(algodata)
    // router.query.<name-in-folder-square-braces
    // const algoname = router.query.algoname
    const {data, content} = matter(contentData[0].toString());
    return (
      <div id="blog-post-container">
        <div className="container">
          <h1 className="header">{data.title}</h1>
          <h3>{data.description}</h3>
            <ReactMarkdown children={content} /> 
        </div>
      </div>
    )
}

export default Portfolio

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