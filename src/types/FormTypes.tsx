import { ErrorType } from "../utils/Validator"

export interface FormProps {
    allInputFields: FormInputFieldInfo[],
    pages: number,
    children?: Array<React.ReactNode>,
}

export interface FormInputFieldInfo {
    label: string,
    type: string,
    value: string | number,
    validations?: ErrorType<string | number | boolean>[],
    options?: string[],
    checked?: boolean
}


export interface FormPageProps {
    inputsRange: [number, number?],
    data?: FormInputFieldInfo[],
    title: string,
    page: number
}