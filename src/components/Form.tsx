import React, { useContext } from "react";
import { FormProps } from "../types/FormTypes";
import * as bootstrapForm from "react-bootstrap/Form";
import FormContext from "../context/formContext";

export const Form: React.FC<FormProps> = ({ children }): JSX.Element => {
    const context = useContext(FormContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(context?.fields);
        e.preventDefault();
    }

    return (
        <bootstrapForm.default
            onSubmit={(e) => handleSubmit(e)} style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
            }}
        >
            <>
                {children?.map((c, idx) => {
                    return c;
                })}
            </>
        </bootstrapForm.default>
    )
}