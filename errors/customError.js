// custom error class

class CustomError extends Error {
    constructor(status, message) {
        super(message)
        this.status = status
    }
}

// create new error instance

const customError = (status, message) => {
    return new CustomError(status, message)
}

module.exports = { customError, CustomError }
