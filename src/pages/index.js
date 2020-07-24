import React, { useState, useEffect } from "react"
import useAPI from "../hooks/useAPI"
import styles from "../styles/index.modules.css"
import Table from "../components/table"
import Buttons from "../components/buttons"
import Totals from "../components/totals"
import Counts from "../components/counts"

export default function Home() {
  const apiDebts = useAPI()
  const [total, setTotal] = useState(0)
  const [debts, setDebts] = useState([])
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([])
  const [checkboxCount, setCheckboxCount] = useState(0)

  const getTotal = () => {
    //gets the total of all debts that are selected
    let debtTotal = debts.reduce((acc, debt) => {
      if (debt.isChecked) {
        return acc + debt.balance
      } else {
        return acc
      }
    }, 0)
    setTotal(debtTotal)
  }
  useEffect(() => {
    setDebts(apiDebts)
  }, [])

  //adds a row when add row button clicked
  const addRow = () => {
    setDebts([...debts, { balance: 0 }])
  }

  //removes a row when remove row button clicked
  const removeRow = () => {
    debts.pop()
    setDebts([...debts])
  }

  //selects or deselects all checkboxes when top checkbox clicked
  const clearCheckboxes = e => {
    if (e.target.checked === true) {
      setCheckboxCount(debts.length)
      debts.map(debt => {
        debt.isChecked = true
        getTotal()
        return e.target
      })
    } else {
      setCheckboxCount(0)
      debts.map(debt => {
        debt.isChecked = false
        getTotal()
        return e.target
      })
    }
  }

  //updates individual checkbox when clicked and changes isChecked property on debt object
  const handleSelect = e => {
    const item = e.target
    //loops through debts and updates isChecked if it mateches our event
    debts.forEach((debt, idx) => {
      if (String(idx) === e.target.name) {
        debt.isChecked = e.target.checked
      }
    })
    //if this target is not already in our selectedCheckbox array it adds it, if it is it removes it
    if (selectedCheckboxes.indexOf(item) !== -1) {
      selectedCheckboxes.splice(selectedCheckboxes.indexOf(item), 1)
      setCheckboxCount(checkboxCount - 1)
    } else {
      selectedCheckboxes.push(item)
      setCheckboxCount(checkboxCount + 1)
    }
    setSelectedCheckboxes([...selectedCheckboxes])
    getTotal()
  }

  return (
    <div>
      <Table
        debts={debts}
        clearCheckboxes={clearCheckboxes}
        handleSelect={handleSelect}
      />
      <div className="main-content-box">
        <Buttons addRow={addRow} removeRow={removeRow} />
        <Totals total={total} />
        <Counts debts={debts} checkboxCount={checkboxCount} />
      </div>
    </div>
  )
}
