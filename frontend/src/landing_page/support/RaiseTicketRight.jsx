import React from 'react'

const RaiseTicketRight = () => {
  return (
    <div className="py-5" style={{marginRight:"20px"}}>
      <div
        className="row py-2 px-4 text-primary lh-lg announcement-box"
        style={{ backgroundColor: "#ffe3e7", borderLeft: "10px solid orange" }}
      >
        <ul className="mb-0">
          <li>Adjustment of F&O contracts of BPCL due to dividend</li>
          <li>Orders rejected in MCX segment [Resolved]</li>
        </ul>
      </div>

      <div className="row border my-4">
        <p className="border px-4 py-3 fw-bold mb-0" style={{backgroundColor: "#F0F0F0"}}>Quick Links</p>
        <ol className="px-5 py-4 mb-0 text-primary lh-lg quick-links">
          <li>Tracking account opening</li>
          <li>Track segment activation</li>
          <li>Intraday margins</li>
          <li>Kite user manual</li>
          <li>Learn how to create a ticket</li>
        </ol>
      </div>
    </div>
  )
}

export default RaiseTicketRight
