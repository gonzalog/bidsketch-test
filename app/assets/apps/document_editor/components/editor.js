import React from 'react';
import { Bar } from 'document_editor/components/navbar';
import { Header } from 'document_editor/components/header';
import { Document } from 'document_editor/components/document';
import { Document as DocumentType } from 'document_editor/types/document';

const Editor = ({ doc }) => { 
  return (
    <div>
      <Bar />
      <Header />
      <Document doc={doc} />
    </div>
  );
}

Editor.propTypes = {
  doc: DocumentType.isRequired
};

export { Editor };
