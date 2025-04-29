const express = require('express')

const {connectDB} = require('./database')

const userRoutes = require('./routes/userRoutes'); 
const courseRoutes = require('./routes/courseRoutes')

const app = express()

const PORT = process.env.PORT || 5000;



app.use(express.json())

connectDB();

app.get('/',(req,res)=>{
    res.send("API IS RUNNING!");
})

app.use("/api/users",userRoutes);

app.listen(PORT, () => {
    console.log("Server started on port 5000")
})
