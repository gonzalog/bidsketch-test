export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const OPTION_CLICK = 'OPTION_CLICK';
export const OPTION_CHANGE_RESPONSE = 'OPTION_CHANGE_RESPONSE';

export function setCurrentPage(page) {
  return { type: SET_CURRENT_PAGE, page }
}

export function optionChangeResponse(option) {
  return { type: OPTION_CHANGE_RESPONSE, option }
}

export function  optionClick(option) {
  return { type: OPTION_CLICK, option }
}