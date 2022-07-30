import { Alert, FloatingLabel, Form } from "react-bootstrap";
import { useValidation } from "../hooks/useValidation";
import { FormInputFieldInfo } from "../types/FormTypes";

export function FormInput(props: { state: FormInputFieldInfo, handleInput: (e: React.ChangeEvent, label: string) => void }) {
    const { error, handleValidation } = useValidation("", props.state?.validations);

    const { label, type, value } = props.state;
    const { handleInput } = props;

    return (
        <>
            {error.length > 0 && (<Alert key={label} variant="danger">{error}</Alert>)}
            {props.state.type === "select" && (
                <FloatingLabel
                    controlId="floatingInput"
                    label={label}
                    className="mb-3"
                >
                    <Form.Select value={props.state.value} onChange={(e) => props.handleInput(e, label)} aria-label="Default select example">
                        {props.state.options?.map((o, idx) => (
                            <option key={idx} value={o}>{o}</option>
                        ))}
                    </Form.Select>
                </FloatingLabel>
            )}
            {props.state.type !== "select" && (
                <>
                    <FloatingLabel
                        controlId="floatingInput"
                        label={label}
                        className="mb-3"
                    >
                        <Form.Control
                            name={label}
                            type={type}
                            value={value}
                            onChange={(e) => handleInput(e, label)}
                            onBlur={(e) => handleValidation(e)}
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