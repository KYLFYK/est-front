export const setLocalStorage = (role: string) => {
    localStorage.setItem('role', role)
}
export const getLocalStorage = () => {
    return localStorage.getItem('role')
}