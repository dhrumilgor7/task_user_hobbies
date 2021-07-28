import moongoose from "mongoose";
let database: moongoose.Connection;

export const connectDB = () => {
  const uri = 'mongodb://localhost:27017/userhobbies'; 
  if (database) {
    return;
  }  
  moongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  
  database = moongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });  

  database.on("error", (error) => {
    console.log("Error connecting to database",error);
  });
};