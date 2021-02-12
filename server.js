const express = require("express");
const routes = require("./routes");
const mongoose = require('mongoose');
// const session = require("express-session");

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('./client/build'));
// }
const app = express();
const PORT = process.env.PORT || 3002;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// uncomment when deploying 
app.use(express.static('./client/build'));

app.use(routes)

let MONGO_URL
const MONGO_LOCAL_URL = "mongodb+srv://lwalker37:Heyw@rd2019@cluster0.lj2ee.mongodb.net/Cluster0?retryWrites=true&w=majority"

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, {
        'useFindAndModify': false
    })
     .then(result =>{
        app.listen(PORT, () =>
            console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}/`)
        );
    })
     .catch(err => {
         console.log(err)
     })
    MONGO_URL = process.env.MONGODB_URI
} else {
    mongoose.connect(MONGO_LOCAL_URL, {
        'useFindAndModify': false
    })
     .then(result => {
        app.listen(PORT, () =>
            console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}/`)
        );
    })
        .catch(err => {
            console.log(err)
        })
    MONGO_URL = MONGO_LOCAL_URL
}