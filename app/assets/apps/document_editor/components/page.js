import React from 'react';
import PropTypes from 'prop-types';
import { Page as PageType } from 'document_editor/types/page';
import { Panel, Checkbox } from  'react-bootstrap';
import { darkGrey, badgeGrey, selected, white } from 'document_editor/components/colors';


const Page = ({ page, onOptionChange }) => {
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

  return (
    <Panel style={pageStyle}>
      <Panel.Body style={bodyStyle}>
        <div style={bodyContentStyle}>
          {
            page.options.map((option) => {
              let onChange = () => onOptionChange(option)

              return <Checkbox
                  key={option.id}
                  style={optionStyle}
                  checked={option.value}
                  onChange={onChange}
                />;
            })
          }
        </div>
      </Panel.Body>
    </Panel>
  );
}

Page.propTypes = {
  page: PageType.isRequired,
  onOptionChange: PropTypes.func
};

export { Page };
