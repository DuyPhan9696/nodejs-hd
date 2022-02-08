import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/infolocation', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    return app.use('/', router);
}
export default initWebRoute;