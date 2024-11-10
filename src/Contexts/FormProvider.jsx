import { createContext } from "react";
import React, { useState } from "react";
import PropTypes from 'prop-types';


export const FormContext = createContext();

const FormProvider = ({ children }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [searchInput , setSearchInput] = useState("");
    const [selectInput , setSelectInput] = useState("");
    const [openSidebar , setOpenSidebar] = useState();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleOpenSidebar = () => {
        setOpenSidebar(!openSidebar);
      }
      

    const Validate = () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = "Email is required";

        } if (!emailRegex.test(email)) {
            newErrors.email = "Email is not valid";
        }

        if (!password) {
            newErrors.password = "Password is required";
        }else if (password.length < 8) {
            newErrors.password = "Password should be at least 8 characters long";
        }

        if(!confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required";
        }else if(password.length < 8) {
            newErrors.confirmPassword = "Password must be at least 8 characters long"
        }
        else if (confirmPassword !== password) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (!firstName) {
            newErrors.firstName = "First name is required";
        }
        if (!lastName) {
            newErrors.lastName = "Last name is required";
        }

        setErrors(newErrors); // Set all errors at once
        return newErrors;
    };

    return (
        <FormContext.Provider value={{
            firstName, setFirstName,
            confirmPassword, setConfirmPassword,
            lastName, setLastName,
            email, setEmail,
            searchInput, setSearchInput,
            password, setPassword,
            selectInput, setSelectInput,
            openSidebar, setOpenSidebar,
            handleOpenSidebar,
            errors,
            Validate
        }}>
            {children}
        </FormContext.Provider>
    );
};

FormProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FormProvider;
