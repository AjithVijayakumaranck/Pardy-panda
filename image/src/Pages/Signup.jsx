import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import instance from '../Axiosinstance/instance'


const Signup = () => {
      const [form,setForm]= useState({
        email:"",
        password:"",
        displayname:""
      })

    const handleSubmit = (e) => {
        e.preventDefault()
        instance.post('signup',form).then((Response)=>{
            console.log(Response,"hello");
        })
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-purple-700'>
            <div className='flex flex-col bg-white rounded-md items-center px-3 py-3'>
                <h1 className="font-bold text-purple-700 text-xl ">ImageBox</h1>
                <p className='font-semibold text-xs'>Register Here</p>
                <form className='flex flex-col gap-3 px-6 py-4' onSubmit={(e)=>handleSubmit(e)}>
                    <div>
                        <label htmlFor="" className='block  text-sm font-semibold'>Display name</label>
                        <input type="text" onChange={(e)=>{
                            setForm({...form,displayname:e.target.value})
                        }}  value={form.displayname} className='border-b-[1.5px] border-purple-700 outline-none px-3' />
                    </div>
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
                    <button className='w-full bg-purple-600 text-white rounded-full py-1 mt-2'>Signup</button>

                </form>
                <p className='text-sm '>Already have an account? <Link to="/login" className='text-purple-700 font-semibold'>login</Link></p>
            </div>
        </div>
    )
}

export default Signup