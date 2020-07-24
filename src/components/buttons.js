import React from "react"

const Buttons = ({ addRow, removeRow }) => {
  return (
    <div className="button-box">
      <button onClick={addRow}>Add Debt</button>
      <button onClick={removeRow}>Remove Debt</button>
    </div>
  )
}

export default Buttons
