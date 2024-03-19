const notfound = (req, res)=>res.status(404).send('directory does not exist use "/api/home" to get to the home page')

module.exports = notfound