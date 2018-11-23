import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'document_editor/components/navbar';
import { Header } from 'document_editor/components/header';
import { Document } from 'document_editor/components/document';
import { Document as DocumentType } from 'document_editor/types/document';
import { Page as PageType } from 'document_editor/types/page';
import { totalOptionsCountSelector, totalCompletedOptionsCountSelector } from 'document_editor/selectors/total_completed_options';
import { ProgressBar } from 'document_editor/components/progress_bar';

const Editor = ({ doc, selectPage, currentPage, optionClick, startGuidedMode, guidedMode }) => { 
  return (
    <div>
      <Bar />
      <Header startGuidedMode={startGuidedMode} guidedMode={guidedMode} />
      <ProgressBar total={ totalOptionsCountSelector(doc) } completed={ totalCompletedOptionsCountSelector(doc) } />
      <Document doc={doc} selectPage={selectPage} optionClick={optionClick} currentPage={currentPage} guidedMode={guidedMode} />
    </div>
  );
}

Editor.propTypes = {
  doc: DocumentType.isRequired,
  selectPage: PropTypes.func.isRequired,
  optionClick: PropTypes.func.isRequired,
  currentPage: PageType.isRequired,
  startGuidedMode: PropTypes.func.isRequired,
  guidedMode: PropTypes.bool
};

export { Editor };
