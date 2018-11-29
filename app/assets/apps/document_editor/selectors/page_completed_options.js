import { createSelector } from 'reselect';
import { pageOptionsSelector } from 'document_editor/selectors/page_options';
import { completedOptionsSelector } from 'document_editor/selectors/completed_options';
import { countSelector } from 'document_editor/selectors/count';

const pageCompletedOptionsSelector = createSelector(
  pageOptionsSelector,
  completedOptionsSelector
)

const pageCompletedOptionsCountSelector = createSelector(pageCompletedOptionsSelector, countSelector);

export { pageCompletedOptionsSelector, pageCompletedOptionsCountSelector }
