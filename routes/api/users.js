import Express from 'express';
import User from '../../models/User';


const router = Express.Router();

// @route   POST api/users
// @desc    Register new user and return json

//Check for existing user or create new user
// const findUserOrCreate = async (email, email) => {
//     const user = await User.findOne({ email });
//     user && res.status(400).json({ msg: 'User already exists' });

//     const newUser = new User({
//         name,
//         email,
//         role,
//         creator
//     });
// }

router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    //TODO make input validation
    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    };

    const userData = await findUserOrCreate(email);
    res.json(userData);
});

module.exports = router;
