// Simple authentication system (for demo purposes)
// In production, use a proper authentication service like NextAuth.js

export interface User {
  id: string
  username: string
  email: string
}

// Demo credentials
const DEMO_USER = {
  id: '1',
  username: 'admin',
  email: 'ahmed@lawyer.com',
  password: 'admin123' // In production, this should be hashed
}

export function authenticateUser(username: string, password: string): User | null {
  if (username === DEMO_USER.username && password === DEMO_USER.password) {
    return {
      id: DEMO_USER.id,
      username: DEMO_USER.username,
      email: DEMO_USER.email
    }
  }
  return null
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false

  const token = localStorage.getItem('auth_token')
  return token !== null
}

export function login(username: string, password: string): boolean {
  const user = authenticateUser(username, password)
  if (user) {
    localStorage.setItem('auth_token', JSON.stringify(user))
    return true
  }
  return false
}

export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token')
  }
}

export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null

  const token = localStorage.getItem('auth_token')
  if (token) {
    try {
      return JSON.parse(token)
    } catch {
      return null
    }
  }
  return null
}
