import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../Axiosinstance/instance'
import { UserProfileContext } from '../Context/Authcontext'

const Login = () => {
    const navigate = useNavigate()
    const userProfile = useContext(UserProfileContext)
    const {profUser,setprofUser} = userProfile
    const [form,setForm]= useState({
        email:"",
        password:"",
      })

    const handleSubmit = (e) => {
        e.preventDefault()
        instance.post('login',form).then((Response)=>{
            console.log(Response);
            setprofUser(Response.data.userInfo.displayname)
            localStorage.setItem("token",Response.data.token)
            localStorage.setItem("logged",true)
            localStorage.setItem("displayname",Response.data.userInfo.displayname)
            navigate('/')  
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen bg-purple-700'>
            <div className='flex flex-col bg-white rounded-md items-center px-3 py-3'>
                <h1 className="font-bold text-purple-700 text-xl ">ImageBox</h1>
                <p className='font-semibold text-xs'>Login Here</p>
                <form className='flex flex-col gap-3 px-6 py-4 ' onSubmit={(e)=>{
                    handleSubmit(e)
                }}>
                <div>
                        <label htmlFor="" className='block  text-sm font-semibold'>Email</label>
                        <input type="email" onChange={(e)=>{
                            setForm({...form,email:e.target.value})
                        }} value={form.email}  className='border-b-[1.5px] border-purple-700 outline-none px-3 ' />
                    </div>
                    <div>
                        <label htmlFor="" className='block  text-sm font-semibold'>Password</label>
                        <input type="password" onChange={(e)=>{
                        setForm({...form,password:e.target.value})
                        }} value={form.password}  className='border-b-[1.5px] border-purple-700 outline-none px-3' />
                    </div>
                    <button className='w-full bg-purple-600 text-white rounded-full py-1 mt-2'>login</button>

                </form>
                <p className='text-sm '>Dont have an account <Link to="/register" className='text-purple-700 font-semibold'>Signup</Link></p>
            </div>
        </div>
    )
}

export default Login