import './employee-list-item.css';

const EmployeeListItem = (props) => {

    const { name, salary, onDelete, onToggleProp, increase, rise } = props;
    let classes = "list-group-item d-flex justify-content-between"

    if (increase === true) {
        classes += ' increase';
    }

    if (rise === true) {
        classes += ' like'
    }

    return (
        <li className={classes}>
            <span className="list-group-item-label" 
                data-toggle="rise"
                onClick={onToggleProp}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary}$`} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    data-toggle="increase"
                    onClick={onToggleProp}
                    className="btn-cookie btn-sm ">
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

export default EmployeeListItem;