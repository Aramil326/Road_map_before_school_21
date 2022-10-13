import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      nameInputClassNames: 'form-control new-post-label',
      salaryInputClassNames: 'form-control new-post-label'
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.name.length < 3 && !this.state.salary) {
      this.setState({
        nameInputClassNames: 'form-control new-post-label bg-warning',
        salaryInputClassNames: 'form-control new-post-label bg-warning'
      })
      return
    } else if (this.state.name.length < 3) {
      this.setState({
        nameInputClassNames: 'form-control new-post-label.bg bg-warning',
        salaryInputClassNames: 'form-control new-post-label'
      })
      return
    } else if (!this.state.salary) {
      this.setState({
        salaryInputClassNames: 'form-control new-post-label bg-warning',
        nameInputClassNames: 'form-control new-post-label'
      })
      return
    } else {
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
        name: '',
        salary: ''
      })
      this.setState({
        nameInputClassNames: 'form-control new-post-label',
        salaryInputClassNames: 'form-control new-post-label'
      })
    }
  }

  render() {
    const { name, salary, nameInputClassNames, salaryInputClassNames } = this.state;


    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
          className="add-form d-flex"
          onSubmit={this.onSubmit}>
          <input type="text"
            className={nameInputClassNames}
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange} />
          <input type="number"
            className={salaryInputClassNames}
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange} />

          <button type="submit"
            className="btn btn-outline-light">Добавить</button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm;