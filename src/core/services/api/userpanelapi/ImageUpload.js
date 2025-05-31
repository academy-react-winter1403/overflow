import http from '../../interceptor/index';

export const imageuploder = async () => {

    const respone = await http.post('/SharePanel/AddProfileImage');

    return respone;
}