// imports
const { CustomError } = require('../middleware/customError')

const handleError = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.status).json(err.message)
    }
    res.status(500).json({
        msg: 'Something went wrong, please try again later',
    })
}

module.exports = handleError
