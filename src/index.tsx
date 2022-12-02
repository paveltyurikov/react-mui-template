import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PostAdminTable from "./apps/blog/Post/components/Table/Table";
import initApp from "./lib/initApp";
import AllProviders from "./providers/AllProviders";
import reportWebVitals from "./reportWebVitals";


initApp();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AllProviders>
      <PostAdminTable />
    </AllProviders>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
