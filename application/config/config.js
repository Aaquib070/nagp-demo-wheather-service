const mongoose = require('mongoose');

module.exports = {
	WEATHER_API_KEY: process.env.VENDOR_KEY,
	connectDB: () => {
		mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`)
	},

	disconnectDB: () => {
		mongoose.disconnect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`)
	}
}
mongoose.connection.on('open', () => {
	console.log('Connected to Database (MongoDB) ')
})
mongoose.connection.on('error', () => {
	console.log('error in Database (MongoDB) connections')
})

mongoose.connection.on('disconnected', () => {
	console.log('Mongoose default connection disconnected')
})

process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.log('Mongoose disconnected through app termination')
		process.exit(0)
	})
})