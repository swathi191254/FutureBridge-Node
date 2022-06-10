const express = require("express");
const app = express();
require("dotenv").config();
var cors = require("cors");

// Port details and connect function
const port = process.env.PORT || 2345;
const connect = require("./src/Config/db");

app.use(express.json());
app.use(cors());

// routers details
const ProductRouter = require("./src/Controllers/productControllers");

app.use("/products/", ProductRouter);


app.listen(port,  async() => {
    try{
        await connect();
        console.log(`Port 2345 is listening..`);
    }
    catch(err){
        console.log(err.message);
    }
})