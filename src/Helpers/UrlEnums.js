const URL = "http://ec2-13-233-111-131.ap-south-1.compute.amazonaws.com:9000";
const URL_FAILED = "http://localhost:9000";
const UrlEnums = {
  AWS: URL,
  ML_API: "http://127.0.0.1:8000",
  GET_BLOGS: `${URL}/get-blogs`,
  GET_CURRENT_BLOG: `${URL}/get-blog`,
  ADD_BLOGS: `${URL}/add-blog`,
  SAVE_BLOG: `${URL}/save-post`,
  GET_LEN: `${URL}/get-len`,
  UPDATE_TRENDING: `${URL}/update-trending`,
  UPDATE_PREFERENCES: `${URL}/update-preferences`,
  ADD_LIKE: `${URL}/add-like`,
  ADD_COMMENT: `${URL}/add-comment`,
  LOGIN: `${URL}/login`,
  STATUS: `${URL}/status`,
  SIGNUP: `${URL}/signup`,
  USER_PROFILE: `${URL}/user-profile`,
  UPDATE_USER: `${URL}/update-user`,
  LOGOUT: `${URL}/logout`,
  GET_SAVED_POST: `${URL}/get-save-posts`,
  SEARCH_BLOG: `${URL}/search-blog`,
  GET_TRENDING: `${URL}/get-trending`,
  GET_COMMENTS: `${URL}/get-comment`,
  SEARCH_IMAGE: `${URL}/search-image`,
};

export default UrlEnums;
