import React, { useState } from "react";

type ErrorType = string;
type ValidationsType = { message: string, isValid(x: number | string): boolean }[];

/**
 * 
 * @param initError  {string} The value of the current error
 * @param validations {ValidationsType} The validations to perform on the input
 * @returns {
 *  value: string | number;
 *  initError: string;
 *  handleChange: (e: React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
 *  handleValidation: (e: React.FocusEvent<HTMLInputElement, Element> | FocusEventHandler<HTMLSelectElement>) => void;
 * }
 */
export const useValidation = (initError: ErrorType, validations?: ValidationsType): any => {
    const [error, setError] = useState(initError);

    const handleValidation = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        let error = "";

        if (validations) {
            for (let i = 0; i < validations.length; i++) {
                const validation = validations[i];

                if (!validation.isValid(e.target.value)) {
                    error = validation.message;
                    break;
                }
            }

            setError(error);
        }
    }

    return { error, handleValidation };
}