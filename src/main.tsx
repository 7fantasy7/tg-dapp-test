import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {TonConnectUIProvider} from '@tonconnect/ui-react';

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://7fantasy7.github.io/tg-dapp-test/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <App/>
    </TonConnectUIProvider>
  </React.StrictMode>,
)