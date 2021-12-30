export const setLocalStorage = (role: string) => {

    if(typeof window !== 'undefined') {
        localStorage.setItem('role', role)
    }

}

export const getLocalStorage = () => {

    if(typeof window !== 'undefined') {
        return localStorage.getItem('roleEstatum')
    }
    else {
        return 'cabinet'
    }
    
}