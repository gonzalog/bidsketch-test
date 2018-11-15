import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Bar } from 'document_editor/components/navbar'
import { createStore } from 'redux'
import editorApp from 'document_editor/reducers/editorApp'

let rootElement = document.getElementById('root')

const store = createStore(editorApp, rootElement.dataset.initialState)

render(
  <Provider store={store}>
    <Bar/>
  </Provider>,
  rootElement
)