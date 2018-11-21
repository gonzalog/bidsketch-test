import { connect } from 'react-redux';
import { Editor as EditorComponent } from 'document_editor/components/editor';

const mapStateToProps = state => {
  return {
    doc: state.document
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const Editor = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorComponent);

export { Editor };
