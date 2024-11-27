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

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);

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


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));