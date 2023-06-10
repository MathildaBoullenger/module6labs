import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from "./components/ErrorMessage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ErrorBoundary FallbackComponent={ErrorMessage}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ErrorBoundary>
);
