import './App.css'
import { Route, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';

function App() {
  return (
    <div className='min-h-screen overflow-hidden font-inter'>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default App
