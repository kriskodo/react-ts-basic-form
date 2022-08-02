import { act } from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import { Form } from "../components/Form";
import { FormPage } from "../components/FormPage";
import { allInputFields } from "../App";

describe("Form", () => {
    it("should update inputs with handleSubmit()", () => {
        let container = document.createElement("div");
        document.body.appendChild(container);

        act(() => {
            ReactDOM.render(
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
                , container)
                
                const inputsRenderedOnScreen = Array.from(document.querySelectorAll(".form-control"));
                expect(inputsRenderedOnScreen.length === 2);
        })
    })
})