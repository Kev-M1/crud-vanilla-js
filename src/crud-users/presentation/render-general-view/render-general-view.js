import './render-general-view.css';
import generalViewHTML from './render-general-view.html?raw';

export const renderGeneralView = (appHTMLElement) => {
  appHTMLElement.innerHTML = generalViewHTML;
};