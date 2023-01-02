/**
 * CustomInput.
 * 
 * Purpose:
 * - Generate a custom input for forms.
 * 
 * @param {id} string id input
 * @param {type} string type input
 * @param {name} string name input
 * @param {placeholder} string placeholder input
 * @param {value} string value input
 * @param {onChange} function function onChange input
 * @returns 
 */
const CustomInput = ({id, type, name, placeholder, value, onChange}) => {
    return (
        <>
            <input 
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        </>
    )
}

export default CustomInput
