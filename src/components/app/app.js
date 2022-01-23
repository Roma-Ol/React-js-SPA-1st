import {Component} from 'react/cjs/react.development';
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
                {name: 'Sofia', salary: 800, increase: false, rise: false, id: 1},
                {name: 'Tom', salary: 500, increase: true, rise: false, id: 2},
                {name: 'Nazap', salary: 900, increase: false, rise: false, id: 3},
            ],
            searchTerm: '',
            filterCriteria: 'rise',
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
            id: this.state.id
        }

        let newData = this.state.data.concat(newWorker);
        this.setState(({id}) => {
            return {
                data: newData,
                id: ++id
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id),
                oldRow = data[index],
                newRow = {...oldRow, [prop]: !oldRow[prop]},
                newData = [...data.slice(0, index), newRow, ...data.slice(index + 1)];
            return {
                data: newData
            }
        })
    }

    searchEmp = (items, term) => {
        if (!term.length) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
         this.setState({searchTerm: term})
    }

    onFilterSelect = (filterCriteria) => {
        this.setState({filterCriteria})
    }

    onFilter = (items, filterCriteria) => {
        switch (filterCriteria) {
            case 'toPromote':
                return items.filter(item => item.rise);
            case '1kPlus':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    render() {
        const {data, searchTerm, filterCriteria} = this.state,
            workers = data.length,
            workersToPromote = data.filter(item => item.increase === true).length;
            // let visibleData = this.searchEmp(data, searchTerm);
            let visibleData = this.onFilter(this.searchEmp(data, searchTerm), filterCriteria)

        return (
            <div className='app'>
                <AppInfo
                    workers={workers}
                    workersToPromote={workersToPromote}/>

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                        onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeeAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;