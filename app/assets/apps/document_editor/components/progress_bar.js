import React from 'react';
import PropTypes from 'prop-types';
import { lightBlue, lightGrey } from 'document_editor/components/colors';

const ProgressBar = ({ total, completed }) => { 
  let completeness = completed * 100 / total;

  let barStyle = {
    borderTopWidth: '1rem',
    borderTopStyle: 'solid',
    width: `${completeness}%`,
    borderColor: lightBlue,
    color: lightBlue,
    textAlign: 'right'
  };

  let containerStyle = {
    width: '100%',
    backgroundColor: lightGrey
  }

  let description = `${completed}/${total}`;

  return (
    <div style={containerStyle}>
      <div style={barStyle}>
        {
          description
        }
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  total: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired
};

export { ProgressBar };
