import { Validator } from "../utils/Validator";
const validator = new Validator();

/** Required */
test(`{Required}: ${typeof validator.Required} to return false when input is empty`, () => {
    expect(validator.Required().isValid("")).toBe(false);
});

test(`{Required}: ${typeof validator.Required} to return true when input is not empty`, () => {
    expect(validator.Required().isValid("something")).toBe(true);
});


/** MinLength */
test(`{MinLength}: ${typeof validator.MinLength} to return false when input is less than the given length`, () => {
    expect(validator.MinLength(6).isValid("five")).toBe(false);
});

test(`{MinLength}: ${typeof validator.MinLength} to return true when input is more than the given length`, () => {
    expect(validator.MinLength(6).isValid("moreThanSix")).toBe(true);
});


/** MaxLength */
test(`{MaxLength}: ${typeof validator.MaxLength} to return true when input is less than the given length`, () => {
    expect(validator.MaxLength(6).isValid("five")).toBe(true);
});

test(`{MaxLength}: ${typeof validator.MaxLength} to return false when input is more than the given length`, () => {
    expect(validator.MaxLength(6).isValid("moreThanSix")).toBe(false);
});


/** AgeBetween */
test(`{AgeBetween}: ${typeof validator.AgeBetween} to return false when input is not between the given arguments`, () => {
    expect(validator.AgeBetween(12, 70).isValid(11)).toBe(false);
});

test(`{AgeBetween}: ${typeof validator.AgeBetween} to return true when input is between the given arguments`, () => {
    expect(validator.AgeBetween(12, 70).isValid(13)).toBe(true);
});


/** Email */
test(`{Email}: ${typeof validator.Email} to return false when input is not an email`, () => {
    expect(validator.Email().isValid("notanemail@a")).toBe(false);
});

test(`{Email}: ${typeof validator.Email} to return true when input is an email`, () => {
    expect(validator.Email().isValid("anemail@gmail.com")).toBe(true);
});


/** CheckboxRequired */
test(`{CheckboxRequired}: ${typeof validator.CheckboxRequired} to return false when input is false`, () => {
    expect(validator.CheckboxRequired().isValid(false)).toBe(false);
});

test(`{CheckboxRequired}: ${typeof validator.CheckboxRequired} to return true when input true`, () => {
    expect(validator.CheckboxRequired().isValid(true)).toBe(true);
});