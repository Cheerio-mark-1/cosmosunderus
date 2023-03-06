
const getUsers = async (req, res) => {
    setTimeout(() => {
        res.status(200).json({ message: 'router working correctly' })
    }, 3000);
}

const getUser2 = async (req, res) => {
    setTimeout(() => {
        res.status(200).json({ message: 'router working correctly' })
    }, 3000);

}

module.exports = {
    getUsers,
    getUser2
}