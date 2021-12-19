import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

const data = [
  {name: 'Lisa', salary: 800, increase: false},
  {name: 'Tom', salary: 500, increase: true},
  {name: 'Jerry', salary: 900, increase: false},
];

function App() {
  return (
    <div className='app'>
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />      
      </div>

      <EmployeesList data={data} />
      <EmployeeAddForm />
    </div>
  )
}

export default App;