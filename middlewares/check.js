module.exports = {
	checkNotLogin: (req, res, next) => {
		if (req.session.user) {
			req.flash('error', '已登录')
			return res.redirct('back')
		}
		next()
	}
}