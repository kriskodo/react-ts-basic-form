import React, { useState } from "react";
import { FormProps } from "../types/FormTypes";
import * as bootstrapForm from "react-bootstrap/Form";
import FormContext from "../context/formContext";

export const Form: React.FC<FormProps> = ({ allInputFields, pages, children }): JSX.Element => {
    const [fields, setFields] = useState(allInputFields);
    const [currentPage, setCurrentPage] = useState(1);

    const handleInput = (e: any, label: string) => {
        setFields((prevState) => {
            const copyPrevState = [...prevState];
            const field = copyPrevState.find(f => f.label === label);
            
            if(typeof field === "undefined") throw new Error("Input was not declared in the context.");

            e.target.value === "checkbox"
                ? field.checked = !field.checked
                : field.value = e.target.value;
                
            return copyPrevState;
        })
    }

    const contextData = {
        fields: fields,
        currentPage,
        setCurrentPage: (page: number) => setCurrentPage(page),
        handleInput: (e: any, label: string) => handleInput(e, label)
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <bootstrapForm.default
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
            }}
        >
            <>
                <FormContext.Provider value={{ ...contextData, pages }}>
                    <>
                        {children?.map((c, idx) => {
                            return c;
                        })}
                    </>
                </FormContext.Provider>
            </>
        </bootstrapForm.default>
    )
}