const notFound = (req, res) => {
    return res.status(404).json({
        msg: 'Oops! Seems like we cannot find the resource.',
    })
}

module.exports = notFound
