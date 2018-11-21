import React from 'react';
import { Page as PageType } from 'document_editor/types/page';
import { Panel, Badge } from  'react-bootstrap';
import { pageOptionsCountSelector } from 'document_editor/selectors/page_options';
import { pageCompletedOptionsCountSelector } from 'document_editor/selectors/page_completed_options';
import { darkGrey, badgeGrey } from 'document_editor/components/colors';

const thumbnailStyle = {
  marginBottom: '30px',
  borderRadius: 0
};

const bodyStyle = {
  height: '200px',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center'
}

const labelStyle = {
  backgroundColor: badgeGrey,
  color: darkGrey,
  padding: '1.5rem',
  borderRadius: '2rem',
  margin: 'auto'
}

const PageThumbnail = ({ page }) => {
  const label = `${pageCompletedOptionsCountSelector(page)} of ${pageOptionsCountSelector(page)}`;

  return (
    <Panel style={thumbnailStyle}>
      <Panel.Body style={bodyStyle}>
        <Badge style={labelStyle}>
          { label }
        </Badge>
      </Panel.Body>
    </Panel>
  );
}

PageThumbnail.propTypes = {
  page: PageType.isRequired
};

export { PageThumbnail };
