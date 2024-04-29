import { ThemeContext } from './context/themeContext'
//import {UserProvider} from './context/userContext'
import './App.css'
import MainComponent from './components/MainComponent'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <MainComponent />
    </>
  )
}

export default App
