import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Editor } from 'document_editor/containers/editor'
import { createStore } from 'redux'
import editorApp from 'document_editor/reducers/editorApp'

let rootElement = document.getElementById('root')
let initialState = JSON.parse(rootElement.dataset.initialState);

initialState.currentPage = 0;

const store = createStore(editorApp, initialState)

render(
  <Provider store={store}>
    <Editor/>
  </Provider>,
  rootElement
)