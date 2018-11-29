import { createSelector } from 'reselect';
import { totalOptionsSelector, totalOptionsCountSelector } from 'document_editor/selectors/total_options';
import { completedOptionsSelector } from 'document_editor/selectors/completed_options';
import { countSelector } from 'document_editor/selectors/count';

const totalCompletedOptionsSelector = createSelector(
  totalOptionsSelector,
  completedOptionsSelector
)

const totalCompletedOptionsCountSelector = createSelector(
  totalCompletedOptionsSelector,
  countSelector
)

export {
  totalCompletedOptionsSelector,
  totalCompletedOptionsCountSelector,
  totalOptionsSelector,
  totalOptionsCountSelector
}
