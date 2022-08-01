import React from 'react';
import { FormInputFieldInfo } from '../types/FormTypes';

interface AppContextInterface {
    fields: FormInputFieldInfo[];
    currentPage: number;
    setCurrentPage: (page: number) => void;
    handleInput: (e: any, label: string) => void;
    pages: number,
}

const FormContext = React.createContext<AppContextInterface | null>(null);

export const FormProvider = FormContext.Provider;

export default FormContext;
