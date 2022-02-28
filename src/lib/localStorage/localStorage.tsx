import jwt_decode from 'jwt-decode';

export const setLocalStorage = (role: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("role", role);
  }
};

export const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("roleEstatum");
  } else {
    return "cabinet";
  }
};

export const accFromToken = () => {
  const acc: any = typeof window !== "undefined" ? jwt_decode(
    localStorage.getItem("accessEstatum")
    ? (localStorage.getItem("accessEstatum") as string)
    : ("123" as string)
  ) : ''
  return acc
}