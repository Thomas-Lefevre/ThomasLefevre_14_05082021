import { Link } from 'react-router-dom'
import Table from '../components/Table';

function EmployeeList() {
    const testlocalstoragedata = localStorage.getItem('Array of employees');
    console.log(testlocalstoragedata);

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <Table />
            <Link to='/'>Home</Link>
        </div>);
}

export default EmployeeList;
