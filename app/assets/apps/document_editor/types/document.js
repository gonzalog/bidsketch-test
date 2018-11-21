import PropTypes from 'prop-types'
import { Page as PageType } from 'document_editor/types/page';

const Document = PropTypes.shape({
  pages: PropTypes.arrayOf(PageType).isRequired
})

export { Document }
