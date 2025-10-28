import "./general-view.css";
import generalViewHtml from "./general-view.html?raw";


export const generalView = (htmlElement) => {
  htmlElement.innerHTML = generalViewHtml;
};