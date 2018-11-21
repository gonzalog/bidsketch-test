import { createSelector } from 'reselect';
import { totalOptionsSelector } from 'document_editor/selectors/total_options';
import { completedOptionsSelector } from 'document_editor/selectors/completed_options';

const totalCompletedOptionsSelector = createSelector(
  totalOptionsSelector,
  completed_options
)

export { totalCompletedOptionsSelector }
