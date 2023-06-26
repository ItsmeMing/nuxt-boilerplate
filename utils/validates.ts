import { REGEX_PATTERN_EMAIL_ADDRESS, REGEX_PATTERN_PHONE_NUMBER } from './constants'

export const validatePhoneNumber = (rule: any, phone: string, callback: any) => {
  if (!REGEX_PATTERN_PHONE_NUMBER.test(phone)) callback(new Error('Invalid phone number!'))
  callback()
}

export const validateEmail = (rule: any, email: string, callback: any) => {
  if (!REGEX_PATTERN_EMAIL_ADDRESS.test(email.toLowerCase())) callback(new Error('Invalid email!'))
  callback()
}
export const minLength = (rule: any, val: string, callback: any) => {
  if (!val || String(val).length < 6) callback(new Error('Password must be at least 6 characters!'))
  callback()
}

export const numberRequirement = (rule: any, value: any, callback: any) => {
  if (parseFloat(value) <= 0) return callback(new Error('Must be greater than 0!'))
  return callback()
}
