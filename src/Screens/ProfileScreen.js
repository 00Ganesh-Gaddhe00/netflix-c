import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectuser } from '../features/userSlice'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

function ProfileScreen() {
const user = useSelector(selectuser)

  return (
    <div className='profileScreen'>
        <Nav/>
     <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen_info'>
            <img 
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='profile icon'
            />
            <div className='profileScreen_details'>
                <h2>{user.email}</h2>
                <div class="profileScreen_plans">
                    <h3>Plans</h3>
                    <button onClick={()=>auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
                </div>
            </div>
        </div>

     </div>
    </div>
  )
}

export default ProfileScreen