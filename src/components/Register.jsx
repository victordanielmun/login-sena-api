import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Alert } from './Alert'

export default function Register() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  //estado error
  const [ error, setError ] = useState();

  const { signUp } = useAuth();
  const navigate = useNavigate();


  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
      try {
        await signUp(user.email, user.password);
        navigate('/');
      } catch (error) {
        setError(error.message)
        console.log(error.message)
      }
    
    
  }
  
  return (
    <div>
      {error && <Alert message={error} />}
      
      <h1>⚛️Register🌀</h1>
       <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          onChange={handleChange} 
          />
              <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          onChange={handleChange} 
          />
         <div>
         <button>
         Registrarse
         </button>
         </div>
      </form>
    </div>
  )
}