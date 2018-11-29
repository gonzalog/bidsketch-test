import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { grey, lightBlue } from 'document_editor/components/colors';

const gridStyle = {
  width: '100%',
  borderColor: grey,
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  paddingTop: '10px',
  paddingBottom: '10px'
};

const buttonStyle = {
  borderRadius: '23px',
  width: '100%',
  backgroundColor: lightBlue,
  border: 'none'
};

const rightButtonStyle = {
  ...buttonStyle,
  width: 'auto'
}

const buttonColStyle = {
  textAlign: 'center'
};

const rightColStyle = {
  textAlign: 'right'
};

const rowStyle = {
  display: 'flex',
  height: '42px'
};

const messageStyle = {
  margin: 'auto',
  fontSize: '18px'
};

const Header = ({ startGuidedMode, guidedMode, completed, closeDocument, closed }) => (
  <Grid style={gridStyle}>
    <Row style={rowStyle}>
      <Col sm={5} style={messageStyle}>
        Review & Complete document
      </Col>
      <Col sm={2} style={buttonColStyle}>
        {
          !guidedMode && !completed && !closed &&
          <Button bsStyle="primary" bsSize="large" style={buttonStyle} onClick={startGuidedMode}>
            Click to START
          </Button>
        }
      </Col>
      <Col sm={5} style={rightColStyle}>
        {
          completed && !closed &&
          <Button bsStyle="primary" bsSize="large" style={rightButtonStyle} onClick={closeDocument}>
            Save & finish document
          </Button>
        }
      </Col>
    </Row>
  </Grid>
);

Header.propTypes = {
  startGuidedMode: PropTypes.func.isRequired,
  completed: PropTypes.bool,
  closed: PropTypes.bool,
  closeDocument: PropTypes.func
};

export { Header };

