function Input({ labelFor, label, inputType, inputId, change }) {
    

    return (

        <div>
            <label htmlFor={labelFor}>{label}</label>
            <input onChange={change} type={inputType} id={inputId} />
        </div>
    )
}

export default Input;