import Input from "../components/Input";
import Header from "../components/Header";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { states } from "../states"
import { submitForm, validForm, unvalidForm, checkValid } from "../redux/actions"
import ReactModal from "react-modal";
import closeIcon from "../assets/closeIcon.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown } from "thomas_lefevre_plugin_dropdown";
import { selectEmployees } from "../redux/selector"

ReactModal.setAppElement('#root');

function Home() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState()
  const [department, setDepartment] = useState('')
  const [isValidFirstName, setIsValidFirstName] = useState(true)
  const [isValidLastName, setIsValidLastName] = useState(true)
  const [formIsValid, setFormIsValid] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()

  function formatDate(date) {
    const dateNew = new Date(date)
    const dateISO = dateNew.toISOString().split('T')[0]
    const [year, month, day] = dateISO.split("-")

    return [month, day, year].join("/")
  }

  const getCountEmployees = useSelector(selectEmployees).data.length

  const newEmployee = {
    'id': getCountEmployees + 1,
    'firstName': firstName,
    'lastName': lastName,
    'birthDate': formatDate(birthDate),
    'startDate': formatDate(startDate),
    'street': street,
    'city': city,
    'state': state,
    'zipCode': zipCode,
    'department': department,
  }

  const statesNames = []
  states.map(state => (statesNames.push(state.name)))

  function checkForm() {
    setIsValidFirstName(true)
    setIsValidLastName(true)

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

  function validateForm(e) {
    e.preventDefault()
    checkForm()
    const submission = dispatch(checkValid())

    if (submission) {
      dispatch(submitForm(newEmployee))
      setFormIsValid(true)
      setBirthDate(new Date())
      setStartDate(new Date())
      setIsOpen(true)
    }
    else {
      setFormIsValid(false)
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Header />
      <div className="homeContainer">
        <h1 className="title">HRnet</h1>
        <h2>Create Employee</h2>
        <form id="create-employee" className="form" onSubmit={validateForm}>
          <Input label="First Name" labelFor="first-name" inputType="text" inputId="first-name" setValue={e => setFirstName(e.target.value)} />
          <Input label="Last Name" labelFor="last-name" inputType="text" inputId="last-name" setValue={e => setLastName(e.target.value)} />
          <div>
            <label htmlFor={"date-of-birth"}>Date of Birth</label>
            <DatePicker selected={birthDate} onChange={setBirthDate} value={birthDate} />
          </div>
          <div>
            <label htmlFor={"start-date"}>Start Date</label>
            <DatePicker selected={startDate} onChange={setStartDate} value={startDate} />
          </div>

          <fieldset className="form__address">
            <legend>Address</legend>

            <Input label="Street" labelFor="street" inputType="text" inputId="street" setValue={e => setStreet(e.target.value)} />
            <Input label="City" labelFor="city" inputType="text" inputId="city" setValue={e => setCity(e.target.value)} />

            <label htmlFor="state">State</label>
            <Dropdown list={statesNames} setValue={setState} />

            <Input label="Zip Code" labelFor="zip-code" inputType="number" inputId="zip-code" setValue={e => setZipCode(e.target.value)} />
          </fieldset>
          <label htmlFor="department">Department</label>
          <Dropdown list={['Sales', 'Marketing', 'Engineering', 'Human Ressources', 'Legal']} setValue={setDepartment} />
          <button className="form__save">Save</button>
        </form>
      </div>
      <ReactModal
        isOpen={isOpen}
        contentLabel="Employee Created!"
        className="modal"
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}>
        <div>Employee Created!</div>
        <img onClick={closeModal} className="modal__icon" src={closeIcon} alt="quit modal" />
      </ReactModal>
    </div>
  );
}

export default Home;
