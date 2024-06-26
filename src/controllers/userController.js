import userService from '../services/userService';

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errcode: 1,
            message: 'Missing inputs parameter',
        })
    }

    let userData = await userService.handleUserLogin(email, password)

    return res.status(200).json({
        errcode: userData.errcode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}

let compareUserPassword = () => {
    return new Promise((resolve, reject) => {
        try {

        } catch (err) {
            reject(err);
        }
    })
}

module.exports = {
    handleLogin: handleLogin
}