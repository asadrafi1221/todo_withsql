
import db_data from "../db_connection/db_connection.js";

const displayhome = (req, res) => {
    res.render('home');
}
const user_posts = async (req, res) => {
    const data = req.body;
    console.log('this is data : ');
    console.log(data);
    
    const post = data.post;
    const email = data.email;

    // Validate input
    if (!post || !email) {
        return res.status(400).send('Post and email are required.');
    }

    try {
        await db_data.query(
            'UPDATE all_users SET posts = posts || ARRAY[$1] WHERE email = $2',
            [post, email]
        );
        return res.send('done');
    } catch (err) {
        console.error('Database update failed:', err);
        return res.status(500).send('An error occurred while updating posts.');
    }
};

export { displayhome ,user_posts};
