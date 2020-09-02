const isEmail = (email: string) => /^.+@.+\..+$/.test(email);
const isExpiryDate = (value: string) =>
  /^((0[1-9])|(1[0-2]))\/(\d{2})$/.test(value);
const isDisplayName = (value: string) => /^[A-Za-z\s]+$/g.test(value);

export const displayName = (displayName: string) =>
  !isDisplayName(displayName) ? "Incorrect name" : undefined;

export const optionalEmail = (email: string) =>
  !email ? undefined : isEmail(email) ? undefined : "Incorrect email";

export const mustBeNumber = (value: any) =>
  isNaN(value) ? "Must be a number" : undefined;

export const exactLength = (length: number) => (value: string) =>
  value.length === length ? undefined : `Should be length ${length}`;

export const required = (value: any) =>
  value ? undefined : "This field is required";

export const optional = (value: any) =>
  value ? undefined : "This field is required";

export const maxLength = (min: number) => (value: string) =>
  value.length > min ? `Should be at least ${min} characters long` : undefined;

export const expiryDate = (value: string) => {
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentYear = +date.getFullYear().toString().slice(2, 4);

  const [month, year] = value.split("/");

  const isValidVal = isExpiryDate(value);
  const isValidDate =
    +year > currentYear ||
    (+month > currentMonth && +year >= currentYear) ||
    (+month === currentMonth && +year === currentYear);

  return isValidVal && isValidDate ? undefined : "should follow pattern MM/YY";
};

export const composeValidators = (...validators: ((value: any) => any)[]) => (
  value: any
) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
