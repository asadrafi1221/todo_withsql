import db_data from "../db_connection/db_connection.js";
import secretkey from "../config/mykeys.js";
import jwt from "jsonwebtoken";

const create_user = async (req, res) => {
    const { name, email } = req.body;
    console.log(name, email);


    const data = (await db_data.query('select * from all_users')).rows;
    if (!name || !email) {
        return res.status(400).send('Name and email are required.');
    }

    try {
        const result = await db_data.query('SELECT * FROM all_users WHERE email = $1', [email]);

        if (result.rows.length > 0) {
            return res.status(400).send('Email already exists.');
        }

        await db_data.query('INSERT INTO all_users (name, email) VALUES ($1, $2)', [name, email]);

        const jwt_token = jwt.sign({ email }, secretkey, { expiresIn: '1h' });

        // Uncomment the line below if you want to use cookies for the token
        // res.cookie('token', jwt_token);

        res.render('home',{data : data});
    } catch (err) {
        console.error('Database error:', err);
        return res.status(500).send('An error occurred while creating the user.');
    }
}

const display = (req, res) => {
    res.render('signup');
}


const get_data = async (req,res)=>{
    const data = (await db_data.query('select * from all_users')).rows;
    res.send(data);
}
export { create_user, display ,get_data};
