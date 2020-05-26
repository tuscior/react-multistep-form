export const isMobile = (number) => /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/im.test(number)
export const isEmail = (email) =>  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
export const isZip = (zip) => /^\d{5}(?:[-\s]\d{4})?$/.test(zip);
export const notEmptyString = (el) => typeof el === 'string' && el.length > 0;