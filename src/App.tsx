import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { FormPage } from './components/FormPage';
import FormContext from './context/formContext';
import { FormInputFieldInfo } from './types/FormTypes';
import { Validator } from "./utils/Validator";

function App() {
  const initData = [
    {
      label: "Name",
      type: "input",
      value: "",
      validations: [Validator.Required(), Validator.MinLength(2), Validator.MaxLength(50)]
    },
    {
      label: "Age",
      type: "number",
      value: "",
      validations: [Validator.Required(), Validator.AgeBetween(12, 70)]
    },
    {
      label: "Email",
      type: "email",
      value: "",
      validations: [Validator.Required(), Validator.Email()]
    },
    {
      label: "Proffession",
      type: "select",
      value: "",
      options: ["Web developer", "DevOPS", "Customer Specialist", "HR", "Construction worker"]
    },
    {
      label: "Credit Card Number",
      type: "number",
      value: "",
      validations: [Validator.Required(), Validator.MinLength(5), Validator.MaxLength(10)]
    },
    {
      label: "Security Code",
      type: "input",
      value: "",
      validations: [Validator.Required(), Validator.MinLength(3), Validator.MaxLength(3)]
    }
  ];

  const [fields, setFields] = useState(initData);
  const [currentPage, setCurrentPage] = useState(1);

  const handleInput = (e: any, label: string) => {
    setFields((prevState) => {
      const copyPrevState = [...prevState];
      const field = copyPrevState.find(f => f.label === label) as FormInputFieldInfo;
      field.value = e.target.value;
      return copyPrevState;
    })
  }

  const context = {
    fields,
    currentPage,
    setCurrentPage: (page: number) => setCurrentPage(page),
    handleInput: (e: any, label: string) => handleInput(e, label)
  }

  return (
    <div className="App">
      <FormContext.Provider value={context}>
        <Form>
          <FormPage
            data={fields.slice(0, 2)}
            title="Basic information"
            page={1}
          />
          <FormPage
            data={fields.slice(2, 4)}
            title="Additional information"
            page={2}
          />
          <FormPage
            data={fields.slice(4)}
            title="Just making sure you are at least 18 years old. No charges."
            page={3}
          />
        </Form>
      </FormContext.Provider>
    </div>
  );
}

export default App;
