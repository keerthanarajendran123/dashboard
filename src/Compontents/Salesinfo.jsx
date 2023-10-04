import React from 'react'

function Salesinfo() {
  return (
    <div className="container-fluid">
        <div className='saleinfo'> 
        <h3>Sales Information</h3><br/>
    <form>
        <div className="row">
            <div className="col-md-6 col-lg-3">
                <div className="form-group">
                    <label for="input1"><b>Customer</b></label><br/><br/>
                    <input type="text" className="form-control" id="input1" placeholder="Enter Costumer Name"/>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="form-group">
                    <label for="input2"><b>Invoice ID</b></label><br/><br/>
                    <input type="text" className="form-control" id="input2" placeholder="Enter Invoice ID"/>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="form-group">
                    <label for="input3"><b>Start date</b></label><br/><br/>
                    <input type="text" className="form-control" id="input3" placeholder="Start Date"/>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="form-group">
                    <label for="input4"><b>End Date</b></label><br/><br/>
                    <input type="text" className="form-control" id="input4" placeholder="End Date"/>
                </div>
            </div>
        </div>
    </form>
    </div>
</div>
  ) 
}
export default Salesinfo