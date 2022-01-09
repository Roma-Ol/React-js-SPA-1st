import EmployeesListItem from "../employee-list-item/employee-list-item"
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;

    return (
      <EmployeesListItem 
      key={id} 
      {...itemProps} 
      onDelete={() => onDelete(id)}
      onToggleRise={() => onToggleRise(id)}
      onToggleIncrease={() => onToggleIncrease(id)}/>
    )
  })
  
  return(
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList;