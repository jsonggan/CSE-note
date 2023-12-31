import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import BrowserRouter from "react-router-dom/BrowserRouter";

// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = {
  navbar: {
    styles: {
      base: {
        navbar: {
          blurred: {
            borderWidth: "",
          },
        },
      },
    },
  },
};

root.render(
  <React.StrictMode>
    <ThemeProvider value={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
