const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require("mongoose")
const authController = require('./controllers/authController')
const productController = require('./controllers/productController')
const uploadController = require('./controllers/uploadController')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());


// connect our db

// postman workspace collections(rename it right click) (click three dots for new request)
// cluster0-project foodOrderingApp-database foodOrderingApp-collections foodOrderingApp-overview-connect-drivers-copy link


mongoose.set('strictQuery', false)
// mongo_url="mongodb://127.0.0.1:27017/foodOrderingApp";
mongoose.connect(process.env.MONGO_URL, () => console.log('DB is successfully connected'))
// mongoose.connect(mongo_url, () => console.log('DB is successfully connected'))



// routes & middlewares
// those two middlewares make req.body accessible, otherwise it would be undefined!!!
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/images', express.static('public/images'))
app.use('/auth', authController)
app.use('/product', productController)
app.use('/upload', uploadController)


// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    JWT_SECRET=process.env.JWT_SECRET,
    MONGO_URL=process.env.MONGO_URL

    const path = require('path')
    //set static folder
    // app.use(express.static('./client/build'));

    app.get('/', (req, res) => {
        app.use(express.static(path.resolve(__dirname, 'client', 'build')));
        //res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


// start our server
// const port = process.env.PORT || 5000;
const PORT = 5000;
app.listen(PORT, () => console.log('Server has been started successfully'))

// server is on port 5000, client is on port 3000,
// we are going to get a cors ERROR!!, but cors() removes that's error

// mongoose.connect(mongo_url,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(() => {
//     console.log('DB is successfully connected');
// }).catch((err)=>console.log('no connection'));



// https://soufiane-oucherrou.medium.com/user-registration-with-mongoose-models-81f80d9933b0
// https://subscription.packtpub.com/book/data/9781839210648/1/ch01lvl1sec09/mongodb-atlas-organizations-projects-users-and-clusters
// https://blog.devgenius.io/how-to-create-a-navbar-using-react-router-51b78bc6ce51