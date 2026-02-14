const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();

let url = [
    'http://localhost:5173',
    'https://www.redbilung.in',
    'http://www.redbilung.in',
    'https://redbilung.in',
    'http://redbilung.in',
    'www.redbilung.in',
    'redbilung.in',
]

let corsOptions = {
    origin: url,
    methods: ["GET", "PUT", "POST", "OPTIONS"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
    ],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.set('trust proxy', true);

app.get('/', (req, res)=>{
    res.send("server running fine!!")
})

const routeContact = require('./routes')
app.use('/api', routeContact)

app.use(function (req, res, next) {
    res.status(404);
    // respond with html page
    return res.status(404).json({
        status: 404,
        message: 'API NOT FOUND! Please check the endpoint and the HTTP request type! or contact admin  ',
        data: {
            url: req.url
        }
    });
});

module.exports = app;