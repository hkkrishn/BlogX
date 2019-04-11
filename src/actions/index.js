import _ from 'lodash'
import JSONPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts=() => async dispatch =>{
    const response = await JSONPlaceHolder.get('/posts');
    dispatch({type:'FETCH_POSTS',payload:response.data})
  };

  export const fetchUsers=(id) => dispatch =>{
    _fetchUser(id,dispatch);
  };

  

  const _fetchUser =_.memoize(async (id,dispatch) =>{
    const response = await JSONPlaceHolder.get(`/users/${id}`);
    dispatch({type:'FETCH_USER',payload:response.data})
  });
