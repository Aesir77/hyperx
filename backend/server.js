const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
<<<<<<< Updated upstream

const app = express();
app.use(cors());
app.use(bodyParser.json());

=======
const app = express();
app.use(cors());
app.use(bodyParser.json());
>>>>>>> Stashed changes
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/HyperX', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));
<<<<<<< Updated upstream

// Define User schema (no confirmPassword)
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('user', userSchema);

app.post('/register', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    // Check for password confirmation
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        // Check for existing user by username or email
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Account with this username or email already exists!' });
        }

        // Create new user if no duplicates
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'Account created successfully!' });
    } catch (error) {
        console.error('Database save error:', error);
        res.status(500).json({ message: 'Server error during account creation', error: error.message });
    }
});

=======
// Define User schema with unique constraints
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});
const User = mongoose.model('users', userSchema);

const roomSchema = new mongoose.Schema({
    type: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
});

const Room = mongoose.model('rooms', roomSchema);

const seedRooms = async () => {
    const rooms = [
        {
            type: 'Small',
            description: 'A cozy room perfect for single travelers.',
            imageUrl: '/Assets/1_cR0GxdchD1HtKQxQ09Z1sg.jpg',
        },
        {
            type: 'Medium',
            description: 'Spacious enough for a couple or small family.',
            imageUrl: '/Assets/movie-themed-hotel-rooms-v0-flos2w10a07b1.jpg',
        },
        {
            type: 'Large',
            description: 'Ideal for families or group travelers.',
            imageUrl: '/Assets/flh_20180612-luxuryspace-1.jpg',
        },
    ];
    await Room.deleteMany(); // Clear existing room data
    await Room.insertMany(rooms); // Insert seed data

};
seedRooms().catch(console.error); // Call the seeder for initial setup

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
        const newUser = new User({ username, email, password, confirmPassword });
        await newUser.save();
        res.status(201).json({ message: 'Account created successfully!' });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating account', error });
    }
});

app.get('/rooms', async (req, res) => {
    try {
        const rooms = await Room.find(); // Fetch all rooms from DB
        res.json(rooms);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching rooms', error });
    }
});
>>>>>>> Stashed changes

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
