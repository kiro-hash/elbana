import "./styles/Home.css"

import heroimg from "../assets/heroimg.jpg"
import NavBar from "../components/NavBar"
import LangBtn from "../components/LangBtn"
const Home = () => {
  return (
    <>
    <NavBar/>
    <LangBtn/>
      <div className="hero">
        <img src={heroimg} alt="" />
      </div>
    </>
  )
}

export default Home
