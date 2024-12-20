import Navbar from "./Navbar"
import Card from "./Card"
import ProCard from "./ProCard"
import Footer from "./Footer"
import Adani from "./assets/Gautam_Adani.jpg"

function About(){
  return (
    <>
      <h1>This is about Section</h1>
    </>
  )
}

function App() {

  return (
      <>
        <h1>Namaste paaji</h1>
        <Navbar />
        <h2>About Them:</h2>
        <div>
          <ProCard />
          <ProCard name="LadduBhai" about="This is a Metaverse Character" isPro={true} img_src="https://tr.rbxcdn.com/30DAY-Avatar-F9719D35712C7A2C018D8CF43891BFDC-Png/150/150/Avatar/Webp/noFilter"/>
          <ProCard href="https://youtu.be/AJ8FOlvwb1k" id="adani" name="Gautam Adani" about="Chairman of Adani Group, Richest person in Asia" img_src={Adani} alt="Prime Minister" />
          <ProCard name="Mark Zukerburg" about="Owner of Meta, React too"></ProCard>
        </div>
        <Footer />      
      </>
  )
}

export default App
