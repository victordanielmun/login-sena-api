import { Route, Routes} from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import AuthProvider from './context/AuthContext'
import './App.css'

export default function App() {
  
  return (
    <div>
      <AuthProvider>
      <Routes>
          <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
          } />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
      </Routes>
      </AuthProvider>
    </div>
  )
}
