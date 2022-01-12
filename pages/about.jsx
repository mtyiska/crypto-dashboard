import Footer from "../components/Footer"
import Image from 'next/image'

const about = () => {
    return (
        <>
        <div className="flex flex-wrap md:w-full text-grey-darkest md:px-8">
            
            <div className="w-3/5 md:w-2/3 py-3">
                <h1>About Me</h1>
                <p>Hi, my name is Michael Tyiska. I am a software developer with some skills in quantitative finance and a great passion for investing. I cherish the idea of achieving financial freedom through Bitcoin, altcoins and other investment tools, which is why I started this project. It helps me build and manage my personal investment portfolio, and I hope that it could be helpful for you as well! I'm not a financial advisor, and I don't work for a financial organization. If you are looking for financial advice, this is not the right place to get it. In the event of any questions or feedback, feel free to contact me via LinkedIn. Thank you.</p>
            </div>

            <div className="w-2/5 md:w-1/3 py-3 flex justify-center items-center">
                <Image 
                className="rounded-full"
                src="/profile.png" alt="me" width="300px" height="300px"/>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default about
