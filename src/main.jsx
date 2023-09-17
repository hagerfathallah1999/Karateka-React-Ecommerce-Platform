import ReactDom from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDom.createRoot(document.querySelector("#root"));

root.render(
  <>
    <App />
    <ToastContainer />
  </>
);
