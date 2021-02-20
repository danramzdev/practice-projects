const express = require('express')
const connectDB = require('./config/db')

// Constants
const PORT = process.env.PORT || 5000

// Controllers
const UsersController = require('./controllers/UsersController')
const AuthController = require('./controllers/AuthController')
const ContactsController = require('./controllers/ContactsController')

// Init Express
const app = express()

// Connect Database
connectDB()

app.use(express.json( { extended: false } ))

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the jungle!' })
})

// Routes
app.use('/api/users', require('./routes/users')(UsersController))
app.use('/api/auth', require('./routes/auth')(AuthController))
app.use('/api/contacts', require('./routes/contacts')(ContactsController))

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
