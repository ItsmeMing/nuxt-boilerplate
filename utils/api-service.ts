//library's imports
import { AxiosResponse } from 'axios'

export async function APIService<T>(
  repo: () => Promise<AxiosResponse<T>>,
  options: {
    loading: '.sixth-table' | 'fullscreen' | 'none' | string
    success?: {
      custom_success_message?: string
      callback?: (data: Awaited<Promise<T>>) => void
      override_default?: boolean
    }
    fail?: {
      custom_fail_message?: string
      callback?: () => void
      override_default?: boolean
    }
  }
): Promise<T> {
  let fullscreenLoading
  try {
    const { loading, success } = options
    if (loading !== 'none') {
      fullscreenLoading = ElLoading.service({
        lock: true,
        fullscreen: loading === 'fullscreen' ? true : false,
        target: loading === 'fullscreen' ? document.body : loading,
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
    const result = await repo()
    const data = result.data as any //cheat
    if (result.config.method !== 'get' && (!success || !success?.override_default)) {
      ElNotification({
        title: 'Success',
        message: success?.custom_success_message || data.message,
        type: 'success'
      })
    }
    if (success?.callback) success?.callback(data.data as Awaited<Promise<T>>)
    return data.data as Awaited<Promise<T>>
  } catch (error: unknown) {
    const e = error as APIFailResponse
    const { fail } = options
    if (!fail || !fail?.override_default) {
      ElNotification({
        title: 'Error',
        message: fail?.custom_fail_message || e.first_message || e.message,
        type: 'error'
      })
    }
    if (fail?.callback) fail?.callback()
    throw e
  } finally {
    fullscreenLoading?.close()
  }
}
