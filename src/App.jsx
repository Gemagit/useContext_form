import {ThemeContext} from './context/themeContext'
//import {UserProvider} from './context/userContext'
import Formulario from './components/MainComponent/Form'
import Card from './components/MainComponent/Card'
import './App.css'

function App() {

//const [theme, setTheme]= useState('')

 /*  //el objeto que representa el contexto
 const themeData = {
  theme,
  toggleTheme
 }
 */
  return (
    <>
      <ThemeContext.Provider /*</>value={themeData}*/>
        <Formulario />
        <Card />
      </ThemeContext.Provider>
    </>
  )
}

export default App
