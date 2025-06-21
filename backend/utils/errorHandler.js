export const handleError = (error, res) => {
    let statusCode = error.response ? error.response.status : 500;
    let errorMessage = "An error occurred while processing the request.";

    if (error.response) {
        if (statusCode >= 300 && statusCode < 400) {
            errorMessage = "Redirection error: The request was redirected.";
        } else if (statusCode >= 400 && statusCode < 500) {
            errorMessage = error.response.data?.message || "Invalid request";
        } else if (statusCode === 502) {
            errorMessage = "Bad Gateway (502): The server received an invalid response from the upstream server.";
        } else if (statusCode >= 500) {
            errorMessage = "Server error: Please try again later.";
        }
    } else {
        errorMessage = "Network error or server is unreachable.";
    }

    return res.status(statusCode).json({
        message: errorMessage,
        status: statusCode >= 400 && statusCode < 500 ? "BAD_REQUEST" : "SERVER_ERROR"
    });
};
