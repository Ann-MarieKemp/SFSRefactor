import React from "react"

const Totals = ({ total }) => {
  return (
    <div className="total-box">
      <p id="total">Total</p>
      <p id="totalValue">${total}</p>
    </div>
  )
}

export default Totals
