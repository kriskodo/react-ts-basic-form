import { ErrorType } from "../utils/Validator"

export type FormInputFieldInfo = {
    label: string,
    type: string,
    value: string | number,
    validations?: ErrorType[],
    options?: string[]
}

export type FormProps = {
    data: FormInputFieldInfo[],
    title?: string,
    children?: React.ReactNode[],
    handleInput(e: any, label: any): any,
    page?: number,
    currentPage?: number,
    setCurrentPage?: (x: number) => void
}