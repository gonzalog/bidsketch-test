import { connect } from 'react-redux';
import { Editor as EditorComponent } from 'document_editor/components/editor';
import { setCurrentPage, optionClick, optionChangeResponse } from 'document_editor/actions';
import 'whatwg-fetch';

const mapStateToProps = state => {
  return {
    doc: state.document,
    currentPage: state.document.pages[state.currentPage]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectPage: (page) => {
      dispatch(setCurrentPage(page))
    },
    optionClick: (option) => {
      dispatch(optionClick(option));
      window.fetch(`/options`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          id: option.id,
          value: !option.value
        })
      }).then(response => {
        response.json().then(json => {
          dispatch(optionChangeResponse(json))
        });
      })
    }
  }
}

const Editor = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorComponent);

export { Editor };
