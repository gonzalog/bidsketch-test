import React from 'react';
import { Document as DocumentType } from 'document_editor/types/document';
import { PageThumbnail as Page } from 'document_editor/components/page_thumbnail';
import { grey } from 'document_editor/components/colors';

const sideBarStyle = {
  marginTop: '10px',
  borderRightColor: grey,
  borderRightWidth: '1px',
  borderRightStyle: 'solid',
  padding: '20%'
}

const SideBar = ({ doc }) => (
  <div style={sideBarStyle}>
    {
      doc.pages.map((page) => (
          <Page page={page} key={page.id} />
        ))
    }
  </div>
);

SideBar.propTypes = {
  doc: DocumentType.isRequired
};

export { SideBar };
