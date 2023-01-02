import * as Yup from "yup"

/**
 * RegisterValidation.
 * 
 * Purpose:
 * Validation useFormik register form.
 * 
 * References:
 * - https://blog.shahednasser.com/how-to-create-and-validate-forms-in-react-using-formik-and-yup/
 * - https://stackoverflow.com/questions/49502436/password-validation-with-yup-and-formik
 */
export const RegisterValidation = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    firstName: Yup.string().required(),
    lastName: Yup.string().required()
})