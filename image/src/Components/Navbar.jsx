import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserProfileContext } from '../Context/Authcontext'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const userProf = useContext(UserProfileContext)

    const { profUser} = userProf
      const name = localStorage.getItem('displayname')
    const navigate = useNavigate()
    const Logout = () => {
        localStorage.clear()
        navigate('/login')

    }
    return (
        <div className='bg-purple-600 h-[5rem] flex justify-between px-4 md:px-[10rem] items-center relative'>
            <div className='flex items-center'>
                <h1 className='text-white font-bold text-2xl'>
                    ImageBox
                </h1>
                <h1 className='px-3 text-xs text-white font-medium md:hidden'>
              hi {name} :)
              </h1>
            </div>
            <div className='flex items-center'>
              <h1 className='px-3 text-white font-medium hidden md:flex'>
              hi {name} :)
              </h1>
             <button onClick={Logout} className='bg-white font-semibold px-4 py-1 hidden md:flex text-purple-700'>logout</button>
             <ArrowLeftOnRectangleIcon onClick={Logout} className="text-white md:hidden mr-14 w-7 "/> 
            </div>
        </div>
    )
}

export default Navbar