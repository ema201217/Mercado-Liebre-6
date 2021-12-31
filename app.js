const express = require("express");
const path = require("path")

const port = 4000;
const app = express();


/* middleware */
app.use(express.static(path.join(__dirname,"public")))

/* routes */
app.use("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/register.html"))
})
app.use("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/login.html"))
})
app.use("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/home.html"))
})

app.listen(port, () => console.log(`http://localhost:${port}`));

