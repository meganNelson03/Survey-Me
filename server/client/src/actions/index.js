import axios from "axios";
import { FETCH_USER } from "./types";

//action creator: returns a function
const fetchUser = () => {
    // redux thunk will expose the dispatch function 
    return function(dispatch) {
        axios.get("/api/current_user")
        .then(res => dispatch({
            type: FETCH_USER,
            payload: res
        }));
    }
}