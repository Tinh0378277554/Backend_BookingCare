import { json } from 'body-parser';
import db from '../models/index';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }

}

// exports ra 1 cái object 
module.exports = {
    getHomePage: getHomePage,
}