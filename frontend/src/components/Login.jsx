import React from 'react'
import { useState } from 'react'
import api from '../api'
import { ACCESS_TOKEN } from '../constants'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [email,setEmail] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [cpassword,setCpassword] = useState("")
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    

    const handleLogin= async(e)=>{
        setLoading(true)
        e.preventDefault()

        try{
            const res = await api.post('api/token/',{email,username,password})
            localStorage.setItem(ACCESS_TOKEN,res.data.access);
            localStorage.setItem(ACCESS_TOKEN,res.data.refresh);
            navigate("/todos")

        }

        catch(error){
            alert(error)
        }

        finally{
            setLoading(false)
        }

        console.log(email,username,password,cpassword)
    }
  return (
    <>
    <div className="container">
        <h3 className='text-center'>Sign In</h3>
        <form className='shadow rounded mt-5 mb-5 px-5 py-4' onSubmit={handleLogin}>
        

        <div className="form-group mt-3">
            <label> Username</label>
            <input type='text'  className='form-control' value = {username} onChange={(e)=>setUsername(e.target.value)} />
        </div>
         <div className="form-group mt-3">
            <label > Password</label>
            <input type='password'   className='form-control' value = {password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        
            <button type='submit' className='btn btn-success mt-3' >Submit</button>
        </form>
    </div>
      
    </>
  )
}

export default Login
