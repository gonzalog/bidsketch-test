import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Button, Glyphicon } from 'react-bootstrap';
import { FaAngleLeft } from 'react-icons/fa'
import { lightBlue } from 'document_editor/components/colors';

const arrowStyle = {
  marginTop: 'auto',
  marginBottom: 'auto',
  color: lightBlue
};

const Bar = () => (
  <Navbar>
    <Navbar.Header>
        <h1>
          <FaAngleLeft style={arrowStyle} />
        </h1>
    </Navbar.Header>
  </Navbar>
);

Bar.propTypes = {};

export { Bar };
