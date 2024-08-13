import db_data from "../db_connection/db_connection.js";
import secretkey from "../config/mykeys.js";
import jwt from "jsonwebtoken";

const display = (req, res) => {
    res.render('signup');
}

const create_user = async (req, res) => {
    const { name, email } = req.body;

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

        res.cookie('token', jwt_token, { httpOnly: true });

        res.redirect('/home/all_posts');
    } catch (err) {
        console.error('Database error:', err);
        return res.status(500).send('An error occurred while creating the user.');
    }
}

const get_data = async (req, res) => {
    try {
        const data = (await db_data.query('SELECT * FROM all_users')).rows;
        res.send(data);
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).send('An error occurred while fetching data.');
    }
}

export { create_user, display, get_data };
