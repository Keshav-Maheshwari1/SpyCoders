
import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

const Home = () => {
  const {userProfile}  = useContext(UserContext)
  if(!userProfile){
    return <div>User is not signed in</div>
  }
  return (
    <div>
    <h2 className='text-2xl'>User Profile</h2>
    <p className='text-orange-400 text-xl'>Username: {userProfile.name}</p>
    <p className='text-orange-300 text-xl'>Email: {userProfile.email}</p>
    
    {/* You can access other user properties here */}
  </div>
  )
}

export default Home