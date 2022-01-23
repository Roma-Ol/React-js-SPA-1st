import {Component} from "react";
import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterCriteria: 'all'
        }
    }
    onFilter = (e) => {
        const filterCriteria = e.target.getAttribute('data-filter');
        this.setState({filterCriteria});
        this.props.onFilterSelect(filterCriteria);
    }
    render() {
        return (
            <div className="btn-group">
                <button
                    className="btn btn-light"
                    type='button'
                    data-filter='all'
                    onClick={this.onFilter}>
                    Show all
                </button>
                <button
                    className="btn btn-outline-light"
                    type='button'
                    data-filter='toPromote'
                    onClick={this.onFilter}>
                    Need promotion
                </button>
                <button
                    className="btn btn-outline-light"
                    type='button'
                    data-filter='1kPlus'
                    onClick={this.onFilter}>
                    1000$ and up
                </button>
            </div>
        )
    }
}

export default AppFilter;