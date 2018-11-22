import { combineReducers } from 'redux';
import { SET_CURRENT_PAGE } from 'document_editor/actions';

let editorApp = function(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    default:
      return state
  }
};

export default editorApp;
