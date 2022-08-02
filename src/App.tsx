import './App.css';
import { Form } from './components/Form';
import { FormPage } from './components/FormPage';
import { Validator } from "./utils/Validator";

const validator = new Validator();

export const allInputFields = [
  {
    label: "Name",
    type: "input",
    value: "",
    validations: [validator.Required(), validator.MinLength(2), validator.MaxLength(50)]
  },
  {
    label: "Age",
    type: "number",
    value: "",
    validations: [validator.Required(), validator.AgeBetween(12, 70)]
  },
  {
    label: "Email",
    type: "email",
    value: "",
    validations: [validator.Required(), validator.Email()]
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
    validations: [validator.Required(), validator.MinLength(5), validator.MaxLength(10)]
  },
  {
    label: "Security Code",
    type: "input",
    value: "",
    validations: [validator.Required(), validator.MinLength(3), validator.MaxLength(3)]
  },
  {
    label: "Tell us about yourself",
    type: "textarea",
    value: "",
    validations: [validator.Required(), validator.MinLength(5), validator.MaxLength(500)]
  },
  {
    label: "Agree to the terms of service.",
    type: "checkbox",
    value: "checkbox",
    checked: false,
    validations: [validator.CheckboxRequired()]
  }
];

function App() {
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
