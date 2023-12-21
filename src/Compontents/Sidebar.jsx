import React from 'react';

function Sidebar() {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
        <div className='position-sticky'>
        <h3 className='heading'>Guvi sales</h3>
        <ul className="nav flex-column">
          <li className="head2">
            <a className="nav-link active" href="#">
            <i className="fa-solid fa-table-cells-large"></i>&nbsp;&nbsp;
              Dashboard
            </a>
          </li>
          <li className="nav-item">
          <i className="fa-solid fa-clipboard-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Lab Test
          </li>
          <li className="nav-item">
            <i className="fa-solid fa-business-time"></i>&nbsp;&nbsp; Appointment
          </li>
          <li className="nav-item">
            <i className="fa-solid fa-suitcase-medical"></i>&nbsp;&nbsp; Medicine Order
          </li>
          <li className="nav-item">
            <i className="fa-regular fa-envelope"></i>&nbsp;&nbsp; Message
          </li>
          <li className="nav-item">
            <i className="fa-solid fa-wallet"></i>&nbsp;&nbsp; Payment
          </li>
          <li className="nav-item">
            <i className="fa-solid fa-gear"></i>&nbsp;&nbsp; Setting
          </li>
          <li className="ques">
            <i className="fa-regular fa-circle-question"></i>&nbsp;&nbsp; Help
          </li>
        </ul>
        </div>
    </nav>
  );
}

export default Sidebar;
