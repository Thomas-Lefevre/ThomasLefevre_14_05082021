function Input({ labelFor, label, inputType, inputId }) {
    return (
        <div>
            <label htmlFor={labelFor}>{label}</label>
            <input type={inputType} id={inputId} />
        </div>
    )
}

export default Input;