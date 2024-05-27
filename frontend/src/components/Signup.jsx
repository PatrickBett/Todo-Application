import React from 'react'

function Signup() {
  return (
    <>
    
       <div className="container">
        <h3 className='text-center'>Sign Up</h3>
         <form className='shadow rounded mt-2 px-5 py-4'>
        <div className="form-group mt-2">
            <label > Email</label>
            <input type='text'  className='form-control'/>
        </div>

        <div className="form-group mt-2">
            <label> Username</label>
            <input type='text'  className='form-control' />
        </div>
         <div className="form-group mt-2">
            <label > Password</label>
            <input type='password'   className='form-control' />
        </div>
        <div className="form-group mt-2">
            <label > Confirm Password</label>
            <input type='password'  className='form-control' />
        </div>
       
        <div className="checkbox mt-2">
            <label ><input type='checkbox'/>Remember me</label>
        </div>
            <button type='button' className='btn btn-success mt-2' >Submit</button>
        </form>
       </div>
        
   
      
    </>
  )
}

export default Signup
