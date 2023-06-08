import React from "react";

function ErrorMessage({ error, resetErrorBoundary }) {
    console.error(error);

    return (
        <div className="ErrorMessage">
            <p>Oh no! Something went wrong! See below:</p>
            <pre>{error.message}</pre>
        </div>
    );
}

export default ErrorMessage;
