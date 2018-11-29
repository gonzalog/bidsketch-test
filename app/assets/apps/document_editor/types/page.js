import PropTypes from 'prop-types';
import { Option as OptionType } from 'document_editor/types/option';

const Page = PropTypes.shape({
  options: PropTypes.arrayOf(OptionType)
})

export { Page }
