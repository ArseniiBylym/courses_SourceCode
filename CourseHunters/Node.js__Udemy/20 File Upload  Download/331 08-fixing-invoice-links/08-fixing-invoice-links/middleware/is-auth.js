module.exports = (req, res, next) => {
    console.log('inside middleware')
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}