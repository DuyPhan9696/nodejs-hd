import express from "express";
import ApiController from "../controller/ApiController";

let router = express.Router();

const iniAPIRoute = (app) => {
    router.get('/infolocation', ApiController.getAllLocation);
    return app.use('/api', router);
}
export default iniAPIRoute;