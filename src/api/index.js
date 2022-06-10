import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};
export const hello = (id) => {
    return request({
        url: '/api/user/select',
        method: 'get',
        params: {
            id
        }
    });
};
