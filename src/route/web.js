import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);

    // Hiện các khung nhập data
    router.get('/CRUD', homeController.getCRUD);

    // post dữ liệu từ view vào data
    router.post('/post-crud', homeController.postCRUD);

    // show dữ liệu từ data ra view
    router.get('/get-crud', homeController.displayGetCRUD);


    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);

    router.get('/tinh', (req, res) => {
        return res.send(' Bui Thuan Tinh 123')
    });

    return app.use('/', router);
}

module.exports = initWebRoutes;