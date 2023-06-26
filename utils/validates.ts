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

export const isBeforeCurrentDate = (rule: any, date: string, callback: any) => {
  const currentDate = new Date()
  if (currentDate.getTime() - new Date(date).getTime() >= 0)
    callback(new Error(`Valid date must be after ${currentDate.toLocaleString()}`))
  callback()
}

export const numberRequirement = (rule: any, value: any, callback: any) => {
  if (parseFloat(value) <= 0) return callback(new Error('Must be greater than 0!'))
  if (rule.field.includes('campaign_products') && rule.field.includes('quantity') && parseFloat(value) > 250)
    return callback(new Error('Max quantity is 250!'))
  if (rule.field.includes('price') && parseFloat(value) > 999000) return callback(new Error('Max price is 990000!'))
  if (rule.field.includes('length') && parseFloat(value) < 10) return callback(new Error('Min length is 10!'))
  if (rule.field.includes('length') && parseFloat(value) > 100) return callback(new Error('Max length is 100!'))
  if (rule.field.includes('height') && parseFloat(value) < 10) return callback(new Error('Min height is 10!'))
  if (rule.field.includes('height') && parseFloat(value) > 100) return callback(new Error('Max height is 100!'))
  if (rule.field.includes('weight') && parseFloat(value) < 0.01) return callback(new Error('Max price is 50!'))
  if (rule.field.includes('weight') && parseFloat(value) > 50) return callback(new Error('Max price is 50!'))
  if (rule.field.includes('width') && parseFloat(value) < 10) return callback(new Error('Min width is 10!'))
  if (rule.field.includes('width') && parseFloat(value) > 100) return callback(new Error('Max width is 100!'))
  return callback()
}
