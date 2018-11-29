import { createSelector } from 'reselect';
import { countSelector } from 'document_editor/selectors/count';

const pageOptionsSelector = ({ options }) => options

const pageOptionsCountSelector = createSelector(pageOptionsSelector, countSelector);

export { pageOptionsSelector, pageOptionsCountSelector }
