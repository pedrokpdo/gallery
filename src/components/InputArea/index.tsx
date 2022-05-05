import { Item } from '../../types/Item'
import { Value } from '../TableItem/styles'
import * as c from './styles'

type Props = {
    onAdd:(item:Item) => void
}


export const InputArea = ({onAdd}:Props) => {
    const handleAddEvent = () => {
        let newItem:Item = {
            date: new Date (2021, 9, 27),
            category:'food',
            title:'item de teste',
            value: 250.20,
        }

        onAdd(newItem)
    }

    return(
        <c.Container>
            <button onClick={handleAddEvent}>adicionar</button>
        </c.Container>
    )
}