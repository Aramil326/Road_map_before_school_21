import './employee-list-item.css';

const EmployeesListItem = (props) => {

  const { name, salary, onDelete, onToggleProp, increase, like } = props;

  let classNames = "list-group-item d-flex justify-content-between";  // переменная, в которой лежат классы элемента сотрудника
  if (increase) {  // Если в данных, которые нам пришли из пропсов, increase стоит в значении true
    classNames += ' increase';  // то к строке с классами мы конкатенируем класс increase
  }
  if (like) {  // Если в данных, которые нам пришли из пропсов, like стоит в значении true
    classNames += ' like';  // то к строке с классами мы конкатенируем класс like
  }

  return (
    <li className={classNames}>  {/* в верстку вставляем переменную classNames, в которой находится строка с классами элемента сотрудника */}
      <span className="list-group-item-label" onClick={onToggleProp} data-toggle="like">{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleProp}
          data-toggle="increase">
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button"
          className="btn-trash btn-sm "
          onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}

export default EmployeesListItem;