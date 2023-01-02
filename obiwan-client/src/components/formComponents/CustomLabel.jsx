/**
 * CustomLabel
 * 
 * Purpose:
 * - Generate custom label for forms
 * 
 * @param {forRef} string for label
 * @param {title} string title label
 * @returns 
 */
const CustomLabel = ({title, forRef}) => {
    return (
        <>
            <label className="block text-gray-700 text-sm font-bold mb-2" for={forRef}>
                {title}
            </label>
        </>
    )
}

export default CustomLabel
