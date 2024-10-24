import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "antd/dist/reset.css";
import "./styles/main.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Montserrat, sans-serif",
          colorPrimary: "#1290cb",
          fontSize: 16,
          lineHeight: 1.5,
          Layout: {
            headerBg: "#ffffff",
            headerColor: "#ffffff",
            footerBg: "#ffffff",
            bodyBg: "#ffffff",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
