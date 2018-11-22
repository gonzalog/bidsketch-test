import React from 'react';
import PropTypes from 'prop-types';
import { Document as DocumentType } from 'document_editor/types/document';
import { Page as PageType } from 'document_editor/types/page';
import { PageThumbnail as Page } from 'document_editor/components/page_thumbnail';
import { grey } from 'document_editor/components/colors';

const sideBarStyle = {
  marginTop: '10px',
  borderRightColor: grey,
  borderRightWidth: '1px',
  borderRightStyle: 'solid',
  padding: '20%'
}

const SideBar = ({ doc, onThumbnailClick, currentPage }) => (
  <div style={sideBarStyle}>
    {
      doc.pages.map(
        page => {
          let onClick = () => onThumbnailClick(page);
          let isCurrent = currentPage === page;
          return (<Page page={page} key={page.id} onClick={onClick} isCurrent={isCurrent} />)
        }
      )
    }
  </div>
);

SideBar.propTypes = {
  doc: DocumentType.isRequired,
  onThumbnailClick: PropTypes.func,
  currentPage: PageType.isRequired
};

export { SideBar };
