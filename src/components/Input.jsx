function Input({ labelFor, label, inputType, inputId, setValue }) {
    

    return (

        <div>
            <label htmlFor={labelFor}>{label}</label>
            <input onChange={setValue} type={inputType} id={inputId} />
        </div>
    )
}

export default Input;