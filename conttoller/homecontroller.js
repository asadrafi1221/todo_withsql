
import db_data from "../db_connection/db_connection.js";

const displayhome = (req, res) => {
    res.render('home');
}
const user_posts = async(req,res)=>{
    const data = req.body;
    console.log(data);
    console.log(data.post, data.email)
    
    try{
    const data_arr = await db_data.query(`update all_users set posts = array[${data.post}] where email=${email}`)
    }
    catch(err){
        return res.status(400).send('sorry error agya bache ');
    }
    return res.send('done ')
}
export { displayhome ,user_posts};
