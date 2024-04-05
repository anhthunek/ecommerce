export const register = (data) => {
    return {
        type: 'register',
        payload: data
    }
}
export const login = (data) => {
    return {
        type: 'login',
        payload: data
    }
}