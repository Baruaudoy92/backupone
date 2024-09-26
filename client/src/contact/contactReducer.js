// contactReducer.js

import { SUBMIT_CONTACT_FORM } from './contactActions';

const initialState = {
  formData: {}
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_CONTACT_FORM:
      return {
        ...state,
        formData: action.payload
      };
    default:
      return state;
  }
};

export default contactReducer;
