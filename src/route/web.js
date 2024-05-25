import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/CRUD', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);

    router.get('/tinh', (req, res) => {
        return res.send(' Bui Thuan Tinh 123')
    });

    return app.use('/', router);
}

module.exports = initWebRoutes;