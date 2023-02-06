import{
    SET_REF_ID
} from "../types";
const initialState = {
    id: 0,
    image: "",
    source: "",
};

export const setRefID = (payload) => {
    return{
        type: SET_REF_ID,
        refID: payload.ID,
    };
}

export default (state = initialState, action) => {
    switch (action.type) {
    //   case SET_SITE_PLAN_DATA:
    //     return {
    //       ...state,
    //       sitePlanData: action.payload,
    //     };
      default:
        return state;
    }
};