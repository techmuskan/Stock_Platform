import React from 'react'
import RaiseTicketRight from './RaiseTicketRight'
import RaiseTicketLeft from './RaiseTicketLeft'

const RaiseTicket = () => {
  return (
    <div className="container px-4 px-lg-5">
      <div className="row">
        <div className="col-12 col-lg-8 px-3 px-lg-5">
        <RaiseTicketLeft />
      </div>
      <div className="col-12 col-lg-4 px-3 px-lg-5">
        <RaiseTicketRight/>
      </div>
      </div>
    </div>
  )
}

export default RaiseTicket
