import { ChangeEvent } from "react";
import { Alert, FloatingLabel, Form, Row } from "react-bootstrap";
import { useValidation } from "../hooks/useValidation";
import { FormInputFieldInfo } from "../types/FormTypes";

const BasicFields = ["input", "email", "number", "textarea"];

export function FormInput(props: { state: FormInputFieldInfo, handleInput: (e: React.ChangeEvent, label: string) => void }) {
    const { error, handleValidation } = useValidation("", props.state?.validations);

    const { label, type, value, checked, options } = props.state;
    const { handleInput } = props;

    return (
        <>
            {error.length > 0 && (<Alert key={label} variant="danger">{error}</Alert>)}
            {type === "checkbox" && (
                <Form.Check
                    type="checkbox"
                    id={label}
                    label={label}
                    value={value}
                    checked={checked}
                    onChange={(e: ChangeEvent<Element>) => handleInput(e, label)}
                    onBlur={(e: any) => handleValidation(e)}
                />
            )}

            {type === "select" && (
                <FloatingLabel
                    controlId="floatingInput"
                    label={label}
                    className="mb-3"
                >
                    <Form.Select value={value} onChange={(e: ChangeEvent<Element>) => handleInput(e, label)} aria-label="Default select example">
                        {options?.map((o, idx) => (
                            <option key={idx} value={o}>{o}</option>
                        ))}
                    </Form.Select>
                </FloatingLabel>
            )}

            {BasicFields.includes(type) && (
                <>
                    <FloatingLabel

                        label={label}
                        className="mb-3"
                    >
                        <Form.Control
                            name={label}
                            type={type}
                            as={type === "textarea" ? "textarea" : Form.Control}
                            value={value}
                            onChange={(e: ChangeEvent<Element>) => handleInput(e, label)}
                            onBlur={(e: any) => handleValidation(e)}
                            placeholder={label}
                            aria-label={label}
                            aria-describedby={value.toString()}
                        />
                    </FloatingLabel>
                </>
            )}
        </ >
    );
}