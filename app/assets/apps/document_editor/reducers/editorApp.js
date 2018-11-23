import { combineReducers } from 'redux';
import {
  SET_CURRENT_PAGE,
  OPTION_CHANGE_RESPONSE,
  OPTION_CLICK,
  SET_GUIDED_MODE,
  CLOSE_DOCUMENT_REQUEST,
  CLOSE_DOCUMENT_RESPONSE
} from 'document_editor/actions';

let editorApp = function(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: state.document.pages.indexOf(action.page)
      }
    case OPTION_CLICK:
      return state;
    case OPTION_CHANGE_RESPONSE:
      return {
        ...state,
        document: {
          ...state.document,
          pages: state.document.pages.map((page) => {
            if (page.id === action.option.page_id) {
              return {
                ...page,
                options: page.options.map((option) => {
                  if (option.id === action.option.id) {
                    return action.option;
                  } else {
                    return option;
                  }
                })
              }
            } else {
              return page;
            }
          })
        }
      }
    case SET_GUIDED_MODE:
      return {
        ...state,
        guidedMode: true
      }
    case CLOSE_DOCUMENT_REQUEST:
      return state;
    case CLOSE_DOCUMENT_RESPONSE:
      return {
        ...state,
        document: {
          ...state.document,
          closed_at: action.response.closed_at
        }
      }
    default:
      return state
  }
};

export default editorApp;
