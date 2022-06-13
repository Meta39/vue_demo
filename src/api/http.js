import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};
export const hello = () => {
    return request({
        url: '/api/hello',
        method: 'get',
    });
};