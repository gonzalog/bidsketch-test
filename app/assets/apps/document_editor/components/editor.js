import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'document_editor/components/navbar';
import { Header } from 'document_editor/components/header';
import { Document } from 'document_editor/components/document';
import { Document as DocumentType } from 'document_editor/types/document';
import { Page as PageType } from 'document_editor/types/page';

const Editor = ({ doc, selectPage, currentPage }) => { 
  return (
    <div>
      <Bar />
      <Header />
      <Document doc={doc} selectPage={selectPage} currentPage={currentPage} />
    </div>
  );
}

Editor.propTypes = {
  doc: DocumentType.isRequired,
  selectPage: PropTypes.func.isRequired,
  currentPage: PageType.isRequired
};

export { Editor };
