import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Login } from './pages/Login'

const App: React.FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<>NOT FOUND</>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
