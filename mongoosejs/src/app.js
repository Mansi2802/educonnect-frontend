const express=require("express");
const path=require("path");
const app=express();
const cors=require("cors")
const hbs=require("hbs");
const exphbs  = require("express-handlebars");

app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: false,
layoutsDir: "views/layouts/"}));
app.set('view engine', '.hbs');

require("./db/conn");

const port=process.env.PORT || 3000;

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
//const partials_path=path.join(__dirname,"../templates/partials");
//hbs.registerPartials(partials_path);
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);


app.get("/",(req,res)=>{
    //res.send("Hello student! Welcome to educonnect jiit")
    res.render("index")
});

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})
/*
app.get("/login",cors(),(req,res)=>{

})
app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const check=await User.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
        console.log(e)
    }
})

app.listen(3000,()=>{
    console.log("port connected..");
})
*/