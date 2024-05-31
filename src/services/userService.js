import { raw } from 'body-parser';
import db from '../models/index';
import bcrypt from 'bcryptjs';


let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                // Người dùng đã tồn tại


                let user = await db.User.findOne({
                    attributes: ['email', 'roleId', 'password'],
                    where: { email: email },
                    raw: true
                })
                if (user) {
                    // so sánh password
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        userData.errcode = 0;
                        userData.errMessage = 'Ok';
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errcode = 3;
                        userData.errMessage = 'wrong password';
                    }

                } else {
                    userData.errcode = 2;
                    userData.errMessage = `user is not found`
                }


            } else {
                //return error
                userData.errcode = 1;
                userData.errMessage = 'Email của bạn không tồn tại trong hệ thống, Vui lòng thử lại cách khác!!';
            }

            resolve(userData)
        } catch (err) {
            reject(err);
        }
    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail },
            })
            // check user email
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (err) {
            reject(err);
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
}