import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <div className="content-wrap">
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/projects' element={ <Projects/> }/>
          <Route path='/dashboard' element={ <Dashboard/> }/>
          <Route path='/login' element={ <Auth/> }/>
          <Route path='/register' element={ <Auth insideRegister={true} /> }/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
