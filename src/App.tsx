import * as C from './App.styles'
import { Item } from './types/Item'
import { Category } from './types/Carogory'
import {categories} from './data/categories'
import {items} from './data/Items'
import { useState, useEffect } from 'react'
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter'
import { TableArea } from './components/TableArea'


const App = () => {
  const [list, setList] = useState(items);
  const [filtredList, setFiltredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  console.log(list);
  
  
  useEffect(() => {
    setFiltredList(filterListByMonth(list, currentMonth))
  },[list, currentMonth])


  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

      {/* Area de info */}


      {/* Area de incerçao */}


      <TableArea list={filtredList}/>


      </C.Body>
    </C.Container>
  )
}

export default App