export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

// Dummy admin user
export const adminUser: User = {
  id: '1',
  email: 'admin@vapecommerce.com',
  name: 'Admin User',
  role: 'admin',
};

// Simple auth check - in production, use a proper auth solution
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('isAuthenticated') === 'true';
}

export function login(email: string, password: string): Promise<User | null> {
  return new Promise((resolve) => {
    // In production, validate against a real backend
    if (email === 'admin@vapecommerce.com' && password === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(adminUser));
      resolve(adminUser);
    } else {
      resolve(null);
    }
  });
}

export function logout(): void {
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('user');
}

export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
}