import React from 'react';
import PropTypes from 'prop-types';
import { Page as PageType } from 'document_editor/types/page';
import { Panel, Checkbox, Tooltip, OverlayTrigger } from  'react-bootstrap';
import { darkGrey, badgeGrey, selected, white } from 'document_editor/components/colors';
import { firstPendingOptionSelector } from 'document_editor/selectors/first_pending_option';

const Page = ({ page, onOptionChange, guidedMode }) => {
  let pageStyle = {
    borderRadius: 0,
    borderColor: badgeGrey,
    maxWidth: '80%',
    height: '110rem'
  };

  let bodyStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  };

  let bodyContentStyle = {
    margin: 'auto'
  };

  let optionStyle = {
    marginBottom: '3rem'
  }

  let tooltipStyle = {
    marginTop: '-55px',
    marginLeft: '-9.5rem',
    fontSize: '16px',
    lineHeight: '40px',
    borderRadius: '23px',
    width: '20rem'
  }

  return (
    <Panel style={pageStyle}>
      <Panel.Body style={bodyStyle}>
        <div style={bodyContentStyle}>
          {
            page.options.map((option) => {
              let onChange = () => onOptionChange(option)

              let tooltip = (
                <Tooltip placement="top" className="in" id={option.id} style={tooltipStyle}>
                  Click to CHECK
                </Tooltip>);

              let defaultCheckbox = (
                <Checkbox
                  key={option.id}
                  style={optionStyle}
                  checked={option.value}
                  onChange={onChange}
                />);

              let guidedCheckbox = (
                <div key={option.id}>
                  {
                    tooltip
                  }
                  {
                    defaultCheckbox 
                  }
                </div>);

              if (guidedMode && option === firstPendingOptionSelector(page.options)) {
                return guidedCheckbox;
              } else {
                return defaultCheckbox;
              }
            })
          }
        </div>
      </Panel.Body>
    </Panel>
  );
}

Page.propTypes = {
  page: PageType.isRequired,
  onOptionChange: PropTypes.func,
  guidedMode: PropTypes.bool
};

export { Page };
