import { json } from 'body-parser';
import db from '../models/index';
import CRUDService from '../services/CRUDService';

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

let getCRUD = (req, res) => {
    return res.render('test/crud.ejs')
}
let postCRUD = async (req, res) => {
    await CRUDService.createNewUser(req.body)

    return res.send('post crud from server')
}

// exports ra 1 cái object 
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}