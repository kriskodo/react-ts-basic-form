import React, { useState } from "react";
import { FormInputFieldInfo, FormProps } from "../types/FormTypes";
import { FormInput } from "./FormInput";
import { FormPage } from "./FormPage";
import * as BootstrapForm from "react-bootstrap/Form";

export const Form: React.FC<FormProps> = ({ data, children }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <BootstrapForm.default
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
        </BootstrapForm.default>
    )
}