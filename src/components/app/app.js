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
        {name: 'Lisa', salary: 800, increase: false,  rise: false, id: 1},
        {name: 'Tom', salary: 500, increase: false, rise: false,  id: 2},
        {name: 'Jerry', salary: 900, increase: false, rise: false,  id: 3},
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
      rise: false,
      id: this.id++
    }

    let newData = this.state.data.concat(newWorker);
    this.setState(({id}) => {
      return{
        data: newData
      }
    })
  }

  onToggleIncrease = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id);
  
      const oldRow = data[index];
      const newRow = {...oldRow, increase: !oldRow.increase};
      
      const newData = [...data.slice(0, index), newRow, ...data.slice(index, +1)];
      console.log(id, index)
      
      return {
        data: newData
      }
    })
  }

  onToggleRise = (id) => {
    console.log(`${id} was rised!`);
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
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}/>
        <EmployeeAddForm 
          onAdd={this.addItem}/>
      </div>
    )
  }
}

export default App;