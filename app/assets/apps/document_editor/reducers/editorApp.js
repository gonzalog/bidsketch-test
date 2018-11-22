import { combineReducers } from 'redux';
import { SET_CURRENT_PAGE, OPTION_CHANGE_RESPONSE, OPTION_CLICK } from 'document_editor/actions';

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
    default:
      return state
  }
};

export default editorApp;
