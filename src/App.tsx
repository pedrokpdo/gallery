import * as C from './App.styles'
import { Item } from './types/Item'
import { Category } from './types/Carogory'
import {categories} from './data/categories'
import {items} from './data/Items'
import { useState, useEffect } from 'react'
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'


const App = () => {
  const [list, setList] = useState(items);
  const [filtredList, setFiltredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  console.log(list);
  
  
  useEffect(() => {
    setFiltredList(filterListByMonth(list, currentMonth))
  },[list, currentMonth])

  useEffect(() => {
    let incomeCont = 0 
    let expenseCont = 0

    for(let i in filtredList) {
      if (categories[filtredList[i].category].expense) {
        expenseCont += filtredList[i].value
      } else {
        incomeCont += filtredList[i].value

      }
    }

    setIncome(incomeCont)
    setExpense(expenseCont)

  },[filtredList])

  const handleMonthChange = (newMonth:string) => {
    setCurrentMonth(newMonth)
  }


  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

      <InfoArea 
       currentMonth={currentMonth}
       onMonthChange={handleMonthChange}
       income={income}
       expense={expense}
       />


      {/* Area de incerçao */}


      <TableArea list={filtredList}/>


      </C.Body>
    </C.Container>
  )
}

export default App