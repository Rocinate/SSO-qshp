import request from '@/utils/request';

const commonUrl = '/retrieve'

export const portal = async (params, token) => {
    request.defaults.headers.common["reCAPTCHA"] = token
    return await request.post(`${commonUrl}/portal`, params)
}