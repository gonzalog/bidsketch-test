import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Editor } from 'document_editor/containers/editor'
import { createStore } from 'redux'
import editorApp from 'document_editor/reducers/editorApp'

let rootElement = document.getElementById('root')
const store = createStore(editorApp, JSON.parse(rootElement.dataset.initialState))

render(
  <Provider store={store}>
    <Editor/>
  </Provider>,
  rootElement
)