import request from '@/utils/request';

const commonUrl = '/bind'

export const postgraduate = async (params, token) => {
    request.defaults.headers.common["reCAPTCHA"] = token
    return await request.post(`${commonUrl}/postgraduate`, params)
}