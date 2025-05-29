export {removepeople} from "../reducers/peopleSlice";
import { loadpeople } from "../reducers/peopleSlice";
import axios from "../../utils/axios";

export const asyncloadpeople = (id) => async  (dispatch, getState) => {
  try{
    const detail = await axios.get(`/person/${id}`);
    const externalid = await  axios.get(`/person/${id}/external_ids`);
    const combinedcredits = await  axios.get(`/person/${id}/combined_credits`);
    const tvcredits = await  axios.get(`/person/${id}/tv_credits`);
    const moviecredits = await  axios.get(`/person/${id}/movie_credits`);
 


    let ultimateDetails ={
      detail: detail.data,
      externalid: externalid.data,
      combinedcredits: combinedcredits.data,
      tvcredits: tvcredits.data,
      moviecredits: moviecredits.data,
    }

    dispatch(loadpeople(ultimateDetails));
    console.log(ultimateDetails);

  }catch(error){
    console.log("Error: ", error);
  }
}