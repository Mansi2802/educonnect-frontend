const mongoose=require("mongoose");
//connection creation and new database creation
mongoose.connect("mongodb://localhost:27017/educonnect"
/*,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}*/
)
.then(()=> console.log("connection successfull...."))
.catch((err)=>console.log(err));

//scheme-struct of doc - default value,validators

const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    /*
    rollno:{
        type:Number,
        required:true,
        unique:true,
        validate(value)
        {
            if(value<20000000)
            {
                throw new Error("not valid enrollment no");
            }
        }
    },
    batch:{
        type:Number,
        required: true,
        enum:["2024","2023","2022","2021"]
    },
    branch:{
        type: String,
        required:true,
        enum:["cse","ece","it"]
    },*/
    password: {
        type: String,
        required:true,
        minlength:[3,"minimum 3 letters"],
        trim:true
    }
})

//model -wrapper on schema- interface to db for crud
//collection crete

const User=new mongoose.model("User",userSchema);

//create doc or insert

const createDocument= async()=>{
    try{
        const firstUser=new User({
            name: "Manvi",
            email: "manvibh28@gmail.com",
            password: "abc"
        })

        const secondUser=new User({
            name: "Vidushi",
            email: "vidushiapr@gmail.com",
            password: "def"
        })

        const result=await User.insertMany([firstUser,secondUser]);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

//createDocument();

const getDocument = async()=>{
    const result= await User.find()
    //.find({videos :{$gt:50}})
    //.find({name: {$in :["Mansi Bhardwaj"]}}) //multiple filters
    .select({name:1})
    //.limit(1);
    //.find({$or:[{quantity:{$lt:30}}]})
    .sort("name :1");
    //.countDocuments();
    console.log(result);
}
//getDocument();

//update doc
/*
const updateDocument=async(_id)=>{
    
        try{
            const result=await User.findByIdAndUpdate({_id},{
                $set:{
                    name:"Anil Kumar Sharma"
                },
                {
                    new:true,
                    useFindAndModify:false
                }
            });
        }
        catch(err){
            console.log(err);
        }
       
}
updateDocument("655fb9ec1d802023c3c94a7f");
*/

//delete doc
/*
const deleteDocument=async(_id)=>{
    try{
        const result=await userSchema.findByIdAndDelete({_id});
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
deleteDocument("655fb9ec1d802023c3c94a7f");
*/
module.exports=User