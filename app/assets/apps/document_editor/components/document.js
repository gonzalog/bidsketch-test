import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { SideBar } from 'document_editor/components/sidebar';
import { Page } from 'document_editor/components/page';
import { Document as DocumentType } from 'document_editor/types/document';
import { Page as PageType } from 'document_editor/types/page';
import { lightGrey, grey } from 'document_editor/components/colors';

const gridStyle = {
  width: '100%',
  backgroundColor: lightGrey,
}

const pageStyle = {
  paddingLeft: '5rem',
  paddingTop: '3rem',
  borderLeftColor: grey,
  borderLeftWidth: '1px',
  borderLeftStyle: 'solid',
  marginTop: '3rem',
  marginBottom: '6rem'
}

const Document = ({ doc, selectPage, currentPage, optionClick, guidedMode }) => (
  <Grid style={gridStyle}>
    <Row>
      <Col lg={2} md={3} sm={4}>
        <SideBar doc={doc} onThumbnailClick={selectPage} currentPage={currentPage} />
      </Col>
      <Col lg={10} md={9} sm={8} style={pageStyle}>
        <Page page={currentPage} onOptionChange={optionClick} guidedMode={guidedMode} />
      </Col>
    </Row>
  </Grid>  
);

Document.propTypes = {
  doc: DocumentType.isRequired,
  selectPage: PropTypes.func.isRequired,
  optionClick: PropTypes.func.isRequired,
  currentPage: PageType.isRequired,
  guidedMode: PropTypes.bool
};

export { Document };
