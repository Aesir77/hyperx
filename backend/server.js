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
});
const User = mongoose.model('users', userSchema);

const roomSchema = new mongoose.Schema({
    type: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
});

const Room = mongoose.model('rooms', roomSchema);

// Define Reviews schema
const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);


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

// Endpoint to add a new review
app.post('/reviews', async (req, res) => {
    const { name, rating, comment } = req.body;

    if (!name || !rating || !comment) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newReview = new Review({ name, rating, comment });
        await newReview.save();
        res.status(201).json({ message: 'Review added successfully', review: newReview });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding review', error });
    }
});

// Endpoint to get all reviews
app.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find().sort({ createdAt: -1 }); // Sort by most recent
        res.status(200).json(reviews);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
});

// Endpoint to validate user credentials for login
app.post('/validateUser', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user exists by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ success: false, message: 'User does not exist' });
        }

        // Validate the password
        if (user.password !== password) {
            return res.status(400).json({ success: false, message: 'Incorrect password' });
        }

        res.status(200).json({ success: true, message: 'User validated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error validating user' });
    }
});

// Endpoint to check if the email exists
app.post('/check-email', async (req, res) => {
    const { email } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(200).json({ exists: true });
        } else {
            return res.status(404).json({ exists: false });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error checking email' });
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));