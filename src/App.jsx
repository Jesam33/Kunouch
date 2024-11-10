import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './Components/Form';
import Dashboard from './Components/Dashboard';
import FormContext from './Contexts/FormProvider';
import FormProvider from './Contexts/FormProvider';
import MainContent from './Components/MainContent';

const App = () => {
  return (
    <FormProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/dashboard" element={<MainContent />} />
      </Routes>
    </Router>
    </FormProvider>
  )
}

export default App