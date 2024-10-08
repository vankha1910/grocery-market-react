import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import DarkModeProvider from './contexts/DarkModeContext.tsx'
import store from './store.ts'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </Provider>
  </React.StrictMode>
)
