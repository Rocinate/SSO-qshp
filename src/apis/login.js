import request from '@/utils/request';

const commonUrl = '/login'

export const authenticate = async (params, token) => {
    request.defaults.headers.common["reCAPTCHA"] = token
    return await request.post(`${commonUrl}/authenticate`, params)
}

export const signIn = async (params, token) => {
    request.defaults.headers.common["reCAPTCHA"] = token
    return await request.post(`${commonUrl}/sign-in`, params)
}