import React from "react"

const Table = ({ debts, clearCheckboxes, handleSelect }) => {
  return (
    <div id="table-format">
      <div className="table-div">
        <div className="tr-div">
          <input
            className="checkbox"
            type="checkbox"
            onClick={clearCheckboxes}
          />

          <div className="th-div">Creditor</div>
          <div className="th-div">First Name</div>
          <div className="th-div">LastName</div>
          <div className="th-div">Min Pay%</div>
          <div className="th-div">Balance</div>
        </div>
      </div>
      <div className="tablebody-div">
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
              <div className="subtr-div">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={isChecked}
                  name={idx}
                  onChange={handleSelect}
                />

                <div className="td-div">{creditorName}</div>
                <div className="td-div">{firstName}</div>
                <div className="td-div">{lastName}</div>
                <div className="td-div">{minPaymentPercentage}</div>
                <div className="td-div">{balance}</div>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Table
