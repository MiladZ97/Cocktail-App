import { html, render } from 'haunted';
import './App';

const rootElement = document.getElementById('root') ?? document.body;

const renderApp = () => {
  render(html`<my-app></my-app>`, rootElement);
};

document.addEventListener('DOMContentLoaded', renderApp);