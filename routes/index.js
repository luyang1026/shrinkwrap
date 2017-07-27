module.exports = app => {
  app.get('/', (req, res) => {
  	// req.flash('error', '已登录')
  	res.send(req.url)
  	// res.redirect('back')
  })
}