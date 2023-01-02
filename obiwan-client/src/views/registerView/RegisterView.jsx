import { motion } from "framer-motion"
import CustomInput from "../../components/formComponents/CustomInput"
import CustomLabel from "../../components/formComponents/CustomLabel"
import CustomSubmitButton from "../../components/formComponents/CustomSubmitButton"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import { RegisterValidation } from "../../helpers/registerValidation"

/** 
 * RegisterView.
 * 
 * Purpose:
 * - Form to register an user.
 * 
 * References:
 * - https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/}
 * - https://codesandbox.io/s/framer-motion-animatepresence-wait-mode-t0mnhu?from-embed
 * 
 * @returns Register view.
*/
const RegisterView = () => {

    /**
     * Register formik
     * 
     * Purpose: 
     * - Create logic for form to user register.
     * 
     * Reference:
     * - https://formik.org/docs/api/useFormik
     */
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        validationSchema: RegisterValidation,
        onSubmit: values => {
            console.log("Register values: ", values)
        }
    })

    return (
        <motion.div initial={{ opacity: 0 }} animate={{opacity: 1}} transition={{delay: 1}}>
            <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                <div class="mb-4">
                    <CustomLabel forRef="firstName" title="FirstName"/>
                    <CustomInput id="firstName" tpye="text" name="firstName" placeholder="firstName" value={formik.values.firstName} onChange={formik.handleChange}/>
                </div>
                <div class="mb-4">
                    <CustomLabel forRef="lastName" title="LastName"/>
                    <CustomInput id="lastName" tpye="text" name="lastName" placeholder="lastName" value={formik.values.lastName} onChange={formik.handleChange}/>
                </div>
                <div class="mb-4">
                    <CustomLabel forRef="email" title="Email"/>
                    <CustomInput id="email" tpye="text" name="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange}/>
                </div>
                <div class="mb-6">
                    <CustomLabel forRef="password" title="Password"/>
                    <CustomInput id="password" tpye="password" name="password" placeholder="**********"  value={formik.values.password} onChange={formik.handleChange}/>
                </div>
                <div class="flex items-center justify-between">
                    <CustomSubmitButton text="Sign In" />
                    <Link to="/auth/register"> Register</Link>
                </div>
            </form>
        </motion.div>
    )
}

export default RegisterView
