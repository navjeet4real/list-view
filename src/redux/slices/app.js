import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  userList: [],
  total_pages: null,
};


const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserList(state, action) {
      state.userList = action.payload
    },
    setTotalPage(state, action){
      state.total_pages = action.payload
    }
  },
});

export default slice.reducer;

export function fetchUsers(page) {
  console.log(page, "reduxxxx")
  return async (dispatch, getState) => {
    await axios.get(`https://reqres.in/api/users?page=${page}&per_page=5`)
      .then(response => {
        console.log(response, "llllllllllllll")
        dispatch(slice.actions.setTotalPage(response.data.total_pages))
        dispatch(slice.actions.setUserList(response.data.data));
      })
      .catch(error => {
        console.log(error);
      });
  }
}
