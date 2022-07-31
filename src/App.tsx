import './App.css';
import { Form } from './components/Form';
import { FormPage } from './components/FormPage';
import { Validator } from "./utils/Validator";

function App() {
  const allInputFields = [
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
      value: "Web developer",
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
    },
    {
      label: "Tell us about yourself",
      type: "textarea",
      value: "",
      validations: [Validator.Required(), Validator.MinLength(5), Validator.MaxLength(500)]
    },
    {
      label: "Agree to the terms of service.",
      type: "checkbox",
      value: "checkbox",
      checked: false,
      validations: [Validator.CheckboxRequired()]
    }
  ];

  return (
    <div className="App">
      <Form allInputFields={allInputFields} pages={3}>
        <FormPage
          page={1}
          inputsRange={[0, 2]}
          title="Basic information"
        />
        <FormPage
          page={2}
          inputsRange={[2, 4]}
          title="Additional information"
        />
        <FormPage
          page={3}
          inputsRange={[4]}
          title="Just making sure you are at least 18 years old. No charges."
        />
      </Form>
    </div>
  );
}

export default App;
