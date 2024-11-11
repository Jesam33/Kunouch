import { createContext } from "react";
import React, { useState, navigate } from "react";
import PropTypes from "prop-types";
import { auth } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [selectInput, setSelectInput] = useState("");
  const [openSidebar, setOpenSidebar] = useState(false);
  const [saveFirstName, setSaveFirstName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginhandleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handlesaveFirstName = () => {
    setSaveFirstName(formData.firstName);
  }

  const SignUp = async (email, password, navigate) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Redirect to login page
      navigate("/login");

      console.log("user", JSON.stringify(response.user));
    } catch (error) {
      toast.error(`Error creating user: ${error.message}`);
    }
  };

  const logIn = async (email, password) => {
    console.log("loging in", email, password);
    if (!email || !password) {
      alert("Email and password are required.");
      return;
    } else {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(response.user);
        console.log("user", JSON.stringify(response.user));
      } catch (error) {
        alert(`Failed to login: ${error.message}`);
        throw error;
      }
    }
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser(null);
      console.log("setuser to null");
    });
  };

  const Validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password should be at least 8 characters long";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword.length < 8) {
      newErrors.confirmPassword = "Password must be at least 8 characters long";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }

    setErrors(newErrors);
    return newErrors;
  };

  const loginValidate = () => {
    const loginNewErrors = {};
    if(!loginData.email) {
      loginNewErrors.email = "Email is required"
    }else if (!emailRegex.test(loginData.email)) {
      loginNewErrors.email = "Email is not valid";
    }
     if(!loginData.password) {
      loginNewErrors.password = "Password is required"
    }

    setErrors(loginNewErrors);
    return loginNewErrors;
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        searchInput,
        setSearchInput,
        selectInput,
        setSelectInput,
        openSidebar,
        setOpenSidebar,
        handleOpenSidebar,
        handleChange,
        loginData,
        setLoginData,
        loginhandleChange,
        loginValidate,
        loginData,
        setLoginData,
        saveFirstName,
        setSaveFirstName,
        handlesaveFirstName,
        user,
        setUser,
        errors,
        SignUp,
        logIn,
        logOut,
        Validate,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormProvider;
