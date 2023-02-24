const mongoose = require("mongoose");

const Report = mongoose.model(
    "Report",  
    new mongoose.Schema({
        name: String,
        content: String,
        createDate: Date,
        updateDate: Date
    })
);

module.exports = Report;