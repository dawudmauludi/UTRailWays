// types/AuthTypes.ts
export interface LoginPayload {
  email: string;
  password: string;
  
}

export interface AuthResponse {
  token: string;
  role: 'Admin' | 'User';
}

export interface AuthState {
  token: string | null;
  role: string | null;
  isAuthenticated: boolean;
}
