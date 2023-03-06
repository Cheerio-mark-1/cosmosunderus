
const getUsers = async(req, res) => {
    res.status(200).json({message: 'router working correctly'})
}

module.exports = {
    getUsers
}