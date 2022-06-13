import request from '../utils/request';
export const userSelectPage = (id) => {
    return request({
        url: '/api/user/selectPage',
        method: 'get',
        params: {
            id
        }
    });
};
export const userSelect = (id) => {
    return request({
        url: '/api/user/select',
        method: 'get',
        params: {
            id
        }
    });
};