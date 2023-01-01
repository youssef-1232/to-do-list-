const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://youssef:youssef800@myapp.cmyfxe5.mongodb.net/librry?retryWrites=true&w=majority')
    .then(() => {
        console.log('conected sucsess');
    })
    .catch(() => {
        console.log('unable to conect');
    });