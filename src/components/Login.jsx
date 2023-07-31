import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Alert } from './Alert'

export default function Login() {
  //estado usuario
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  //estado error
  const [ error, setError ] = useState();

  //contexto - funcion login
  const { login, loginWithGoogle, resetPassword } = useAuth();

  //navigate - pasar a siguiente ventana
  const navigate = useNavigate();
  
  //manejador cambios form
  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  //Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
      try {
        await login(user.email, user.password);
        navigate('/');
      } catch (error) {
        setError(error.message)
      }
    
    
  }

  //login 
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    navigate('/');
    } catch (error) {
      setError(error.message)
    }
  }

  //reset password
  const handleReset = async () => {
    if (!user.email) return setError('ingrese su correo');
    setError('enviamos un link para restablecer constraseña a su correo');
    try {
      await resetPassword(user.email);
    } catch (error) {
      setError(error.message);
    }
  }
  
  return (
    <div>
      {error && <Alert message={error} />}
      
      <h1>⚛️Login🌀</h1>
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
         Login
         </button>
         </div>
      </form>

      <button onClick={handleGoogleLogin}>Login con Google</button>
      
      <div><a href='#!'onClick={handleReset} >Olvido Contraseña?
      </a></div>
      
      
    </div>
  )
}