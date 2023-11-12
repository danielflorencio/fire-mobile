export const defaultHeaders = {
    'Content-Type': 'application/json',
}

export const getDefaultAuthHeaders = (token: string) => {
    return{
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`
    }
}