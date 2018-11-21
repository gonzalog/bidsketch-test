import { pageOptionsSelector } from 'document_editor/selectors/page_options';

const totalOptionsSelector = doc => doc.pages.map(pageOptionsSelector).flat();

export { totalOptionsSelector }
