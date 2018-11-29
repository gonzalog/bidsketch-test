import { firstPendingOptionSelector } from 'document_editor/selectors/first_pending_option';

const currentPageSelector = state => {
  let selectedPage = state.document.pages[state.currentPage];
  let firstPendingOptionPage = state.document.pages.filter(({ options }) =>  firstPendingOptionSelector(options))[0];

  if (state.guidedMode && firstPendingOptionPage) {
    return firstPendingOptionPage;
  } else {
    return selectedPage;
  }
}

export { currentPageSelector }
