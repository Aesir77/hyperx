const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/HyperX', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

// Define User schema with unique constraints
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true } // Just for validation, will not be stored
});

const User = mongoose.model('user', userSchema);

// Endpoint to handle user registration
app.post('/register', async (req, res) => {
    console.log(req.body); // Log incoming request body
    const { username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        // Check for existing user (username or email)
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        console.log(existingUser);  // Log the result of the query

        if (existingUser) {
            return res.status(400).json({ message: 'Account exists!' });
        }

        // Create new user if no duplicates
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'Account created successfully!' });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating account', error });
    }
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));