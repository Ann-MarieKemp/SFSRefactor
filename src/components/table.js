import React from "react"

const Table = ({ debts, clearCheckboxes, handleSelect }) => {
  return (
    <table id="table-format">
      <thead>
        <tr>
          <th>
            <input
              className="checkbox"
              type="checkbox"
              onClick={clearCheckboxes}
            />
          </th>
          <th>Creditor</th>
          <th>First Name</th>
          <th>LastName</th>
          <th>Min Pay%</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {debts.map((debt, idx) => {
          const {
            firstName,
            lastName,
            creditorName,
            minPaymentPercentage,
            balance,
            isChecked,
          } = debt
          return (
            <React.Fragment key={idx}>
              <tr>
                <td>
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={isChecked}
                    name={idx}
                    onChange={handleSelect}
                  />
                </td>
                <td>{creditorName}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{minPaymentPercentage}</td>
                <td>{balance}</td>
              </tr>
            </React.Fragment>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
