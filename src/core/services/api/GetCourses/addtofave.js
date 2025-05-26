import http from '../../interceptor/index.js';

export const Addtofave = async (courseId) => {
    try {
        const response = await http.post('/Course/AddCourseFavorite', {
            courseId: courseId, 

        })
        
        return response;
    } catch (error) {
        console.log('Error details:', error.response?.data);
        throw error;
    }
};