const controller = require("../controllers/report.controller");

module.exports = function (app) {
    app.post("/api/report/createreporting", controller.createreporting);
    app.get("/api/report/getreporting/:name", controller.getreporting);
};