const db = require("../models");

const Report = db.report;
const { report } = require("../models");

exports.createreporting = (req, res) => {
    const report = new Report({
      name: req.body.name,
      content: req.body.content,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    }); 
    const today = new Date().toLocaleDateString();
    const query = {
        name: req.body.name,
        createdAt: today
    }
    report.save((err, report) => {
        Report.find(query, function(err, reports) {
            res.status(200).send(reports);
        });
    });
};

exports.getreporting = (req, res) => {
    const today = new Date().toLocaleDateString();
    const query = {
        name: req.params.name,  
        createdAt: today
    }
    Report.find(query, function(err, reports) {
        res.status(200).send(reports);
    });
};