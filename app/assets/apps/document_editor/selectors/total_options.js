import { createSelector } from 'reselect';
import { pageOptionsSelector } from 'document_editor/selectors/page_options';
import { countSelector } from 'document_editor/selectors/count';

const totalOptionsSelector = doc => doc.pages.map(pageOptionsSelector).flat();

const totalOptionsCountSelector = createSelector(
  totalOptionsSelector,
  countSelector
)

export { totalOptionsSelector, totalOptionsCountSelector }
