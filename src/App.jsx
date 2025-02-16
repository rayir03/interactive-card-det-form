
import './App.css'
import FormInputs from './components/FormInputs'
import bgMain from "./assets/images/bg-main-desktop.png";

function App() {
  
  return (
    <>

      <main>
        <div className="imagen">
          <img src={bgMain} alt="background" />
        </div>
        <FormInputs />
      </main>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Raymel Iznaga</a>.
      </div>

    </>
  )
  
}

export default App
