import React from 'react'
import RaiseTicketRight from './RaiseTicketRight'
import RaiseTicketLeft from './RaiseTicketLeft'

const RaiseTicket = () => {
  return (
    <div className="container px-5 ">
      <div className="row">
        <div className="col-8 px-5">
        <RaiseTicketLeft />
      </div>
      <div className="col-4 px-5">
        <RaiseTicketRight/>
      </div>
      </div>
    </div>
  )
}

export default RaiseTicket
