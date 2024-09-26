// contactActions.js

export const SUBMIT_CONTACT_FORM = 'SUBMIT_CONTACT_FORM';

// Action Creator for submitting the contact form
export const submitContactForm = (formData) => {
  return {
    type: SUBMIT_CONTACT_FORM,
    payload: formData
  };
};
