var path = require('path')
var express = require('express')
var config = require('config-lite')(__dirname)
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var flash = require('connect-flash')
var pkg = require('./package')
var routes = require('./routes')
var app = express()

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
	name: config.session,
	secret: config.session.secret,
	cookie: {
		maxAge: config.session.maxAge
	},
	store: new MongoStore({
		url: config.mongodb
	})
}))

app.use(flash())

routes(app)

app.listen(config.port, () => {
	console.log(`${pkg.name} listening on port ${config.port}`)
})