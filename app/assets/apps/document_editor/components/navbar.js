import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { FaAngleLeft } from 'react-icons/fa'
import { lightBlue, white } from 'document_editor/components/colors';

const arrowStyle = {
  marginTop: 'auto',
  marginBottom: 'auto',
  color: lightBlue
};

const barStyle = {
  backgroundColor: white,
  marginBottom: 0
};

const Bar = () => (
  <Navbar style={barStyle}>
    <h1>
      <FaAngleLeft style={arrowStyle} />
    </h1>
  </Navbar>
);

Bar.propTypes = {};

export { Bar };
