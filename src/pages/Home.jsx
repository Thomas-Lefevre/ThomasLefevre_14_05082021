import Input from "../components/Input";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { employeesDatas } from "../datas";
import { states } from "../states"
import { submitForm, validForm, unvalidForm } from "../redux/actions"
import ReactModal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

ReactModal.setAppElement('#root');

function Home() {

  localStorage.setItem('Array of employees', JSON.stringify(employeesDatas))
  const [firstName, setFirstName] = useState('ze')
  const [lastName, setLastName] = useState('testNom')
  const [birthDate, setBirthDate] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState()
  const [department, setDepartment] = useState('')
  const [isValidFirstName, setIsValidFirstName] = useState(true)
  const [isValidLastName, setIsValidLastName] = useState(true)
  const [isValidZip, setIsValidZip] = useState(true)
  const [formIsValid, setFormIsValid] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [resetDrop, setResetDrop] = useState(false)

  const dispatch = useDispatch()

  function formatDate(date) {
    const dateNew = new Date(date)
    const dateISO = dateNew.toISOString().split('T')[0]
    const [year, month, day] = dateISO.split("-")

    return [month, day, year].join("/")
  }

  const newEmployee = {
    'id': employeesDatas.length,
    'firstname': firstName,
    'lastname': lastName,
    'dateBirth': formatDate(birthDate),
    'startDate': formatDate(startDate),
    'street': street,
    'city': city,
    'state': state,
    'zip Code': zipCode,
    'department': department,
  }

  const statesNames = []
  states.map(state => (statesNames.push(state.name)))

  function checkForm() {
    setIsValidFirstName(true)
    setIsValidLastName(true)

    console.log(firstName);
    console.log(lastName);

    if (firstName === '') {
      setIsValidFirstName(false)
      dispatch(unvalidForm())
    }
    if (lastName === '') {
      setIsValidLastName(false)
      dispatch(unvalidForm())
    }
    if ((firstName === '') || (lastName === '')) {
      dispatch(unvalidForm())
    }
    else {
      dispatch(validForm())
    }
  }

  function storeNewData() {

    if (localStorage.getItem('Array of employees') === null) {
      localStorage.setItem('Array of employees', [])
    }

    const dataReceived = JSON.parse(localStorage.getItem('Array of employees'))
    dataReceived.push(newEmployee)
    localStorage.setItem('Array of employees', JSON.stringify(dataReceived))
    setIsOpen(true)
  }

  function validateForm(e) {
    e.preventDefault()
    checkForm()
    const submission = dispatch(submitForm(newEmployee))

    if (submission) {
      storeNewData()
      setFormIsValid(true)
      setBirthDate(new Date())
      setStartDate(new Date())
      setResetDrop(true)
    }
    else {
      setFormIsValid(false)
    }
  }

  function resetForm() {
    setResetDrop(false)
    document.getElementById("form").reset()
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
        <button onClick={openModal}>test modal</button>
      </div>
      <div className="container">
        <Link to='/employeeList'>View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id="create-employee" onSubmit={validateForm}>

          <Input label="First Name" labelFor="first-name" inputType="text" inputId="first-name" change={console.log("test")} />
          <Input label="Last Name" labelFor="last-name" inputType="text" inputId="last-name" onChange={e => setLastName(e.target.value)} />
          <div>
            <label htmlFor={"date-of-birth"}>Date of Birth</label>
            <DatePicker selected={birthDate} onChange={setBirthDate} value={birthDate} />
          </div>
          <div>
            <label htmlFor={"start-date"}>Start Date</label>
            <DatePicker selected={startDate} onChange={setStartDate} value={startDate} />
          </div>

          <fieldset className="address">
            <legend>Address</legend>

            <Input label="Street" labelFor="street" inputType="text" inputId="street" onChange={e => setStreet(e.target.value)} />
            <Input label="City" labelFor="city" inputType="text" inputId="city" onChange={e => setCity(e.target.value)} />

            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>

            <Input label="Zip Code" labelFor="zip-code" inputType="number" inputId="zip-code" />
          </fieldset>
          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          <button>Save</button>
        </form>
      </div>
      <ReactModal
        isOpen={isOpen}
        contentLabel="Employee Created!"
        onRequestClose={resetForm}>
        <div>Employee Created!</div>
        <button onClick={closeModal}>close</button>
      </ReactModal>
      <div id="confirmation" className="modal"></div>
    </div>
  );
}

export default Home;
