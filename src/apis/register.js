import request from '@/utils/request';

const commonUrl = 'register'

export const checkUsername = async (params) => {
    delete axios.defaults.headers.common["reCAPTCHA"];
    return await request.post(`${commonUrl}/check-username}`, params)
}

export const signUp = async (params, token) => {
    request.defaults.headers.common["reCAPTCHA"] = token
    return await request.post(`${commonUrl}/sign-up`, params)
}
