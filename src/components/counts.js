import React from "react"

const Counts = ({ debts, checkboxCount }) => {
  return (
    <div className="count-box">
      <p>Total Row Count:{debts.length} </p>
      <p>Check Row Count: {checkboxCount}</p>
    </div>
  )
}

export default Counts
