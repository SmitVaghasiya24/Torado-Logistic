export default class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;   // 👈 MUST
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}
