import React from 'react'

function Notify() {
  return (
    <div className='notify-container'>
    <button type="button" className="btn btn-light position-relative">
    <span><i className="fa-regular fa-bell notification-icon"></i></span>
  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-warning border border-light rounded-circle">
  </span>
</button>
</div>
  )
}

export default Notify