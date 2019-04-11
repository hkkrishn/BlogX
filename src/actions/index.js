import _ from 'lodash'
import JSONPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPostsAndUsers = () => async (dispatch,getState) =>{
   //console.log('About to Fetch Posts')
   await dispatch(fetchPosts());
   const uniqueUsers = _.uniq(_.map(getState().posts,'userId')) // returns array of unique arrays
   //iterate through this list of posts and find unique users
   console.log(uniqueUsers)
   uniqueUsers.forEach(id =>dispatch(fetchUsers(id)))
   _.chain(getState().posts)
}

export const fetchPosts=() => async dispatch =>{
    const response = await JSONPlaceHolder.get('/posts');
    dispatch({type:'FETCH_POSTS',payload:response.data})
  };

export const fetchUsers = id => async dispatch =>{
    const response = await JSONPlaceHolder.get(`/users/${id}`);
  dispatch({type:'FETCH_USER',payload:response.data})
  };
  // export const fetchUsers=(id) => dispatch =>{
  //   _fetchUser(id,dispatch);
  // };

  

  // const _fetchUser =_.memoize(async (id,dispatch) =>{
  //   const response = await JSONPlaceHolder.get(`/users/${id}`);
  //   dispatch({type:'FETCH_USER',payload:response.data})
  // });
