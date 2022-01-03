import { Component } from 'react/cjs/react.development';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Lisa', salary: 800, increase: false, id: 1},
        {name: 'Tom', salary: 500, increase: true, id: 2},
        {name: 'Jerry', salary: 900, increase: false, id: 3},
      ],
      id: 4
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    let newWorker = {
      name: name,
      salary: salary,
      increase: false,
      id: this.state.id
    }

    let newData = this.state.data.concat(newWorker);
    this.setState(({id}) => {
      return{
        id: id + 1,
        data: newData
      }
    })

  }

  render() {
    const {data} = this.state;

    return (
      <div className='app'>
        <AppInfo />
  
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />      
        </div>
  
        <EmployeesList 
          data={data}
          onDelete={this.deleteItem}/>
        <EmployeeAddForm 
          onAdd={this.addItem}/>
      </div>
    )
  }
}

export default App;