const User = require("../Model/db")

const create_user = async (req, res) => {
    try {
        const { name, password } = req.body;
        
        if (name && password) {
            const new_user = await User.create(req.body);
            res.json(new_user);
        }

    }

    catch (e) {
        res.json({ message: e.message });
    }
}


module.exports = {create_user};


