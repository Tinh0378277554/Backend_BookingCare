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
    let message = await CRUDService.createNewUser(req.body)
    console.log(message)
    return res.send('post crud from server')
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser()
    console.log('--------------')
    console.log(data)
    console.log('--------------')
    return res.render('test/displayCRUD.ejs', {
        // thêm 1 cái object tại đây để lấy data show ra view
        dataTable: data
    })
}

// exports ra 1 cái object 
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
}