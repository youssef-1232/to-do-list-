const express = require('express');
const db = require('./dataB');



const app = express();
//app.use.express.static('front');
app.use(express.json()); //to read data before send to body





app.listen(3000, () => {
    console.log('listing on port 3000');
});