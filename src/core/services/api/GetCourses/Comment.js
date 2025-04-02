import http from '../../interceptor/index.js';

const GetComment = async (user, queryParams = {}) => {
  const {
    PageNumber = 1,
    RowsOfPage = 10,
    SortingCol = "DESC",
    SortType = "InsertDate",
    Query = "",
    Accept,
    TeacherId,
    UserId
  } = queryParams;

  try {
    const endpoint = `/Course/CommentManagment?PageNumber=${PageNumber}
                      &RowsOfPage=${RowsOfPage}&SortingCol=${SortingCol}
                      &SortType=${SortType}&Query=${Query}&Accept=${Accept}
                      &TeacherId=${TeacherId}&UserId=${UserId}`;
    
    const response = await http.get(endpoint, user);
    return response;
  } catch (error) {
    console.error("Error occurred while sending comment:", error.message);
    return false;
  }
};

const PostComment = async (commentData, queryParams = {}) => {
  const {
    PageNumber = 1,
    RowsOfPage = 10,
    SortingCol = "DESC",
    SortType = "InsertDate",
    Query = "",
    Accept,
    TeacherId,
    UserId
  } = queryParams;

  try {
    
    const endpoint = `/Course/CommentManagment?PageNumber=${PageNumber}
                      &RowsOfPage=${RowsOfPage}&SortingCol=${SortingCol}
                      &SortType=${SortType}&Query=${Query}&Accept=${Accept}
                      &TeacherId=${TeacherId}&UserId=${UserId}`;

    const response = await http.post(endpoint, commentData);
    return response;
  } catch (error) {
    console.error("Error occurred while posting comment:", error.message);
    return false;
  }
};

export { GetComment,PostComment };