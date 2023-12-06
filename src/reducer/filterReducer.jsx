// import { filterAction } from "../action/filterAction";

const initialState = {
  prdData: [],
};

export const filterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_FILTER_DATA":
      return {
        ...state,
        prdData: payload,
      };
    default:
      return state;
  }
};
