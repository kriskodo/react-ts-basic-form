import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { FormPage } from './components/FormPage';
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
      value: 0,
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
      validations: [Validator.Required(), Validator.CreditCard()]
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

  return (
    <div className="App">
      <Form
        data={fields}
        handleInput={(e, label) => handleInput(e, label)}
      >
        <FormPage
          data={fields.slice(0, 2)}
          page={1}
          title="Basic information"
          currentPage={currentPage}
          setCurrentPage={(page) => setCurrentPage(page)}
          handleInput={(e, label) => handleInput(e, label)}
        />
        <FormPage
          data={fields.slice(2, 4)}
          page={2}
          title="Additional information"
          currentPage={currentPage}
          setCurrentPage={(page) => setCurrentPage(page)}
          handleInput={(e, label) => handleInput(e, label)} />
        <FormPage
          data={fields.slice(4)}
          page={3}
          title="Just making sure you are at least 18 years old. No charges."
          currentPage={currentPage}
          setCurrentPage={(page) => setCurrentPage(page)}
          handleInput={(e, label) => handleInput(e, label)} />
      </Form>
    </div>
  );
}

export default App;
