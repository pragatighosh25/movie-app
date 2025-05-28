import  {createSlice} from "@reduxjs/toolkit";

const initialState ={
  info: null,
};

export const tvSlice = createSlice({
  name: "tv", 
  initialState,
  reducers: {
    loadtv: (state, action) =>{
      state.info =action.payload;
    },  //updates state on the basis of action

    removetv: (state, action) =>{
      state.info= null;
    },
  }
});

export const { loadtv,removetv } = tvSlice.actions;

export default tvSlice.reducer;