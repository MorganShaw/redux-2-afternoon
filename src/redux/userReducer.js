import axios from "axios";

const initialState = {
    email: null,
    firstName: null,
    lastName: null
};

//I don't understand what this does yet. It's the action type. Review this.
const REQUEST_USER_DATA = "REQUEST_USER_DATA";

//action creator
export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}

//reducer function
export default function reducer(state = initialState, action){
    console.log("ACTION", action)
    switch(action.type){
        case REQUEST_USER_DATA + '_FULFILLED':
            const {email, firstName, lastName} = action.payload.user;
            return {email, firstName, lastName};
        // case REQUEST_USER_DATA + "_PENDING":
        default:
            return state;

    }
}