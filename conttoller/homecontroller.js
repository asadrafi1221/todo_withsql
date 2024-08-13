
import db_data from "../db_connection/db_connection.js";

const display_allpost = (req,res)=>{
    res.render('posts');
}



const update_post = async(req,res)=>{
    const data = req.body;
    console.log(' i am called')
    console.log(data);
    const email = data.email;
    const post =  data.postContent;
    console.log(email,post);
    await db_data.query(
        'UPDATE all_users SET posts = posts || $1 WHERE email = $2',
        [[post], email]
    );
    res.send('ok');

}


export {
    display_allpost,
    update_post
};

