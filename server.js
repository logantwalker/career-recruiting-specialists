const express = require("express");
const routes = require("./routes");
const session = require("express-session");

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
const app = express();
const PORT = process.env.PORT || 3002;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on http://localhost:${PORT}/`)
);