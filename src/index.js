import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';

import Web3 from 'web3'
import { Web3ReactProvider } from '@web3-react/core'
import { MetaMaskProvider } from './hooks/useMetaMask'

import 'bootstrap/dist/css/bootstrap.min.css'
import { DAppProvider } from "@usedapp/core";

function getLibrary(provider, connector) {
  return new Web3(provider);
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <StyledEngineProvider injectFirst>
        <Web3ReactProvider getLibrary={getLibrary}>
          <MetaMaskProvider>
            <App />
          </MetaMaskProvider>
        </Web3ReactProvider>
      </StyledEngineProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
