/*styles*/
import './App.css'
/*images*/
import banner from "../public/images/drawers.jpg";
/*components*/
import UserComment from "./components/userComment";
function App() {
  return (
      <>
        <img src={banner} className="banner"/>
        <aside>
          <h1>
            shoft overall look and feel by adding these wonderfull
            touches to forniture in your home
          </h1>
          <p>
            even been in a room and felt like something was missing?
            pheraps it felt slightly bare and uninviting. i've got some
            simple tips to help you make any room feel complete
          </p>
        <UserComment/>
        </aside>
      </>
  )
}

export default App
