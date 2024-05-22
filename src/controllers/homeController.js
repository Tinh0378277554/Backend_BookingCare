
let getHomePage = (req, res) => {
    return res.render('homepage.ejs')
}

// exports ra 1 cái object 
module.exports = {
    getHomePage: getHomePage,
}