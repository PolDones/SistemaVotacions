import { useAppStore } from '@/stores/app'

export function requireAuth(to, from, next) {
  const store = useAppStore()

  if (store.isLoggedIn) {
    next()
    return
  }

  next({ name: 'login' })
}
