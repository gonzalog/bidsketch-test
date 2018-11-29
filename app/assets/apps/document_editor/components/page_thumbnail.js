import React from 'react';
import PropTypes from 'prop-types';
import { Page as PageType } from 'document_editor/types/page';
import { Panel, Badge } from  'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { pageOptionsCountSelector } from 'document_editor/selectors/page_options';
import { pageCompletedOptionsCountSelector } from 'document_editor/selectors/page_completed_options';
import { darkGrey, badgeGrey, selected, white, green } from 'document_editor/components/colors';


const PageThumbnail = ({ page, onClick, isCurrent }) => {
  let backgroundColor;
  if (isCurrent) {
    backgroundColor = selected;
    color = white;
  } else {
    backgroundColor = badgeGrey;
    color = darkGrey;
  }

  let completed = pageCompletedOptionsCountSelector(page);
  let total = pageOptionsCountSelector(page);

  let badge;
  if (completed < total) {
    let label = `${completed} of ${total}`;

    let labelStyle = {
      backgroundColor: backgroundColor,
      color,
      padding: '1.5rem',
      borderRadius: '2rem',
      margin: 'auto'
    }

    badge = (
      <Badge style={labelStyle}>
        { label }
      </Badge>)
  } else {
    let checkStyle = {
      color: green,
      margin: 'auto',
      fontSize: '5rem'
    }

    badge = <FaCheckCircle style={checkStyle} />
  }

  let thumbnailStyle = {
    marginBottom: '30px',
    borderRadius: 0,
    borderColor: backgroundColor,
    cursor: 'pointer'
  };

  let bodyStyle = {
    height: '200px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center'
  }

  return (
    <Panel style={thumbnailStyle} onClick={onClick}>
      <Panel.Body style={bodyStyle}>
        {
          (total > 0) && badge
        }
      </Panel.Body>
    </Panel>
  );
}

PageThumbnail.propTypes = {
  page: PageType.isRequired,
  onClick: PropTypes.func,
  isCurrent: PropTypes.bool.isRequired
};

export { PageThumbnail };
