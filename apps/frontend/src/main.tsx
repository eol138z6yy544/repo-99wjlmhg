import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { store } from './store';
import { AuthProvider } from './contexts/AuthContext';
import App from './App';
import './index.css';
import { getApiUrl } from './config';

const manifestUrl = `${getApiUrl()}/tonconnect-manifest.json`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TonConnectUIProvider manifestUrl={manifestUrl}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </TonConnectUIProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
