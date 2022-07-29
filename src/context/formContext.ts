import React, { createContext } from 'react';
import { ErrorType } from '../utils/Validator';

interface AppContextInterface {
    fields: ({
        label: string;
        type: string;
        value: string;
        validations: ErrorType[];
        options?: undefined;
    } | {
        label: string;
        type: string;
        value: string;
        options: string[];
        validations?: undefined;
    })[];
    currentPage: number;
    setCurrentPage: (page: number) => void;
    handleInput: (e: any, label: string) => void;
}

const FormContext = React.createContext<AppContextInterface | null>(null);

export const FormProvider = FormContext.Provider;

export default FormContext;
