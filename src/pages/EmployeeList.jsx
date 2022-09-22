import Table from '../components/Table';
import Header from '../components/Header';
import { useSelector } from 'react-redux'
import { selectEmployees } from '../redux/selector';

function EmployeeList() {

    const getDatas = useSelector(selectEmployees).data

    const datas = getDatas.map(el => ({ ...el }))

    return (
        <div>
            <Header />
            <div id="employee-div" className="employeeListContainer">
                <h1 className='employeeListContainer__title'>Current Employees</h1>
                <Table datas={datas} />
            </div>
        </div>
    );
}

export default EmployeeList;
