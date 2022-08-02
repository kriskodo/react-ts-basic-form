export type ErrorType<T> = {
    message: string,
    isValid(x: T): boolean;
}

export interface IValidator {
    Required(args?: any): ErrorType<string>
} 

export class Validator implements IValidator {
    Required(): ErrorType<string> {
        return {
            message: "The field is required.",
            isValid: (x) => x.length > 0
        };
    }

    MinLength(length: number): ErrorType<string> {
        return {
            message: "The field cannot be less than " + length + " symbols",
            isValid: (x) => x.length >= length
        };
    }

    MaxLength(length: number): ErrorType<string> {
        return {
            message: "The field cannot be more than " + length + " symbols",
            isValid: (x) => x.length <= length
        };
    }

    AgeBetween(min: number, max: number): ErrorType<number> {
        return {
            message: "Age must be between " + min + " and " + max,
            isValid: (x) => +x >= min && +x <= max
        }
    }

    Email(): ErrorType<string> {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

        return {
            message: "Please enter a valid email address.",
            isValid: (input) => regexEmail.test(input)
        }
    }

    CheckboxRequired(): ErrorType<boolean> {
        return {
            message: "Required.",
            isValid: (checked) => checked
        }
    }
}