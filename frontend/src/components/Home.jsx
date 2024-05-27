import React from 'react';

function Home() {

    const handleTodo = () =>{
        alert("Success")
    }




  return (
    <>
      <h3 className='text-center'>Todo List</h3>
      <div className='container'>
         {/* Button to open the modal */}
        <button type='button' className='btn btn-success' data-bs-toggle="modal" data-bs-target="#myModal">+ Add Todo</button>
      </div>

      {/* Modal */}
<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

      
      <div className="modal-header">
        <h4 className="modal-title">Add Todo</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      
      <div className="modal-body">
        <label htmlFor="todoTitle" className="form-label">Todo Title</label>
        <input type="text" className="form-control" id="todoTitle" />

        <label htmlFor="tododate" className="form-label">Todo Date</label>
        <input type="date" className="form-control" id="tododate" />
      </div>

      
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={handleTodo} >Save</button>
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>



{/* Delete Modal */}

<div className="modal" id='deletemodal'>
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h4>Delete Todo!!!</h4>
                <button type='button' className='btn-close' data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
                <label className='form-label'>Are you sure you want to delete?</label>
            </div>

            <div className="modal-footer">
                <button type='button' className="btn btn-primary">No</button>
                <button type='button' className="btn btn-danger " data-bs-dismiss="modal">Yes</button>
            </div>
        </div>
    </div>
</div>




      {/* Todo container */}
      <div className="container border rounded shadow mt-5 py-2 mb-5">
        
        <div>
          <ol>
            
            <li className='mb-2 p-2 '>
              <label className='col-sm-3 me-2'>Read Django </label>
              <label className='col-sm-3 me-2'>27/05/2024</label>
              <button className='btn btn-danger col-sm-2 me-2' data-bs-target='#deletemodal' data-bs-toggle='modal' >Delete</button>
              <button className='btn btn-primary col-sm-2'>Edit</button>
            </li>
            <li className='mb-2 p-2 '>
              <label className='col-sm-3 me-2'>Read Django </label>
              <label className='col-sm-3 me-2'>27/05/2024</label>
              <button className='btn btn-danger col-sm-2 me-2'>Delete</button>
              <button className='btn btn-primary col-sm-2'>Edit</button>
            </li>
            <li className='mb-2 p-2 '>
              <label className='col-sm-3 me-2'>Read Django </label>
              <label className='col-sm-3 me-2'>27/05/2024</label>
              <button className='btn btn-danger col-sm-2 me-2'>Delete</button>
              <button className='btn btn-primary col-sm-2'>Edit</button>
            </li>
            <li className='mb-2 p-2 '>
              <label className='col-sm-3 me-2'>Read Django </label>
              <label className='col-sm-3 me-2'>27/05/2024</label>
              <button className='btn btn-danger col-sm-2 me-2'>Delete</button>
              <button className='btn btn-primary col-sm-2'>Edit</button>
            </li>
            
          </ol>
        </div>
      </div>
    </>
  )
}

export default Home;
