import React from 'react'

function Signup() {
  return (
    <>
    <h3 className='text-center'>Sign Up</h3>
        <form className='shadow rounded mt-5 px-5 py-4'>
        <div className="form-group">
            <label > Email</label>
            <input type='text'  className='form-control'/>
        </div>

        <div className="form-group">
            <label> Username</label>
            <input type='text'  className='form-control' />
        </div>
         <div className="form-group">
            <label > Password</label>
            <input type='password'   className='form-control' />
        </div>
        <div className="form-group">
            <label > Confirm Password</label>
            <input type='password'  className='form-control' />
        </div>
       
        <div className="checkbox">
            <label ><input type='checkbox'/>Remember me</label>
        </div>
            <button type='button' className='btn btn-success hover' >Submit</button>
        </form>
        
   
      
    </>
  )
}

export default Signup
