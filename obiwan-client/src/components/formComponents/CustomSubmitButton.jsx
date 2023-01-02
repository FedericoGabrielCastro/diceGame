/**
 * CustomSubmitButton
 * 
 * Purpose:
 * - Generate custom submit button.
 * 
 * @param {text} string Button text
 * @returns 
 */
const CustomSubmitButton = ({text}) => {
    return (
        <>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                {text}
            </button>
        </>
    )
}

export default CustomSubmitButton
