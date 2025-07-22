import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  [key: string]: string; // bisa juga diketik lebih ketat kalau perlu

  role: string;
}
export const getRoleFromToken = (token: string): string | null => {
  try {
    const decoded: DecodedToken = jwtDecode(token);
    console.log("Decoded token:", decoded); // boleh dihapus nanti

    return decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || null;
    
  } catch (error) {
    console.error("Failed to decode token", error);
    return null;
  }
};
