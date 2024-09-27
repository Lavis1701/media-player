
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route,Routes } from 'react-router-dom'
import Landingpage from './Pages/Landingpage'
import Home from './Pages/Home'
import Watchhistory from './Pages/Watchhistory'


function App() {

  return (
    <>
     <Header/>
     <Routes>
     <Route path='/'element={<Landingpage/>}/>
     <Route path='/home'element={<Home/>}/>
     <Route path='/Watchhistory'element={<Watchhistory/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
