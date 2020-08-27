const loginStatus = (req, res) => {
    res.json({
        isLoggedIn: req.isAuthenticated()
    })
}

module.exports = loginStatus