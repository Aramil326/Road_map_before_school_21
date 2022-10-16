import EmployeeListItem from "../employee-list-item/employee-list-item"
import './employee-list.css'

const EmployeeList = ({ data, onDelete, onToggleProp }) => {

  // Чтобы вручную не перебирать и вставлять в верстку каждый элемент сотрудника, мы перебираем map'ом массив с данными и на их основе формируем массив готовых EmployeeListItem элементов
  const elements = data.map(item => {
    const { id, ...itemProps } = item;  // с помощью частичной деструктуризации вытаскиваем отдельно id каждого элемента сотрудника
    return (
      <EmployeeListItem
        key={id}  // вставляем уникальный id сотрудника в атрибут key для корректной работы алгоритма согласования
        {...itemProps}  // с помощью spread оператора мы разворачиваем все пропсы (name, salary и т.д.)
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
      />
    )
  })


  return (
    <ul className="app-list list-group">
      {elements}  {/* деструктурируем массив элментов EmployeeListItem, которые вставятся в верстку */}
    </ul>
  )
}

export default EmployeeList;