import Container from "../components/Container";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div>
      <div className="flex w-screen h-screen" >
        <SideBar/>
        <div className="w-screen">
          <Header/>
          <Container/>
        </div>
      </div>
    </div>
  )
}
