import React from "react";
import { FormProps } from "../types/FormTypes";
import * as bootstrapForm from "react-bootstrap/Form";

export const Form: React.FC<FormProps> = ({ data, children }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
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