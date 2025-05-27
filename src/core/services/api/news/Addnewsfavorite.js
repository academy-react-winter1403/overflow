import http from '../../interceptor/index';


export const Addnewstofave = async (NewsId) => {

    const respone = http.post(`/News/AddFavoriteNews?NewsId=${NewsId}`);

    return respone;
}