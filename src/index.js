import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

// import './css/style.css';

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.getElementById('app')
  )
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    renderApp(NextApp);
  });
}
