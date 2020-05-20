const mongoose = require('mongoose');

const CalendarEventSchema = new mongoose.Schema({
    name : {
        type :  [],
        required : true
    }
});

module.exports = mongoose.model('CalendarEvent', CalendarEventSchema);