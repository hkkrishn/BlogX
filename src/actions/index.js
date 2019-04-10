//ACTION CREATOR  
import JSONPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts=() => async dispatch =>{
    const response = await JSONPlaceHolder.get('/posts');
    dispatch({type:'FETCH_POSTS',payload:response.data})
  };
