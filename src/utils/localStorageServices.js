export const getAccessToken = () => {
    return localStorage.getItem('token');
}

export const setToken = (token) => {
    return localStorage.setItem('token',token);
}
export const removeToken = (token) => {
    return localStorage.removeItem('token');
}

export const checkAuth = () => {
    const token = getAccessToken();
    if(token) return true;
    return false;
}