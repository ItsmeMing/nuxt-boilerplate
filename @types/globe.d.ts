declare interface APIParams {}

interface APIFailResponse {
  data?: {
    errors: any
  }
  message: string
  first_message?: string
  status: string
  status_code: number
  developer_message: string
}

declare interface APISuccessResponse {
  data: any
  status: string
  status_code: number
  message: string
  developer_message: string
}
