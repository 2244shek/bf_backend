const express = require('express');
const router = express.Router();

// User details (replace with actual details)
const USER_ID = "abhishek_panigrahi_27062003";
const EMAIL = "abhishek.panigrahi2021@vitstudent.ac.in";
const ROLL_NUMBER = "21BAI1773";

// POST route
router.post('/', (req, res) => {
    try {
        const data = req.body.data || [];
        console.log(data);
        
        // Separate numbers and alphabets
        const numbers = data.filter(item => /^\d+$/.test(item));
        const alphabets = data.filter(item => /^[A-Za-z]+$/.test(item));

        // Find the highest lowercase alphabet
        const lowercaseAlphabets = alphabets.filter(char => /^[a-z]$/.test(char));
        const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

        // Prepare the response
        res.status(200).json({
            is_success: true,
            user_id: USER_ID,
            email: EMAIL,
            roll_number: ROLL_NUMBER,
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase_alphabet: highestLowercaseAlphabet
        });
    } catch (error) {
        res.status(400).json({ is_success: false, error: error.message });
    }
});

// GET route
router.get('/', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

module.exports = router;
