//library's imports
import { AxiosResponse } from 'axios'

export async function APIService<T>(
  repo: () => Promise<AxiosResponse<T, any>>,
  options: {
    custom_success_message?: string
    override_action?: CallableFunction
  }
): Promise<T> {
  try {
    const { custom_success_message, override_action } = options
    const result = (await repo()) as AxiosResponse
    if (result.config.method === 'get') return result.data.data as Awaited<Promise<T>>
    if (override_action) override_action()
    else {
    }
    ElNotification({
      title: 'Success',
      message: custom_success_message || result.data.message,
      type: 'success'
    })

    return result.data as Awaited<Promise<T>>
  } catch (error: unknown) {
    const e = error as APIFailResponse
    ElNotification({
      title: 'Error',
      message: e.first_message || e.message,
      type: 'error'
    })
    return e as never
  }
}
