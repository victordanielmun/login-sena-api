import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user, logout, loading } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.log(error)
    }
  };

  const jsonString = JSON.stringify(user, null, 2);

  if (loading) return <h1>loading</h1>
  
  
	return (
	
	<div>
  <h1>⚛️Home🌀</h1>
    <h1>⚛️Welcom {user.displayName || user.email}🌀</h1>
    <h1>⚛️UID {user.uid || user.email}🌀</h1>
    <h1>{jsonString}</h1>
    <button onClick={handleLogout} >Log Out</button>
     
  </div>
	)

}