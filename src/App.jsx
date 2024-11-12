import Navbar from "./Navbar"
import Card from "./Card"
import ProCard from "./proCard"
import Footer from "./Footer"

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
          <ProCard name="LadduBhai" about="This is a Metaverse Character" isPro={true} img_src="https://tr.rbxcdn.com/30DAY-Avatar-280E6D654E773B28FBD5033E38E0A475-Png/352/352/Avatar/Webp/noFilter"/>
          <ProCard name="Adani" about="Chairman of Adani Group, Richest person in Asia" alt="Prime Minister" />
          <ProCard name="Mark Zukerburg" about="Owner of Meta, React too"></ProCard>
        </div>      
      </>
  )
}

export default App
