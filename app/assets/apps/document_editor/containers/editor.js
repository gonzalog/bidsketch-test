import { connect } from 'react-redux';
import { Editor as EditorComponent } from 'document_editor/components/editor';
import { setCurrentPage } from 'document_editor/actions'

const mapStateToProps = state => {
  return {
    doc: state.document,
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectPage: (page) => {
      dispatch(setCurrentPage(page))
    }
  }
}

const Editor = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorComponent);

export { Editor };
