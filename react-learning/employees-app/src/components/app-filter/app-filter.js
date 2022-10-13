import './app-filter.css'

const AppFilter = (props) => {
  const bittonsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'like', label: 'На повышение' },
    { name: 'moreThen1000', label: 'З/П больше 1000$' },
  ];

  const buttons = bittonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light'
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
}

export default AppFilter;