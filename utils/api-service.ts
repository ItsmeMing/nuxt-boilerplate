// //library's imports
// import { AxiosResponse } from 'axios'

// export async function APIService<T>(
//   repo: () => Promise<AxiosResponse<T, any>>,
//   loading: 'table' | 'fullscreen' | 'none' = 'none'
// ): Promise<T> {
//   const loadingStore = useLoadingStore()
//   try {
//     if (loading === 'table') loadingStore.setTableLoading(true)
//     if (loading === 'fullscreen') loadingStore.setfullscreenLoading(true)
//     const result = (await repo()) as AxiosResponse
//     if (result.config.method === 'get') return result.data.data as Awaited<Promise<T>>
//     ElNotification({
//       title: 'Success',
//       message: result.data.message,
//       type: 'success'
//     })
//     return result.data as Awaited<Promise<T>>
//   } catch (error: unknown) {
//     const e = error as APIFailResponse
//     ElNotification({
//       title: 'Error',
//       message: e.first_message || e.message,
//       type: 'error'
//     })
//     return e as never
//   }
// }
