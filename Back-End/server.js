const express = require('express')

const {connectDB} = require('./database')

const userRoutes = require('./routes/userRoutes'); 
const courseRoutes = require('./routes/courseRoutes')

const app = express()

const PORT = process.env.PORT || 5000;



//Intiial Server Setup
app.use(express.json())
connectDB();
app.get('/',(req,res)=>{
    res.send("API IS RUNNING!");
})

//Setup Routes
app.use("/api/users",userRoutes);
app.use("/api/courses", courseRoutes);

//Start Listening
app.listen(PORT, () => {
    console.log("Server started on port 5000")
})
