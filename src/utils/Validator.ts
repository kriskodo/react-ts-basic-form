export type ErrorType = {
    message: string,
    isValid(x: number | string): boolean;
}

export class Validator {
    static Required(): ErrorType {
        return {
            message: "The field is required.",
            isValid: (x) => x.toString().length > 0
        };
    }

    static MinLength(length: number): ErrorType {
        return {
            message: "The field cannot be less than " + length + " symbols",
            isValid: (x) => x.toString().length >= length
        };
    }

    static MaxLength(length: number): ErrorType {
        return {
            message: "The field cannot be more than " + length + " symbols",
            isValid: (x) => x.toString().length <= length
        };
    }

    static AgeBetween(min: number, max: number): ErrorType {
        return {
            message: "Age must be between " + min + " and " + max,
            isValid: (x) => +x >= min && +x <= max
        }
    }

    static Email(): ErrorType {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

        return {
            message: "Please enter a valid email address.",
            isValid: (input) => regexEmail.test(input as string)
        }
    }

    static CreditCard(): ErrorType {
        const regexCreditCard = /^(?:5[1-5][0-9]{14})$/;

        return {
            message: "Please put a valid credit card number",
            isValid: (input) => regexCreditCard.test(input as string)
        }
    }
}