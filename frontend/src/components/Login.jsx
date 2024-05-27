import React from 'react'

function Login() {
  return (
    <>
    <div className="container">
        <h3 className='text-center'>Sign In</h3>
        <form className='shadow rounded mt-5 mb-5 px-5 py-4'>
        

        <div className="form-group mt-3">
            <label> Username</label>
            <input type='text'  className='form-control' />
        </div>
         <div className="form-group mt-3">
            <label > Password</label>
            <input type='password'   className='form-control' />
        </div>
        
            <button type='button' className='btn btn-success mt-3' >Submit</button>
        </form>
    </div>
      
    </>
  )
}

export default Login
