// import { storeToRefs } from 'pinia'
// import { useUserStore } from '~~/stores/user'

// export default defineNuxtRouteMiddleware((to, from) => {
//   const userStore = useUserStore()
//   const { isAuthenticated } = storeToRefs(userStore)
//   if (to.path !== '/' && to.path.endsWith('/')) {
//     const { path, query, hash } = to
//     const nextPath = path.replace(/\/+$/, '') || '/'
//     const nextRoute = { path: nextPath, query, hash }
//     return navigateTo(nextRoute, { redirectCode: 301 })
//   }
//   if (!isAuthenticated.value && to.path === '/reset-password') return
//   if (!isAuthenticated.value && !['/', '/forgot-password', '/change-password'].includes(to.fullPath))
//     return navigateTo('/')
//   if (isAuthenticated.value && to.fullPath === '/') return navigateTo('/administrator')
// })
