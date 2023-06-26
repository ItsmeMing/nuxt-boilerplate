import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({ baseURL: nuxtApp.$config.public.BASE_URL })

  const deleteEmptyValue = (data: Record<string, unknown>) => {
    Object.keys(data).map((k) => {
      data[k] == void 0 && delete data[k]
    })
    return data
  }

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = useCookie(`${nuxtApp.$config.public.APP_NAME}_token`)
    if (token) {
      config.headers.Authorization = `Bearer ${token.value}`
    }
    config.data && (config.data = deleteEmptyValue(config.data))
    config.params && (config.params = deleteEmptyValue(config.params))
    return config
  })

  api.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.data.status_code === 401) {
        const token = useCookie(`${nuxtApp.$config.public.APP_NAME}_token`)
        token.value = null
        location.reload()
        return Promise.reject(response)
      }
      if (
        response.data.status_code === 201 ||
        response.data.status_code === 403 ||
        response.data.status_code === 422 ||
        response.data.status_code === 500
      ) {
        return Promise.reject(response.data)
      }
      return response
    },
    (error: AxiosError) => {
      return Promise.reject(error.response?.data || 'Network Error')
    }
  )

  return {
    provide: {
      api
    }
  }
})
