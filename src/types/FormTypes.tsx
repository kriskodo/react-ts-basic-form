import { ErrorType } from "../utils/Validator"

export type FormInputFieldInfo = {
    label: string,
    type: string,
    value: string | number,
    validations?: ErrorType[],
    options?: string[]
}

export type FormProps = {
    children: React.ReactNode[],
}

export type FormPageProps = {
    data: FormInputFieldInfo[],
    title: string,
    page: number
}