import React from 'react';
import { hydrate, injectGlobal } from 'react-emotion';
import vars from '../styles/vars';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

injectGlobal`
  html, body {
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Index = () => (
  <div>
    Next Starter Pack
  </div>
);

export default Index;
