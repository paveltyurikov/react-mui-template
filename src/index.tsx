import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import i18nInit from "~/i18n";
import enableMocking from "~/msw-mocks/enableMocking";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

i18nInit("/public");

enableMocking().then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
