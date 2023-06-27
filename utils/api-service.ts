//library's imports
import { AxiosResponse } from 'axios'

export async function APIService<T extends any>(
  repo: () => Promise<AxiosResponse<T>>,
  options: {
    loading: 'table' | 'fullscreen' | 'none'
    custom_success_message?: string
    action?: {
      method: CallableFunction
      mode: 'extend' | 'override'
    }
  }
): Promise<T> {
  // const loadingStore = useLoadingStore()
  try {
    const { loading, custom_success_message, action } = options
    // if (loading === 'table') loadingStore.setTableLoading(true)
    // if (loading === 'fullscreen') loadingStore.setfullscreenLoading(true)
    const result = await repo()
    const data = result.data as any //cheat
    if (result.config.method === 'get') return data.data
    if (!action || action?.mode === 'extend')
      ElNotification({
        title: 'Success',
        message: custom_success_message || data.message,
        type: 'success'
      })
    action?.method(data.data)
    return data as Awaited<Promise<T>>
  } catch (error: unknown) {
    const e = error as APIFailResponse
    ElNotification({
      title: 'Error',
      message: e.first_message || e.message,
      type: 'error'
    })
    throw e
  } finally {
    // loadingStore.setTableLoading(false)
    // loadingStore.setfullscreenLoading(false)
  }
}
