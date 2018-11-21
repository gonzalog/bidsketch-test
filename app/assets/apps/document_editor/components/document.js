import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { SideBar } from 'document_editor/components/sidebar';
import { Document as DocumentType } from 'document_editor/types/document';
import { lightGrey } from 'document_editor/components/colors';

const gridStyle = {
  width: '100%',
  backgroundColor: lightGrey,
}

const Document = ({ doc }) => (
  <Grid style={gridStyle}>
    <Row>
      <Col lg={2} md={3} sm={4}>
        <SideBar doc={doc}/>
      </Col>
      <Col lg={10} md={9} sm={8}>
      </Col>
    </Row>
  </Grid>  
);

Document.propTypes = {
  doc: DocumentType.isRequired
};

export { Document };
